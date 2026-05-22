import Product from "@/components/Product/Product";
import "@styles/content.css";
import t from "@/assets/en.json";

function Content() {
  return (
    <main>
      <section>
        <div className="main-info">
          <h1>{t.subtitle}</h1>
          <p>{t.description}</p>
        </div>
      </section>
      <section className="main-content">
        <Product />
      </section>
    </main>
  );
}

export default Content;
