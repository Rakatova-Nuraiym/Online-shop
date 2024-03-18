import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./layout.module.scss";
import HomePage from "../pages/homeSection/HomePage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Products from "../pages/Products";
import Favorite from "../pages/favorite/Favorite";
import Backet from "../pages/backet/Backet";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/basket" element={<Backet />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
