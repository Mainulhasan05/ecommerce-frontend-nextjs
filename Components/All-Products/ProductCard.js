import Link from 'next/link';

function ProductCard({ product }) {
  return (
    <div animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="col-lg-3 col-md-4 col-6 p-3">
      <div className="featured__item product_card">
        <div className="text-center">
          <Link href={`/product/${product?.slug}`}>
            <img className='img-fluid' src={process.env.API_URL + product?.image} alt="" style={{ width: "200px", height: "200px" }} />
          </Link>
        </div>

        <div className="featured__item__text">
          <h6><Link href={`/product/${product?.slug}`}>{product?.name}</Link></h6>
          <h5>৳{product?.new_price}</h5>
          {product?.old_price && (
            <p className="old-price">Old Price: ৳{product.old_price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
