import React from 'react'
import NavSection from '../components/NavSection/NavSection'
import Showcase from '../components/Showcase/Showcase'
import OurServices from '../components/HomeSections/OurService/OurServices'
import Slider from '../components/HomeSections/Slider/Slider'
import Features from '../components/HomeSections/features/Features'





const Home = () => {
  return (
    <>
      <header> 
          <NavSection />
          <Showcase />          
      </header>
      <main>
        <Slider />
        <Features />
        <OurServices />
      </main>
   </>
  )
}

export default Home