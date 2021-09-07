import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';
// import { AuthContext } from '../../../context/authContext';

function ServicePopup(props) {
  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  const handleTitle = (event) => {
    props.setTitle(event.target.value);
    // console.log(title);
  };

  const handleSKU = (event) => {
    props.setSKU(event.target.value);
    // console.log(SKU);
  };

  const handlePrice = (event) => {
    props.setPrice(event.target.value);
    // console.log(price);
  };

  const handleDescription = (event) => {
    props.setDescription(event.target.value);
    // console.log(description);
  };

  const handleIsAvailable = (event) => {
    props.setIsAvailable(event.target.value);
    // console.log(isAvailable);
  };

  return (
    <div>
      <div variant="primary" onClick={handleShow}>
        &#10002;
      </div>

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group add1">
              <label>Service Title</label>
              <input onChange = {handleTitle} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter The Product Name"/>
            </div>
            <div className="row add1">
              <div className="col">
                <label>Service SKU</label>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">#</div>
                  </div>
                  <input onChange = {handleSKU} type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Service SKU"/>
                </div>
              </div>
              <div className="col">
                <label>Price</label>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                  </div>
                  <input onChange = {handlePrice} type = "text" required pattern="^[0-9]+([.])?[0-9]*([0-9]+)?$" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Price"/>
                </div>
              </div>
            </div>
            <div className = 'add1'>
              <label className="form-label">Service Image</label>
              <input className="form-control form-control-sm" id="formFileSm" type="file" />
            </div>
            <div className="form-group add1">
              <label>Service Description</label>
              <textarea onChange = {handleDescription} name="pDesc" className="form-control" id="pDesc"></textarea>
            </div>
            <div className="form-check add1">
              <label>Is available</label>
              <input onChange = {handleIsAvailable} className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={props.handleUpdate}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ServicePopup;
