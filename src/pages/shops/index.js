import React from 'react'
import axiosInstance from '../../../utils/axiosInstance'
import ShopsPage from '../../../Components/ShopsPage/ShopsPage';
import Head from 'next/head';

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
      <Head>
      <title>Our Shops</title>      
      <meta name="description" content="Explore our collection of shops." />
      <meta name="robots" content="index, follow" />

      {/* Open Graph meta tags */}
      <meta property="og:title" content="Our Shops" />
      <meta property="og:description" content="Explore our collection of shops." />
      <meta property="og:url" content="https://suchonamart.com/shops" />
      <meta property="og:type" content="website" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Our Shops" />
      <meta name="twitter:description" content="Explore our collection of shops." />
      {/* image
       */}
      <meta name="twitter:image" content="/img/logo.png" />
      
      </Head>
        
      <ShopsPage data={data}/>
    </div>
  )
}

export default index
