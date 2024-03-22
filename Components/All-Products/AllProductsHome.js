import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router'
import axiosInstance from '../../utils/axiosInstance'
import ProductCard from './ProductCard'
import SearchbarComponent from '../Searchpage/SearchbarComponent'

const AllProductsHome = ({ data }) => {
    const [products, setProducts] = useState(data.products)

    const router = useRouter()
    const handleSelect = async (e) => {

        router.push({
            pathname: '/all-products',
            query: {...router.query,page:1,price: e.target.value}
        })
        const res=await axiosInstance.get(`/api${router.asPath}`)
        setProducts(res.data?.data?.products)
    }
    const handlePageChange = async (e) => {
        console.log(e)
        router.push({
            pathname: '/all-products',
            query: {...router.query, page: e.selected + 1 }
        })
        const res=await axiosInstance.get(`/api${router.asPath}`)
        setProducts(res.data?.data?.products)
    }
    return (
        <div>
            <div className="text-center d-flex justify-content-center align-items-center my-4" style={{ marginBottom: "-10px" }}>
                <SearchbarComponent />
            </div>
            <section className="product spad">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-md-7">

                            <div className="filter__item">
                                <div className="d-flex justify-content-between">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            <h6><span>{data?.totalProducts}</span> Products found</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-5">
                                        <div className="p-1 gap-1">
                                            <span>Sort By:</span>
                                            <select className='border mx-2 border-none' onChange={handleSelect}>
                                                <option value="">Default</option>
                                                <option value="asc">Price: Low to High</option>
                                                <option value="desc">Price: High to Low</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-4 col-md-3">
                                    <div className="filter__option">
                                        <span className="icon_grid-2x2"></span>
                                        <span className="icon_ul"></span>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                            <div className="row">
                                {
                                    products.map((product, index) => (
                                        <ProductCard key={index} product={product} />
                                    ))
                                }


                            </div>
                            {/* <div className="product__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                            </div> */}
                            {/* "totalPages": 1,
                            "totalProducts": 17,
                            "currentPage": 1,
                            "per_page": 20 */}
                            <ReactPaginate
                                previousLabel={"<"}
                                nextLabel={">"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={data?.totalPages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageChange}
                                containerClassName={"product__pagination"}
                                subContainerClassName={"pages pagination"}
                                forcePage={data?.currentPage - 1}
                                activeClassName={"active"} />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default AllProductsHome
