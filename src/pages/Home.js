import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Banner from "../sections/Banner/Banner.js";
import Services from "../sections/Services/Services.js";
import Emergency from "../sections/Emergency/Emergency.js";
import Features from "../sections/Features/Features.js";
import Expert from "../sections/Expert/Expert.js";
import Footer from "../sections/Footer/Footer.js";
import Testimonial from "../sections/Testimonial/Testimonial.js";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Services />
      <Features />
      <Emergency />
      <Testimonial />
      <Expert />
      <Footer />
    </React.Fragment>
  );
}
