import React, { useState } from 'react'
import axiosInstance from '../../utils/axiosInstance'
import toast from 'react-hot-toast'
const BuyNowModal = ({product}) => {
    const [orderObj, setOrderObj] = useState({
        productIds: [product.id],
        name: '',
        phone: '',
        address: '',
        note: '',
        quantity: 1
    })
    const handleChanges = (e) => {
        setOrderObj({
            ...orderObj,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e) => {
      e.preventDefault()
      // check quantity must be greater than 0
      if(orderObj.quantity < 1){
        toast.error('Quantity must be minimum 1')
        return
      }
      // check if all fields are filled
      for (const key in orderObj) {
        if(orderObj[key] === '' && key !== 'note'){
          toast.error('All fields are required')
          return
        }
      }
        const res=await axiosInstance.post('/api/place-order', {
          ...orderObj,
          quantity: [orderObj.quantity]
        })
        if(res.status === 200 || res.status === 201){
          toast.success('Order Placed Successfully')
        }else{
          toast.error('Order Failed')
        }
      
      document.getElementById('closeModal').click()
    
    }

  return (
    <>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h3 className="modal-title fs-5" id="exampleModalLabel">Place an Order</h3>
        <button id='closeModal' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="d-flex">
          <div className="image">
            <img src={process.env.API_URL+ product.image} width={100} height={100} alt="" />
          </div>
          <div className="details text-left mx-4">
          <h5 className=''>Product Name: {product.name}</h5>
        <h5 className=''>Price: {product.new_price}</h5>
        <h5 className=''>Quantity: {orderObj.quantity}</h5>
        <h5 className=''>Total Price: {product.new_price * orderObj.quantity}</h5>
        <b>NB: Delivery Charge will be added.</b>
        </div>
        </div>
        <hr />
        <form>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' value={orderObj.name} onChange={handleChanges} required/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" name='phone' value={orderObj.phone} onChange={handleChanges} required />
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" name='address' value={orderObj.address} onChange={handleChanges} required/>
            </div>
            <div className="mb-3">
                <label for="quantity" className="form-label">Quantity</label>
                <input type="number" className="form-control" id="quantity" name='quantity' value={orderObj.quantity} onChange={handleChanges} required/>
            </div>
            <div className="mb-3">
                <label for="quantity" className="form-label">Order Note</label>
                <textarea type="text" className="form-control" id="note" name='note' value={orderObj.note} onChange={handleChanges} />
            </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleSubmit} type="button" className="btn btn-success">Place Order</button>
      </div>
    </div>
  </div>
</div>
      
    </>
  )
}

export default BuyNowModal
