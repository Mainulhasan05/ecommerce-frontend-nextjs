import React from 'react'
import ProductHeroSection from './ProductHeroSection'
import ProductBreadcumbSection from './ProductBreadcumbSection'
import ProductDetailsSection from './ProductDetailsSection'
import SeoSchema from './SeoSchema'

const ProductDetails = ({data}) => {
  return (
    <div>
      <SeoSchema data={data}/>
        <ProductHeroSection data={data}/>
        <ProductBreadcumbSection data={data}/>
        <ProductDetailsSection data={data}/>

    </div>
  )
}

export default ProductDetails
