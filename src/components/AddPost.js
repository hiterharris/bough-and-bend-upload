import React, { useState } from 'react';
import axios from 'axios';
import './AddPost.css';

function AddPost() {
  const [post, setPost] = useState({
    date: '',
    title: '',
    content: ''
  });

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/api/posts/upload', post)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="container">
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div className='input'>
            <input
              onChange={handleChange}
              id='date'
              type='text'
              name='date'
              placeholder='Date'
            />
        </div>
        
        <div className='input'>
            <input
              onChange={handleChange}
              id='title'
              type='text'
              name='title'
              placeholder='Post Title'
            />
        </div>

        <div className='input content'>
            <input
              onChange={handleChange}
              id='content'
              type='text'
              name='content'
              placeholder='Post Content'
            />
        </div>

        <div>
            <button onClick={handleSubmit} type='submit'>Submit</button>
        </div>

      </form>
    </div>
  );
}

export default AddPost;