import React from "react";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Footer from "../../components/common/footer";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/DiningOut";
import NightLife from "../../components/NightLife";
import { useState } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "DiningOut":
      return <DiningOut />;
    case "NightLife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
