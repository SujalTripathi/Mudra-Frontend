import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-heading">
      <h3>NTS Mudra</h3>
      </div>
      <div className="footer-para">
      <p>Stay updated with NTS Mudra</p>
      </div>
      <div className="footer-input">
      <form action="">
        <input type="email" placeholder='Your email address' />
        <button>Subscribe</button>
        
      </form>
      </div>
      <div className="copy-right">
        <button>English</button>
        <p>© 2023 NTS Mudra</p>
        <div className="social-media">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-youtube"></i>
          
          
        </div>
      </div>

    </div>
        
  )
}

export default Footer