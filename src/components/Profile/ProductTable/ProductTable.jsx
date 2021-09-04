import React from 'react';
import './productTable.css';

function ProductCard() {
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
          <tr>
            <th scope="row">D33H1</th>
            <td>Macbook pro 13 inch</td>
            <td>1500$</td>
            <td>13-inch MacBook Pro with Retina display</td>
            <td>In stock</td>
            <td><button className="remove">&#10002;</button></td>
            <td><button className="remove">&#10008;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductCard;
