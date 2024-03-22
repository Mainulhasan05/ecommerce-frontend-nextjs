import React from 'react'
import ProductDetails from '../../../Components/ProductDetails/ProductDetails'
import axiosInstance from '../../../utils/axiosInstance'
import Head from 'next/head'

export const getServerSideProps = async (context) => {
  const {slug} = context.params
  
  if(slug){
    
    if(typeof slug === 'string'){
      try {
        
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
       <Head>
        {/* SEO Meta Tags */}
        <title>{data?.name} - Suchonamart</title>
        <meta name="description" content="Product is so much good" />
        <meta name="keywords" content={`best product+ ${data?.name}`} />
        <meta name="author" content={data?.shop?.name} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${data?.name} - Suchonamart`} />
        <meta property="og:description" content={`${data?.name} - Suchonamart ${data?.description}`} />
        <meta property="og:image" content={process.env.API_URL+data?.image} />
        <meta property="og:url" content={`https://suchonamart.com/product/${data?.slug}`} />
        <meta property="og:type" content="product" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={`${data?.name} - Suchonamart`} />
        <meta name="twitter:description" content={`${data?.name} - Suchonamart ${data?.description}`} />
        <meta name="twitter:image" content={process.env.API_URL+data?.image} />
        <meta name="twitter:card" content={process.env.API_URL+data?.image} />
      </Head>
      <ProductDetails data={data}/>
    </div>
  )
}

export default product
