import React from 'react'
import CategorySlide from '../../Components/Homepage/CategorySlide'
import TrendingProducts from '../../Components/Homepage/TrendingProducts'
import axiosInstance from '../../utils/axiosInstance'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { setHomeData } from '../../features/homeData/homeSlice'
import NewArrivals from '../../Components/Homepage/NewArrivals'
import HeroSection from '../../Components/Homepage/HeroSection'
import FeaturedShops from '../../Components/Homepage/FeaturedShops'
import FeaturedCategories from '../../Components/Homepage/FeaturedCategories'
import BestSellingProducts from '../../Components/Homepage/BestSellingProducts'


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
                <meta property="og:image" content="https://suchonamart.com/img/logo.png" />
                <meta property="og:url" content="https://suchonamart.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SuchonaMart - Best Online Shopping Platform in Chapai Nawabganj" />
                <meta name="twitter:description" content="Welcome to SuchonaMart - your one-stop destination for online shopping in Chapai Nawabganj. Discover a wide range of products and enjoy convenient delivery options." />
                <meta name="twitter:image" content="https://suchonamart.com/img/logo.png" />
      </Head>
      <HeroSection/>
      <FeaturedCategories/>
      <CategorySlide/>
      <TrendingProducts/>
      <FeaturedShops/>
      <NewArrivals/>
      <BestSellingProducts/>
    </div>
  )
}

export default index
