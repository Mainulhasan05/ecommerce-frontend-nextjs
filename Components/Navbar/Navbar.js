import React, { useEffect } from 'react'
import MyComponent from './ScriptLoader'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import HeroSection from '../Homepage/HeroSection'
import { useRouter } from 'next/router'

const Navbar = () => {
    const {homedata} = useSelector(state => state.home)
    const router=useRouter()
    useEffect(() => {
        // show__humberger__menu__wrapper remove this class to hide the sidebar
        document.querySelector('.humberger__menu__wrapper').classList.remove('show__humberger__menu__wrapper')
        // remove active class from the overlay
        document.querySelector('.humberger__menu__overlay').classList.remove('active')
        // remove over_hid from body
        document.querySelector('body').classList.remove('over_hid')
    }, [router])
  return (
    <>
    <MyComponent/>
        <div className="humberger__menu__overlay"></div>
    <div className="humberger__menu__wrapper" id='sidebar'>
        <div className="humberger__menu__logo">
            <Link href="/"><img className='img-fluid' src="/img/logo.png" alt=""/></Link>
        </div>
        <div className="humberger__menu__cart">
            <ul>
                <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                <li><Link href="/cart"><i className="fa fa-shopping-bag"></i> <span>0</span></Link></li>
            </ul>
            <div className="header__cart__price">item: <span>৳150.00</span></div>
        </div>
        <div className="humberger__menu__widget">
            <div className="header__top__right__language">
                <img src="/img/language.png" alt=""/>
                <div>English</div>
                <span className="arrow_carrot-down"></span>
                <ul>
                    <li><a href="#">Spanis</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
            <div className="header__top__right__auth">
                <a href="#"><i className="fa fa-user"></i> Login</a>
            </div>
        </div>
        
        <div id="mobile-menu-wrap2">
        <nav class="slicknav_nav slicknav_hidden my_mobile_nav" aria-hidden="true" role="menu" >
            <ul>
                <li class="active"><Link href="/all-products" role="menuitem">All Products</Link></li>
                <li><Link href="/shops" role="menuitem">Shops</Link></li>
                <li className="nav-item">
                <Link href="#">
                    <span className="nav-link">Pages <span className="slicknav_arrow">►</span></span>
                </Link>
                <ul className="nav flex-column ml-3">
                    <li className="nav-item">
                        <Link href="/shop-details">
                            <span className="nav-link">Shop Details</span>
                        </Link>
                    </li>
                </ul>
            </li>
                {/* <li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex="-1" class="slicknav_item slicknav_row" ><a href="#">Pages</a>
                    <span class="slicknav_arrow">►</span></a><ul class="header__menu__dropdown slicknav_hidden" role="menu" aria-hidden="true" >
                        <li><a href="./shop-details.html" role="menuitem" tabindex="-1">Shop Details</a></li>
                        <li><a href="./shoping-cart.html" role="menuitem" tabindex="-1">Shoping Cart</a></li>
                        <li><a href="./checkout.html" role="menuitem" tabindex="-1">Check Out</a></li>
                        <li><a href="./blog-details.html" role="menuitem" tabindex="-1">Blog Details</a></li>
                    </ul>
                </li> */}
                {/* <li><a href="./blog.html" role="menuitem">Blog</a></li>
                <li><a href="./contact.html" role="menuitem">Contact</a></li> */}
            </ul>
        </nav>
        </div>
        <div className="header__top__right__social">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-pinterest-p"></i></a>
        </div>
        <div className="humberger__menu__contact">
            <ul>
                <li><i className="fa fa-envelope"></i> mdrifatbd5@gmail.com</li>
                <li>Free Shipping for all Order of ৳99</li>
            </ul>
        </div>
    </div>
    

    
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> mdrifatbd5@gmail.com</li>
                                <li>Free Shipping for all Order of ৳99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-pinterest-p"></i></a>
                            </div>
                            <div className="header__top__right__language">
                                <img src="/img/language.png" alt=""/>
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="#"><i className="fa fa-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <Link href="/"><img id='logo' className='img-fluid' src="/img/logo.png" alt=""/></Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><Link href="/">Home</Link></li>
                            <li><Link href="/all-products">All Products</Link></li>
                            <li><Link href="/shops">Shop</Link></li>
                            {/* <li><a href="#">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li> */}
                            {/* <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Contact</a></li> */}
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>

    
    
    </>
  )
}

export default Navbar
