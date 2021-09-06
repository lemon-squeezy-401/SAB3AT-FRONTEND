import React from 'react';
import './services.css';

function Services() {
// add to table function
  // useEffect(() => {
  //   const prodListModule = (function() {

  //     const addProdForm = document.getElementById('add-product-form');
  //     const prodTable   = document.getElementById('products-list');

  //     function init() {
  //       addProdForm.addEventListener('submit', function(e) {
  //         e.preventDefault();
  //         let inStock = (addProdForm.pAvailability.checked) ? 'In stock' : 'Out of stock';
  //         let rowString = `
  //           <tr>
  //             <th scope="row">${addProdForm.pSKU.value}</th>
  //             <td>${addProdForm.pTitle.value}</td>
  //             <td>${(+addProdForm.pPrice.value).toFixed(2)}$</td>
  //             <td>${addProdForm.pDesc.value}</td>
  //             <td>${inStock}</td>
  //             <td><button className="remove">&#10008;</button></td>
  //           </tr>`;

  //         prodTable.insertAdjacentHTML('beforeend', rowString);
  //         addProdForm.querySelectorAll('input, textarea').forEach( (input) => input.value = '' );
  //       });
  //     };

  //     function removeRow() {
  //       prodTable.addEventListener('click', function(e) {
  //         if (e.target.classList.value === 'remove') {
  //           prodTable.removeChild(e.target.parentElement.parentElement);
  //         };
  //       });
  //     };

  //     return {
  //       init: init,
  //       close: removeRow
  //     };

  //   }());

  //   prodListModule.init();
  //   prodListModule.close();
  // });

  return (
    <div className = 'sevice-con'>
      <h2>Services List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#SKU</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Is available</th>
            <th>Edit Service</th>
            <th>Remove Service</th>
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
      <br />
      <br />
      {/* requested services */}
      <h2>Requests List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Customer Email</th>
            <th>Customer Name</th>
            <th>Requsted Service</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody id="products-list">
          <tr>
            <th scope="row">abdallah@gmail.com</th>
            <td>Abdallah</td>
            <td>Macbook pro 13 inch</td>
            <td><button className="remove">&#10004;</button></td>
            <td><button className="remove">&#10008;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Services;
