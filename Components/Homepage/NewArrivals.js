import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from "framer-motion"
import ProductCard from '../All-Products/ProductCard'

const NewArrivals = () => {
    const {homedata}=useSelector(state=>state.home)
  return (
    <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>New Arrivals</h2>
                    </div>
                    
                </div>
            </div>
            <div className="row">
                {
                    homedata?.newArrivals?.map((product,index)=>(
                        
                    
                        <ProductCard product={product} key={index}/>
                    
                    ))
                }
                
                
            </div>
        </div>
    </section>
  )
}

export default NewArrivals
