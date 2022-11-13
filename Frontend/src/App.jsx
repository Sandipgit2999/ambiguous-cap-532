import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import { Allroutes } from './Components/Routes/Allroutes'
import HomePage from './Components/Pages/HomePage/HomePage'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
     <Allroutes/>
     <Footer/>
     {/* <HomePage/> */}
    </div>
  )
}

export default App
