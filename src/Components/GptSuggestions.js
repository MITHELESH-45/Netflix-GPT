import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptResults from './GptResults'
import { bgUrl } from '../utils/constant'

const GptSuggestions = () => {
  return (
    <div className=''>
       <img className='absolute -z-10'
       src={bgUrl}
             alt='logo'  />
      <GptSearchBar />
      <GptResults />
    </div>
  )
}

export default GptSuggestions
