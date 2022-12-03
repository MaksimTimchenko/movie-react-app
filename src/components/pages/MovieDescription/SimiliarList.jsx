import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import apiConfig from '../../../services/apiConfig'
import {Swiper, SwiperSlide} from 'swiper/react'
import { getSimiliarList } from '../../../services/tmdApi'

const SimiliarList = ({type, id}) => {
    
    const [similiarList, setSumiliarList] = useState([])



    useEffect(()=> {
        getSimiliarList(type, id)
        .then(data => setSumiliarList(data))
    },[id])



  return (
    <div  className='container mx-auto mt-24'>
        <h3 className='font-bold mb-6'>Similiar</h3>
        <Swiper 
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={6}
        >
            {
                similiarList ? similiarList.map((item,i) => (
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
        <div>    
            <Link to={`/${type}/${movie.id}`} className='flex gap-1'>
                <div >
                    <img src={poster} alt={movie.title} className='w-[200px] rounded-2xl' />
                    <span className='text-sm'>
                        {movie.title || movie.name}
                    </span>
                </div>
            </Link> 
        </div>
    )
}

export default SimiliarList