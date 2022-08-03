import React,{ useContext } from 'react';
import './Product.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ProductContext } from '../../components/contextApi/ProductContext';

function ProductPage() {
    const { addWishlist,addCart } = useContext(ProductContext);
  return (
    <>
        <div className="product_card col-md-3">
            <div className="card">
                <img src="assets/images/ring.jpg" className="card-img-top" alt="Wiremesh Cluster Diamond Ring "/>
                <div className="card-body">
                    <h5 className="card-title">Wiremesh Cluster Diamond Ring</h5>
                    <div className="buttonGroup">
                        <div className="wishlists" onClick={addWishlist}> <FavoriteBorderOutlinedIcon/></div>
                        <div className="shoppingCart" onClick={addCart}> <ShoppingCartOutlinedIcon/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product_card col-md-3">
            <div className="card">
                <img src="assets/images/ring_2.jpg" className="card-img-top" alt="Wiremesh Cluster Diamond Ring "/>
                <div className="card-body">
                    <h5 className="card-title">Wiremesh Cluster Diamond Ring</h5>
                    <div className="buttonGroup">
                        <div className="wishlists" onClick={addWishlist}> <FavoriteBorderOutlinedIcon/></div>
                        <div className="shoppingCart" onClick={addCart}> <ShoppingCartOutlinedIcon/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product_card col-md-3">
            <div className="card">
                <img src="assets/images/ring_3.jpg" className="card-img-top" alt="Wiremesh Cluster Diamond Ring "/>
                <div className="card-body">
                    <h5 className="card-title">Wiremesh Cluster Diamond Ring</h5>
                    <div className="buttonGroup">
                        <div className="wishlists" onClick={addWishlist}> <FavoriteBorderOutlinedIcon/></div>
                        <div className="shoppingCart" onClick={addCart}> <ShoppingCartOutlinedIcon/></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product_card col-md-3">
            <div className="card">
                <img src="assets/images/ring_4.jpg" className="card-img-top" alt="Wiremesh Cluster Diamond Ring "/>
                <div className="card-body">
                    <h5 className="card-title">Wiremesh Cluster Diamond Ring</h5>
                    <div className="buttonGroup">
                        <div className="wishlists" onClick={addWishlist}> <FavoriteBorderOutlinedIcon/></div>
                        <div className="shoppingCart" onClick={addCart}> <ShoppingCartOutlinedIcon/></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductPage
