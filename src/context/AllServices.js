/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const ServicesContext = React.createContext();

function ServicesProvider(props) {
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);
  const API = 'https://sab3at.herokuapp.com';

  const getServices = async () => {
    const response = await axios.get(`${API}/service`);
    //to save users info
    setUsers(response.data);
    //to extract services from users
    let arr = [];
    response.data.forEach((user) =>
      user.services.forEach((service) => arr.push(service))
    );
    setServices(arr);
    // console.log('arr from all service context', arr);
  };

  useEffect(() => {
    getServices();
  }, []);
  const state = { services, users };
  return (
    <ServicesContext.Provider value={state}>
      {props.children}
    </ServicesContext.Provider>
  );
}
export default ServicesProvider;
