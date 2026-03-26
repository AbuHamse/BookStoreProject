import React from 'react'
import AboutSectionComponent from '../components/AboutSectionComponet'
import AboutMissionComponent from '../components/AboutMissionComponent'
import AboutClosingComponent from '../components/AboutClosingComponent'

const AboutPage = () => {
  return (
    <div className='w-full min-h-screen'>
      
      <AboutSectionComponent/>
      <AboutMissionComponent/>
      <AboutClosingComponent/>
      </div>
  )
}

export default AboutPage