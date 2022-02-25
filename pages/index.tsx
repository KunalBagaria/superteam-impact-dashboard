import { DefaultHead } from '@/layouts/DefaultHead'
import { Navbar } from '@/layouts/Navbar'
import { MainHeading } from '@/layouts/Heading'
import { Slider } from '@/layouts/Slider'
import { useState } from 'react'
import { ParentSlide } from '@/layouts/ParentSlide'
import Airtable from 'airtable'

interface Props {
  records: any[]
}

const Home = (props: Props) => {
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

export const getServerSideProps = async () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_KEY
  }).base('appVyljHhPqXgrw7U');
  const records = await base('Metrics').select({ view: 'Grid view' }).firstPage();
  const recordsJSON = records.map((record) => record._rawJson);
  return {
    props: { records: recordsJSON }
  }
};
