import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { useRouter } from 'next/router'
import axiosInstance from '../../utils/axiosInstance'

const AllProductsHome = ({ data }) => {
    const [products, setProducts] = useState(data.products)
    
    const router=useRouter()
    const handleSelect = async(e) => {
        
        // router.push({
        //     pathname: '/all-products',
        //     query: { price: e.target.value }
        // })
        // console.log(router)
        // console.log(router.asPath)
    }
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-md-7">

                        <div className="filter__item">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="filter__sort">
                                        <span>Sort By</span>
                                        <select onChange={handleSelect}>
                                            <option value="asc">Price: Low to High</option>
                                            <option value="desc">Price: High to Low</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="filter__found">
                                        <h6><span>{data?.totalProducts}</span> Products found</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3">
                                    <div className="filter__option">
                                        <span className="icon_grid-2x2"></span>
                                        <span className="icon_ul"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                products.map((product, index) => {
                                    return (
                                        <motion.div animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}
                                            className="col-lg-3 col-md-4 col-6  p-3">
                                            <div className="featured__item">
                                                <div className="text-center">
                                                    <Link href={`/product/${product?.slug}`}>
                                                        <img className='img-fluid' src={process.env.API_URL + product?.image} alt="" style={{ width: "200px", height: "200px" }} />
                                                    </Link>
                                                </div>

                                                <div className="featured__item__text">
                                                    <h6><Link href={`/product/${product?.slug}`}>{product?.name}</Link></h6>
                                                    <h5>৳{product?.new_price}</h5>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                }
                                )

                            }
                            
                            
                        </div>
                        <div className="product__pagination">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllProductsHome
