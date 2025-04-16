import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Features from "../components/features";
import { fetchFeatures } from "../api/services/api";

const Home = () => {
  const [featuresData, setFeaturesData] = useState([]);

  useEffect(() => {
    const getFeatures = async () => {
      const data = await fetchFeatures();
      setFeaturesData(data);
    };

    getFeatures();
  }, []);

  return (
    <main className="main">
      <Banner />
      <Features datas={featuresData} />
    </main>
  );
};

export default Home;