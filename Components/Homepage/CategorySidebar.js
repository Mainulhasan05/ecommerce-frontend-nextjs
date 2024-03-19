// components/Sidebar.js

import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const {homedata}=useSelector(state=>state.home)
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div class="hero__categories">
            <div class="hero__categories__all">
                <i class="fa fa-bars"></i>
                <span>All departments</span>
            </div>
            <ul>
                {
                    homedata?.categories?.map((category,index)=>(
                        <li className='parent_categories' >
                        <Link href={`/category/${category?.slug}`}>{category?.name}</Link>
                        <div className='sub_categories' >
                            <ul>
                                {
                                    category?.children?.map((sub_category,index)=>(
                                        <li><Link href={`/category/${sub_category?.slug}`}>{sub_category?.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                        </li>
                    ))
                }
                {/* <li className='parent_categories' >
                <a href="#">Fresh Meat</a>
                <div className='sub_categories' >
                    <ul>
                        <li><Link href="/product/1">Meat</Link></li>
                        <li><Link href="/product/2">Meat</Link></li>
                        <li><Link href="/product/3">Meat</Link></li>
                        <li><Link href="/product/4">Meat</Link></li>
                        <li><Link href="/product/5">Meat</Link></li>
                    </ul>
                </div>
                </li>
                <li><a href="#">Vegetables</a></li>
                <li><a href="#">Fruit & Nut Gifts</a></li>
                <li><a href="#">Fresh Berries</a></li>
                <li><a href="#">Ocean Foods</a></li>
                <li><a href="#">Butter & Eggs</a></li>
                <li><a href="#">Fastfood</a></li>
                <li><a href="#">Fresh Onion</a></li>
                <li><a href="#">Papayaya & Crisps</a></li>
                <li><a href="#">Oatmeal</a></li>
                <li><a href="#">Fresh Bananas</a></li> */}
            </ul>
        </div>
    );
};

export default Sidebar;
