import React from "react";
import NavbarBox from "../components/NavbarBox";
import Hero from "../sections/Hero";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../sections/Testimonials";
import Footer from "../components/Footer";
import About from "../sections/About";
import PhotoSlider from "../sections/PhotoSlider";
import ScrollToTop from "../components/ScrollToTop";
 

export default function Landing() {
  return (
    <div className="min-h-screen bg-blue-100 text-slate-100">
      <NavbarBox />
      <Hero />
      <About />
      <ServiceCard />
      <PhotoSlider/>
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
