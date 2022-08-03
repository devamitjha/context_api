import React, { useContext }from 'react'
import { NavLink } from "react-router-dom";
import Search from './Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ProductContext } from './contextApi/ProductContext';


function Navbar() {
  const { cart, wishlist,addWishlist,addCart } = useContext(ProductContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand"  to="/">Logo</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="mynavbar">
              <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="category">Category</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link"  to="contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link"  to="product">Product</NavLink>
                </li>
              </ul>
              <Search/>
              <div className='login_container'>
                <div class="miniCart">               
                  <NavLink className="nav-link"  to="wishlist">
                    <FavoriteBorderOutlinedIcon/>
                    {wishlist?<span class="count">{wishlist}</span>:''}                   
                  </NavLink>
                  <NavLink className="nav-link"  to="cart" > 
                    <ShoppingCartOutlinedIcon/>
                    {cart? <span class="count">{cart}</span>:''}
                  </NavLink>
                </div>
                <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="login">Login</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link"  to="register">Register</NavLink>
                      </li>
                  </ul>
              </div>
             
            </div>
        </div>
    </nav>
  )
}

export default Navbar
