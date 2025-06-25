import React from 'react'
import { memo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import YourSafety from "../components/YourSafety" 
import Service from "../components/Service"
import Recommended from "../components/Recommended"
import Categories from "../components/Categories"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Categories/>
      <Recommended/>
      <YourSafety/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default memo(Home)
