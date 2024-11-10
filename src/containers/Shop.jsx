import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { useParams } from "react-router-dom";
import { ProductContext } from '../context/Context';

export default function Component() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { category } = useParams();
  const {menProducts, womenProducts, sneekers} = ProductContext();
  let products = [];

  if (category == "men") {
    products = menProducts;
  } else if (category == "women") {
    products = womenProducts;
  } else if (category == "sneekers") {
    products = sneekers;
  }

  useEffect(() => {
    const cart = document.getElementById("cart")
    if (cart) {
      gsap.set(cart, { x: '100%' })
      gsap.to(cart, {
        duration: 0.2,
        x: isCartOpen ? '0%' : '100%',
        ease: "none"
      })
    }
  }, [isCartOpen])

  function removeFromCart(index) {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index))
  }

  function addToCart(product) {
    setCartItems(prevItems => [...prevItems, product])
    setIsCartOpen(true)
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white w-full h-20 rounded-2xl flex justify-center items-center mb-8 shadow-lg">
          <h1 className="font-semibold text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">{category.toUpperCase()}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
      />
    </div>
  )
}
