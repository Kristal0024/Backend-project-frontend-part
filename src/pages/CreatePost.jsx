import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';

const CreatePost = () => {
  const navigate = useNavigate();
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);

    try {
      await axios.post(`${BACKEND_URL}/create-post`, formData);
      navigate("/feed");
    } catch (err) {
      console.error("Error creating post:", err);
      alert("Error Creating Post");
    }
  };

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <input
          type="text"
          placeholder='Enter caption'
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
