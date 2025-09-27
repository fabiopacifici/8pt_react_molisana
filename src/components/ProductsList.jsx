import ProductCard from "./ProductCard"

export default function ProductsList({products}){


  return (
    <section>

      <div className="container">
        <div className="row">


        {
          products.map(product => (

            <ProductCard product={product} key={product.id}  />

          ))
        }


        </div>
      </div>

    </section>
  )
}