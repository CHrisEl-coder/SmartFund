import Popup from "reactjs-popup"

import {LuCheckCircle} from 'react-icons/lu'

import {BiMoneyWithdraw} from 'react-icons/bi'
import { useState } from "react"
import { MdCancel } from "react-icons/md"
import { getAuth, onAuthStateChanged} from "firebase/auth"
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import emailjs  from 'emailjs-com'
import db from "../firebase"
import { toast } from "react-toastify"

const Withdrawal = (props) => {
    const d = new Date();

    const auth = getAuth()

    const User = auth.currentUser;

    const userDoc = doc(db, 'Users', User.displayName);

    const [earn, setEarn] = useState(null)

    onAuthStateChanged(auth, () => {
        getDoc(userDoc)
          .then((doc) => {
            const earning = doc.data().earning;

            setEarn(earning)
          })
    })

    const emailjs_userId = 'VK53TvyAUAwd40mZs';
    const emailjs_serviceId = 'service_qxxdbog';
    const emailjs_userTemplate = 'template_hj7ndto';

    const [placeWithdraw, setPlaceWithdraw] = useState(false)

    const [withdrawInfo, setWithdrawInfo] = useState(
        {
           wallet: '',
           amount: 0

        }
    );

    const handleChange = (e) => {
        setWithdrawInfo((prevState) => ({
            ...prevState, [e.target.id]: e.target.value
        }))
    }

    const {wallet, amount} = withdrawInfo;


    const Withdraw = (e) => {
        e.preventDefault()

        if(wallet.length !== 0 && amount < earn) {
            const emailParams = {
                to_name: User.displayName,
                to_email: User.email,
                message: `Your Withdrawal Of $ ${amount} to the bitcoin wallet ${wallet} is been processed. \n If this transaction was not initiated by you contact customer support, so as to block the transaction. \n Thank You for choosing SmartFunds.`
            }

            emailjs.send(emailjs_serviceId, emailjs_userTemplate, emailParams, emailjs_userId)
              .then(() => {

                const newNum = earn - amount


                updateDoc(userDoc, {
                    earning: newNum
                })
                setPlaceWithdraw(true)

              }).catch(error => {
                const message= error.message
                toast(message)
              })
        }else {
            toast('Wallet and Amount Cannot Be Empty')
        }
    }

    return(
        <div>

            <Popup trigger={ props.min ? <li><BiMoneyWithdraw className="sideIcons" /></li> : <li>Withdraw</li>} modal nested>
                
                {
                    withdraw => (
                        <div className="witdrawModal">
                            {
                                placeWithdraw 
                                
                                ? <div className="placed">
                                    <LuCheckCircle className="marked" />
                                    <p className="firstP">Withdrawal Successful</p>

                                    <main>
                                        <div><p>Amount : </p><p>{amount}</p></div>
                                        <div><p>Sent To : </p> <p>{wallet}</p></div>
                                        <div><p>Status : </p> <p>Processing</p></div>
                                        <div><p>Transaction Date : </p> <p>{`${d.getDate()}/${d.getMonth()}/${d.getFullYear()} LT.`}</p></div>
                                        <div><p>Time: </p> <p>{`${d.getHours()}:${d.getMinutes()}`}</p></div>
                                    </main>
                                </div> 
                                
                                : <div className="initial">
                                    <form onSubmit={Withdraw}>
                                        <label htmlFor="amount">Amount</label>
                                        <input type="number" id="amount" name="amount" placeholder="$ 0" value={amount} onChange={handleChange} min={20}/>
                                        <label htmlFor="wallet">Wallet</label>
                                        <input type="text" name="wallet" id="wallet" placeholder="Bitcoin Wallet" value={wallet} onChange={handleChange} />
                                        <input type="submit" value='Withdraw' id="withdraw" name="withdraw" />
                                    </form>
                                </div>
                            }

                            <MdCancel onClick={() => {
                                withdraw()
                                setPlaceWithdraw(false)
                            }}  className="canc"/>
                        </div>
                    )
                }
            </Popup>

        </div>

)
}

export default Withdrawal