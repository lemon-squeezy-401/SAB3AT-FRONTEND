import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const ProductsContext = React.createContext();

function ProductsProvider(props) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const API = 'https://sab3at.herokuapp.com';

  const getProducts = async () => {
    const response = await axios.get(`${API}/products`);
    //to save users info
    setUsers(response.data);
    //to extract Products from users
    let arr = [];
    response.data.forEach((user) =>
      user.products.forEach((product) => arr.push(product))
    );
    setProducts(arr);
    // console.log('arr from all Products context', arr);
  };

  useEffect(() => {
    getProducts();
  }, []);
  const state = { products, users };
  return (
    <ProductsContext.Provider value={state}>
      {props.children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
