import React from 'react'

const VideoTitle = (props) => {

    const{title,overview}=props;
  return (
    <div className=' w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
       <h1 className='text-6xl font-bold'>{title}</h1>
       <p className='py-6 text-lg w-1/4'>{overview}</p>

       <div className=''>
           <button className='bg-white p-4 px-12 text-xl text-black  rounded-lg hover:bg-opacity-80'> 
            ▶︎ Play</button>
           <button className='bg-white p-4 mx-2 px-12 text-xl text-white bg-opacity-10 rounded-lg'>Info</button>
       </div>
    </div>
  )
}

export default VideoTitle
