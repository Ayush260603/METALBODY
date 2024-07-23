import React from 'react'
import {Link} from "react-scroll"
// import Popup from './Popup'
import PropTypes from 'prop-types'

const Header = () => {
  return (
    <>
    <nav id="home">
      <div className="logo">
       <h3 classname="gymname" data-aos="fade-up"><Link to='home' offset={15} duration={500} smooth={true} spy={true}>METALBODY</Link></h3> 
      </div>
      <div className='nav' data-aos="fade-up">
      <ul className='navbar'>
        <li className='navlist'> <Link to='home' offset={15} duration={500} smooth={true} spy={true}>Home</Link></li>
        <li className='navlist'><Link to='about' offset={15} duration={500} smooth={true} spy={true}>About</Link></li>
        <li className='navlist'><Link to='features' offset={15} duration={500} smooth={true} spy={true}>Features</Link></li>
        <li className='navlist'><Link to='contact' offset={50} duration={500} smooth={true} spy={true}>ContactUs</Link></li>
    <div className="buttons">
      <button className='btn btn-login' >Login</button>
      <button className='btn btn-signup'>SignUp</button>

    </div>
      </ul>
    </div>
    
    </nav>
    {/* const showlogin=(){
      <Popup trigger={true}/>
    } */}
    </>
     
  )
}

export default Header
