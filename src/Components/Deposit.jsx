import Popup from "reactjs-popup";

import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { getAuth } from "firebase/auth";
import emailjs from 'emailjs-com';
import {GoInfo} from 'react-icons/go'
import { RiLuggageDepositLine } from "react-icons/ri";


const Deposit = (props) => {

    const auth = getAuth();

    const [funded, setFunded] = useState(false);

    const [plan, setPlan] = useState('');

    const [amount, setAmount] = useState('');

    const [receipt, setReceipt] = useState(null)

    const checkUpload = (e) => {
        
        const file = e.target.files[0]

        setReceipt(file)
    }

    const emailjs_userId = 'VK53TvyAUAwd40mZs';
    const emailjs_serviceId = 'service_qxxdbog';
    const emailjs_adminTemplateId = 'template_hx50r0m'

    
    function copyToClipboard (e) {

        e.preventDefault()

        const wallet = document.getElementById('wallet')
            wallet.select();
            wallet.setSelectionRange(0, 9999);
    
    
        navigator.clipboard.writeText(wallet.value)
    
        alert('Wallet Has Been Copied')
    
    }

    const Deposit = (e) => {
        e.preventDefault();

        if (receipt !== null && amount > 19) {
            

            const emailParams = {
                from_name: auth.currentUser.displayName,
                to_name:    'SmartFunds.Com',
                to_email: 'sfunds79@gmail.com',
                file: receipt,
                message: `A Deposit Of ${amount} dollars has been funded to be invested in ${plan} pls comfirm and fund the users account \n UserEmail: ${auth.currentUser.email}`
            }

            emailjs.send(emailjs_serviceId, emailjs_adminTemplateId, emailParams, emailjs_userId).then(() => {
                    alert('Processing Payment')
                    setFunded(true)
                }).catch((error) => {
                    const message = error.message
                    alert(message)
                })
        }else{
            alert('receipt and amount cannot be empty')
        }
    }

    return(
         <Popup trigger={
        props.min ? <li>
            <RiLuggageDepositLine className="sideIcons"/>
        </li> : <li>Deposit</li>
    } modal nested >
        {
            fund => (
                <div className="fundModal">
                    {
                        funded ? <div className="sucess">
                            
                                <div className="head">
                                    <GoInfo className="succIcon"/>
                                    <p>Processing Payment</p>
                                </div>
                                
                                <div className="receipt">
                                    <p>Amount: <span>$ {amount}</span></p>
                                    <p>Package Plan: <span>{plan}</span></p>
                                    <p>Status: <span>Processing(this may take a while)</span></p>
                                </div>

                            
                        </div>
                        : <div className="fund">
                            <select className="starter" id="starter" onChange={(e) => {
                                setPlan(e.target.value)
                            }}>
                              <option value="Basic_Plan">Basic Plan</option>
                              <option value="Regular_Plan">Regular Plan</option>
                              <option value="Classic_Plan">Classic Plan</option>
                              <option value="Professional_Plan">Professional Plan</option>
                              <option value="Advanced_Plan">Advanced Plan</option>
                              <option value="Premium_Plan">Premium Plan</option>
                            </select>
                            
                            
                            
                            <form onSubmit={Deposit}>

                                <label htmlFor="deposit">Amount</label>
                                <div>
                                <span className="Symbol">$</span>  
                               <input type="number" name='depposit' id='deposit' placeholder='Amount To Be Deposited' min={20} onChange={(e) => {
                                setAmount(e.target.value)
                               }} /> 
                                     
                                    
                                </div>

                                <label htmlFor="wallet">Copy Address :</label>
                                <div>
                                  <AiOutlineCopy onClick={copyToClipboard} size={24} className='copy'/>
                                  <input type="text" name="walledt" value='35XWMwhzeyBngbx3hSs8qfiAQA1Zxn7vJp' id='wallet'/>
                                  
                                </div>

                                <label htmlFor="upload">Upload File</label>
                                <input type="file" id='upload' name="upload" className='file' onChange={checkUpload} accept="image/*"/>

                                <input type="submit" className="dep" value='Deposit' id="send" name="send"/>

                            </form>
                          

                        </div>
                    }
                </div>
        ) 
        }

        </Popup>

    )

    }
   
     
    


export default Deposit