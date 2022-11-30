import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Header from '../Header'
import HeroSaction from '../HeroSection/HeroSaction'
import CategoryMovieList from '../CategoryMovieList'
import { categoty } from '../../services/categoty'




import {fetchUpcomingMovieList, fetchPopularMoviesList } from '../../movies/moviesSlice'
import Spinner from '../Spinner'





const MainPage = () => {
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.movies)


 
  return (
    <>

        { status === 'loading' && <Spinner/>}
        { error && <h2>{error}</h2>}
        <Header/>
        <HeroSaction/>
        <CategoryMovieList title="Upcoming movies" fetch={fetchUpcomingMovieList()} test={categoty.upcoming} category={'upcoming'} />
        <CategoryMovieList title="popular movies" fetch={fetchPopularMoviesList()} test={categoty.upcoming} category={'popular'} />
    </>
  )
}


export default MainPage