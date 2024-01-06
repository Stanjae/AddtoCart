import React from 'react'
import { useQuery } from 'react-query';

export const useCustomFetch =()=>{

    const HandleFetch =(url)=>{
        const { isLoading, error, data } = useQuery("repoData", () => fetch(url).then((res) => res.json()));
        return ({ isLoading, error, data })
    }

    return {HandleFetch}
}