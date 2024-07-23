import React from 'react'

const Footer = () => {
  return (
    <div className='footer' data-aos="fade-left">
        <div className="section reach">
        <div className="mail"><p className='mailid'>metalbody654@gmail.com</p>  </div>
         <div className="location"><p className='locid'>32/5,sector-5,new Delhi</p></div>
        <div className="phone"><p className='phoneid'>(+91) 9996577804</p></div>
        </div>
        <hr/>
        <div className="section links">
        <div className="footer_about">
        <h5>About</h5>
        <ul>
          <li>Our Story</li>
          <li>Awards</li>
          <li>Our Team</li>
          <li>Career</li>

        </ul>
        </div>
        <div className="footer_company">
        <h5>Company</h5>
        <ul>
          <li>Our Services</li>
          <li>Customers</li>
          <li>Contact</li>

        </ul>

        </div>
        <div className="footer_resources">
        <h5 className='srcheading'>Resources</h5>
        <ul>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Privacy policy</li>

        </ul>
        </div>
        <div className="newsletter">
        <h5 className='srcheading'>Subscribe
        <div className='letterdiv'> 
        
        <input type='email' placeholder='Subscribe to our Newsletter' className='newsletterfield' required autoComplete='off'/>
        <button className='subscribe'>Subscribe</button>
        </div>
        </h5>
        </div>

        </div>
        <div className="section socials">
          <div className="fb"></div>
          <div className="insta"></div>
          <div className="linkedin"></div>
          <div className="twitter"></div>
        </div>
        <div className="section copyright"><div className='copyrighticon'></div><p className='copytext'>ALL RIGHTS RESERVED | Made with ❤️ by AYUSH </p> </div>

      
    </div>
  )
}

export default Footer
