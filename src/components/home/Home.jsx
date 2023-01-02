import React from 'react'
import Banner from './banner/Banner'
import Card from './hero/Card'
import Hero from './hero/Hero'
import Price from './price/Price'
import Product from './product/Product'
import TopProduct from './topproduct/TopProduct'
import Testimonial from './testimonial/Testimonial'
import Blog from './blog/Blog'

const Home = () => {
  return (
    <>
    <Hero />
    <Card />
    <Product />
    <Banner />
    <TopProduct />
    <Price />
    <Testimonial />
    <Blog />
    </>
  )
}

export default Home 