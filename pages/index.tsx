import type { NextPage } from 'next'
import { DefaultHead } from '@/layouts/DefaultHead'
import { Navbar } from '@/layouts/Navbar'
import { MainHeading } from '@/layouts/Heading'

const Home: NextPage = () => {
  return (
    <div className="main">
      <DefaultHead />
      <Navbar />
      <MainHeading />
    </div>
  )
}

export default Home
