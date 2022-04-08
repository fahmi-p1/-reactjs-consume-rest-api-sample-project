import React from 'react';

const Profile=({data})=>{
    return(   
        <div>
          {
            data && data.map((d)=>{
               return(
                    <div class="" key={d.id} >
                    <div class="container" >
                        <img src={`https://movie-api-test.nbagroup.co.id/assets/${d.photo}`} height="100%" width="100%"></img>
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><b>Name : {d.name}</b></div>
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Date of Birth : {d.dob}</div>
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Date Created : {d.created_at}</div>                            
                    </div>
                    </div>
               )
           })
          }
        </div>
    )
}
export default Profile;