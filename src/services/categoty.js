import { useSelector } from "react-redux";


export const categoty = () => {
    const select = {
      upcoming: useSelector(state => state.movies.upcomingMovieList)
    }

    console.log('fdfdf', select.upcoming)
    return select
}