import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import Sidebar from '../Sidebar'
import NavBar from '../NavBar'
import HeroSection from './HeroSection'
import ProgramsSection from './ProgramsSection'
import TeachersSection from './TeachersSection'
import StudySystemSection from './StudySystemSection'
import PricingSection from './PricingSection'
import Footer from './Footer'

function AllHome() {
  return (
    <div dir="rtl" className="bg-white">
      <NavBar />
      <main className='w-full'>
        <HeroSection />
        <ProgramsSection />
        <TeachersSection />
        <StudySystemSection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  )
}


export default AllHome