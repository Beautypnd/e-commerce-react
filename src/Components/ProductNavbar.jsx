import React from 'react'
import { Link } from 'react-router-dom';
import "../style/ProductNavbar.css"

const ProductNavbar = () => {
  return (
    <div className='productNavbar'>
        <div className='logo'>
            <h1>Shop <span>It</span></h1>
            </div>   
        <div className='options'>
          {/* reroute:  provide first merchant url then actual url 
          then only it will go to addproducts page otherwise it will be localhost/addproducts however we
          need http://localhost:3000/merchanthomepage/addproducts*/}
            <Link to="/merchanthomepage/addProducts">Add Product</Link>
            <Link to="/merchanthomepage/updateProduct">Update Product</Link>
            <Link to="/merchanthomepage/viewProducts">View  Product</Link>
            <Link to="/">Log Out</Link>
            </div> 
    </div>
  );
}

export default ProductNavbar