import React from 'react'
import {useState,useEffect} from 'react'
import { RxCross2 } from "react-icons/rx";
import axios from 'axios'
import {BACKEND_URL} from '../config'


const Feed = () => {
 const [posts, setPosts] = useState([])
 useEffect(()=>{
    axios.get(`${BACKEND_URL}/post`).then((res)=>{
        setPosts(res.data.posts)
    })
 },[])
 const handleDelete=async(id)=>{
    await axios.delete(`${BACKEND_URL}/post/${id}`)
    setPosts(posts.filter(post=>post._id!==id))
 }
  return (
    <section className='feed-section'>
        {
            posts.length>0?(
                posts.map((post)=>(
                    <div className='post-card' key={post._id}>
                        <div onClick={()=>handleDelete(post._id)} className="cross"><RxCross2 /></div>
                        <img src={post.image}alt="post.caption" />
                        <p>{post.caption}</p>
                    </div>
                ))
            ):(
                <h1>No posts available</h1>
            )
        }
    </section>
  )
}

export default Feed
