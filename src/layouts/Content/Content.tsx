import Product from "@/components/Product/Product";
import "@styles/content.css";
import t from "@/assets/en.json";
import Search from "@/components/Search/Search";
import { useContext, useMemo, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { getFilteredProducts } from "@/utils/product";
import ProductModal from "@/components/Product-modal/ProductModal";
import { Products } from "@/types/app";

function Content() {
  const [searchItem, setSearchItem] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
  const { state } = useContext(AppContext);
  const products = useMemo(
    () => getFilteredProducts(state, searchItem),
    [state, searchItem],
  );
  const openProductModal = (product: Products) => {
    if (!product) return;
    setSelectedProduct(product);
    setShowModal(true);
  };
  if (state.loading === true) {
    return <div className="loading">Loading...</div>;
  }
  if (state.error) {
    return <div className="loading">Error loading products.</div>;
  }

  return (
    <main>
      <section>
        <Search setSearchItem={setSearchItem} />
        <div className="main-info">
          <h1>{t.subtitle}</h1>
          <p>{t.description}</p>
        </div>
      </section>
      <section className="main-content">
        <div className="product-filter">
          <div className="filter-options">
            {/* <div className={`filter-options ${isFilterOpen ? "open" : "close"}`}> */}
            <h4>Category</h4>
            <div className="filter-container">
              <input id="men" type="checkbox" />
              <label htmlFor="men">Men</label>
            </div>
            <div className="filter-container">
              <input id="women" type="checkbox" />
              <label htmlFor="women">Women</label>
            </div>
          </div>
          <span onClick={() => setIsFilterOpen(!isFilterOpen)}>
            {isFilterOpen ? "Close" : "Open"}
          </span>
        </div>
        <Product products={products} openProductModal={openProductModal} />
        {showModal && selectedProduct !== null && (
          <ProductModal setShowModal={setShowModal} product={selectedProduct} />
        )}
      </section>
    </main>
  );
}

export default Content;
