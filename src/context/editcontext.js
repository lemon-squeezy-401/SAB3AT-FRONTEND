import React, { useState, useContext } from 'react';
import { AuthContext } from './authContext';
import axios from 'axios';
export const EditContext = React.createContext();

function EditSettings(props) {
  const API = 'https://sab3at.herokuapp.com';
  const authSettings = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [SKU, setSKU] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [servicesList, setServicesList] = useState([]);

  const handleUpdate = async (event, _id) => {
    try {
      event.preventDefault();
      const id = authSettings.user.id;
      let data;
      const needUpdate = servicesList.map((service) => {
        if(service._id === _id){
          service._id = _id;
          service.title = title;
          service.SKU = SKU;
          service.price = price;
          service.description = description;
          service.isAvailable = isAvailable;
          data = service;
        }
        // console.log(_id);
        return service;
      });
      await axios.put(`${API}/service/${id}`, data);
      setServicesList(needUpdate);
    } catch (error) {
      console.error('Update Error', error);
    }
  };

  return (
    <EditContext.Provider value = {{title, SKU, price, description, isAvailable, setTitle, setSKU, setPrice, setDescription, setIsAvailable, handleUpdate}}>
      {props.children}
    </EditContext.Provider>
  );
}

export default EditSettings;
