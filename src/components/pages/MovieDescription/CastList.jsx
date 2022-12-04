import React, {useEffect, useState} from 'react'
import apiConfig from '../../../services/apiConfig';
import noPhoto from '../../../assets/noPhoto.jpg'

const CastList = ({id, type}) => {
    const [castList, setCastList] = useState([]);
    console.log(id);
    useEffect(() => {
        const getCredits = async () => {

            const response = await fetch(`${apiConfig._baseUrl}${type}/${id}/credits?api_key=${apiConfig._apiKey}&language=en-US
            `);

            const data = await response.json()
            setCastList(data.cast.slice(0, 5));
    }
    getCredits()
}, [id, type])
    
  return (
    <div className='flex flex-wrap lg:flex-nowrap gap-4'>
        
        {
            castList?.map((item) => (
                <div key={item.id} >
                    <div  className="w-[100px] h-[100px] bg-hero-pattern">
                    <img src={apiConfig.w500Image(item.profile_path)} alt="" className='w-[100px]'/>
                    <p className="text-xs pt-2">{item.name}</p>
                    </div>
                   
                </div>
            ))
        }
    </div>
  )
}

export default CastList