import Head from 'next/head'
import Image from 'next/image'
import product from '../sanity_ecommerce/schemas/product'

import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components'

export default function Home() {
  return (
  <>
  <  HeroBanner />
      <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers Variations</p>
      </div>

      <div className='products-container'>
        {['Product 1','Product 2'].map(
          (product) => product)}
      </div>

      <FooterBanner/>
      
  </>

  )
}
