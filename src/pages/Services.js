import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../sections/Footer/Footer";
import Gallery from "../sections/Gallery/Gallery";
import ServiceBanner from "../sections/ServiceBanner/ServiceBanner";
import Symptoms from "../sections/Symptoms/Symptoms";

const Services = () => {
  return (
    <>
      <Navbar />
      <ServiceBanner />
      <Symptoms />
      <Gallery />
      <Footer />
    </>
  );
};

export default Services;
