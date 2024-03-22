import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick';

const FeaturedProductsSlide = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
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
    const {homedata}=useSelector(state=>state.home)
  return (
    <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Trending Products</h2>
                    </div>
                    
                </div>
            </div>
            {/* <div class="products_container row featured__filter"> */}
            <Slider {...settings} class="products_container row featured__filter">
                {
                    homedata?.trendingProducts?.map((product,index)=>(
                        
                    <div class="featured__item">
                        <div className="text-center">
                            <Link href={`/product/${product?.slug}`}>
                            <img width={100} height={80} className='img-fluid' src={process.env.API_URL+product?.image} alt=""  style={{width:"200px",height:"200px"}}/>
                            </Link>
                        </div>
                        
                        <div class="featured__item__text">
                            <h6><Link href={`/product/${product?.slug}`}>{product?.name}</Link></h6>
                            <h5>৳{product?.new_price}</h5>
                        </div>
                    </div>
                
                    ))
                }
       
                </Slider>
                
            {/* </div> */}
        </div>
    </section>
  )
}

export default FeaturedProductsSlide
