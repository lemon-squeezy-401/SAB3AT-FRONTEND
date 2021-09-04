import React from 'react';

function AddComment() {
  return (
    <div>
      <div className="panel">
        <div className="panel-body">
          <textarea
            className="form-control"
            rows="2"
            placeholder="Add your Feedback?"
          ></textarea>
          <div className="mar-top clearfix">
            <button
              className="btn btn-sm btn-primary pull-right add-comment-style"
              type="submit"
            >
              <i className="fa fa-pencil fa-fw"></i> Comment
            </button>
            <a
              className="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
              href={'/#'}
            ></a>
            <a
              className="btn btn-trans btn-icon fa fa-camera add-tooltip"
              href={'/#'}
            ></a>
            <a
              className="btn btn-trans btn-icon fa fa-file add-tooltip"
              href={'/#'}
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
