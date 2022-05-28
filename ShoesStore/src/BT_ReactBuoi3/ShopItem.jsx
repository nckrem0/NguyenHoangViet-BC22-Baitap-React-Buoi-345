import React, { useState } from 'react'
import DetailModal from './DetailModal';

export default function ShopItem(props) {
  const {product} = props
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='card'>
          <img src={product.image} alt={product.name} className="card-img" width="100%" height="300px" />
          <div className='card-body'>
              <h3 className='card-title'>{product.name}</h3>
              <p className='card-text'>{product.price}$</p>
              <button className='btn btn-danger' onClick={() => setShow(true)}>Details</button>
          </div>
      </div>
      {show && <DetailModal show={show} handleClose={setShow} product={product}/>}
    </>
  )

}

