import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";


const FeaturedCategories = () => {

    const { homedata } = useSelector(state => state.home)
    return (
        <section class=" ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Featured Categories</h2>
                        </div>

                    </div>
                </div>

                <div className="categories">
                    {homedata.featuredCategories.map((category, index) => (
                        <Link href={`/category/${category?.slug}`} key={index} className="category">
                            <img src={process.env.API_URL + category.image} alt="" />
                            <span class="category-name">{category.name}</span>
                        </Link>
                    ))}

                    
                </div>


            </div>
        </section>
    )
}

export default FeaturedCategories
