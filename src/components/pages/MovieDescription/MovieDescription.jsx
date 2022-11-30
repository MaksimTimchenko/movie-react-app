import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { useParams} from 'react-router-dom';

import Header from '../../Header'
import Spinner from '../../Spinner';
import {fetchTheMovie} from '../../../movies/moviesSlice'
import apiConfig from '../../../services/apiConfig';

import './movieDescription.css'
import CastList from './CastList';
import MovieTrailer from './MovieTrailer';

const MovieDescription = () => {
    const dispatch = useDispatch();
    const {movieId} = useParams()
    const movieDetails = useSelector(state => state.movies.MovieDescription)
    const {status, error} = useSelector(state => state.movies)


    useEffect(() => {
        dispatch(fetchTheMovie(movieId))
    },[movieId])


  return (
      <>
        {status === 'loading' && <Spinner/>}
        {error && <h2>{error}</h2>}
        <Header/>
        <Info apiConfig={apiConfig} movieDetails ={movieDetails}/>
      </>
       
  )
}

const Info = ({apiConfig, movieDetails}) => {
  

  const background = apiConfig.mainImage(movieDetails.backdrop_path ? movieDetails.backdrop_path : movieDetails.poster_path);
  const poster = apiConfig.w500Image(movieDetails.poster_path ? movieDetails.poster_path : null) 

  return (
    <div style={{'backgroundImage':`url(${background})`}} className={ ` banner bg-cover bg-no-repeat bg-center w-full h-[50vh] `} >
      
      <div className=' container mx-auto flex relative z-50 '>
        <div className='pl-20 '>
          <img src={poster} alt="" className='w-[300px] pt-[150px]  rounded-xl' />
        </div>

        <div className='pt-[160px] pl-20 w-[60%]'>
          <h2 className='text-6xl font-bold pb-11'>{movieDetails.title || movieDetails.name}</h2>
          {
            movieDetails.genres && movieDetails.genres.slice(0,5).map(genre => (
              <span key={genre.id}
              className="py-2 px-6 border-2 rounded-full text-sm bg-[#0f0f0f] mr-3"
              
              >{genre.name}</span>
            ))
          }
          <p className='text-sm mt-7'>{movieDetails.overview || 'thre is no description yet'}</p>
          <div className='mt-10'>
            <span className='text-lg font-bold '>Casts</span>
              <CastList id={movieDetails.id}/>
          </div>
        </div>
      </div>
      <div>
            <MovieTrailer id={movieDetails.id}/>
      </div>
    </div>
  )
}



export default MovieDescription