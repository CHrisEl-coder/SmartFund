import loader from '../assets/Dual Ring-1s-284px.svg'
import '../Styles/dashBoard.css'

 const Loader = () => {
    return (
        <div className='loader'>
            <div>
                <img src={loader} alt='Loader_Img' />
                <p>Fetching Data....</p>
            </div>
        </div>
    )
}

export default Loader;