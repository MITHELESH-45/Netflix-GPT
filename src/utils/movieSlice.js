import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        TopRated:null,
        TvSeries:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRated:(state,action)=>{
            state.TopRated=action.payload;
        },
        addTvSeries:(state,action)=>{
            state.TvSeries=action.payload;
        }
    }
})

export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addTvSeries}=movieSlice.actions;
export default movieSlice.reducer;