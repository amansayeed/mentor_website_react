import React from 'react'
import About_main from '../Components/About_page_components/About_main'
import About_section from '../Components/About_page_components/About_section'
import About_tesitmonials from '../Components/About_page_components/About_tesitmonials'
import Count_home from '../Components/Home_page_Components/Count_home'

function About_page() {
    return (
      <>
       <main id="main">
           <About_main/>
           <About_section/>
           <Count_home/>
           <About_tesitmonials/>
           
           


       </main>
      </>
      
    )
}

export default About_page
