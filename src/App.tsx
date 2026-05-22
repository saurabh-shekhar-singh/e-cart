import "./App.css";
import { Routes, Route } from "react-router-dom";
import Content from "./layouts/Content/Content";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        {/* <Route path="/" element={<Content />} /> Comming soon banner*/}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Content /> */}
      <Footer />
    </>
  );
}

export default App;
