import React from 'react'
import Products from '../Products/Product'

const ShoppingList = () => {


    const items = [
        {
            name: 'Burger',
            imgUrl: 'https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg',
            price: 150
        },
        {
            name: 'Pizza',
            imgUrl: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
            price: 300
        },
        {
            name: 'Pasta',
            imgUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?cs=srgb&dl=pexels-enginakyurt-1437267.jpg&fm=jpg',
            price: 1000
        },
    ]
  return (
    <section>
        {items.map((product)=>{
            return (
                <Products name = {product.name}
                imgUrl={product.imgUrl} price={product.price} />
            )
        })}
    </section>
  )
}

export default ShoppingList