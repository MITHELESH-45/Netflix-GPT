import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptResults from './GptResults'
import { bgUrl } from '../utils/constant'

const GptSuggestions = () => {
  return (
    <>
    <div className='fixed -z-10'>
       <img className='h-screen w-screen object-cover'
       src={bgUrl}
             alt='logo'  />
    </div>
    <div className=''>
       
      <GptSearchBar />
      <GptResults />
    </div>
    </>
  )
}

export default GptSuggestions
