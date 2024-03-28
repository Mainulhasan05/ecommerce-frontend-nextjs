import React from 'react'
import CategoryHome from '../../../Components/Category/CategoryHome'
import axiosInstance from '../../../utils/axiosInstance'
import Head from 'next/head'

export const getServerSideProps = async (context) => {
    const resolvedUrl = context.resolvedUrl
    try {
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
      <Head>
        <title>{data?.category?.name} - SuchonaMart</title>
        <meta name="description" content={data?.category?.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.suchonamart.com/category/${data?.category?.slug}`} />
        <meta property="og:title" content={`${data?.category?.name} - SuchonaMart`} />
        <meta property="og:description" content={data?.category?.description} />
        <meta property="og:url" content={`https://www.suchonamart.com/category/${data?.category?.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={process.env.API_URL + data?.category?.image} />
        <meta property="og:image:alt" content={`${data?.category?.name} - SuchonaMart`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${data?.category?.name} - SuchonaMart`} />
        <meta name="twitter:description" content={data?.category?.description} />
        <meta name="twitter:image" content={process.env.API_URL + data?.category?.image} />
        
      </Head>
      <CategoryHome data={data}/>
    </div>
  )
}

export default index
