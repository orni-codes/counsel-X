import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Resources from './components/Resources'
import Contacts from './components/Contacts'
import FAQ from './components/FAQ'
import FadeIn from './components/FadeIn'
import Footer from './components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Resources/>
      <FadeIn>
        <Contacts/>
      </FadeIn>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home
