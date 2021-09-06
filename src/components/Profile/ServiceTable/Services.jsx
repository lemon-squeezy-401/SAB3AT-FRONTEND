import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import superagent from 'superagent';
import axios from 'axios';
import './services.css';

function Services() {
  const API = 'https://sab3at.herokuapp.com';
  const authSettings = useContext(AuthContext);
  const [servicesList, setServicesList] = useState([]);

  const getServicesData = async () => {
    try {
      const id =  authSettings.user.id;
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
  },[authSettings.user.id]);

  const deleteService = async (_id) => {
    try {
      const userId = authSettings.user.id;
      const data = {
        _id: _id,
      };
      let response = await superagent.delete(`${API}/profile/${userId}`,data);
      response = servicesList.filter( product => product._id !== _id );
      console.log(response);
      setServicesList(response);
    } catch (error) {
      console.error('Delete Error', error);
    }
  };


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
          {servicesList.map((service) => {
            return (
              <>
                <tr>
                  <th scope="row">D33H1</th>
                  <td>{service.title}</td>
                  <td>{service.price} $</td>
                  <td>{service.description}</td>
                  <td>In stock</td>
                  <td><button className="remove">&#10002;</button></td>
                  <td><button onClick = {() => deleteService(service._id)} className="remove">&#10008;</button></td>
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
            <td><button className="remove">&#10004;</button></td>
            <td><button className="remove">&#10008;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Services;
