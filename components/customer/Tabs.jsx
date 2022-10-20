import React from "react"

const Tabs = () => {
  return (
    <div>
      <div className="flex justify-between m-10">
        <div className="">
          <h2 className="text-2xl font-bold">Categories</h2>
        </div>
        <div className="">
          <input
            type="text"
            className="p-2 bg-red-100 rounded-2xl"
            placeholder="Search what you love"
          />
        </div>
      </div>
      <div className="mx-3">
        <button className="px-5 py-2 m-2 bg-red-100 rounded-xl">All</button>
        <button className="px-5 py-2 m-2 bg-red-100 rounded-xl">
          Breakfast
        </button>
        <button className="px-5 py-2 m-2 bg-red-100 rounded-xl">Launch</button>
        <button className="px-5 py-2 m-2 bg-red-100 rounded-xl">Dinner</button>
        <button className="px-5 py-2 m-2 bg-red-100 rounded-xl">Sauce </button>
        <button className="px-5 py-2 m-2 bg-red-100 rounded-xl">Stew</button>
        <button className="px-5 py-2 m-2 bg-red-100 rounded-xl">Soup</button>
        <button className="px-5 py-2 m-2 bg-red-100 rounded-xl">Pizza</button>
      </div>
    </div>
  )
}

export default Tabs
