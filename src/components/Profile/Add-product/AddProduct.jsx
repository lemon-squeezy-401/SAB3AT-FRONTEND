import React from 'react';
import './addproduct.css';

function AddProduct() {
  return (
    <div className = 'add-product-container'>
      <h1>Add New Product</h1>
      <form>
        <div className="form-group add1">
          <label>Product Title</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter The Product Name"/>
        </div>
        <div className="row add1">
          <div className="col">
            <label>Product SKU</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">#</div>
              </div>
              <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Product SKU"/>
            </div>
          </div>
          <div className="col">
            <label>Price</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">$</div>
              </div>
              <input type = "text" required pattern="^[0-9]+([.])?[0-9]*([0-9]+)?$" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Price"/>
            </div>
          </div>
        </div>
        <div className = 'add1'>
          <label className="form-label">Product Image</label>
          <input className="form-control form-control-sm" id="formFileSm" type="file" />
        </div>
        <div className="form-group add1">
          <label>Product Description</label>
          <textarea name="pDesc" className="form-control" id="pDesc"></textarea>
        </div>
        <div className="form-check add1">
          <label>Is available</label>
          <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
