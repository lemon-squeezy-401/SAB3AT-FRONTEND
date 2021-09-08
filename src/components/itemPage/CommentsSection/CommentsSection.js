import React from 'react';
import './CommentsSection.css';
import AddComment from '../AddComment/AddComment';

function CommentsSection(props) {
  console.log('props from comment section component', props);
  // const { serviceComments, serviceId } = props;

  return (
    <>
      <div className="comments-container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <AddComment />
            <div style={{ margin: '3rem' }}></div>
            <div className="headings d-flex justify-content-between align-items-center mb-3">
              <h5>Unread comments(6)</h5>
              <div className="buttons">
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
              </div>
            </div>
            <div className="comments-card p-3">
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
                      Hmm, This poster looks cool
                    </small>
                  </span>
                </div>
                <small>2 days ago</small>
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
            <div className="comments-card p-3 mt-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img
                    src={'https://i.imgur.com/C4egmYM.jpg'}
                    width="30"
                    className="user-img rounded-circle mr-2"
                    alt=""
                  />
                  <span>
                    <small className="font-weight-bold text-primary">
                      olan_sams
                    </small>
                    <small className="font-weight-bold">
                      Loving your work and profile!
                    </small>
                  </span>
                </div>
                <small>3 days ago</small>
              </div>
              <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="reply px-4">
                  <small>Remove</small> <span className="dots"></span>
                  <small>Reply</small> <span className="dots"></span>
                  <small>Translate</small>
                </div>
                <div className="icons align-items-center">
                  <i className="fa fa-check-circle-o check-icon text-primary"></i>
                </div>
              </div>
            </div>
            <div className="comments-card p-3 mt-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img
                    src={'https://i.imgur.com/0LKZQYM.jpg'}
                    width="30"
                    className="user-img rounded-circle mr-2"
                    alt=""
                  />
                  <span>
                    <small className="font-weight-bold text-primary">
                      rashida_jones
                    </small>
                    <small className="font-weight-bold">
                      Really cool Which filter are you using?
                    </small>
                  </span>
                </div>
                <small>3 days ago</small>
              </div>
              <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="reply px-4">
                  <small>Remove</small> <span className="dots"></span>
                  <small>Reply</small> <span className="dots"></span>
                  <small>Translate</small>
                </div>
                <div className="icons align-items-center">
                  <i className="fa fa-user-plus text-muted"></i>
                  <i className="fa fa-star-o text-muted"></i>
                  <i className="fa fa-check-circle-o check-icon text-primary"></i>
                </div>
              </div>
            </div>
            <div className="comments-card p-3 mt-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img
                    src={'https://i.imgur.com/ZSkeqnd.jpg'}
                    width="30"
                    className="user-img rounded-circle mr-2"
                    alt=""
                  />
                  <span>
                    <small className="font-weight-bold text-primary">
                      simona_rnasi
                    </small>
                    <small className="font-weight-bold text-primary">
                      @macky_lones
                    </small>
                    <small className="font-weight-bold text-primary">
                      @rashida_jones
                    </small>
                    <small className="font-weight-bold">Thanks </small>
                  </span>
                </div>
                <small>3 days ago</small>
              </div>
              <div className="action d-flex justify-content-between mt-2 align-items-center">
                <div className="reply px-4">
                  <small>Remove</small> <span className="dots"></span>
                  <small>Reply</small> <span className="dots"></span>
                  <small>Translate</small>
                </div>
                <div className="icons align-items-center">
                  <i className="fa fa-check-circle-o check-icon text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentsSection;
