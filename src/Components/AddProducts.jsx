import axios from 'axios';
import React, { useState } from 'react'

 const AddProducts = () => {
    let[name,setName]=useState("");
    let[brand,setBrand]=useState("");
    let[category,setCategory]=useState("");
    let[description,setDescription]=useState("")
    let[cost,setCost]=useState("");
    let[image_url,setImage_url]=useState("");


    let x= localStorage.getItem("currentMerchant")
    let user=JSON.parse(x);
    // console.log(user);
  
    let data ={name,brand,category,description,image_url,cost};
    let addProduct=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/products/${user.id}`,data)
        .then((res)=>{
            alert("succesfull");

            console.log(res);
        })
        .catch((err)=>{
            alert("Unsuccesfull")
            console.log(err);
        })
    }
  return (
    
    <div className='addProducts'>
        Please fill the Product Details
        <form action="" onSubmit={addProduct}>
            <label htmlFor="">Poduct Name</label>
            <br />
            <input type="text" placeholder='Enter you name' value={name} 
            onChange={(e)=>{setName(e.target.value)}} />
            <br />
            <label htmlFor="">Brand</label>
            <br />
            <input type="text" value={brand} 
            onChange={(e)=>{setBrand(e.target.value)}}/>
            <br />
            <label htmlFor="">Category</label>
            <br />
            <input type="text" value={category} 
            onChange={(e)=>{setCategory(e.target.value)}}/>
            <br />
            <label htmlFor="">Description</label>
            <br />
            <input type="text" value={description} 
            onChange={(e)=>{setDescription(e.target.value)}}/>
            <br />
            <label htmlFor="">Image Link</label>
            <br />
            <input type="text" value={image_url} 
            onChange={(e)=>{setImage_url(e.target.value)}} />
            <br />
            <label htmlFor="">Cost</label>
            <br />
            <input type="number" value={cost} 
            onChange={(e)=>{setCost(e.target.value)}} />
            <br />
            <br />
            <button >Add Product</button>
        </form>
        
        
        </div>
  )
}
export default AddProducts