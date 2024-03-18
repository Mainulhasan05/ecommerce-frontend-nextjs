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

                <div className="row d-flex gap-1">
                    {homedata.featuredCategories.map((shop, index) => (
                        <div key={index} className="card col-md-2">
                            <img width={30} height={30} className="card-img-top img-fluid" src={process.env.API_URL + shop.image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{shop.name}</h5>
                                <p className="card-text">{shop.description}</p>
                            </div>
                        </div>
                    ))}

                    {
                        homedata.featuredCategories.length < 6 && Array(6 - homedata.featuredShops.length).fill(0).map((_, index) => (
                            <div key={index} className="card">
                                <img width={100} height={80} className="card-img-top img-fluid" src="https://via.placeholder.com/150" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Shop Name</h5>

                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </section>
    )
}

export default FeaturedCategories
