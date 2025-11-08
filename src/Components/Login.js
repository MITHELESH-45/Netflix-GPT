import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  
  const [isSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
       <Header />
       <div className='absolute'>
         <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg'
             alt='logo'  />
       </div>
       <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>

         <h1 className='text-3xl font-bold py-4 text-white'>{isSignInForm?"Sign In":"Sign Up"}</h1>
         
         {!isSignInForm && <input 
         type='text'
          placeholder=" Full Name" 
          className='p-4 my-4 w-full bg-gray-700'
         />}

         <input 
         type='text'
          placeholder="Email Address" 
          className='p-4 my-4 w-full bg-gray-700'
         />

         <input
          type='password' 
          placeholder='Password' 
          className='p-4 my-4 w-full  bg-gray-700'
          />

         <button 
          className='p-4 my-4 bg-red-700 w-full rounded-lg'>
          {isSignInForm?"Sign In":"Sign Up"}
         </button>

         <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already have an account. Sign In Now"}</p>
       </form>
    </div>
  )
}

export default Login



