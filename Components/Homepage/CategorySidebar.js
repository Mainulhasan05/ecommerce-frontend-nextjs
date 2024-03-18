// components/Sidebar.js

import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div class="hero__categories"><div class="hero__categories__all"><i class="fa fa-bars"></i><span>All departments</span></div><ul id="category_list" class="hidden active" style={{"maxHeight":"451px"}}><li><a href="#">Fresh Meat</a></li><li><a href="#">Vegetables</a></li><li><a href="#">Fruit &amp; Nut Gifts</a></li><li><a href="#">Fresh Berries</a></li><li><a href="#">Ocean Foods</a></li><li><a href="#">Butter &amp; Eggs</a></li><li><a href="#">Fastfood</a></li><li><a href="#">Fresh Onion</a></li><li><a href="#">Papayaya &amp; Crisps</a></li><li><a href="#">Oatmeal</a></li><li><a href="#">Fresh Bananas</a></li></ul></div>
    );
};

export default Sidebar;
