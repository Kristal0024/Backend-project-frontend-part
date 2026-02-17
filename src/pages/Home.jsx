import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate()
    const handlelogin=()=>{
    navigate("/create-post")
}
  return (
   <>
   <div className="homeWrapper">
    <button onClick={handlelogin}>Login</button>
   </div>
   </>
  )
}

export default Home
