
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoContainer = (props) => {

  const trailerVideo = useSelector(store=>store.movies.trailerVideo);
  
  const {movieId}=props;

  
  useMovieTrailer(movieId);


  return (
    <div className='w-screen aspect-video'>
       <iframe
        className=' w-full h-full'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}&cc_load_policy=1&cc_lang_pref=en`}         
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
       </iframe>

    </div>
  )
}

export default VideoContainer
