import React, { useEffect, useState } from 'react'

function Posts() {



  let [posts, setposts] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((data) => data.json())
      .then((data) => {
        setposts(data)
        console.log(data);



      })
      .catch((err) => console.log(err))
  }, [])


  return (
    <div className='d-flex justify-content-center'>
      <div>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <div className='d-flex mt-5'>
                  <img className='dp rounded-circle' src={post.user.profile} alt="profile picture" />
                  <h5 className='ms-2'>{post.user.username}</h5>
                </div>
                <img className='post' src={post.postimg} alt="posts" />
                <h5 className='mt-2 '>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat ms-3"></i>
                  <i className="bi bi-send ms-3"></i>
                </h5>
                <div>
                  <b>{post.likes} Likes</b>
                </div>
                <p>{post.caption}</p>
                <small>{post.timestamp}</small>
              </div>
            ))}
          </div>

        ) : (
          <h4>loading...</h4>
        )}
      </div>
    </div>
  )

}





export default Posts
