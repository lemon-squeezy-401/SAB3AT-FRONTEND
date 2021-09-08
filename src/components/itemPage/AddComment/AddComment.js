import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
// import { ServicesContext } from '../../../context/AllServices';

function AddComment() {
  // const { services } = useContext(ServicesContext);

  const [text, setText] = useState('');

  const handlText = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      userId: '612e662b580fd40c5d623ada',
      comment: {
        text: text,
        serivceId: '6137dc093be6150016097495',
      },
    };
    await axios.post(`https://sab3at.herokuapp.com/service`, data);
  };

  return (
    <div>
      <div className="panel">
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={handlText}
              className="form-control"
              rows="2"
              placeholder="Add your Feedback?"
            ></textarea>
            <div className="mar-top clearfix">
              {/* <button
                className="btn btn-sm p-1 btn-primary pull-right w-25 mt-1 mx-0 bg-primary"
                type="submit"
              >
                <i className="fa fa-pencil fa-fw"></i> Comment
              </button> */}
              <button
                type="submit"
                style={{
                  borderRadius: '10%',
                  width:'6rem',
                  padding:'.08rem',
                  position:'absolute',
                  right:'17%',
                  backgroundColor: '#3E00FF',
                  color: '#fff',
                  marginTop:'1rem'
                }}
              >
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
