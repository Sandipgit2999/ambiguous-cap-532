// import './App.css'
import { Allroutes } from "./Routes/Allroutes"
import ProductInfo from "./Pages/SingleProduct/ProductInfo"
import HomePage from "./Pages/homepage/HomePage"
import Navbar from "./Components/navbar/Navbar"
import Footer from "./Components/footer/Footer"


function App() {

  return (
    <div >
      {/* <Allroutes /> */}
        <Navbar />
        <HomePage/>
      {/* <ProductInfo /> */}
      {/* <Allroutes/> */}
     
      <Footer />

    </div>
  )
}

export default App
