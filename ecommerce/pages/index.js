import Head from 'next/head'
import Image from 'next/image'
import product from '../sanity_ecommerce/schemas/product'

import {client} from '../lib/client'

import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components'

export const getServerSideProps= async () =>{
  const query = '*[_type== "product"]';
  const products = await client.fetch (query);

  const bannerQuery = '*[_type== "banner"]';
  const bannerData = await client.fetch (bannerQuery);

  return{
    props:{ products, bannerData}
  }
}

export default function Home( products, bannerData) {
  return (
  <>
  <  HeroBanner heroBanner={} />
      <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers Variations</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => product.name)}
      </div>

      <FooterBanner/>

  </>

  )
}
