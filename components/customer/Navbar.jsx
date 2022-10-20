import Link from "next/link"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaRegMoon } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 py-4 ">
      <div>
        <img src="./logo.png" alt="" className="w-40 h-10" />
      </div>
      <div className="flex">
        <div className="px-2 py-1 m-1 bg-gray-200 rounded-md hover:bg-gray-300">
          <FaRegMoon className="text-gray-600" size={24} />
        </div>
        <div className="m-1 ">
          <AiOutlineShoppingCart size={29} />
        </div>
        <div className="hidden md:flex">
          <Link href="/LogIn">
            <button className="px-4 py-1 m-1 text-white bg-red-500 rounded-lg hover:text-blue hover:bg-red-600">
              Log out
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
