import React from "react"

const Hero = () => {
  return (
    <div>
      <div className="flex text-black body-font ">
        <div>
          <section className="overflow-hidden text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap mx-auto lg:w-4/5">
                <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
                  <h1 className="mb-4 text-5xl font-bold text-black title-bold">
                    The fastest delivery in{" "}
                    <span classNameName="text-red-500">your city</span>
                  </h1>

                  <p className="mb-4 leading-relaxed text-gray-700">
                    When you are too lazy to cook, we are just a click away!
                    Search for your favorite food or restaurant in your area
                  </p>

                  <div className="flex">
                    <input
                      type="text"
                      classNameName="p-2 rounded-sm border-gray-400 border focus:outline-red-500"
                      placeholder="Enter delivery address"
                    />
                    <button className="flex px-6 py-2 text-white bg-red-500 border-0 focus:outline-red-500 hover:bg-indigo-600 ">
                      Find Food
                    </button>
                  </div>
                </div>
                <div classNameName="ml-10">
                  <img
                    alt="ecommerce"
                    className=""
                    src="./hero.png"
                    classNameName="pb-[35px] ml-6"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Hero
