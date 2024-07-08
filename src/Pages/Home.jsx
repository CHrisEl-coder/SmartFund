import { Link } from 'react-router-dom'
import bag from '../assets/$bag.png'
import '../Styles/Home.css'
import CoinGeckoWidget from '../Components/CoinGeckoWidget'
import TestimonialSlider from '../Components/Testimonial'
import FactSlider from '../Components/Article'
import { TfiPieChart, TfiRocket, TfiShield, TfiWorld } from 'react-icons/tfi'


export default function Home() {
  return (
    <div className="home">
      <div className="main">
        <img src={bag} alt="3D Bag" />
        <h1>Dive Into The Decentralized Market With <span>SmartFunds</span> At The Helm Steering You Through The Storms.</h1>
        <div className='link'>
           <Link to="/sign-in">Join Us</Link>
        </div>
       
      </div>

      <main>
        <section>
          <div className="read">
            <TfiWorld className='access'/>
            <h3>Accessbility</h3> 
            <span>SmartFunds Accesibility Is Top Notch, You Can Access The Site With Ease At Anytime There Is No Downtime When It Comes To Our Platform. </span>
          </div>
          
          <div className="secure">
            <TfiShield className='security' />
            <h3>Security</h3> 
            <span>Your Funds Are Secure With Us, With Our Tight Security Protocol You Will Always Feel At Ease Working/Transacting With Us. </span>
          </div>
          

          <div className="speed">
            <TfiRocket className='fast' />
            <h3>Speed</h3> 
            <span>Your Transactions Are Processed With Light Speed, You Dont Have To Wait For Hours To Get Notified About Your Recent Transactions.  </span>
          </div>
          

          <div className="Commission">
            <TfiPieChart className='chart'/>
            <h3>Low Commission</h3> 
            <span>Your Funds Is Always Yours, We Have Your Best Interest At Heart, Your Transaction Are Processed With Little To Know Fee  </span>
          </div>
          
        </section>

        <FactSlider />

        <TestimonialSlider />

        <CoinGeckoWidget />
      </main>
    </div>
  )
}
