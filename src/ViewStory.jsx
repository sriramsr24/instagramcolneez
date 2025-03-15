import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'


function ViewStory() {

  const { id,tot } = useParams()

  let [Story, setStory] = useState([])

  let navigate=useNavigate()

  useEffect(() => {

    fetch(`http://localhost:4000/storys/${id}`)
      .then((data) => data.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err))
  }, [id])


  if(id > 304|| id<=300){
    navigate('/')
  }


  return (
    <div>
      {Story? <div className='d-flex justify-content-center align-items-center'>
        
        <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`} ><h3 className='bi bi-arrow-left-circle-fill biarrow m-3' ></h3></Link>
        <img src={Story.storypic} className='vh-100' alt="storypic" style={{ borderRadius : "20px"}} />
        <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><h3 className='bi bi-arrow-right-circle-fill biarrow m-2' ></h3></Link>



      </div>:
      
      <div>Loading</div>}
    </div>

  )
}

      export default ViewStory