import React from 'react'
import { memo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import YourSafety from "../components/YourSafety" 
import Service from "../components/Service"
import Recommended from "../components/Recommended"
import Categories from "../components/Categories"
import YourHome from "../components/YourHome"
import Feedback from "../components/Feedback"
import Works from '../components/Works'
import Gallery from "../components/Gallery"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Categories/>
      <YourHome/>
      <Recommended/>
       <Gallery/>
      <YourSafety/>
      <Works/>
      <Feedback/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default memo(Home)
