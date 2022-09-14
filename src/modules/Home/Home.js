import React from 'react'
import HeadComponent from '@components/Head/Head'
import HomeSlider from './sections/HomeSlider'
import Products from './sections/Products/index'
import Advantages from './sections/Advantages/index'
import StickyElements from './sections/StickyElements/index.jsx'
import AnimatedDoors from './sections/AnimatedDoors'
import HomeCategory from './sections/HomeCategory/index'
import Collections from './sections/Collections/index'
import EconomyClassDoors from './sections/EconomyClassDoors/index'
import VirtualTour from './sections/VirtualTour/index'
import OurPartners from './sections/OurPartners/index'
import HomeCards from './sections/HomeCards'
import data from './sections/HomeSlider/homeSliderData'
import stickyDatas from './sections/StickyElements/stickyElementsData'
import advantagesData from './sections/Advantages/advantagesData'

const HomePage = () => {
  return (
    <div>
      <HeadComponent title="Bosh sahifa" />
      <HomeSlider data={data} />
      <Products />
      <Advantages advantagesData={advantagesData} />
      <StickyElements stickyDatas={stickyDatas} />
      <AnimatedDoors />
      <HomeCategory />
      <Collections />
      <EconomyClassDoors />
      <VirtualTour />
      <OurPartners />
      <HomeCards />
    </div>
  )
}

export default HomePage
