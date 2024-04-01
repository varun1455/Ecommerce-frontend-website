import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Itemlist from '../components/Itemlist'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import Anouncement from '../components/Anouncement'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Anouncement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Itemlist/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
