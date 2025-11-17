import { createSlice } from "@reduxjs/toolkit";




const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptToggle:false,
        movieResults:null,
        movieNames:null

    },
    reducers:{

        addGptToggle:(state)=>{
            state.gptToggle=!state.gptToggle;
        },
        addGptMoviesResults:(state,action)=>{
            const{movieNames,tmdbResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=tmdbResults;
        }
    }
});

export const {addGptToggle,addGptMoviesResults}=gptSlice.actions;

export default gptSlice.reducer;