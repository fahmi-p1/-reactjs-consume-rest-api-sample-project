import React,{useEffect,useState} from 'react';
import Movie from './Movie';
import axios from 'axios';

const MovieList=()=>{
    const [Data,setData]=useState({
    })
    const [movieData,setMovieData]=useState([])
    useEffect(()=>{
        axios.get('https://movie-api-test.nbagroup.co.id/api/movies')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Movie Data: ',res.data.records)
                setMovieData(res.data.records)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    return(
        <div>
            <Movie data={movieData}/>
        </div>
    )
}
export default MovieList;