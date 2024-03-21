import React from 'react'
import CategorySidebar from './CategorySidebar'
import SearchbarComponent from '../Searchpage/SearchbarComponent'

const HeroSection = () => {
  return (
    <section className="hero">
        <div className="container">
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
                    <div className="hero__item set-bg" data-setbg="/img/hero/banner.jpg">
                        <div className="hero__text">
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
