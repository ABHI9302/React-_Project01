import React from 'react'
import HeroSection from '../Components/HomePage/HeroSection'
import IntroductionSection from '../Components/HomePage/IntroductionSection'

import Function_01 from '../Components/HomePage/Function_01'
import Function_02 from '../Components/HomePage/Function_02'
import Function_03 from '../Components/HomePage/Function_03'
import Contact from '../Components/HomePage/Contact'

const Home = () => {
  return (
   <main className='w-full h-[90%]'>
    <HeroSection/>
    <IntroductionSection/>
    <Function_01/>
    <Function_02/>
    <Function_03/>
    <Contact/>
   </main>
  )
}

export default Home