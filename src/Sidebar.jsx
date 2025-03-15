import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {


 let navigate = useNavigate()

  return (
    <div>
        <div className="d-flex flex-column gap-4 m-3 position-fixed">
            <img className="logo-text mt-3 " src="../src/assets/instagram-terxt.png" alt="text-img" />
            <h5><i className="bi bi-house-door-fill"></i>Home</h5>
            <h5><i className="bi bi-search-heart-fill"></i>Search</h5>
            <h5><i className="bi bi-compass-fill"></i>Explore</h5>
            <h5><i className="bi bi-play-fill"></i>Reels</h5>
            <h5><i className="bi bi-chat-heart-fill"></i>Messages</h5>
            <h5><i className="bi bi-balloon-heart-fill"></i>Notification</h5>
            <h5><i className="bi bi-patch-plus-fill"></i>Create</h5>
            <h5 onClick={()=>{navigate("/profile")}}><i className="bi bi-person-circle"></i>Profile</h5>
        </div>
        <div className="d-flex flex-column gap-3 m-3 position-fixed bottom-0 mb-5">
            <h5><i className="bi bi-threads"></i>Threads</h5>
            <h5><i className="bi bi-menu-up"></i>More</h5>
        </div>
    </div>
  )
}

export default Sidebar