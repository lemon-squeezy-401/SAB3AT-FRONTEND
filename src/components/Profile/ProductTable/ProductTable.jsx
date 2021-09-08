import React, { useState ,useEffect, useContext } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import superagent from 'superagent';
import { AuthContext } from '../../../context/authContext';
import './productTable.css';
import editIcon from '../../../assets/edit.svg';

function ProductCard() {
  const API = 'https://sab3at.herokuapp.com';
  const authSettings = useContext(AuthContext);
  const [productsList, setProductsList] = useState([]);
  const [show, setShow] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [title, setTitle] = useState('');
  const [SKU, setSKU] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [image, setImage] = useState('');

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
      // console.log(response);
      setProductsList(response);
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
      setProductsList([...productsList, response]);
    } catch (error) {
      console.error('Update Error', error);
    }
  };

  /*=============================================================================== */

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
            {/* <th>Date added</th> */}
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
                  {/* <td>{product.date}</td> */}
                  <td>
                    <div
                      variant="primary"
                      className = 'remove'
                      onClick={() => {
                        handleShow(product._id);
                      }}
                    >
                      <img src = {editIcon} alt="edit" />
                    </div>
                  </td>
                  <td><button onClick = {() => deleteProduct(product._id)} className="remove">&#10008;</button></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group add1">
                <label>Product Title</label>
                <input
                  onChange={handleTitle}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter The Service Name"
                />
              </div>
              <div className="row add1">
                <div className="col">
                  <label>Product SKU</label>
                  <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">#</div>
                    </div>
                    <input
                      onChange={handleSKU}
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Product SKU"
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
                <label className="form-label">Product Image</label>
                <input onChange={handleImage} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the image address" />
              </div>
              <div className="form-group add1">
                <label>Product Description</label>
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

export default ProductCard;
