import React from 'react';
import './addservice.css';

function AddService() {
  return (
    <div>
      <div className = 'add-product-container'>
        <h1>Add New Service</h1>
        <form>
          <div className="form-group add1">
            <label>Service Title</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter The Product Name"/>
          </div>
          <div className="row add1">
            <div className="col">
              <label>Service SKU</label>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">#</div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Service SKU"/>
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
            <label className="form-label">Service Image</label>
            <input className="form-control form-control-sm" id="formFileSm" type="file" />
          </div>
          <div className="form-group add1">
            <label>Service Description</label>
            <textarea name="pDesc" className="form-control" id="pDesc"></textarea>
          </div>
          <div className="form-check add1">
            <label>Is available</label>
            <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
          </div>
          <button type="submit" className="btn btn-primary">Add Service</button>
        </form>
      </div>
    </div>
  );
}

export default AddService;
