import React from 'react'
import HeroComponent from '../components/HeroComponent'
import FeaturedHeroComponent from '../components/FeaturedHeroComponent'
import FeaturesComponent from '../components/FeaturesComponent'

const HomePage = () => {
  return (
    <div className='w-full min-h-screen'>
      
     <HeroComponent/>
     <FeaturedHeroComponent/>
     <FeaturesComponent/>
      
      </div>
  )
}

export default HomePage