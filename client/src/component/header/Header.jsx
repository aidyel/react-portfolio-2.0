import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
// import ME from '../../assets/me.jpeg'
import avatar from '../../assets/avatar.webp'
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
        <img src={avatar} alt="me" />
    </div>

    <a href="#contact" className='scroll__down'> Scroll Down</a>
   </header>
  )
}

export default Header