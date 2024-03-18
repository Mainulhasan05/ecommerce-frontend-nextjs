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
      
      
      <div className="row">
        {
          shops.map((shop, index) => (
            <div key={index} className="col-lg-2 border shadow col-md-3 col-sm-6  p-3">
              
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
