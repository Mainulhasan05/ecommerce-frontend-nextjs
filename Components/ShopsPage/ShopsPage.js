import React, { useState } from 'react'

const ShopsPage = ({data}) => {
  const [total, setTotal] = useState(data?.count)
  const [shops, setShops] = useState(data?.rows)
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Our Shops</h2>
          </div>
        </div>
      </div>
      
      
      <div className="row d-flex justify-content-center align-items-center">
        {
          shops.map((shop, index) => (
            <div key={index} className="product_card mx-2 mb-3 border col-lg-3 col-md-4 col-5  p-3">
              
                <div className="text-center">
                  <img className='img-fluid' src={process.env.API_URL + shop?.image} alt="" style={{ width: "100px", height: "100px" }} />
                </div>
                <div className="text-center fw-bold">
                  <h6>
                    <b>{shop?.name}</b>
                    </h6>
                </div>
              
            </div>
          ))
        }
      </div>
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default ShopsPage
