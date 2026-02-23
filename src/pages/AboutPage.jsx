import React from 'react'
import AboutHeroSection from '../components/AboutComponents/AboutHero'
import HowWeWorkSection from '../components/AboutComponents/HowWeWorkSection'
import WhatMakesUsDifferentSection from '../components/AboutComponents/WhatMakesUsDifferent'
import FinalCTASection from '../components/FinalCTASection'
import AboutStorySection from '../components/AboutComponents/AboutStory'

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection/>
      <AboutStorySection/>
      <HowWeWorkSection/>
      {/* <WhatMakesUsDifferentSection/> */}
      <FinalCTASection/>
    </div>
  )
}

export default AboutPage
