import React, { useState ,useEffect, useContext } from 'react';
import axios from 'axios';
import superagent from 'superagent';
import { AuthContext } from '../../../context/authContext';
import './productTable.css';

function ProductCard() {
  const API = 'https://sab3at.herokuapp.com';
  const authSettings = useContext(AuthContext);
  const [productsList, setProductsList] = useState([]);

  const getProductsData = async () => {
    try {
      const id =  authSettings.user.id;
      const response = await axios.get(`${API}/profile/${id}`);
      // console.log(response.data.products);
      setProductsList(response.data.products);
    } catch (error) {
      console.error('Get products Error', error);
    }
  };

  useEffect(() => {
    getProductsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[authSettings.user.id]);

  const deleteProduct = async (_id) => {
    try {
      const userId = authSettings.user.id;
      const data = {
        _id: _id,
      };
      let response = await superagent.delete(`${API}/profile/${userId}`,data);
      response = productsList.filter( product => product._id !== _id );
      console.log(response);
      setProductsList(response);
    } catch (error) {
      console.error('Delete Error', error);
    }
  };

  return (
    <div className = 'sevice-con'>
      <h2>Product List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#SKU</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Is available</th>
            <th>Edit Product</th>
            <th>Remove Product</th>
          </tr>
        </thead>
        <tbody id="products-list">
          {productsList.map((product) => {
            return (
              <>
                <tr>
                  <th scope="row">D33H1</th>
                  <td>{product.title}</td>
                  <td>{product.price} $</td>
                  <td>{product.description}</td>
                  <td>In stock</td>
                  <td><button className="remove">&#10002;</button></td>
                  <td><button onClick = {() => deleteProduct(product._id)} className="remove">&#10008;</button></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductCard;
