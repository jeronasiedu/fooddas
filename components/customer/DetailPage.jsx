import {FiShare2} from 'react-icons/fi' 
import {BsStarFill} from 'react-icons/bs'

const DetailPage = () => {
     const handleShare = () => {
    
       if (navigator.share) {
         navigator
           .share({
             title: "Please buy this food for me",
             text: "If you don't by this I will kill you",
             url: "",
           })
           .then(() => {
             console.log("Successfully share");
           })
           .catch(() => {
             console.log("Something went wrong");
           });
       }
     };

  return (
    <div>
      <div class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="./food.png"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  {Array(5)
                    .fill("")
                    .map((star, index) => (
                      <BsStarFill color="gold" key={index} />
                    ))}
                  <span class="text-gray-600 ml-3">5 Reviews</span>
                </span>
               
              </div>
              <p class="leading-relaxed">
                Fam locavore kickstarter dis microdosing tilde DIY. XOXO fam
                indxgo judenim forage brooklyn. Everyday carry +1 seitan poutine
                tumeric. Gastropub blue bottle austin listicle pour-over, neutra
                jean shorts keytar banjo tattooed umami cardigan.
              </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Add to cart
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4" onClick={handleShare}>
                  <FiShare2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage