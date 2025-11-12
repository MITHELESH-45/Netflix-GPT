import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langkey=useSelector(store=>store.config.lang);
  return (
    <div className=' pt-[10%] flex justify-center'>
       
       <form className='w-1/2  bg-black grid grid-cols-12'
           onSubmit={(e) => e.preventDefault()}>
           <input
            type='text'
             className='p-4 m-4 col-span-9' 
              placeholder={lang[langkey].GptPlaceHolder} />

           <button 
            className='col-span-3 px-4 py-2 m-4 rounded-lg bg-red-700 text-white' 
            >{lang[langkey].Search}
            </button>
           
       </form>
    </div>
  )
}

export default GptSearchBar
