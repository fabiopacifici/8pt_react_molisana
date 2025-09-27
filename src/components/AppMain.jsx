import ProductsList from "./ProductsList"

export default function AppMain({products}) {

  const title = 'Welcome to Mandolina'

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>

     <ProductsList products={products} />

    </main>
  )
}