import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {BACKEND_URL} from '../config'


const CreatePost = () => {
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    axios.post(`${BACKEND_URL}/create-post`,formData).then((res)=>{
     navigate("/feed")
    })
    .catch((err)=>{
      console.log(err)
      alert("Error Creating Post")
    })
  }
  return (
   <section className='create-post-section'>
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit}>
        <input type="file" name='image' accept='image/*' />
        <input type="text" placeholder='Enter caption' name='caption' required />
        <button type='submit'>Submit</button>
    </form>
   </section>
  )
}

export default CreatePost
