import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../Styles/reg.css'
import GoogleAuth from '../Components/GoogleAuth'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'




export default function SignIn() {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  function handleChange (e) {
    setUserData((prevState) => ({
      ...prevState, [e.target.id]: e.target.value,
    }))
  }

  const {email, password} = userData;
  const auth = getAuth();
  const navigate = useNavigate();

  function LogIn (e)  {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user.emailVerified) {
        navigate("/dashboard")
      }else {
        toast('Verify Email')
      }
    }).catch((error) => {
      const message = error.message;
      console.log(message)
    })
  }

  return (
    <div className='form'>
      <div className='form-div'>
        <img src={logo} alt="logo" />

        <div className='container'>
          <form onSubmit={LogIn}>

           <label htmlFor="email" >Email</label>
           <input type="email" id='email' name='email' value={email} placeholder='E-Mail' onChange={handleChange}/>  
           <label htmlFor="password">Password</label>
           <input type="password" id='password' name='password' placeholder='Enter Password'value={password} onChange={handleChange}/>
           <button type='submit'>Log-In</button>

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
