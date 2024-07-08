import {getAuth, signInWithPopup,  GoogleAuthProvider} from 'firebase/auth'
import db from '../firebase'
import {FcGoogle} from 'react-icons/fc'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const GoogleAuth = () => {

    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    function signUpGoogle (e) {
        e.preventDefault()

        

        signInWithPopup(auth, provider) 
          .then ((result) => {

            const user = result.user
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.token
            

            const userRef = doc(db, 'Users', user.uid)

            const docSnap = getDoc(userRef)
            
            if (!docSnap.exists) {
                setDoc(userRef, {
                    capital: 0,
                    earning: 0,
                    roi: '',
                    package: '',
                    userName: user.displayName
                })
                }
             
            console.log(token)

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)

        })
    }


    return(
        <div className='auth'>
            <button onClick={signUpGoogle}><FcGoogle className='g-icon'/>SignUp With Google</button>
        </div>
    )
}


export default GoogleAuth;
