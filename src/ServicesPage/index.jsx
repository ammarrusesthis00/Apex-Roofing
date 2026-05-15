import Hero from "./Hero";
import Benefits from "./Benefits";
import Process from "./Process";
import Gallery from "./Gallery";
import ServicesGrid from "./ServicesGrid";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import FAQ from "./FAQ";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function ServicePage() {
    return (
        <>
          <Navbar />
          <Hero />  
          <Benefits />
          <Process />
          <Gallery />
          <ServicesGrid />
          <Testimonials />
          <CTA />
          <FAQ />
        </>
    )
}