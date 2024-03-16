import React from 'react'
import ProductDetails from '../../../Components/ProductDetails/ProductDetails'
import axiosInstance from '../../../utils/axiosInstance'

export const getServerSideProps = async (context) => {
  const {slug} = context.params
  if(slug){
    const response = await axiosInstance.get(`/api/product/${slug}`)
    const data = response.data?.data
    
    return {
      props: {
        data
      }
    }
  }
  
  
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}

const product = ({data}) => {
  
  return (
    <div>
      <ProductDetails data={data}/>
    </div>
  )
}

export default product
