import React from "react"

const Services = () => {
  const ourservices = [
    {
      id: 1,
      title: "Fastest Delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      icon: "./storefront.svg",
    },
    {
      id: 2,
      title: "A Good Auto Responder",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      icon: "./scoot.svg",
    },
    {
      id: 3,
      title: "Home Delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      icon: "./iphone.svg",
    },
  ]

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
            {ourservices.map((service) => (
              <div className="flex flex-col items-center p-4 text-center md:w-1/3">
                <div className="inline-flex items-center justify-center flex-shrink-0 mb-5 ">
                  {<img src={service.icon} alt="" classNameName="w-48 h-48" />}
                </div>
                <div className="flex-grow">
                  <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    {service.title}
                  </h2>
                  <p className="text-base leading-relaxed">
                    {service.description}
                  </p>
                  <a className="inline-flex items-center mt-3 text-indigo-500">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
