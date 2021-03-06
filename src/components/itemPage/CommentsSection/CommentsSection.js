import React, { useContext } from 'react';
import './CommentsSection.css';
import AddComment from '../AddComment/AddComment';
import { ServicesContext } from '../../../context/AllServices';

function CommentsSection(props) {
  const { services } = useContext(ServicesContext);

  // console.log(services);
  let arr = [];
  services.forEach((service) =>
    service.comments.forEach((comment) => arr.push(comment))
  );

  // console.log('trrrrrrrrrrrrrrrrrrrrrrrrrra', arr);

  return (
    <>
      <div className="comments-container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <AddComment />
            <div style={{ margin: '5rem' }}></div>
            <div className="headings d-flex justify-content-between align-items-center mb-3">
              <h5> Comments</h5>
              {/* <div className="buttons">
                <span className="badge bg-white d-flex flex-row align-items-center">
                  <span className="text-primary">Comments "ON"</span>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      checked
                    />
                  </div>
                </span>
              </div> */}
            </div>
            {arr.map((comment) => {
              return (
                <div className="comments-card p-3" key={comment._id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="user d-flex flex-row align-items-center">
                      <img
                        src={'https://i.imgur.com/hczKIze.jpg'}
                        width="30"
                        className="user-img rounded-circle mr-2"
                        alt=""
                      />
                      <span>
                        <small className="font-weight-bold text-primary">
                          james_olesenn
                        </small>
                        <small className="font-weight-bold">
                          {comment.text}
                        </small>
                      </span>
                    </div>
                    <small>{comment.date}</small>
                  </div>
                  <div className="action d-flex justify-content-between mt-2 align-items-center">
                    <div className="reply px-4">
                      <small>Remove</small> <span className="dots"></span>
                      <small>Reply</small> <span className="dots"></span>
                      <small>Translate</small>
                    </div>
                    <div className="icons align-items-center">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-check-circle-o check-icon"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentsSection;
