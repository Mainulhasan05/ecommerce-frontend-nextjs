import React, { useState } from 'react'
import BuyNowModal from './BuyNowModal'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Link from 'next/link'
import { FacebookShareButton, TwitterShareButton, InstapaperShareButton, PinterestShareButton } from 'react-share';

const ProductDetailsSection = ({ data }) => {
    const [image, setImage] = useState(data.image)
    const [quantity, setQuantity] = useState(1)
    return (
        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <ImageGallery showNav={true} showIndex={true} autoPlay={false} showFullscreenButton={true} items={data?.images?.map((image, index) => ({
                                    original: process.env.API_URL + image?.url,
                                    thumbnail: process.env.API_URL + image?.url
                                }))} />
                                {/* <img width={200} height={500} className="product__details__pic__item--large"
                                    src={process.env.API_URL + image} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">

                            <h3>{data?.name}</h3>
                            <div className="product__details__rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                {/* <span>({data?.views} views)</span> */}
                            </div>
                            <div>
                                <h6 className='text-secondary my-3'>
                                    This product has {data?.views} views
                                </h6>

                            </div>
                            <div className="product__details__price">৳{data?.new_price}</div>

                            <div className="product__details__quantity">

                                <div className="quantity">
                                    <button onClick={() => {
                                        if (quantity > 1) {
                                            setQuantity(quantity - 1)
                                        }

                                    }} className='btn text-bold border' style={{ fontSize: "20px" }}>
                                        <b>-</b>
                                    </button>
                                    <div className="pro-qty">
                                        <input type="text" value={quantity} />
                                    </div>
                                    <button onClick={() => {
                                        if (quantity < 10) {
                                            setQuantity(quantity + 1)
                                        }
                                    }} className='btn text-bold border' style={{ fontSize: "20px" }}>
                                        <b>+</b>
                                    </button>
                                </div>

                            </div>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="primary-btn btn">Buy Now</button>

                            <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                            <ul>
                                <li><b>Availability</b> <span>
                                    {
                                        data?.quantity > 0 ? 'In Stock' : 'Out of Stock'
                                    }
                                </span></li>
                                {/* <samp>Free pickup today</samp> */}
                                <li><b>Shipping</b> <span>2-3 day shipping. </span></li>
                                {/* <li><b>Weight</b> <span>0.5 kg</span></li> */}
                                <li><b>Seller </b>
                                    <Link href={`/shop/${data?.shop?.slug}`}>

                                        <span style={{ fontWeight: "600" }}>{data?.shop?.name}</span>

                                    </Link>
                                </li>
                                <li><b>Share on</b>
                                    <div className="share">
                                        <a href="#">
                                            <FacebookShareButton url={window.location.href} quote={data?.name}>
                                                <i className="fa fa-facebook"></i>
                                            </FacebookShareButton>
                                        </a>
                                        <a href="#">
                                            <TwitterShareButton url={window.location.href} title={data?.name}>
                                                <i className="fa fa-twitter"></i>
                                            </TwitterShareButton>
                                        </a>
                                        <a href="#">
                                        <InstapaperShareButton url={window.location.href} title={data?.name}>
                                            <i className="fa fa-instagram"></i>
                                        </InstapaperShareButton>
                                        </a>
                                        <a href="#">
                                            <PinterestShareButton url={window.location.href} description={data?.name}>
                                            <i className="fa fa-pinterest"></i>
                                            </PinterestShareButton>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                        aria-selected="true">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                        aria-selected="false">Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                        aria-selected="false">Reviews <span>(1)</span></a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        {/* dangerouslysetinner html */}

                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation {data?.description}</h6>
                                        <div dangerouslySetInnerHTML={{ __html: (data?.description) }} />
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                            Proin eget tortor risus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BuyNowModal />
        </section>
    )
}

export default ProductDetailsSection
