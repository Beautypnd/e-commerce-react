import React from 'react'
import ProductNavbar from './ProductNavbar'
import { Route, Routes } from 'react-router-dom'
import ProductDashboard from './ProductDashboard'
import AddProducts from './AddProducts'
import ProductUpdate from './ProductUpdate'



const MerchantHomePage = () => {
  return (
    <div className='merchanthomepage'>
       <ProductNavbar/>
       <Routes>
        <Route path="/" element={<ProductDashboard/>}></Route>
        <Route path="/addProducts" element={<AddProducts/>}></Route>
        <Route path="/updateProduct/:id" element={<ProductUpdate/>}></Route> 
       </Routes>
    </div>
  )
}

export default MerchantHomePage