import Head from 'next/head'
import Image from 'next/image'
import product from '../sanity_ecommerce/schemas/product'

export default function Home() {
  return (
  <>
    HeroBanner
      <div>
      <h2>Best Selling Products</h2>
      <p>Speakers Variations</p>
      </div>

      <div>
        {['Product 1','Product 2'].map(
          (product) => product)}
      </div>
  </>

  )
}
