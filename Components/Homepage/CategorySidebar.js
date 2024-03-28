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
            <ul className='home_nav'>
                <li></li>
                {
                    homedata?.categories?.map((category,index)=>(
                        <li key={index} className='parent_categories' >
                        <Link href={`/category/${category?.slug}`}>{category?.name}</Link>
                        
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default Sidebar;
