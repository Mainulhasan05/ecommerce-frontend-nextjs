import React from 'react';

const CategoriesList = ({ categories }) => {
    return(
        <div className="container">
            <div className="row">
        <div className="col-12 text-center mb-4">
            <h1 class="display-4">Explore Our Categories</h1>
            <p class="lead">Discover a world of possibilities</p>
        </div>
    </div>
    <div className="row">
        {categories.map((category) => (
            <div key={category.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="category-wrapper">
                    <div className="parent-category">
                        <a href={`/category/${category.slug}`}>{category.name}</a>
                    </div>
                    {category.children.length > 0 && (
                        <ul className="child-categories">
                            {category.children.map((child) => (
                                <li key={child.id}>
                                    <a href={`/category/${child.slug}`}>{child.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        ))}
    </div>
</div>

    )
};

export default CategoriesList;
