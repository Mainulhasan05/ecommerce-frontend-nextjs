import React, { useState } from 'react'

const BuyNowModal = () => {
    const [orderObj, setOrderObj] = useState({
        name: '',
        phone: '',
        address: '',
        notes: '',
        quantity: 1
    })
    const handleChanges = (e) => {
        setOrderObj({
            ...orderObj,
            [e.target.name]: e.target.value
        })
    }

  return (
    <>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fs-5" id="exampleModalLabel">Place an Order</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {/* create a  form*/}
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name='name' value={orderObj.name} onChange={handleChanges} />
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" class="form-control" id="phone" name='phone' value={orderObj.phone} onChange={handleChanges} />
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" name='address' value={orderObj.address} onChange={handleChanges} />
            </div>
            <div class="mb-3">
                <label for="quantity" class="form-label">Quantity</label>
                <input type="text" class="form-control" id="quantity" name='quantity' value={orderObj.quantity} onChange={handleChanges} />
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Place Order</button>
      </div>
    </div>
  </div>
</div>
      
    </>
  )
}

export default BuyNowModal
