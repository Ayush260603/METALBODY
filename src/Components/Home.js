import React from 'react'
import { Link } from 'react-router-dom'
import JoinUs from "./JoinUs"
import Header from './Header'


const Home = () => {
  return (
    <>
    <div className="Home"> 
    <Header/>
      <div className='tagline' data-aos="fade-up"><h2 className='tag'> Step Up your </h2><p className='fitness'><span>FITNESS</span> WITH US </p> 
          <button className='join'> <Link className="joinlink"to="/JoinUs">JOIN US NOW</Link></button>
        </div>  
        </div>
       </>
    
  )
}

export default Home
