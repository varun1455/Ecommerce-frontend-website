import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Itemlist from '../components/Itemlist'
import Newsletter from '../components/Newsletter'
// import Products from '../components/Products'
import Slider from '../components/Slider'
import Anouncement from './Anouncement'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Anouncement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      {/* <Products/> */}
      <Itemlist/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
