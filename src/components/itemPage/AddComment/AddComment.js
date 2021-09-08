import React from 'react';

function AddComment() {
  return (
    <div>
      <div className="panel">
        <div className="panel-body">
          <form>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
