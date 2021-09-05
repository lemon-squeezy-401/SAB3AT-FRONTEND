import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './authContext';

export const AllUsersContext = React.createContext();

function GetAllUsers(props) {
  const authSettings = useContext(AuthContext);
  const { user, token } = authSettings;
  console.log('token from all user context', token);
  const API = 'https://sab3at.herokuapp.com';

  const [usersList, setUsersList] = useState([]);

  const getAllUsers = async () => {
    const config = {
      headers: { Authorization: `Bearer   ${token}` },
    };
    const res = await axios.get(`${API}/users`, config);
    console.log('userlist logged from all users context', res);
    setUsersList(res);
  };

  return (
    <AllUsersContext.Provider value={{ usersList, setUsersList, getAllUsers }}>
      {props.children}
    </AllUsersContext.Provider>
  );
}

export default GetAllUsers;
