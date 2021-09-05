import React, { useState, useContext, useEffect } from 'react';
import { CommentsContext } from '../../../context/commentsContext';

function AddComment() {
  const commentsContext = useContext(CommentsContext);
  const { addComment } = commentsContext;
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
