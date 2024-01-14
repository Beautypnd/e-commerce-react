import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../style/ProductDashboard.css";
import { useNavigate } from "react-router-dom";

const ProductDashboard = () => {
  let x = localStorage.getItem("currentMerchant");
  let user = JSON.parse(x);
  let [products, setProducts] = useState([]);
  let navigate=useNavigate()

  let updateItem=(id)=>{
    navigate(`/merchanthomepage/updateProduct/${id}`)
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${user.id}`)
      .then((res) => {
        // console.log(res);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  console.log(products);
  return (
    <div className="dashboard">
      <h1>Dahsboard</h1>
      
    </div>
  );
};

export default ProductDashboard;
