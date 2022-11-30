import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPopularMoviesList, fetchUpcomingMovieList } from '../../movies/moviesSlice'
import { Link } from 'react-router-dom'
//Swiper
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';

import apiConfig from '../../services/apiConfig'
import Header from "../Header"
import Button from "../Button"

import './heroSection.css'




const HeroSaction = () => {

const dispatch = useDispatch();
const popularMovies = useSelector(state => state.movies.popularMoviesList);

console.log(popularMovies);

useEffect(()=> {
 dispatch(fetchPopularMoviesList());
}, []);

  return (

      <div>
        <Header/>
        <Swiper
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          >          
            {
              popularMovies? popularMovies.slice(0,5).map((item,i) => (
                <SwiperSlide key={i}>
                  {({ isActive }) => (
                    <HeroSlide item={item} className={`${isActive ? 'active' : ''}`}/>)}      
                </SwiperSlide>
              )) : null
            }
        </Swiper>
      </div>
  )
}


const HeroSlide = props => {

  const item = props.item;

  const background = apiConfig.mainImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
  const poster = apiConfig.mainImage(item.poster_path ? item.poster_path : null) 

  return(
    <div style={{'backgroundImage':`url(${background})`}} className={ `bg-cover bg-no-repeat bg-center w-full h-screen relative
       after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] 
   `}>
         <div className=" container mx-auto flex justify-around pt-[100px]  ">
            <div className="w-[55%] pt-10 z-50">
                <h2 className="font-bold text-7xl	 title">{item.original_title}</h2>
                <p className="text-sm mt-5 w-[500px] overview">{item.overview}</p>

                <div className="mt-6 btn">
                  <Link to={`/movie/${item.id}`}>
                    <Button text={'Watch more'} />
                  </Link>
                </div>
            </div>
            <div className="ml-12 mb-9 hero_poster" >
              <img src={poster} alt={item.original_title} className="w-[300px] rounded-lg " />
            </div>
        </div>       
     </div>
  )
}

export default HeroSaction