import React from 'react'
import Features from '../components/Features'
import Header from '../components/Header'
import Navbar from '../components/Navbar/Navbar'
import PropertyList from '../components/PropertyList'
import Places from '../components/Places'
import FeaturedProperty from '../components/FeaturedProperty'
import Mail from '../components/Mail'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section className=''>
      <Navbar />
      <Header />

      <div className='flex mt-64 md:mt-24 lg:mt-12 flex-col items-center gap-7'>
        <Features />
      </div>
      <h1 className='title mt-4 container text-blue-500 mx-auto '>Explore nigeria</h1>
        <PropertyList />

      <h1 className='title mt-4 container text-blue-500 mx-auto'>Explore Places</h1>
      <Places />
      <h1 className='title mt-4 text-blue-500 container mx-auto'>Properties around you</h1>

      <FeaturedProperty />
      <Mail />
      <Footer />
        


    </section>
  )
}

export default Home