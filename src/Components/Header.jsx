import logo from '..//assets/Logo.png'
import {FaBars} from 'react-icons/fa'
import '../Styles/Header.css'
import { NavLink } from 'react-router-dom'
import { getAuth } from 'firebase/auth'


const Header = () => {

    const auth = getAuth()
    const user = auth.currentUser;
   

   


    const handleOnClick = (e) => {
        let tog = document.querySelector('.navbar')
        tog.classList.toggle('show')
    } 
  
    return (
        <header>
            <div>
                <img src={logo} alt="Logo" /> 
                <li><FaBars className='icon' onClick={handleOnClick}/></li>
            </div>
           
            <nav className="navbar show">
                <ul>
                  <li><NavLink to='/'>Home</NavLink></li>
                  <li><NavLink to='/faq'>Faq</NavLink></li>
                  <li><NavLink to='/sign-in'>Sign-In</NavLink></li>
                  {user ? '' : <li><NavLink to='/sign-up'>Sign-Up</NavLink></li>}
                  {user ? <li><NavLink to='/dashboard'>DashBoard</NavLink></li> : ''}
                </ul>
            </nav>
        </header>
    )
}

export default Header;