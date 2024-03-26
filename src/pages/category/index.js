import React from 'react'
import CategoryHome from '../../../Components/Category/CategoryHome'
import axiosInstance from '../../../utils/axiosInstance'

export const getServerSideProps = async (context) => {
    const resolvedUrl = context.resolvedUrl
    try {
        console.log(resolvedUrl)
        const response = await axiosInstance.get(`/api/${resolvedUrl}`)
        const data = await response.data?.data
        
        return {
            props: {
                data: data
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {}
        }

    }
  }

const index = ({data}) => {
  
  return (
    <div>
      <CategoryHome data={data}/>
    </div>
  )
}

export default index
