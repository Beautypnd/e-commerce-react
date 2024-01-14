import React, { useState } from 'react'
import "../style/MerchantSignup.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MerchantSignup = () => {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [phone,setPhone]=useState("")
  let [gst_no,setGst_no]=useState("")
  let [password,setPassword]=useState("")

  let navigate=useNavigate();

  let data={name,phone,email,gst_no,password}
  let signUp=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/merchants`,data)
    .then((res)=>{console.log(res);
      alert("data added successfully")
      navigate("/merchantlogin")
    })
    .catch((error)=>{
      alert("404 Error")
    })
    
    
  }


  return (
    <div className='merchantsignup'>
      <form  onSubmit={signUp} action="">
        <fieldset>
          <legend>Sign Up</legend>
          <label htmlFor="">
            Name:<input  type="text" required placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          </label><br/>
          <label htmlFor="">
          Email:<input type="email" required placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </label><br/>
          <label htmlFor="">
            Phone:<input  type="tel" required placeholder="Enter phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          </label><br/>
          <label htmlFor="">
            GST:<input  type="number" required placeholder="Enter GST" value={gst_no} onChange={(e)=>{setGst_no(e.target.value)}}/>
          </label><br/>
          <label htmlFor="">
          Password:<input  type="password" required placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <br/>
          <button>Sign Up</button>
        </fieldset>
      </form>

    </div>
  )
}

export default MerchantSignup