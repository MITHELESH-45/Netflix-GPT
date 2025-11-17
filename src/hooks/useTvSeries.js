import { useDispatch, useSelector } from "react-redux";
import { addTvSeries } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";



const useTvSeries=()=>{

    const dispatch=useDispatch();

    const TvSeries=useSelector(store=>store.movies.TvSeries)
  const getTvSeries=async()=>{

    const data=await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1',API_OPTIONS)
    
    const json= await data.json();
    
    dispatch(addTvSeries(json.results));
  }

  useEffect(()=>{
      !TvSeries && getTvSeries();
  },[])
}

export default useTvSeries