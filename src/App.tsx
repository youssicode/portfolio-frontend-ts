import React from "react"

import { About, Contact, Hero, Skills, Testimonial, Work } from "./sections"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="font-dm">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App
