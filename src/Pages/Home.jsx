import React from 'react'
import { useCustomFetch } from '../CusHooks/useCustomFetch';
import CusCard from '../Components/CusCard';

const Home = () => {
    const {HandleFetch} = useCustomFetch();
    const {data, error, isLoading} = HandleFetch('https://fakestoreapi.com/products/')
  
    if(isLoading) return <h3 className=' text-center text-xl italic text-gray-600'>Loading....</h3>

    if(error) return <h3 className=' text-center text-xl italic text-gray-600'>An {error} Error occured! </h3>

    return (
      <div className=''>
        <div className=' p-8 grid gap-8 grid-cols-4 justify-center'>
            {data?.map((item) => (
                <div className=' md:col-span-1 sm:col-span-2 col-span-4' key={item.id}>
                    <CusCard item={item}/>
                </div>
                
            ))}
        </div>
        
        
      </div>
    
  )
}

export default Home
