import type { NextPage } from 'next'
import { DefaultHead } from '@/layouts/DefaultHead'
import { Navbar } from '@/layouts/Navbar'
import { MainHeading } from '@/layouts/Heading'
import { Slider } from '@/layouts/Slider'
import { useState } from 'react'

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);
  return (
    <div className="main">
      <DefaultHead />
      <Navbar />
      <MainHeading />
      <div className="main-container">
        <Slider setParentSlide={setCurrentPage} />
      </div>
    </div>
  )
}

export default Home
