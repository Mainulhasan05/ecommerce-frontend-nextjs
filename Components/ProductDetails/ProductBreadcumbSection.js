import Link from 'next/link'
import React from 'react'

const ProductBreadcumbSection = ({data}) => {
  return (
    <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>
                            {
                                data?.categories?.length > 0 && data?.categories[0]?.name
                            }
                        </h2>
                        <div class="breadcrumb__option">
                            <Link href="/">Home</Link>
                            <Link href={`/category/${data?.categories?.length > 0 && data?.categories[0]?.slug}`}>{data?.categories?.length > 0 && data?.categories[0]?.name}</Link>
                            {/* <span>Vegetable’s Package</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductBreadcumbSection
