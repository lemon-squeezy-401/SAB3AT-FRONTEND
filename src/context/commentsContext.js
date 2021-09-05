import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AllUsersContext } from './allUsersContext';
export const CommentsContext = React.createContext();

function CommentsProvider(props) {
  const { usersList, setUsersList, getAllUsers } = useContext(AllUsersContext);

  const [comment, setComment] = useState({
    text: '',
    commenterId: '',
  });
  const [userId, setUserId] = useState('');
  const [serivceId, setSerivceId] = useState('');
  const API = 'https://sab3at.herokuapp.com';

  const addComment = async (event) => {
    event.preventDefault();
    getAllUsers();
    console.log('userlist logged from comment context', usersList);

    const data = {
      comment: { text: event.target.value, commenterId : comment.commenterId},
      userId,
      serivceId,
    };

    const response = await axios.post(`${API}/service`, data);
    setComment([...comment, response]);
    console.log('this is the product list log from add product =D', comment);
  };

  return (
    <CommentsContext.Provider
      value={{
        comment,
        setComment,
        userId,
        setUserId,
        serivceId,
        setSerivceId,
        addComment,
      }}
    >
      {props.children}
    </CommentsContext.Provider>
  );
}

export default CommentsProvider;

// const deleteComment = async (id) => {
//   const request = await axios.delete(`${API}/service/:${id}`);

//   setComment(request.data);
// };

// const updateCommentState = (e) => setComment({});

// const updateComment = async (e) => {
//   e.preventDefault();

//   const request = await axios.put(`${API}/service/:${userId}`, {});

//   setComment(request.data);
// };
