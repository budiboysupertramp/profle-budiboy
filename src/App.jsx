
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar"
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";

function App() {
  

  return (
    <>
      <Router>  
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
