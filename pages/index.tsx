import { DefaultHead } from "@/layouts/DefaultHead";
import { Navbar } from "@/layouts/Navbar";
import { MainHeading } from "@/layouts/Heading";
import { Slider } from "@/layouts/Slider";
import { useState } from "react";
import { ParentSlide } from "@/layouts/ParentSlide";
import { Footer } from "@/layouts/Footer";
import { useMetricsData } from "@/utils/useSQL";
import { MetricRow } from "types";

interface Props {
  metrics: MetricRow[];
}

const Home = ({ metrics }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="main">
        <DefaultHead />
        <Navbar />
        <MainHeading />
        <div className="main-container">
          <Slider setLoading={setLoading} setParentSlide={setCurrentPage} />
          <ParentSlide
            data={metrics}
            loading={loading}
            setLoading={setLoading}
            activeSlide={currentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const metrics = await useMetricsData();
  return {
    props: { metrics },
  };
};
