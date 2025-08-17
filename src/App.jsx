import { useState } from 'react'
import React from 'react'
import './App.scss'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
