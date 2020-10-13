import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPosts } from '../../actions/post';

const PostForm = ({addPosts}) => {
  const [text, setText] = useState(" ");
  return (
    <div class="post-form">
        <div class="bg-primary p">
          <h3>Say Something...</h3>
        </div>
        <form class="form my-1" onSubmit={e => {
          e.preventDefault();
          addPosts({text});
          setText(' ');
        } }>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
            required
            onChange={e => {
              setText(e.target.value)
            }}
          ></textarea>
          <input type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
  );
}

PostForm.propTypes = {
  addPosts: PropTypes.func.isRequired,
};

export default connect(null, {addPosts})(PostForm);