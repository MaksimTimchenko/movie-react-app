import apiConfig from './apiConfig'
import img from '../assets/noPhoto.jpg'

export const _getMovies = async (category, page=1, type) =>{

    
    try {
        let response;

        if (category === 'tv') {
             response = await fetch(`${apiConfig._baseUrl}/tv/top_rated?api_key=${apiConfig._apiKey}&language=en-US&page=${page}`);
        } else {
             response = await fetch(`${apiConfig._baseUrl}/movie/${category}?api_key=${apiConfig._apiKey}&language=en-US&page=${page}`);
        }

        if (!response.ok) {
            throw new Error('Server Error!');
        }
        
        const data = await response.json();

        return data.results.map(transform)
    } catch(error) {
       console.log(error.message)
    }     
}

export const getSimiliarList =  async (type, id) => {

    try {
        const response = await fetch(`${apiConfig._baseUrl}/${type}/${id}/similar?api_key=${apiConfig._apiKey}&language=en-US&page=1`);

        if (!response.ok) {
            throw new Error('Server Error!');
        }
        
        const data = await response.json();

        return data.results.map(transform)
    } catch(error) {
       console.log(error.message)
    }     
}


const transform = (movie) => {

    return {
        poster_path:  movie.poster_path === null ? img :  movie.poster_path,
        id: movie.id,
        title: movie.title || movie.name,

    }
  }