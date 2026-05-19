function Product() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for Product 4",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description for Product 5",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description for Product 6",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for Product 3",
    },
  ];
  return (
    <>
      {products.map((product) => (
        <div className="content-item" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  );
}

export default Product;
