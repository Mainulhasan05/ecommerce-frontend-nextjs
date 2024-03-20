import React from 'react'
import AllProductsHome from '../../../Components/All-Products/AllProductsHome'
import axiosInstance from '../../../utils/axiosInstance'
import Head from 'next/head';

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
      <Head>
        <title>All Products - SuchonaMart</title>
        <meta name="description" content="Explore the wide range of products available on SuchonaMart. From local artisans to established businesses, find unique items that showcase the talent of Chapai Nawabganj's entrepreneurs." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.suchonamart.com/all-products" />
        <meta property="og:title" content="All Products - SuchonaMart" />
        <meta property="og:description" content="Explore the wide range of products available on SuchonaMart. From local artisans to established businesses, find unique items that showcase the talent of Chapai Nawabganj's entrepreneurs." />
        <meta property="og:url" content="https://www.suchonamart.com/all-products" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://suchonamart.com/img/logo.png" />
        <meta property="og:image:alt" content="SuchonaMart - All Products" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All Products - SuchonaMart" />
        <meta name="twitter:description" content="Explore the wide range of products available on SuchonaMart. From local artisans to established businesses, find unique items that showcase the talent of Chapai Nawabganj's entrepreneurs." />
        <meta name="twitter:image" content="https://suchonamart.com/img/logo.png" />
      </Head>
      <AllProductsHome data={data}/>
    </div>
  )
}

export default index
