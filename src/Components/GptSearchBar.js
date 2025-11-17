import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import genAI from '../utils/gemini';
import { API_OPTIONS } from '../utils/constant';
import { addGptMoviesResults } from '../utils/gptSlice';

const GptSearchBar = () => {

  const searchText=useRef(null);
  const langkey=useSelector(store=>store.config.lang);
  const dispatch=useDispatch();

  const searchMovieTMDB = async(movie)=>{
       
        const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    )

        const json=await data.json();

        return json.results;


    };

   
  const handleSearchClick=async()=>{

      const getQuery = "Act as a Movie Recommendation system and suggest some movies for the query"+searchText.current.value+". only give me names of 5 movies,comma separated like the example result given ahead. Example Result:Don,coolie,sarkar,bigil,master"; 
      try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
      
      const prompt = getQuery || "Recommend some trending movies today."

      const result = await model.generateContent(prompt)

      const geminiResults = result.response.text().split(",")

      const promiseArray= geminiResults.map((movie)=>searchMovieTMDB(movie))

      const tmdbResults = await Promise.all(promiseArray);

     

      dispatch(addGptMoviesResults({movieNames:geminiResults ,tmdbResults:tmdbResults}));

    } catch (err) {
      console.error("Gemini API Error:", err)
    } 

  }

  return (
    <div className=' pt-[45%] md:pt-[10%] flex justify-center'>
       
       <form className='w-full md:w-1/2  bg-black grid grid-cols-12'
           onSubmit={(e) => e.preventDefault()}>
           <input
           ref={searchText}
            type='text'
             className='p-4 m-4 col-span-9 ' 
              placeholder={lang[langkey].GptPlaceHolder} />

           <button 
           onClick={handleSearchClick}
            className='col-span-3 px-4 py-2 m-4 rounded-lg bg-red-700 text-white' 
            >{lang[langkey].Search}
            </button>
           
       </form>
    </div>
  )
}

export default GptSearchBar
