import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import Modal from 'react-bootstrap/Modal';
import superagent from 'superagent';
import axios from 'axios';
import './services.css';

import editIcon from '../../../assets/edit.svg';

function Services() {
  const API = 'https://sab3at.herokuapp.com';
  const authSettings = useContext(AuthContext);
  const [servicesList, setServicesList] = useState([]);
  const [show, setShow] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [title, setTitle] = useState('');
  const [SKU, setSKU] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [image, setImage] = useState('');


  const getServicesData = async () => {
    try {
      const id = authSettings.user.id;
      const response = await axios.get(`${API}/profile/${id}`);
      // console.log(response.data.products);
      setServicesList(response.data.services);
    } catch (error) {
      console.error('Get products Error', error);
    }
  };

  useEffect(() => {
    getServicesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authSettings.user.id]);

  const deleteService = async (_id) => {
    try {
      const userId = authSettings.user.id;
      const data = {
        _id: _id,
      };
      let response = await superagent.delete(`${API}/profile/${userId}`, data);
      response = servicesList.filter((product) => product._id !== _id);
      // console.log(response);
      setServicesList(response);
    } catch (error) {
      console.error('Delete Error', error);
    }
  };

  /*=============================================================================== */
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setActiveId(id);
    setShow(true);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSKU = (event) => {
    setSKU(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleIsAvailable = (event) => {
    setIsAvailable(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleUpdate = async (event) => {
    // console.log(activeId);
    try {
      event.preventDefault();
      const id = authSettings.user.id;
      let data;
      data = {
        _id: activeId,
        title: title,
        SKU: SKU,
        price: price,
        image: image,
        description: description,
        isAvailable: isAvailable,
      };
      const response = await axios.put(`${API}/profile/${id}`, data);
      setServicesList([...servicesList, response]);
    } catch (error) {
      console.error('Update Error', error);
    }
  };

  /*=============================================================================== */

  return (
    <div className="sevice-con">
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
        <tbody id="products-list" key={Math.random()}>
          {servicesList.map((service) => {
            return (
              <>
                <tr>
                  <th scope="row">D33H1</th>
                  <td>{service.title}</td>
                  <td>{service.price} $</td>
                  <td>{service.description}</td>
                  <td>In stock</td>
                  <td>
                    <div
                      variant="primary"
                      className = 'remove'
                      onClick={() => {
                        handleShow(service._id);
                      }}
                    >
                      <img src = {editIcon} alt="edi" />
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteService(service._id)}
                      className="remove"
                    >
                      &#10008;
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
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
            <td>
              <button className="remove">&#10004;</button>
            </td>
            <td>
              <button className="remove">&#10008;</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <ServicePopup/> */}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Service Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group add1">
                <label>Service Title</label>
                <input
                  onChange={handleTitle}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter The Product Name"
                />
              </div>
              <div className="row add1">
                <div className="col">
                  <label>Service SKU</label>
                  <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">#</div>
                    </div>
                    <input
                      onChange={handleSKU}
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Service SKU"
                    />
                  </div>
                </div>
                <div className="col">
                  <label>Price</label>
                  <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">$</div>
                    </div>
                    <input
                      onChange={handlePrice}
                      type="text"
                      required
                      pattern="^[0-9]+([.])?[0-9]*([0-9]+)?$"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Price"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group add1">
                <label className="form-label">Service Image</label>
                <input onChange={handleImage} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the image address" />
              </div>
              <div className="form-group add1">
                <label>Service Description</label>
                <textarea
                  onChange={handleDescription}
                  name="pDesc"
                  className="form-control"
                  id="pDesc"
                ></textarea>
              </div>
              <div className="form-check add1">
                <label>Is available</label>
                <input
                  onChange={handleIsAvailable}
                  className="form-check-input position-static"
                  type="checkbox"
                  id="blankCheckbox"
                  value="option1"
                  aria-label="..."
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className = 'serPro-close' variant="secondary" onClick={handleClose}>
              Close
            </button>
            <button className = 'serPro-save' variant="primary" onClick={handleUpdate}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Services;
