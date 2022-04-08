import React from 'react';

const Movie=({data})=>{
    return(   
        <div>
          {
            data && data.map((d)=>{
               return(
                    <div class="card" key={d.id}>
                    <div class="container" >
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><img src={`https://movie-api-test.nbagroup.co.id/assets/${d.poster}`} height="170px" width="120px"></img></div>
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><b>{d.title}</b></div>
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{d.main_genre}</div>               
                    </div>
                    </div>
               )
           })
          }
        </div>
    )
}
export default Movie;