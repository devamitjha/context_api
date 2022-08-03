import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Post from './pages/Post/Post';
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar';
import Login from './components/Login'
import Register from "./components/Register";
import ProductPage from "./pages/Product/Product";
import Wishlists from "./pages/Wishlists/Wishlists";
import Cart from "./pages/Cart/Cart";
import ProductContextProvider from "./components/contextApi/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <section>
          <Navbar/>    
          <div className="container mt-5">
            <div className="row">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="category" element={<Category/>} />
                <Route path="post" element={<Post/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="/post/:id" element={<Post/>} />
                <Route path="product" element={<ProductPage/>} />
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="wishlist" element={<Wishlists/>}/>
                <Route path="cart" element={<Cart/>}/>
              
              </Routes>
            </div>
          </div>
        </section>
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;
