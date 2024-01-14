import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
  let[name,setName]=useState("");
  let[brand,setBrand]=useState("");
  let[category,setCategory]=useState("");
  let[description,setDescription]=useState("")
  let[cost,setCost]=useState("");
  let[image_url,setImage_url]=useState("");

  let param=useParams()
  let id=param.id
  let data={name,brand,category,cost,description,image_url,id}

  let putData=(e)=>{
     e.prevent.default()
     axios.put(`http://localhost:8080/products`,data)
     .then((res)=>{
      console.log(res);
      alert("success")
     })
     .catch((err)=>{
      console.log(err);
      alert("invailid")
     })
  }
  useEffect(()=>{
    axios.get(`http://localhost:8080/products/by-id/${param.id}`)
    .then((res)=>{
      console.log(res.data.data);
      setName(res.data.data.name)
      setBrand(res.data.data.brand)
      setCategory(res.data.data.category)
      setCost(res.data.data.cost)
      setDescription(res.data.data.description)
      setImage_url(res.data.data.image_url)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
  <div className='updateProduct'>
  Please fill the Product Details to update
  <form action="" onSubmit={putData}>
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
      <button >Submit</button>
  </form>
  
  
  </div>
)
}

export default ProductUpdate