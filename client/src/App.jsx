import React from 'react';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Skills from './component/skills/Skills';
import Portfolio from './component/portfolio/Portfolio';
import Footer from './component/footer/Footer';

const App = () => {
  return (
     <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
     </>
  )
}

export default App