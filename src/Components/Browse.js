
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useTvSeries from '../hooks/useTvSeries';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSuggestions from './GptSuggestions';


const Browse = () => {
  
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useTvSeries();
  const gptShow=useSelector(store=>store.gpt.gptToggle);
  return (
    <div>

      <Header />
      {
        gptShow?(
          <GptSuggestions />
        ):(
          <>
            <MainContainer />
             <SecondaryContainer />
          </>
        )
      }
      
    </div>
  )
}

export default Browse
