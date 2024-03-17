import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";



const FeaturedShops = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    const {homedata}=useSelector(state=>state.home)
  return (
    <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Featured Shops</h2>
                    </div>
                    
                </div>
            </div>
            <div class="products_container row featured__filter">
                <Slider {...settings}
                >

                {
                    homedata?.newArrivals?.map((product,index)=>(
                        <SwiperSlide  class="col-lg-3 col-md-4 col-sm-6  p-3">
                    <div class="featured__item">
                        <div className="text-center">
                            <Link href={`/product/${product?.slug}`}>
                            <img className='img-fluid' src={process.env.API_URL+product?.image} alt=""  style={{width:"200px",height:"200px"}}/>
                            </Link>
                        </div>
                        
                        <div class="featured__item__text">
                            <h6><Link href={`/product/${product?.slug}`}>{product?.name}</Link></h6>
                            <h5>৳{product?.new_price}</h5>
                        </div>
                    </div>
                </SwiperSlide >
                    ))
                }
                
                
            </Slider>
            </div>
        </div>
    </section>
  )
}

export default FeaturedShops
