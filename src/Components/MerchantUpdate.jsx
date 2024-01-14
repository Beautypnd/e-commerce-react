import React from 'react'
import { useEffect,useState } from 'react'
import "../style/MerchantUpdate.css"
import axios from 'axios'

export const MerchantUpdate = () => {
  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [phone,setPhone]=useState("")
  let [gst_no,setGst_no]=useState("")
  let [password,setPassword]=useState("")

  // let [data,setData]=useState()

   //here we will store current merchant  object
    //let [data,setdata]=useState([]) 
    //just to check

    //to hold the current user
    let x= localStorage.getItem("currentMerchant")
    let user=JSON.parse(x);
    console.log(user);
     let id=user.id;
     let userData={name,email,phone,gst_no,password,id};

     let updatUser=(e)=>{
      e.preventDefault();
      axios.put(`http://localhost:8080/merchants`,userData)
      .then((res)=>{
        console.log(res);
        alert("data update successfully")
      })
      .catch((err)=>{
        console.log(err);
        alert("invailid credentials")
      })
     }
    //use effect to stop rendering again and again
    useEffect(()=>{
        axios.get(`http://localhost:8080/merchants/${user.id}`)
        .then((res)=>{
            console.log(res.data.data);
           // setdata(res.data.data) just to check

           //by default it will  be in the form 
           setName(res.data.data.name)
           setEmail(res.data.data.email)
           setGst_no(res.data.data.gst_no)
           setPassword(res.data.data.password)
           setPhone(res.data.data.phone)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  
  return (
    <div className='merchantupdate'>
      <form action='' onSubmit={updatUser}>
        <fieldset>
          <legend>
            Update Details
          </legend>
          <label htmlFor=''>
            Name:<input placeholder='Enter Name' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          </label><br/>
          <label htmlFor=''>
            Email:<input placeholder='Enter Email' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </label><br/>
          <label htmlFor=''>
            Phone:<input placeholder='Enter phone' type='tel' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          </label><br/>
          <label htmlFor=''>
            GST:<input placeholder='Enter GST' type='text' value={gst_no} onChange={(e)=>{setGst_no(e.target.value)}}/>
          </label><br/>
          <label htmlFor=''>
            Password:<input placeholder='Enter Password' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </label><br/>
          <button>Update</button>
        </fieldset>
      </form>
    <div className="updatedesign"><h1>Update here</h1></div>
    </div>
  )
}
export default MerchantUpdate
