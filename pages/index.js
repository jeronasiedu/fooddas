
import Hero from "../components/Home/Hero"
import Services from "../components/Home/Services"
import Footer from "../components/Home/Footer"
import Deals from "../components/Home/Deals"
import About from "../components/Home/About"
import Navbar from "../components/customer/Navbar"
import Adsection from "../components/customer/Adsection"
import Tabs from "../components/customer/Tabs"
import Product from "../components/customer/Product"
const Home = () => {
  return (
    <div>

      <Navbar/>
      <Adsection/>
      <Tabs/>
      <Product/>
{/*       
      <Navbar/>
      <Hero/>
      <Services/>
      <Deals/>
      <About/>
      <Footer/> */}
    </div>
  )
}

export default Home