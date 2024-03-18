import React from 'react'
import axiosInstance from '../../../utils/axiosInstance'
import ShopsPage from '../../../Components/ShopsPage/ShopsPage';

export const getServerSideProps = async (context) => {
  const resolvedUrl = context.resolvedUrl
  
  const response = await axiosInstance.get(`/api${resolvedUrl}`);
  const data = response.data?.data?.shops;
  return {
    props: {
      data
    }
  }
}


const index = ({data}) => {
  
  return (
    <div>
        <title>Our Shops</title>      
      <ShopsPage data={data}/>
    </div>
  )
}

export default index
