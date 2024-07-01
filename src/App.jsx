import AboutUs from "./components/AboutUs"
import Navbar from "./components/Navbar"
import Program from "./components/Program"
import Slider from "./components/Slider"

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-[#FDFBF0] to-[#ECF6ED]">
        <Navbar/>
        <Slider/>
        <AboutUs/>
        <Program/>
        
      </div>
      
    </>
  )
}

export default App
