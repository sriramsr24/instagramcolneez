import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
function Profile() {

    let [profile, setprofile] = useState()

    let [followers, setfollowers] = useState([])

    let [unfollow,setunfollow] = useState(0)



    useEffect(() => {

        axios.get("http://localhost:4000/profilemain")
            .then((data) => setprofile(data.data))
            .catch(err => console.log(err))

        axios.get("http://localhost:4000/followers")
            .then((data) => setfollowers(data.data))
            .catch(err => console.log(err))




    }, [unfollow])

    function HandelOnChange(e) {
        setprofile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handelupdate = async () => {
        axios.put("http://localhost:4000/profilemain", profile)
            .then(console.log("updated"))
            .then(err => console.log(err))
    }

    const handleunfollow = async (id) =>{
        axios.delete(`http://localhost:4000/followers/${id}`)
        .then(setunfollow(!unfollow))
        .then(alert("unfollowed"))
        .catch(err => console.log(err))
    }

    return (
        <div>
            {profile ?
                (<div className='m-5'>
                    <img src={profile.profile} alt="profile" className='rounded-circle profiledp' />
                    <h6 className='ms-5 mt-2'>{profile.username}</h6>

                    <input type="text"
                        value={profile.username}
                        name='username'
                        className='form-control my-4 w-25'
                        onChange={HandelOnChange}
                    />
                    <input type="text"
                        value={profile.profile}
                        name='profile'
                        className='form-control my-4 w-25'
                        onChange={HandelOnChange}
                    />
                    <button className='btn btn-outline-success' onClick={handelupdate} >Update</button>
                </div>)


                : (<p>Loading</p>)}

             {followers.length > 0 ? (
                <div>
                    {followers.map((follower)=>(
                        <div key={follower.id} className='d-flex m-3 w-25'>
                            <img className='rounded-circle followerdp ' src={follower.profile} alt="" />
                            <p className='ms-2 mt-2'>{follower.username}</p>
                            <button className='btn btn-outline-info ms-auto' onClick={()=>handleunfollow(follower.id)}>Unfollow</button>                        
                </div>
                    ))}
                </div>
             ):(
                <p>LoadingFollowers...</p>
             )}
            
        </div>
    )
}

export default Profile


