import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance'
import CategoriesList from '../../../Components/All-Categories/CategoriesList'
import Head from 'next/head'

export const getServerSideProps = async () => {
    const data = await axiosInstance.get('/api/categories')
    return {
        props: {
            categories: data?.data?.data
        }
    }
}

const index = ({categories}) => {
    
    
  return (
    <div className="container">
       <Head>
                <title>All Categories - SuchonaMart</title>
                <meta name="description" content="Explore a wide range of categories on SuchonaMart, empowering local entrepreneurs with diverse products and services." />
                
                {/* SEO Meta Tags */}
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="categories, local entrepreneurs, SuchonaMart, products, services" />
                
                {/* Open Graph (OG) Tags */}
                <meta property="og:title" content="All Categories - SuchonaMart" />
                <meta property="og:description" content="Explore a wide range of categories on SuchonaMart, empowering local entrepreneurs with diverse products and services." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.suchonamart.com/all-categories" />
                <meta property="og:image" content="https://www.suchonamart.com/images/og-image.jpg" />
                <meta property="og:image:alt" content="SuchonaMart Logo" />
                
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="All Categories - SuchonaMart" />
                <meta name="twitter:description" content="Explore a wide range of categories on SuchonaMart, empowering local entrepreneurs with diverse products and services." />
                <meta name="twitter:image" content="https://www.suchonamart.com/images/og-image.jpg" />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.suchonamart.com/all-categories" />
                
                {/* Favicon */}
                <link rel="icon" type="image/png" href="https://www.suchonamart.com/favicon.png" />
            </Head>
      <CategoriesList categories={categories} />
    </div>
  )
}

export default index
