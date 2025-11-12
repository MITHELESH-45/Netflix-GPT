import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { bgUrl } from '../utils/constant';


const Login = () => {
  
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);      
  }

  const handleButtonClick=()=>{
   
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message)return;

    if(!isSignInForm){
        
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCrential)=>{
        const user=userCrential.user;

        updateProfile(user, {
                displayName:name.current.value, photoURL: "https://imgcdn.stablediffusionweb.com/2024/10/8/ebf040a8-a143-42c7-a3c9-0e3384841678.jpg"
              }).then(async() => {
                 await auth.currentUser.reload(); 
                 
              }).catch((error) => {
                setErrorMessage(error);
          });
        
      })
      .catch((error)=>{
        const errorMessage=error.message;
        console.log(errorMessage);
        setErrorMessage(errorMessage);

      })

    } else {
       
       signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCrential)=>{
 
      })
      .catch((error)=>{
        const errorMessage=error.message;
        console.log(errorMessage);
        setErrorMessage(errorMessage);
      })
    }
    
     
  }
  return (
    <div>
       <Header />
       <div className='absolute'>
         <img src={bgUrl}
             alt='logo'  />
       </div>
       <form onSubmit={(e)=>{e.preventDefault()}}
         className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80 text-white' >

         <h1 className='text-3xl font-bold py-4 text-white'>{isSignInForm?"Sign In":"Sign Up"}</h1>
         
         {!isSignInForm && (
         <input 
         ref={name}
         type='text'
          placeholder=" Full Name" 
          className='p-4 my-4 w-full bg-gray-700'
         />)}

         <input 
         ref={email}
         type='text'
          placeholder="Email Address" 
          className='p-4 my-4 w-full bg-gray-700'
         />

         <input
         ref={password}
          type='password' 
          placeholder='Password' 
          className='p-4 my-4 w-full  bg-gray-700'
          />
         
         <p className='text-red-500'>{errorMessage}</p>

         <button 
          type='submit'
          className='p-4 my-4 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}>
          {isSignInForm?"Sign In":"Sign Up"}
          
         </button>

         <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now ":"Already have an account. Sign In Now"}</p>
       </form>
    </div>
  )
}

export default Login



