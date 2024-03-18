import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";


const FeaturedShops = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
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
        <div key={index} className="card">
          <img width={100} height={80} className="card-img-top img-fluid" src={process.env.API_URL + shop.image} alt="" />
          <div className="card-body">
            <h5 className="card-title">{shop.name}</h5>
            <p className="card-text">{shop.description}</p>
          </div>
        </div>
      ))}

      {
        homedata.featuredShops.length<6  && Array(6-homedata.featuredShops.length).fill(0).map((_,index)=>(
          <div key={index} className="card">
          <img width={100} height={80} className="card-img-top img-fluid" src="https://via.placeholder.com/150" alt="" />
          <div className="card-body">
            <h5 className="card-title">Shop Name</h5>
            
          </div>
        </div>
        ))
      }
      
    </Slider>
      </div>
    </section>
  )
}

export default FeaturedShops
