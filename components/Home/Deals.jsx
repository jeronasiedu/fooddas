import React from "react"

const Deals = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./party02.jpg"
            />
          </div>
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Knausgaard typewriter readymade marfa
            </h1>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
              swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            </p>

            <p className="w-full mt-2 mb-8 text-sm text-gray-500">
              Neutra shabby chic ramps, viral fixie.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Deals
