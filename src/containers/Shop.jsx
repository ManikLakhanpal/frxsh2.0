import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

const products = [
    { name: "Thirsty Thursday T-shirt", price: 500, image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/thirstyThursdayTshirt.webp", description: "Our ultra soft USA made signature t-shirt exclusive to Solid Threads." },
    { name: "Men's Derek Jeter", price: 1100, image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/jersey.webp", description: "Derek Jeter is your favorite player, and for a good reason." },
    { name: "Stakes Still High T-Shirt", price: 320, image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/stylishTshirt.jpg", description: "100% combed and ring-spun cotton t-shirt featuring design inspired by Stakes is High" },
    { name: "Whiskey Helps T-shirt", price: 280, image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/whiskyHelpsTshirt.webp", description: "Our ultra soft USA made signature t-shirt exclusive to Solid Threads." },
    { name: "Quail Family Tee", price: 300, image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/FamilyTee.webp", description: "Classic fit t-shirt. 100% cotton" },
    { name: "Freenote Clothe", price: 350, image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/jean/jean jacket.webp", description: "RJ-3 Japanese Selvedge Denim Trucker Jacket" },
    { name: "PORTUGUESE FLANNEL", price: 699, image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/portogueseFlannelTshirt.webp", description: "Ground Camp-Collar Pointelle-Knit Cotton-Blend Shirt" },
    { name: "ORSLOW", price: 900, image: "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/denim.webp", description: "Denim Overshirt" },
  ]

export default function Component() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

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
          <h1 className="font-semibold text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">Men's Apparel</h1>
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
