import React from 'react'
import ProductDetails from '../../../Components/ProductDetails/ProductDetails'
import axiosInstance from '../../../utils/axiosInstance'

export const getServerSideProps = async (context) => {
  const {slug} = context.params
  
  if(slug){
    
    if(typeof slug === 'string'){
      try {
        console.log("eta pailam",slug)
        const response = await axiosInstance.get(`/api/product/${slug}`);
        const data = response.data?.data;
        return {
          props: {
            data
          }
        }
      } catch (error) {
        return {
          props: {
            error: error.message
          }
        }
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
