import React from 'react'
import CategorySidebar from './CategorySidebar'
import SearchbarComponent from '../Searchpage/SearchbarComponent'
import { useSelector } from 'react-redux'

const HeroSection = () => {
    const { homedata } = useSelector(state => state.home)
  return (
    <section className="hero">
        <div className="container">
        <div className="">
                        <marquee behavior="" direction="">
                            <h2 style={{color:"red"}}>সেলার হতে পেজে ম্যাসেজ করুন, 
                            <a href="https://www.facebook.com/SuchonaMartOfficial/">SuchonaMart</a>
                            </h2>
                        </marquee>
                    </div>
            <div className="row">
                <div className="col-lg-3">
                    <CategorySidebar/>
                </div>
                

                <div className="col-lg-9">
                    <div className="hero__search">
                        <SearchbarComponent/>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+8801757995016</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="" >
                        <img width={"100%"} height={400} src={process.env.API_URL+homedata?.banners[0].imageUrl} alt="" />
                    </div> */}
                    <div className="hero__item">
                    <img style={{'position':"relative"}} width={"100%"} height={400} src={process.env.API_URL+homedata?.banners[0].imageUrl} alt="" />
                        <div style={{position:"absolute", marginLeft:"20px"}} className="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br />100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href="#" className="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
