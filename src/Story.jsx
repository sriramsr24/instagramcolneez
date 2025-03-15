import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Story() {

  const [stories, setStories] = useState([])

  let navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:4000/storys")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err))
  }, [])

  let tot 


  return (
    <div className=' story '>
      <div className='d-flex m-4'>
      <div className='d-none'>
      {tot=stories.length}
      </div>
        {stories.length > 0 ? (
          stories.map((story) => {
            return (
              <div key={story.id} className='mx-2' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
                <div className='gradient-border'>
                <img className='story-dp rounded-circle' src={story.profile} alt="" />
                </div>
                <h6 className='text-truncate' style={{width:"50px"}}>{story.username}</h6>
              </div>
            )
          })
        ) : (
          <p> Loading..</p>
        )}
      </div>

    </div>
  )
}

export default Story