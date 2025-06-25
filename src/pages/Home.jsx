import React from 'react'
import { memo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import YourSafety from "../components/YourSafety" 
import Service from "../components/Service"
import Recommended from "../components/Recommended"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Recommended/>
      <YourSafety/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default memo(Home)
