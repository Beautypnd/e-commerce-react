import React, { useState } from "react";
import "../style/MerchantLogin.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MerchantLogin = () => {
let [email,setEmail]=useState("")
let [password,setPassword]=useState("")
let navigate=useNavigate();

let checkEmail=(e)=>{
  e.preventDefault();
  console.log(email, password)
axios.post(`http://localhost:8080/merchants/verifyByEmail?email=${email}&password=${password}`)
.then((res)=>{
  console.log(res);
  alert("Login Successfully")
  navigate("/merchanthomepage")
  localStorage.setItem("currentMerchant",JSON.stringify(res.data.data))
 
})
.catch((error)=>{
  console.log(error);
  alert("Invalid Email and password")
})
}

  return (
    <div className="merchantlogin">
      <form onSubmit={checkEmail} action="">
        <h >Login Here</h>
        <label htmlFor="">
          Email:<input type="email" required placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <br/>
        <label htmlFor="">
          Password:<input  type="password" required placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <br/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default MerchantLogin;
