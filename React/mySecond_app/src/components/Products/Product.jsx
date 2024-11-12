import React,{useState} from 'react'
import './Product.css'

const Products = (props) => {


    let [price,addCount] = useState(props.price);

  return (
    <figure className='product'>
        <img src={props.imgUrl} alt={props.name} />
        <h2>{props.name}</h2>
        <h2 onClick={()=>addCount(price = 10)}>Rs. {price}</h2>
    </figure>
  )
}

export default Products