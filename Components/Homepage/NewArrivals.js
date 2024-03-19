import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from "framer-motion"

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
            <div className="products_container row featured__filter">
                {
                    homedata?.newArrivals?.map((product,index)=>(
                        <motion.div animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}
                         className="col-lg-3 col-md-4 col-sm-6  p-3">
                    <div className="featured__item">
                        <div className="text-center">
                            <Link href={`/product/${product?.slug}`}>
                            <img className='img-fluid' src={process.env.API_URL+product?.image} alt=""  style={{width:"200px",height:"200px"}}/>
                            </Link>
                        </div>
                        
                        <div className="featured__item__text">
                            <h6><Link href={`/product/${product?.slug}`}>{product?.name}</Link></h6>
                            <h5>৳{product?.new_price}</h5>
                        </div>
                    </div>
                </motion.div>
                    ))
                }
                
                
            </div>
        </div>
    </section>
  )
}

export default NewArrivals
