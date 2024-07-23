import './App.css';
import Header from "./Components/Header"
import About from "./Components/About"
import Features from "./Components/Features"
import Contact from "./Components/Contact"
import Home from "./Components/Home"

import Footer from "./Components/Footer"
import JoinUs from "./Components/JoinUs"
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
     <>
    <BrowserRouter> 
    <Routes>
       <Route path="/about" element={<About/>}/>
      <Route path="/Features" element={<Features/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/pages/JoinUs" element={<JoinUs/>}/> 

       </Routes>
  <div className="App">
       </div>  
       <Home/>

      <About/>
      <Features/>
       <Contact/>
       <Footer/> 
       
    </BrowserRouter>
    </>
     
  );
}

export default App;
