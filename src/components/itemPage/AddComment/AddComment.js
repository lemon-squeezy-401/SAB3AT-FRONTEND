import React, { useState, useContext, useEffect } from 'react';
// import { CommentsContext } from '../../../context/commentsContext';
import axios from 'axios';
import { AuthContext } from '../../../context/authContext';

function AddComment() {
  // const commentsContext = useContext(CommentsContext);
  // const { addComment } = commentsContext;
  const { user } = useContext(AuthContext);

  const [comment, setComment] = useState({
    text: '',
    commenterId: user.id,
    serivceId: '',
  });
  const [userId, setUserId] = useState('');

  const API = 'https://sab3at.herokuapp.com';

  const addComment = async (event) => {
    event.preventDefault();

    const data = {
      userId, //this id for the service owner
      comment: {
        text: event.target.value,
        commenterId: user.id,
        serivceId: comment.serivceId,
      },
    };

    const response = await axios.post(`${API}/service`, data);
    setComment([...comment, response]);
    console.log('this is the product list log from add product =D', comment);
  };

  return (
    <div>
      <div className="panel">
        <div className="panel-body">
          <form>
            <textarea
              className="form-control "
              rows="2"
              placeholder="Add your Feedback?"
            ></textarea>
            <div className="mar-top clearfix">
              <button
                onClick={(e) => addComment(e)}
                className="btn btn-sm btn-primary pull-right add-comment-style"
                type="submit"
              >
                <i className="fa fa-pencil fa-fw"></i> Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
