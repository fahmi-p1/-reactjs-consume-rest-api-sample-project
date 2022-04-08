import React,{useEffect,useState} from 'react';
import Profile from './Profile';
import axios from 'axios';

const ProfileList=()=>{
    const [Data,setData]=useState({
    })
    const [profileData,setMovieData]=useState([])
    useEffect(()=>{
        axios.get('https://movie-api-test.nbagroup.co.id/api/users')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Profile Data: ',res.data.records)
                setMovieData(res.data.records)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    return(
        <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Profile data={profileData}/>
            </div>
        </div>
    )
}
export default ProfileList;