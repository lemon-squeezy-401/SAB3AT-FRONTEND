// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from './authContext';
// import { ServicesContext } from './AllServices';
// export const CommentsContext = React.createContext();
// function CommentsProvider(props) {
//   const { user } = useContext(AuthContext);
//   const { services, getServices } = useContext(ServicesContext);
//   getServices();
//   // console.log('log services from comment context', services);

//   const [comment, setComment] = useState({
//     text: '',
//     commenterId: '',
//     serivceId: '',
//   });
//   const [userId, setUserId] = useState('');

//   const API = 'https://sab3at.herokuapp.com';

//   const addComment = async (event) => {
//     event.preventDefault();

//     const data = {
//       userId, //this id for the service owner
//       comment: {
//         text: event.target.value,
//         commenterId: user.id,
//         serivceId: comment.serivceId,
//       },
//     };

//     const response = await axios.post(`${API}/service`, data);
//     setComment([...comment, response]);
//     console.log('this is the product list log from add product =D', comment);
//   };

//   return (
//     <CommentsContext.Provider
//       value={{
//         comment,
//         setComment,
//         userId,
//         setUserId,
//         addComment,
//       }}
//     >
//       {props.children}
//     </CommentsContext.Provider>
//   );
// }

// export default CommentsProvider;
