import React from 'react'
import CategoryHome from '../../../Components/Category/CategoryHome'

export const getServerSideProps = async (context) => {
    const resolvedUrl = context.resolvedUrl
    console.log(resolvedUrl)
    // const response = await axiosInstance.get(`/api/${resolvedUrl}`)
    // const data = await response.data?.data
    return {
        props: {
        // data: data
        }
    }
    }

const index = () => {
  return (
    <div>
      <CategoryHome/>
    </div>
  )
}

export default index
