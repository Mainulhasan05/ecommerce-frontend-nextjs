import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";



const FeaturedShops = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

          
      };
    const {homedata}=useSelector(state=>state.home)
  return (
    <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Featured Shops {homedata.featuredShops.length}</h2>
                    </div>
                    
                </div>
            </div>
            <div class="products_container row featured__filter">
                <Slider {...settings}
                >

                {
                    homedata?.featuredShops?.map((shop,index)=>(          
                    <div class="featured__item">
                        <div className="text-center">
                            <Link href={`/shop/${shop?.slug}`}>
                            <img className='img-fluid w-100' src={process.env.API_URL+shop?.image} alt=""  />
                            </Link>
                        </div>
                        
                        <div class="featured__item__text">
                            <h6><Link href={`/shop/${shop?.slug}`}>{shop?.name}</Link></h6>
                            
                        </div>
                    </div>
                
                    ))
                }
                
                
            </Slider>
            </div>
        </div>
    </section>
  )
}

export default FeaturedShops
