import type { NextPage } from 'next'
import { DefaultHead } from '@/layouts/DefaultHead'
import { Navbar } from '@/layouts/Navbar'
import { MainHeading } from '@/layouts/Heading'
import { Slider } from '@/layouts/Slider'
import { useState } from 'react'
import { ParentSlide } from '@/layouts/ParentSlide'

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <div className="main">
      <DefaultHead />
      <Navbar />
      <MainHeading />
      <div className="main-container">
        <Slider
          setLoading={setLoading}
          setParentSlide={setCurrentPage}
        />
        <ParentSlide
          loading={loading}
          setLoading={setLoading}
          activeSlide={currentPage}
        />
      </div>
    </div>
  )
}

export default Home
