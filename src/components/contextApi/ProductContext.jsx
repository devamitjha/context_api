import React, { createContext, useState } from 'react';


export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [cart, setCArt] = useState(0);
  const [wishlist, setWishlist] = useState(0);

  const addCart = () => {
    setCArt(cart +1);
  };

  const addWishlist = () => {
    setWishlist(wishlist +1);
  };
 
 

  return (
    <ProductContext.Provider value={{ addWishlist, addCart, cart, wishlist}}>
      {props.children}
    </ProductContext.Provider>
  );
}
 
export default ProductContextProvider;