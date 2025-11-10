import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";



const useMovieTrailer = (movieId) => {
    
    const dispatch=useDispatch();
    const getMovieVideos=async()=>{

    const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
    const json=await data.json();
    //console.log(json);

    const Filtertrailers=json.results.filter((video)=>video.type==="Trailer");
    
    const trailer=Filtertrailers.length?Filtertrailers[0]:json.results[0];
    //console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };


  
  
  useEffect(()=>{
    getMovieVideos();
  },[])
}

export default useMovieTrailer
