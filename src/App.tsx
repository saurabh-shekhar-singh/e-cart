import "./App.css";
import { Routes, Route } from "react-router-dom";
import Content from "./layouts/Content/Content";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Cart from "./pages/cart";
import Archives from "./pages/archive";
import Arrivals from "./pages/arrivals";
import Support from "./pages/support";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
