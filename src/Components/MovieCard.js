import React from 'react'
import {poster_CDN} from '../utils/constant'

const MovieCard = ({posterPath}) => {

  if(!posterPath) return null
  return (
    <div className=' w-36 md:w-48 pr-4 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:z-20 cursor-pointer'>
        <img  src={poster_CDN+posterPath}    alt='poster'/>
    </div>
  )
}

export default MovieCard
