import { useState, useEffect } from 'react'
import '../Styles/dashBoard.css'
import {FaUserCircle, FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {
    onAuthStateChanged, getAuth
} from 'firebase/auth'
import { collection, doc, onSnapshot, getDoc} from 'firebase/firestore'

import db from '../firebase.js'
import emailjs from 'emailjs-com'
import Deposit from './Deposit.jsx'
import Withdrawal from './Witdrawal.jsx'
export default function User ()  {

    const auth = getAuth()
    const emailjs_userId = 'VK53TvyAUAwd40mZs';
    const emailjs_serviceId = 'service_qxxdbog';
    const emailjs_userTemplate = 'template_hj7ndto';

    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState ({
        name: 'john stone',
        capital: 0,
        earning: 0,
        pack: 'none',
        roi: 0

    })

    const [prevEarning, setPrevEarning] =   useState(null)
    const [prevCapital, setPrevCapital] = useState(null)


    const userRef = collection(db, 'Users')

    useEffect (() => {
        const unSubscribeListeners =     onAuthStateChanged(auth, (user) => {
        if (user) {
            onSnapshot(doc(userRef, auth.currentUser.displayName), doc => {
                setUserData({
                     name: doc.data().firstName + ' ' + doc.data().lastName,
                     roi: doc.data().roi,
                     capital: doc.data().capital,
                     earning: doc.data().earning,
                     pack: doc.data().package,
                     
                })

                const newCapVal = doc.data().capital;
                const newEarnVal = doc.data().earning;

                if (newCapVal > prevCapital) {
                    console.log(newCapVal) 
                }
                if (newEarnVal > prevEarning) {
                    console.log(newEarnVal)
                }

               setPrevCapital(capital)
               setPrevEarning(earning) 
            })

           
        }
    });

    return () => {
        unSubscribeListeners();
        
        
    }
    }, [auth])




    const {name, capital, earning, pack, roi} = userData;

   




    return (
        <div className={open ? 'User-Container' : 'userContainer'}>

            {open ? <FaAngleRight className='arrBtn' onClick={() => {
                setOpen(false) }
            }/> : <FaAngleLeft className='arrBtn' onClick={() => {
                setOpen(true) }
                } />
                }
            <div className="User-Info">
               
                <div className='userIdentity'>
                    <FaUserCircle className='user-icon' />
                    <span>{name}</span>
                </div>
                
                <h4>
                    Welcome To Your Journey To Financial Freedom.
                </h4>
            </div>

            <main className="User-Content">
                <div className="capital">
                    <p>
                        $ {capital}
                    </p>
                    <span>Capital</span>
                    
                </div>

                <div className="earning">
                    <p>
                        $ {earning}
                    </p>
                    <span>Earning</span>
                </div>

                <div className="subInfo">
                    <p>
                        <span>Package :</span>
                        <span>{pack}</span>
                    </p>

                    <p>
                        <span>
                            Expected Roi :
                        </span>
                        <span>
                            {roi} %
                        </span>
                    </p>
                </div>

                <div className="userButton">
                    <button>Withdraw</button>
                    <button>Deposit</button>
                </div>
            </main>

        </div>
    )
}
