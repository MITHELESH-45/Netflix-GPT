import { useDispatch, useSelector } from "react-redux";
import {  addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";



const useTopRated=()=>{

    const dispatch=useDispatch();

    const topRated=useSelector(store=>store.movies.TopRated);
  const getTopRated=async()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS)
    
    const json= await data.json();
    
    dispatch(addTopRated(json.results));
  }

  useEffect(()=>{
      !topRated && getTopRated();
  },[])
}

export default useTopRated