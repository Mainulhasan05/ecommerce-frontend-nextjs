import React from 'react'
import { useSelector } from 'react-redux'

const CategorySlide = () => {
    const {homedata}=useSelector(state=>state.home)
  return (
    <section class="categories">
        <div class="container">
            <div class="row">
                <div class="categories__slider owl-carousel">
                    {
                        homedata?.categories?.map((category,index)=>(
                            <div class="col-lg-3">
                        <div style={{
                            backgroundImage: `url(${process.env.API_URL+category?.image})`
                        }} class="categories__item set-bg" data-setbg={process.env.API_URL+category?.image}>
                            <h5><a href="#">{category?.name}</a></h5>
                        </div>
                    </div>
                        ))
                    }
                    {/* <div class="col-lg-3">
                        <div class="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                            <h5><a href="#">Fresh Fruit</a></h5>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                            <h5><a href="#">Dried Fruit</a></h5>
                        </div>
                    </div> */}
                    {/* <div class="col-lg-3">
                        <div class="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                            <h5><a href="#">Vegetables</a></h5>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                            <h5><a href="#">drink fruits</a></h5>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                            <h5><a href="#">drink fruits</a></h5>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategorySlide
