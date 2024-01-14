import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import MerchantLogin from './Components/MerchantLogin'
import MerchantSignup from './Components/MerchantSignup'
import LandingPage from './Components/LandingPage'
import MerchantHomePage from './Components/MerchantHomePage'
import { MerchantUpdate } from './Components/MerchantUpdate'
import AddProducts from './Components/AddProducts'
import ProductUpdate from './Components/ProductUpdate'
import ProductDashboard from './Components/ProductDashboard'
const App = () => {
  return (
    <div className='App'>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/merchantlogin' element={<MerchantLogin/>}></Route>
        <Route path='/merchantsignup' element={<MerchantSignup/>}></Route>
        <Route path='/merchanthomepage/*' element={<MerchantHomePage/>}/>
        <Route path='/merchantupdate' element={<MerchantUpdate/>}/>
        {/* <Route path='/merchanthomepage/addProducts' element={<AddProducts/>}/>
        <Route path='/merchanthomepage/updateProduct' element={<ProductUpdate/>}/>
        <Route path='/merchanthomepage/viewProducts' element={<ProductDashboard/>}/> */}
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App