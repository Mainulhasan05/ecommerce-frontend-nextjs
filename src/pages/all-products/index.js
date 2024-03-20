import React from 'react'
import AllProductsHome from '../../../Components/All-Products/AllProductsHome'
import axiosInstance from '../../../utils/axiosInstance'

export const getServerSideProps=async(context)=>{
    const resolvedUrl=context.resolvedUrl
    const response=await axiosInstance.get(`/api/${resolvedUrl}`)
    const data=await response.data?.data
    return {
        props: {
            data: data
        }
    }
    
    
}
const index = ({data}) => {
  return (
    <div>
      <AllProductsHome data={data}/>
    </div>
  )
}

export default index
