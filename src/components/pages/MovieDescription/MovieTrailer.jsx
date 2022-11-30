import React from 'react'
import { useEffect, useState } from 'react'

import apiConfig from '../../../services/apiConfig'

const MovieTrailer = ({id}) => {
    const [trailer, setTrailer] = useState([])
   

    useEffect(() => {
        const getTrailer = async () => {
            const response = await fetch(`${apiConfig._baseUrl}movie/${id}/videos?api_key=${apiConfig._apiKey}&language=en-US`);
            const data = await response.json();

            return setTrailer(data.results[0])
        };
        getTrailer()
    },[id])


  return (
    <div className='w-[800px] h-[400px] mx-auto mt-24'>
        <h2 className='text-lg font-bold pb-4'>Trailer</h2>
        <iframe src={`https://www.youtube.com/embed/${trailer.key}`} height="100%" width="100%"
                title="video" frameBorder="0">
        </iframe>

    </div>
  )
}

export default MovieTrailer