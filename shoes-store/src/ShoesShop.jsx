import React from 'react';
import data from "./data.json";
import ShoesList from './ShoesList'; 

export default function ShoesShop() {

  return (
    <div className='container'>
          <h1 className='text-center'>Shoes Shop</h1>
          <ShoesList 
            products={data}
          />
      </div>
  )
}

