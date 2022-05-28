import React from 'react'
import ShopItem from './ShopItem';

export default function ShoesList(props) {
    const { products } = props ;
  return (
    <div className='row'>
        {products.map((product) => {
            return (
                <div key={product.id} className='col-sm-4'>
                    <ShopItem product={product}/>
                </div>
            )
        })}
    </div>
  )
}
