import React, {useState, useEffect,useCallback} from 'react'
import { Link, useParams} from 'react-router-dom'

import Spiner from '../Spinner'
import Header from '../Header'

import apiConfig from '../../services/apiConfig'
import {_getMovies} from '../../services/tmdApi'






const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)


    const {category} = useParams()

    useEffect(() => {
        request(true)
        setIsLoading(true)
    },[])

    const request = (loading) => {
  
        loading ? setNewItemLoading(true) : setNewItemLoading(false)

        _getMovies(category, page)
        .then(initial)
    }
    
  const initial = (newMovies) => {
  
        setNewItemLoading(false)
        setMoviesList([...moviesList, ...newMovies]) 
        setIsLoading(false) 

        setPage(page + 1)
  }
    

  return (
    !isLoading ? <View moviesList={moviesList} request={request} /> : <Spiner/>
  )
}

const View = ({moviesList, newItemLoading, request}) => {


    return (
        <div className=' container mx-auto '>
        <Header/>
           <div className='flex flex-wrap gap-2 mt-44 '>          
              {
                  moviesList?.map((movie,i) => (
                    
                      <Link key={i} to={`/movie/${movie.id}`} className='flex '>
                          <div className='w-[150px]' >
                              <img src={apiConfig.w500Image(movie.poster_path ? movie.poster_path : null)} alt={movie.title} className='w-[150px] rounded-2xl' />
                              
                              <span className='text-sm'>
                                  {movie.title}
                              </span>
                          </div>
                    </Link>
                  ))
              } 
    
          
        </div>
            <div className='flex justify-center py-8'>
                <button onClick={() => request(true)}
                disabled={newItemLoading}
                className="py-1 px-8 border-2 disabled:opacity-75  rounded-full ">Load More</button></div>
        </div>
    )
}



export default MoviesList