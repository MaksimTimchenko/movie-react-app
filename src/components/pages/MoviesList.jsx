import React, {useState, useEffect,useCallback} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import apiConfig from '../../services/apiConfig'
import Header from '../Header'
import Input from '../Input'

import Button from '../Button'
// import { v4 as uuidv4 } from 'uuid'


const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [page, setPage] = useState(1)

    const {category} = useParams()

    console.log(moviesList);


    useEffect(() => {
        test()
    
    },[])

    const test = () => {
        
        req(page)
        .then(initial)

    }
    const req = async (page = 1,) =>{
      try {
          const response = await fetch(`${apiConfig._baseUrl}/movie/${category}?api_key=${apiConfig._apiKey}&language=en-US&page=${page}`);

          if (!response.ok) {
              throw new Error('Server Error!');
          }
          
          const data = await response.json();
          setPage(page + 1)
          return data.results.map(transform)
      } catch(error) {
         console.log(error.message)
      }     
  }
  const transform = (movie) => {

    return {
        poster_path:  movie.poster_path,
        id: movie.id,
        original_title: movie.original_title
    }
  }
  const initial = (newData) => {
        setMoviesList([...moviesList, ...newData])
  }
    
 const newData = () => {
      setPage(page+1);
      req(page)
 }


 


  return (

    <>
    <Header/>
       <div className=' container mx-auto flex flex-wrap gap-2 mt-44 '>
       <div className="section mb-3">
                <MovieSearch request={req} category={category} />
            </div>

          
          {
              moviesList?.map((movie,i) => (
                
                  <Link key={i} to={`/movie/${movie.id}`} className='flex mx-auto'>
                      <div className='w-[150px]' >
                          <img src={apiConfig.w500Image(movie.poster_path ? movie.poster_path : null)} alt={movie.title} className='w-[150px] rounded-2xl' />
                          <span className='text-sm'>
                              {movie.original_title}
                          </span>
                      </div>
                </Link>
              ))
          } 



      <button onClick={test}>click</button>
    </div>
    </>
    
  )
}

const MovieSearch = ({request}) => {



  const [keyword, setKeyword] = useState('');

  const search = useCallback(
    () => {

        request(1,'search', keyword)
        console.log('dsd');

    }
  )

  console.log(keyword)

  return (
      <div className="movie-search">
          <Input
              type="text"
              placeholder="Enter keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
          />
          <button onClick={() => req(2)}>fdfd</button>
          <Button  text={'click'} >Search</Button>
      </div>
  )
}


export default MoviesList