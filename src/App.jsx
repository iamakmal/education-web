import AboutUs from "./components/AboutUs"
import Navbar from "./components/Navbar"
import Program from "./components/Program"
import Slider from "./components/Slider"
import Testimonial from "./components/Testimonial"

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-[#FDFBF0] to-[#ECF6ED]">
        <Navbar/>
        <Slider/>
        <AboutUs/>
        <Program/>
        <Testimonial/>
      </div>
      
    </>
  )
}

export default App
