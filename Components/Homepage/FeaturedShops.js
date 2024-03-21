import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";


const FeaturedShops = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  const { homedata } = useSelector(state => state.home)
  return (
    <section class=" ">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Featured Shops</h2>
            </div>

          </div>
        </div>
        
        <Slider {...settings}>
      {homedata.featuredShops.map((shop, index) => (
        <div  key={index} className="mx-2 featured_shop_card text-center">
          <img className='centered-image' width={100} height={100} src={process.env.API_URL + shop.image} alt="" />
            <h4>{shop?.name}</h4>
          
          
        </div>
      ))}      
    </Slider>
      </div>
    </section>
  )
}

export default FeaturedShops
