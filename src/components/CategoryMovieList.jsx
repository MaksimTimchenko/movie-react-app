import React from 'react'
import { useEffect } from 'react'

import {Link} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'

import {Swiper, SwiperSlide} from 'swiper/react'

import apiConfig from '../services/apiConfig'
import Button from './Button'

import 'swiper/css';

const CategoryMovieList = ({title, fetch, category, type}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetch)
    },[])
    
    let movieList;
    
    switch(category) {
        case "upcoming":
            movieList = useSelector(state => state.movies.upcomingMovieList);
            break;
        case "popular":
            movieList = useSelector(state => state.movies.popularMoviesList);
            break
        case "tv":
            movieList = useSelector(state => state.movies.popularTvList);
    }

    
  return (
    <div className='container mx-auto mt-4 mb-8 '>
        <div className='flex justify-between pb-6'>
            <h3 className='font-bold'>{title}</h3>
            {/* изменить путь */}
            <Link to={`/${category}`}><Button text={'View More'}/></Link>                
        </div>
        <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={5}
        >
            {
                movieList ? movieList.map((item,i) => (
                    <SwiperSlide key={i}>
                         {({ isActive }) => (
                         <View item={item} type={type}/>
                         )}
                    </SwiperSlide>
                )) : null
            }

        </Swiper>

    </div>
  )     
} 

const View = ({item, type}) => {
    const movie = item;
    const poster = apiConfig.w500Image(item.poster_path ? item.poster_path : null);

    return (
        <>    
            <Link to={`/${type}/${movie.id}`} className='flex gap-1'>
                <div >
                    <img src={poster} alt={movie.title} className='w-[200px] rounded-2xl' />
                    <span className='text-sm'>
                        {movie.title || movie.name}
                    </span>
                </div>
            </Link> 
        </>
    )
}

export default CategoryMovieList