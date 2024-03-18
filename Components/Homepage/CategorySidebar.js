import React, { useEffect } from 'react';

const CategorySidebar = () => {
    useEffect(() => {
        const toggleButton = document.querySelector('.hero__categories__all');
        const categoryList = document.getElementById('category_list');

        const handleClick = () => {
            categoryList.classList.toggle('active');
        };

        toggleButton.addEventListener('click', handleClick);

        return () => {
            toggleButton.removeEventListener('click', handleClick);
        };
    }, []); // Empty dependency array ensures this effect runs only once when component mounts

    return (
        <div className="hero__categories">
            <div className="hero__categories__all">
                <i className="fa fa-bars"></i>
                <span>All departments</span>
            </div>
            <ul id='category_list' className="hidden">
                <li><a href="#">Fresh Meat</a></li>
                <li><a href="#">Vegetables</a></li>
                <li><a href="#">Fruit & Nut Gifts</a></li>
                <li><a href="#">Fresh Berries</a></li>
                <li><a href="#">Ocean Foods</a></li>
                <li><a href="#">Butter & Eggs</a></li>
                <li><a href="#">Fastfood</a></li>
                <li><a href="#">Fresh Onion</a></li>
                <li><a href="#">Papayaya & Crisps</a></li>
                <li><a href="#">Oatmeal</a></li>
                <li><a href="#">Fresh Bananas</a></li>
            </ul>
        </div>
    );
};

export default CategorySidebar;
