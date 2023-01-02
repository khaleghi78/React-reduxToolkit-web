import React, { useState } from 'react'
import { products } from '../../assets/data/data'
import Heading from '../../common/Heading'
import ProducItem from './ProducItem'

const Product = () => {
  const [data, setdata] = useState(products)
  console.log(setdata)
  return (
    <>
     <section className='product'>
        <div className='container'>
            <Heading title='Trendings Products' desc='Check the hottest designs of 
            the weeek. These rising stars are worth your attention.' />

            <ProducItem data={data} />
        </div>
     </section>
    </>
  )
}

export default Product