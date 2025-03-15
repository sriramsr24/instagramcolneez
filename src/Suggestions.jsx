import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Suggestions() {

  const [Profile, setprofile] = useState(null)
  const [suggestions, setsuggestion] = useState([])

  useEffect(() => {

    fetch("http://localhost:4000/profilemain")
      .then((data) => data.json())
      .then((data) => setprofile(data))
      .catch((err) => console.log(err))

    fetch("http://localhost:4000/suggestion")
      .then((data) => data.json())
      .then((data) => setsuggestion(data))
      .catch((err) => console.log(err))


  })

  let handelfollow = async(id,username,profile)=>{
    
      axios.post("http://localhost:4000/followers",{"id":id,"username":username,"profile":profile})
      .then(alert('followed'))  
  
  }




  return (
    <div>
      <div className='suggestion m-4 w-75'>
        {Profile ? (

          <div>
            <div className='d-flex mt-4'>
              <img className='dp rounded-circle ' src={Profile.profile} alt="profile picture" />
              <h6 className='ms-2 mt-2'>{Profile.username}</h6>
              <small className='ms-auto text-primary mt-1'>switch</small>
            </div>
          </div>
        ) : (

          <p>Loading</p>
        )}

        <div className='d-flex mt-3'>
          <p>Suggested for you</p>
          <b className='ms-auto'>See All</b>
        </div>

        <div>
          {suggestions.length > 0 ? (
            <div>
              {suggestions.map((suggest) => {
                return (
                  <div className='suggest d-flex my-3 ' key={suggest.id}>
                    <img className='rounded-circle dp ' src={suggest.profile} alt="profilepic" />
                    <h6 className='mt-2 ms-1'>{suggest.username}</h6>
                    <p className='text-primary ms-auto' onClick={()=>handelfollow(suggest.id,suggest.username,suggest.profile)}>Follow</p>
                  </div>
                )
              })}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>


      </div>

    </div>
  )
}

export default Suggestions