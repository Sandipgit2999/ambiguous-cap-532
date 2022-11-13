import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import { Allroutes } from './Components/Routes/Allroutes'
// import './App.css'
import { Allroutes } from "./Routes/Allroutes"


function App() {

  return (
    <div className="App">
      <Navbar/>
     <Allroutes/>
     <Footer/>
     
    </div>
  )
}

export default App
