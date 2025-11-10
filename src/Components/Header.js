import React,{useEffect} from 'react'
import logo from '../utils/images/logo.png';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { profile_avatar } from '../utils/constant';
const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch();
 
  const handleSignOut=()=>{

      signOut(auth).then(() => {
          
      })
      .catch((error) => {
           navigate("/error");
      });

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
       
       { user && <div className='flex p-2'>
       <img
        className='w-12 h-12 mt-4 '
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
