import type { NextPage } from 'next'
import { DefaultHead } from '@/layouts/DefaultHead'
import { Navbar } from '@/layouts/Navbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className="main">
      <DefaultHead />
      <Navbar />
    </div>
  )
}

export default Home
