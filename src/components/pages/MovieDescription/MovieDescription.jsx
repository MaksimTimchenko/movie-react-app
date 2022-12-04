import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { useParams, useLocation } from 'react-router-dom';

import Header from '../../Header'
import Spinner from '../../Spinner';
import {fetchTheMovie} from '../../../movies/moviesSlice'
import apiConfig from '../../../services/apiConfig';

import './movieDescription.css'
import CastList from './CastList';
import MovieTrailer from './MovieTrailer';
import SimiliarList from './SimiliarList';

const MovieDescription = () => {
    const dispatch = useDispatch();
    const {movieId} = useParams()
    const {type} = useParams()
    const movieDetails = useSelector(state => state.movies.MovieDescription)
    const {status, error} = useSelector(state => state.movies)
    const pathName = useLocation()
    const params = {
    id: movieId,
    type: type
    }



    useEffect(() => {
          dispatch(fetchTheMovie(params))
          window.scrollTo(0, 0);
    },[movieId, pathName])

      const render = !(status === 'loading' && error )? <Info apiConfig={apiConfig} movieDetails ={movieDetails} type={type} movieId={movieId}/> : null;
      const load = status === 'loading' ? <Spinner/> : null
  return (
      <>
        {load}
        {error && <h2>{error}</h2>}
        <Header/>
        {render}
        
       
      </>
       
  )
}

const Info = ({apiConfig, movieDetails, type, movieId}) => {
  

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
          <div className='flex flex-wrap gap-2'>
          {
            movieDetails.genres && movieDetails.genres.slice(0,4).map(genre => (
              <span key={genre.id}
              className="py-2 px-6 border-2 rounded-full text-sm bg-[#0f0f0f] "
              
              >{genre.name}</span>
            ))
          }
          </div>
          
          <p className='text-sm mt-7'>{movieDetails.overview || 'thre is no description yet'}</p>
          <div className=' mt-10'>
            <span className='text-lg font-bold '>Casts</span>
              <CastList id={movieDetails.id} type={type}/>
          </div>
        </div>
      </div>
      <div>
            <MovieTrailer id={movieDetails.id}  type={type}/>
      </div>
      <div>
        <SimiliarList type={type} id={movieId}/>
      </div>
    </div>
  )
}



export default MovieDescription