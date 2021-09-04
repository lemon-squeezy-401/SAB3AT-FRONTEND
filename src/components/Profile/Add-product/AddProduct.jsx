import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/authContext';
import './addproduct.css';

function AddProduct() {
  const API = 'https://sab3at.herokuapp.com';
  const authSettings = useContext(AuthContext);
  console.log(authSettings);


  const [title, setTitle] = useState('');
  const [SKU, setSKU] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [productsList, setProductsList] = useState([]);

  const handleTitle = (event) => {
    setTitle(event.target.value);
    // console.log(title);
  }

  const handleSKU = (event) => {
    setSKU(event.target.value);
    // console.log(SKU);
  }

  const handlePrice = (event) => {
    setPrice(event.target.value);
    // console.log(price);
  }

  const handleDescription = (event) => {
    setDescription(event.target.value);
    // console.log(description);
  }

  const handleIsAvailable = (event) => {
    setIsAvailable(event.target.value);
    // console.log(isAvailable);
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        title: title,
        SKU: SKU,
        price: price,
        description: description,
        isAvailable: isAvailable
      };
      const response = await axios.post(`${API}/profile-product/613088dc1467ca00167bcc5f`, data);
      setProductsList([...productsList, response]);
      console.log(productsList);
    } catch (error) {
      console.error('Adding Error', error);
    }
  }

  const getAllUsers = async () => {
    const config = {
      headers: { Authorization: `Bearer ${authSettings.token}` },
    };
    const res = await axios.get(`${API}/users`, config);
    console.log(res);
  };

  useEffect(() =>{
    getAllUsers();
  });

  // async function Name(event) {
  //   event.preventDefault();
  //   let response = () => {
  //     return new Promise(function(resolve, reject) {
  //       fetch(`${API}/profile-product/613088dc1467ca00167bcc5f`, {
  //         method: 'post',
  //         body: {
  //           title: title,
  //           description: description
  //         }
  //       }).then(response => {
  //         resolve(response.json());
  //       });
  //     });
  //   };
  //   let responseData = await response();
  //   console.log(responseData);
  // }

  return (
    <div className = 'add-product-container'>
      <h1>Add New Product</h1>
      <form id = 'add-product-form' onSubmit = {handleSubmit}>
        <div className="form-group add1">
          <label>Product Title</label>
          <input onChange = {handleTitle} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter The Product Name"/>
        </div>
        <div className="row add1">
          <div className="col">
            <label>Product SKU</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">#</div>
              </div>
              <input onChange = {handleSKU} type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Product SKU"/>
            </div>
          </div>
          <div className="col">
            <label>Price</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input onChange = {handlePrice} required pattern="^[0-9]+([.])?[0-9]*([0-9]+)?$" type = "text"  className="form-control" id="inlineFormInputGroupUsername2" placeholder="Price"/>
            </div>
          </div>
        </div>
        <div className = 'add1'>
          <label className="form-label">Product Image</label>
          <input className="form-control form-control-sm" id="formFileSm" type="file" />
        </div>
        <div className="form-group add1">
          <label>Product Description</label>
          <textarea onChange = {handleDescription} name="pDesc" className="form-control" id="pDesc"></textarea>
        </div>
        <div className="form-check add1">
          <label>Is available</label>
          <input onChange = {handleIsAvailable} className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
        </div>
        <button type="submit" className="add-ps-button">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
