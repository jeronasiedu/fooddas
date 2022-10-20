import Link from "next/link"
import { useState } from "react"
import { BiTimer } from "react-icons/bi"
import { CgShoppingCart } from "react-icons/cg"
import { data } from "../../data/data"

const Product = () => {
  const [food, setFood] = useState(data)

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {food.map((item) => (
              <div className="w-full p-4 lg:w-1/4 md:w-1/2 " key={item.id}>
                <a className="relative block h-48 overflow-hidden rounded-t-md">
                  <img
                    alt="ecommerce"
                    className="block object-cover object-center w-full h-full"
                    src={item.image}
                  />
                </a>
                <div className="px-2 pt-2 border rounded">
                  <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                    {item.vendor}
                  </h3>
                  <div className="flex justify-between">
                    <h2 className="text-lg font-medium text-gray-900 title-font">
                      {item.name}
                    </h2>
                    <div className="p-1 duration-200 border border-red-400 rounded-full hover:border-red-700">
                      <Link href={"/food/" + item.id} key={item.id}>
                        <CgShoppingCart
                          size={25}
                          className="m-1 text-red-400 hover:text-red-700"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mt-2">
                      <BiTimer className="" />
                    </div>

                    <p className="mx-1 mt-1"> 30-40 min</p>
                    <p className="mx-1 mt-1"> - </p>
                    <p className="mt-1"> GHC {item.price} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
