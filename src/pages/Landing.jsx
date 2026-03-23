import { lazy, Suspense } from "react";
import NavbarBox from "../components/NavbarBox";
import Hero from "../sections/Hero";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

// Lazy-loaded sections (below the fold)
const About = lazy(() => import("../sections/About"));
const StaffSection = lazy(() => import("../sections/StaffSection"));
const AreasSection = lazy(() => import("../sections/AreasSection"));
const Projects = lazy(() => import("../components/Project"));
const PhotoSlider = lazy(() => import("../sections/PhotoSlider"));
const Testimonials = lazy(() => import("../sections/Testimonials"));

export default function Landing() {
  return (
    <main>
      <div className="min-h-screen bg-blue-100 text-slate-100">
        <NavbarBox />
        <Hero />
        <Suspense fallback={<div className="h-20" />}>
          <About />
          < StaffSection />
          < AreasSection />
          <Projects />
          <PhotoSlider />
          <Testimonials />
        </Suspense>
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}
