import {initializeApp} from 'firebase/app'
import {getFirestore}  from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdJ3-UL19bLEqZHuFLgNamM7bI4sOH0v8",
  authDomain: "smartfunds-com.firebaseapp.com",
  projectId: "smartfunds-com",
  storageBucket: "smartfunds-com.appspot.com",
  messagingSenderId: "713720556680",
  appId: "1:713720556680:web:99b14bb310d473b6f0833d",
  measurementId: "G-10SM64K2H5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db
