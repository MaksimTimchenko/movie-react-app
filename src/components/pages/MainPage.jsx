import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Header from '../Header'
import HeroSaction from '../HeroSection/HeroSaction'
import CategoryMovieList from '../CategoryMovieList'
import { categoty } from '../../services/categoty'




import {fetchUpcomingMovieList, fetchPopularMoviesList, fetchpopularTvList } from '../../movies/moviesSlice'
import Spinner from '../Spinner'





const MainPage = () => {
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.movies)

  const loading = status === 'loading' && <Spinner/>
  const errorMessage = error && <h2>{error}</h2>
 
 
  return (
    <>

        {loading}
        {errorMessage}
        <View/>
        {/* { status === 'loading' && <Spinner/>}
        { error && <h2>{error}</h2>} */}

        {/* <Header/>
        <HeroSaction/>
        <CategoryMovieList title="Upcoming movies" fetch={fetchUpcomingMovieList()} test={categoty.upcoming} category={'upcoming'} type={'movie'} />
        <CategoryMovieList title="popular movies" fetch={fetchPopularMoviesList()} test={categoty.popular} category={'popular'} type={'movie'} />
        <CategoryMovieList title="tv" fetch={fetchpopularTvList()} test={categoty.upcoming} type={'tv'} category={'tv'}  /> */}

    </>
  )
}

const View = () => {

  return (
    <>
        <Header/>
        <HeroSaction/>
        <CategoryMovieList title="Upcoming movies" fetch={fetchUpcomingMovieList()}  category={'upcoming'} type={'movie'} />
        <CategoryMovieList title="popular movies" fetch={fetchPopularMoviesList()}  category={'popular'} type={'movie'} />
        <CategoryMovieList title="tv" fetch={fetchpopularTvList()} type={'tv'} category={'tv'}  />

    </>
    
  )
}


export default MainPage