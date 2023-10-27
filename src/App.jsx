import Product from "./Product";
import ProductPage from "./ProductPage";

import { products } from "./data";

export default function App(){
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                id={product.id}
                offer={product.offer}
                image={product.image}
                type={product.type}
                productName={product.productName}
                priceBefore={product.priceBefore}
                priceAfter={product.priceAfter}
                stock={product.stock}
                rating={product.rating}
              />
            );
          })}
        </div>
      </div>
    </section>
  )
}

