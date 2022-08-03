import React,{ useContext } from 'react';
import { ProductContext } from '../../components/contextApi/ProductContext';

function Home() {
  const { cart,wishlist } = useContext(ProductContext);
  return (
    <div>
      <p>Total wishlist = {wishlist}</p>
      <p>Total Cart Items = {cart}</p>
    </div>
  )
}

export default Home
