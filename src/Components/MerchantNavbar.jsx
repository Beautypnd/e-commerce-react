import React from "react";
import { Link } from "react-router-dom";
import "../style/MerchantNavbar.css";

const MerchantNavbar = () => {
  return (
    <div className="merchantNavbar">
      <div className="logo">
        <h1>
          Shop<span>It</span>
        </h1>
      </div>
      <div className="options">
        <Link to="/merchantlogin">LogIn</Link>
        <Link to="/merchantsignup">SignUp</Link>
        <Link to="/updatemerchant">Update</Link>
        <Link to="/">LogOut</Link>
      </div>
    </div>
  );
};

export default MerchantNavbar;
