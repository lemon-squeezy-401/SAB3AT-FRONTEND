// import React, { useState } from 'react';
// import axios from 'axios';
// export const ServicesContext = React.createContext();

// function ServicesProvider(props) {
//   const [services, setServices] = useState([]);

//   const API = 'https://sab3at.herokuapp.com';

//   const getServices = async () => {
//     const response = await axios.get(`${API}/service`);
//     let renderedServices = response.data;
//     // .map((item) => item.services);
//     // console.log(
//     //   'this is the product list log all services context =D',
//     //   renderedServices
//     // );
//     setServices(renderedServices);
//   };
//   return (
//     <ServicesContext.Provider value={{ services, getServices }}>
//       {props.children}
//     </ServicesContext.Provider>
//   );
// }

// export default ServicesProvider;
