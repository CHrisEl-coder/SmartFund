import { useState } from "react";
import {MdOutlineCancel} from 'react-icons/md'
import {HiBars3CenterLeft} from 'react-icons/hi2'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Deposit from "./Deposit";
import Withdrawal from "./Witdrawal";






const SideBar = ({unSubscribeListeners}) => {
    const [min, setMin] = useState(true)

    
    const nav = useNavigate()

    const logOut = (e) => { 
        const auth = getAuth()
        signOut(auth) 
          .then(() => {
            alert('Logged Out')
            nav('/')
          }
          )

        unSubscribeListeners()

    }
    
    return (
        <div className='sideBar-Container'>
            {min ? <HiBars3CenterLeft onClick={() => {
                setMin(false)
                
            } }className='bar' /> : <MdOutlineCancel onClick={() => {
                setMin(true)
              
            }
            } className="cancel" />}

            <div className='sideBar-Content'>

                <ul>




                  <Withdrawal min={min} />


                  <Deposit min={min}/> 
                   
                </ul> 


                <div className='sideBar-Button'>
                    {min ? <RiLogoutCircleLine className="sideIcons" onClick={logOut}  /> : <button onClick={logOut}>Log-Out</button> }


                </div>

            </div>
        </div>

    )
}

 
export default SideBar;