import React, { useState } from 'react'
import SingleCard from './SingleCard'
import "./Products.css"


const Products = ({data}) => {

  const [size,setSize]=useState(true)

  const handlesize=()=>{
    setSize(!size)
  }

    // console.log(data)
  return (
    <div className="prod_cont">
      {
      data.map((elm,ind)=>{
        return <div key={ind} className='prod'>
          <SingleCard  title={elm.title} rating={elm.rating.rate} img={elm.image} size={size} description={elm.description} price={elm.price} handlesize={handlesize}/>
        </div>
      })
    }
    </div>
    
  )
}

export default Products
