import React,{useEffect} from 'react'
import logo from '../utils/images/logo.png';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { langOptions, profile_avatar } from '../utils/constant';
import { addGptToggle } from '../utils/gptSlice';
import { changelanguage } from '../utils/configSlice';
const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const gpt=useSelector(store=>store.gpt.gptToggle)
  const dispatch=useDispatch();
 
  const handleSignOut=()=>{

      signOut(auth).then(() => {
          
      })
      .catch((error) => {
           navigate("/error");
      });

  }

  const handlelangchange=(e)=>{
    dispatch(changelanguage(e.target.value));
  }

   const handleToggleGpt=()=>{
     dispatch(addGptToggle());
   }

    useEffect(()=>{
        
      const unsubscribe= onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid,email,displayName,photoURL}=user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                navigate("/browse")
            } else{
                dispatch(removeUser());
                navigate("/");
            }
        })
        return ()=>unsubscribe();
    },[])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
       <img 
       className='w-44 '
       src={logo} alt='logo' />
       
       { user && <div className='flex  items-center space-x-3"'>
       
       {gpt && <select className='p-2 m-2 bg-gray-800 text-white'
          onChange={handlelangchange}>
          {langOptions.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          ))}
       </select>}

       <button 
        onClick={handleToggleGpt}
        className="px-3 py-3.5 bg-purple-600 mx-4 text-white text-sm rounded-lg shadow-md hover:bg-purple-700 hover:scale-105 transition-transform duration-200">
          {gpt?"Home Page":"GPT Search"}
        </button>

       <img
        className='w-12 h-12 mt-1 '
        src={profile_avatar}
       alt='profilelogo'/>

       <button 
       onClick={handleSignOut}
       className='text-white font-bold p-1'>(Sign Out)</button>
       </div>
}
    </div>
  )
}

export default Header
