import React from 'react'
import ProductHeroSection from './ProductHeroSection'
import ProductBreadcumbSection from './ProductBreadcumbSection'
import ProductDetailsSection from './ProductDetailsSection'

const ProductDetails = ({data}) => {
  return (
    <div>
        <ProductHeroSection data={data}/>
        <ProductBreadcumbSection data={data}/>
        <ProductDetailsSection data={data}/>

    </div>
  )
}

export default ProductDetails
