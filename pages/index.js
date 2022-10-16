import Navbar from "../components/Home/Navbar"
import Hero from "../components/Home/Hero"
import Services from "../components/Home/Services"
import Footer from "../components/Home/Footer"
import Deals from "../components/Home/Deals"
import About from "../components/Home/About"
const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <Services/>
      <Deals/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home