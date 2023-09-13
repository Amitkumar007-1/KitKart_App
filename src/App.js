import "./styles.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import { CartProvider } from "./Context/Context";

export default function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/product/:productid" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </div>
  );
}
