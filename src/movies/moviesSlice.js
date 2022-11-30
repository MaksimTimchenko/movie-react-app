import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import apiConfig from '../services/apiConfig'


const initialState = {
    popularMoviesList: [],
    upcomingMovieList: [],
    MovieDescription: [],
    status: null,
    error: null

}

export const fetchPopularMoviesList = createAsyncThunk(
    'movieList/fetchPopularMoviesList',
    async function(page = 1, {rejectWithValue}) {
        try {
            const response = await fetch(`${apiConfig._baseUrl}movie/popular?api_key=${apiConfig._apiKey}&language=en-US&page=${page}`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }
            
            const data = await response.json();
            return data ;
        } catch(error) {
            return rejectWithValue(error.message)
        }
       
    }
);



export const fetchUpcomingMovieList = createAsyncThunk(
    'movieList/fetchUpcomingMovieList',
    async function(_, {rejectWithValue}) {

        try {
            const response = await fetch(`${apiConfig._baseUrl}movie/upcoming?api_key=${apiConfig._apiKey}&language=en-US&page=1`);
    
            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
    
            return data
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchTheMovie = createAsyncThunk(
    'movieList/fetchTheMovie',
    async function(movieId,{rejectWithValue}) {

        try {

            const response = await fetch(`${apiConfig._baseUrl}movie/${movieId}?api_key=${apiConfig._apiKey}&language=en-US`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
    
            return data
            
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

// export const getCastList = createAsyncThunk(
//     'movieList/getCastList',
//     async function(id) {
//         const response = await fetch(`${apiConfig._baseUrl}movie/${movieId}?api_key=${apiConfig._apiKey}&language=en-US`);

//         const data = await response.json();

//         return data
//     }
// )

export const moviesSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {

    },
    
    extraReducers: {
        // Get popular movie list
        
        [fetchPopularMoviesList.pending] : (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPopularMoviesList.fulfilled] : (state, action) => {
            state.status = 'resolved';
            state.popularMoviesList = action.payload.results;
   
        },
        [fetchPopularMoviesList.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        // Get Upcoming movie list

        [fetchUpcomingMovieList.pending] : (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUpcomingMovieList.fulfilled] : (state, action) => {
            state.status = 'resolved';
            state.upcomingMovieList = action.payload.results;
        },
        [fetchUpcomingMovieList.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },


        // Get Movie description

        [fetchTheMovie.pending] : (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTheMovie.fulfilled] : (state, action) => {
            state.status = 'resolved';
            state.MovieDescription = action.payload;
        },
        [fetchTheMovie.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },


    }
    
})


export const {} = moviesSlice.actions

export default moviesSlice.reducer