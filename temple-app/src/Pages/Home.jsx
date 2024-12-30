import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import MemberList from '../Components/MemberList'
import DonorList from '../Components/DonorList'
import Footer from '../Components/Footer'
import NoticeSection from '../Components/NoticeSection'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <NoticeSection/>
    <MemberList/>
    <DonorList/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default Home