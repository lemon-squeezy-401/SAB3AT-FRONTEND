import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import './productTable.css';

function ProductCard() {
  const API = 'https://sab3at.herokuapp.com';

  const [productsList, setProductsList] = useState([]);

  const getProductsData = async () => {
    const response = await axios.get(`${API}/profile/613088dc1467ca00167bcc5f`);
    // console.log(response.data.products);
    setProductsList(response.data.products)
  };

  useEffect(() => {
    getProductsData();
  },[]);

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
                    <td><button className="remove">&#10008;</button></td>
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
