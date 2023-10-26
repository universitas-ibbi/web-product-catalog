import Product from "./Product";

export default function App(){
  const products = [
    {
      offer: "x4",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
      type: "Laptops",
      productName: "HP Notebook",
      priceBefore: "1099",
      priceAfter: "999",
      stock: "9"
    },
    {
      offer: "x2",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp",
      type: "Laptops",
      productName: "HP Envy",
      priceBefore: "1199",
      priceAfter: "1099",
      stock: "7"
    },
    {
      offer: "x3",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",
      type: "Laptops",
      productName: "Toshiba B77",
      priceBefore: "1399",
      priceAfter: "1299",
      stock: "5"
    }
  ];

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                offer={product.offer}
                image={product.image}
                type={product.type}
                productName={product.productName}
                priceBefore={product.priceBefore}
                priceAfter={product.priceAfter}
                stock={product.stock}
              />
            );
          })}
        </div>
      </div>
    </section>
  )
}

