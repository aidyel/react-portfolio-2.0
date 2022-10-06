import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
       <div className="container header_container"></div>
       <h5>Hello I'm</h5>
       <h1>Aida</h1>
       <h5 className='text-light'>Front Web Developer</h5>
       <CTA />
       <HeaderSocials />

    <div className="me">
        <img src={ME} alt="me" />
    </div>

    <a href="#contact" className='scroll__down'> Scroll Down</a>
   </header>
  )
}

export default Header