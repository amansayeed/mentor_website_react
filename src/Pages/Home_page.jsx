import React from 'react'
import About_home from '../Components/Home_page_Components/About_home'
import Count_home from '../Components/Home_page_Components/Count_home'
import Feature_section_home from '../Components/Home_page_Components/Feature_section_home'
import Hero_img from '../Components/Home_page_Components/Hero_img'
import Popular_section_home from '../Components/Home_page_Components/Popular_section_home'
import Trainers_home from '../Components/Home_page_Components/Trainers_home'
import Why_us_home from '../Components/Home_page_Components/Why_us_home'

function Home_page() {
    return (
       <>

       <Hero_img/>

      <main id="main" />
      <About_home/>
      <Count_home/>
      <Why_us_home/>
      <Feature_section_home/>
      <Popular_section_home/>
      <Trainers_home/>
   
       </>

    )
}

export default Home_page
