import React from "react"

import { About, Footer, Hero, Skills, Testimonial, Work } from "./container"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <div className="font-dm">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
