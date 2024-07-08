import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import logo from '../assets/Logo.png'
import '../Styles/Footer.css'

export default function Footer() {
 return (
    <footer>
        <div className='socials-div'>
        
        <div>
            <FaFacebookF color='darkblue' className='socials'/>
            <FaTwitter color='lightblue' className='socials'/>
            <FaLinkedinIn color='blue' className='socials'/>
        </div>
        
        <div><span>200 Executive Park Blvd, CA 94100 SanFrancisco, United States</span></div>
        
        <span>sfunds79@gmail.com</span>
        <img src={logo} alt="logo" />

        </div>
        <div className='copyright'>
            <span>Copyright 2019</span>
            <span>All Rights Reserved</span>
        </div>
    </footer>
  )
}
