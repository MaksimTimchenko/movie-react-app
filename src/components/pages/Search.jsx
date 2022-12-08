import React, {useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import apiConfig from '../../services/apiConfig'
import noPhoto from '../../assets/noPhoto.jpg'
import Spiner from '../Spinner'
import Header from '../Header'
import {_getSearchItem } from '../../services/tmdApi'

const Search = () => {
    const [seatchItems, setSearchItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newItemLoading, setNewItemLoading] = useState(false);
   

    
    const  addSearchTerm =(item) => {
       let string = item;
       return setSearchTerm(string)
    }

    useEffect(() => {

       
    },[seatchItems])

    const request = (loading, term) => {
        
        loading ? setNewItemLoading(true) : setNewItemLoading(false)
        _getSearchItem(term)
        .then(initial)
        
        
    }
    
  const initial = (newMovies) => {
    setNewItemLoading(false)
    setSearchItems( searchTerm => [ ...newMovies]) 

  }
    
    console.log(seatchItems)

;   const submitForm = (e) => {
        if (e.keyCode === 13 ) {
            setSearchItems(searchTerm)
        } 

        if (searchTerm.length > 0) {
          request(true, searchTerm )
          .then(initial)
        }
    }

    console.log(newItemLoading);
  return (
    <div className='container mx-auto'>
      <Header/>
        <form  onSubmit={e => e.preventDefault()} className='mt-24 ml-[300px] relative w-full max-w-[500px]'>
            <input
              
             type="text"
             placeholder='add a movie'
             onChange={e => addSearchTerm(e.target.value)}
             className="pr-[8rem] rounded-full"
             required
              />
            <button
             type='submit'
             className='absolute left-[270px] top-0  px-2 bg-yellow-500 rounded-full shadow-md'
             onClick={(e) => submitForm(e)}
              >search</button>
        </form>
        <div className='flex justify-center flex-wrap gap-2  '>
          
        {
          newItemLoading ? <Spiner/> :  seatchItems.length > 0 ? seatchItems.map((movie,i) => (                    
                  <View movie={movie} key={movie.id}/>
              )) : <div className='mt-24 px-2 py-2 bg-yellow-500 text-red-500 rounded-full'>Add existec movie name</div>
        } 
        </div>
    </div>
  )
}

const View = ({movie}) => {

  return (
    <Link to={`/movie/${movie.id}`} className='flex '>
      <div className='w-[150px]'>
          <img src={movie.poster_path ? apiConfig.w500Image(movie.poster_path) : noPhoto} alt={movie.title} className='w-[150px] rounded-2xl' />
          
          <span className='text-sm'>
              {movie.title || movie.name }
          </span>
      </div>
    </Link>
  )
}


export default Search