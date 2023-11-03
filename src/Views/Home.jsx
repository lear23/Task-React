import React from 'react'
import NavSection from '../components/NavSection/NavSection'
import Showcase from '../components/Showcase/Showcase'
import OurServices from '../components/HomeSections/OurService/OurServices'





const Home = () => {
  return (
    <>
      <header> 
          <NavSection />
          <Showcase />          
      </header>
      <main>
        <OurServices />
      </main>
   </>
  )
}

export default Home