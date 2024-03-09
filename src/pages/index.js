import React from 'react'
import CategorySlide from '../../Components/Homepage/CategorySlide'
import FeaturedProductsSlide from '../../Components/Homepage/FeaturedProductsSlide'
import axiosInstance from '../../utils/axiosInstance'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { setHomeData } from '../../features/homeData/homeSlice'


export const getServerSideProps = async () => {
  try {
    const response = await axiosInstance.get('/api');
    const data = response.data;
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

const index = ({data}) => {
  const dispatch=useDispatch()
  dispatch(setHomeData(data.data))

  
  return (
    <div>
      <Head>
      <title>SuchonaMart - Best Online Shopping Platform in Chapai Nawabganj</title>
                <meta name="description" content="Welcome to SuchonaMart - your one-stop destination for online shopping in Chapai Nawabganj. Discover a wide range of products and enjoy convenient delivery options." />
                <meta name="keywords" content="SuchonaMart, online shopping, Chapai Nawabganj, best online shopping platform, shop online, buy online" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph meta tags */}
                <meta property="og:title" content="SuchonaMart - Best Online Shopping Platform in Chapai Nawabganj" />
                <meta property="og:description" content="Welcome to SuchonaMart - your one-stop destination for online shopping in Chapai Nawabganj. Discover a wide range of products and enjoy convenient delivery options." />
                <meta property="og:image" content="https://api.rifatewu2.xyz/uploads/categories/1710008846788-Suchona%20mart.png" />
                <meta property="og:url" content="https://suchonamart.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SuchonaMart - Best Online Shopping Platform in Chapai Nawabganj" />
                <meta name="twitter:description" content="Welcome to SuchonaMart - your one-stop destination for online shopping in Chapai Nawabganj. Discover a wide range of products and enjoy convenient delivery options." />
                <meta name="twitter:image" content="https://api.rifatewu2.xyz/uploads/categories/1710008846788-Suchona%20mart.png" />
      </Head>
      <CategorySlide/>
      <FeaturedProductsSlide/>
    </div>
  )
}

export default index
