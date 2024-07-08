import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import RootLayout from './Layouts/RootLayout'
import ForgotPassword from './Pages/ForgotPassword'
import NotFound from './Pages/NotFound'
import VerifyEmail from './Pages/VerifyEmail'
import DashBoard from './Pages/DashBoard'
import PrivateRoute from './Components/PrivateRoute'




const router =  createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<Faq />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />}>
          <Route path='verifyemail' element={<VerifyEmail />} />
        </Route>
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='/dashboard' element={<DashBoard />} />
        </Route>
        

        <Route path='forgotpassword' element={<ForgotPassword />} />


        <Route path='*' element={<NotFound />}/>
    </Route>
  )
)


function App() {

  
  return (
    <>

     <RouterProvider router={router} />
     <ToastContainer />

    </>

    

  );
}

export default App;
