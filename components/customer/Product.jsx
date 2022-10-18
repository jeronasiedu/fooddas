import { useState } from 'react'
import {CgShoppingCart} from 'react-icons/cg'


const Product = () => {
    const food = [
      {
        id: 1,
        name: "Pizza",
        price: 10,
        image: "./food.jpg",
        vendor: "Tasty Queen Kitchen.",
        category: "dinner",
        location:"Kumasi",
      },
      {
        id: 2,
        name: "Burger",
        price: 10,
        image: "./food.jpg",
        vendor: "Sweet Mummy's Kitchen",
        category: "dinner",
        location:"Kumasi",
      },
      {
        id: 3,
        name: "Pizza",
        price: 10,
        image: "./food.jpg",
        vendor: "Pizzaman' Kitchen",
        category: "dinner",
        location:"Accra",
      },
      {
        id: 4,
        name: "Hausa Koko",
        price: 10,
        image: "./food.jpg",
        vendor: "Hajia's Breakfast Hub",
        category: "breakfast",
        location:"Kumasi",

      },
      {
        id: 5,
        name: "Banku with Tilapia",
        price: 10,
        image: "./food.jpg",
        vendor: "Rachael B's Kitchen",
        category: "lunch",
        location:"Kumasi",

      },
      {
        id: 6,
        name: "Pizza",
        price: 10,
        image: "./food.jpg",
        vendor: "Rachael B's Kitchen",
        category: "lunch",
        location:"Accra"
      },
      {
        id: 7,
        name: "Pizza",
        price: 10,
        image: "./food.jpg",
        vendor: "Rachael B's Kitchen",
        category: "lunch",
        location:"Accra"
      },
      {
        id: 8,
        name: "Pizza",
        price: 10,
        image: "./food.jpg",
        vendor: "Rachael B's Kitchen",
        category: "lunch",
        location:"Accra"
      },
      {
        id: 9,
        name: "Pizza",
        price: 10,
        image: "./food.jpg",
        vendor: "Rachael B's Kitchen",
        category: "lunch",
        location:"Accra"
      },
    ];



  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {food.map((item) => (
              <div class="lg:w-1/4 md:w-1/2 p-4   w-full  ">
                <a class="block relative h-48  overflow-hidden rounded-t-md">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src={item.image}
                  />
                </a>
                <div class="pt-2 rounded border px-2">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.vendor}
                  </h3>
                  <div className="flex justify-between">
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      {item.name}
                    </h2>
                    <div className="rounded-full border p-1 border-red-400 hover:border-red-700  duration-200">
                      <CgShoppingCart
                        size={25}
                        className="text-red-400 m-1   hover:text-red-700"
                      />
                    </div>
                  </div>
                  <div className='flex'>
                    
                    <p class="mt-1">GHC {item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

      


export default Product;