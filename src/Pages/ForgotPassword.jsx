import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../Styles/reg.css'
import GoogleAuth from '../Components/GoogleAuth'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'


export default function ForgotPassword() {

  const [userData, setUserData] = useState({
    email: '',
  })

  function handleChange (e) {
    setUserData( {
      [e.target.id]: e.target.value 
    })
  }

  const {email} = userData;
  const auth = getAuth()

  const ResetPassword = (e) => {
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email sent')
      }).catch(error => {
        const message = error.message;
        console.log(message)
      })
  }

  return (
    <div className='form'>
      <div className='form-div'>
        <img src={logo} alt="logo" />

        <div className='container'>
          <form onSubmit={ResetPassword}>

           <label htmlFor="email" >Email</label>
           <input type="email" id='email' value={email} placeholder='E-Mail' onChange={handleChange}/>  
           <button type='submit'>Reset Password</button>

           </form>

           <GoogleAuth />

           <div className='hv-acc'>
             <span>Don't have an account  <NavLink to='/sign-up'>Register</NavLink></span>
             <NavLink to="/forgotpassword">Forgot Password</NavLink>
           </div>
           
        </div>
      </div>
    </div>
  )
}