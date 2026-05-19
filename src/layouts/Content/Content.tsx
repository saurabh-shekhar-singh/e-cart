import Product from "@/components/Product/Product";
import "@styles/content.css";

function Content() {
  return (
    <main>
      <section>
        <div className="main-info">
          <h1>Neural Tech</h1>
          <p>
            Experience high-precision clarity and ethereal efficiency. Our
            advanced hardware seamlessly integrates with your neural pathways
            for effortless control.
          </p>
        </div>
      </section>
      <section className="main-content">
        <Product />
      </section>
    </main>
  );
}

export default Content;
