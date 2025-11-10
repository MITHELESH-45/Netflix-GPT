import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {

  const {title,movies}=props;
  //console.log(title);
  //console.log(movies);
  return (
    <div className='px-4 '>
        <h1 className='text-4xl font-bold text-red-500 py-6'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            
            <div className='flex'>
                {movies?.map((movie)=>
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                )}
                
            </div>
        </div>
        
    </div>
  )
}

export default MovieList
