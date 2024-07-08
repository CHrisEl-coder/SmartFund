import { Link } from "react-router-dom";
import '../Styles/notFound.css'

const NotFound = () => {
    return(
        <div className="notfound">
            <div className="content">
                <h1>Page Not Found</h1>
                <span>This Might Be Due To Server RunTime Or Typo In Your Reference Pls Return To The <Link to="/">HomePage</Link></span>
            </div>
        </div>
    )
}

export default NotFound;