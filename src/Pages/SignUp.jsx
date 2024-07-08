import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../Styles/reg.css'
import GoogleAuth from '../Components/GoogleAuth'
import { useState } from 'react'
import Country from '../Components/Country'
import { getAuth, 
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
 } from 'firebase/auth'

 import db from '../firebase.js'
import { collection, doc, setDoc } from 'firebase/firestore'

export default function SignUp() {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    refEmail: ''
  })

  const [state, setState] = useState('');

  const getState = (country) => {
    
    setState(country)
   
  }

  

  function handleChange (e) {
    setUserData((prevState) => ({
      ...prevState, [e.target.id]: e.target.value,
    }))
  }

  const {firstName, lastName, userName, email, phoneNumber, password, refEmail, confirmPassword} = userData;
  const userId = userName
  const userRef = collection(db, 'Users')
 


  function Register (e) {
    e.preventDefault();
    const auth = getAuth()

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: userName
        })

        try {
          setDoc(doc(userRef, userId), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneNumber,
            pass: password,
            state: state,
            referral: refEmail,
            capital: 0,
            earning: 0,
            package: '',
            roi: '',
            transaction: 0,
            username: userName
          })

          console.log("Document added with Id: ", userId)
        } catch (error) {
          console.error("Error adding document: ", error)
        }

        
        sendEmailVerification(user)
          .then(() => {
            navigate("/sign-up/verifyemail")
          }).catch((error) =>   {
            const message = error.message
            console.log(message)
          } )

      }).catch((error) => {
        const message = error.message
        console.log(message)
      })
    }else {
      alert('Check Password')
    }

    
  }

  return (
    <div className='form'>
      <div className='form-div'>
        <img src={logo} alt="logo" />

        <div className='container'>
          <form onSubmit={Register}>
            <label htmlFor="firstName">FirstName</label>
           <input type="text" id='firstName' name='firstName' placeholder='FirstName' value={firstName} onChange={handleChange} required/> 
           <label htmlFor="lastName">LastName</label>
           <input type="text" id='lastName' name='lastName' placeholder='LastName' value={lastName} onChange={handleChange} required/>
           <label htmlFor="userName">UserName</label>
           <input type='text' id='userName' name='userName' placeholder='username' value={userName} onChange={handleChange} required/>
           <label htmlFor="State">Select Country</label>
           
            <Country getState={getState} required/>

           <label htmlFor="phoneNumber" >Phone Number</label>
           <input type="number" id='phoneNumber' name='phoneNumber' placeholder='e.g +1(240)1234567' value={phoneNumber} onChange={handleChange} min={9} required/>
           <label htmlFor="email" >Email</label>
           <input type="email" id='email' name='email' value={email} placeholder='E-Mail' onChange={handleChange} required/>  
           <label htmlFor="password">Password</label>
           <input type="password" id='password' name='password' placeholder='Enter Password'value={password} onChange={handleChange} required/>
           <label htmlFor="confirmPassword">Confirm Password</label>
           <input type="password" id='confirmPassword' name='confirmPassword' placeholder='confrim Password' value={confirmPassword} onChange={handleChange} required/>
           <label htmlFor="refEmail">Referral Email </label>
           <input type="email" id='refEmail' name='refEmail' placeholder='Referral Email (Optional)' value={refEmail} onChange={handleChange}/>

           <button type='submit'>Register</button>

           </form>

           <GoogleAuth />

           <div className='hv-acc'>
             <span>Already have an account  <NavLink to='/sign-in'>Log-In</NavLink></span>
             <NavLink to="/forgotpassword">Forgot Password</NavLink>
           </div>
           
        </div>
      </div>

      <Outlet />


    </div>
  )
}

