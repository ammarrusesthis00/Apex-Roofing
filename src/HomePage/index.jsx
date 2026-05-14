import Hero from "./Hero";
import Services from "./Services";
import BeforeAfter from "./BeforeAfter";
import Process from "./Process";
import Testimonials from "./Testimonials";
import ServiceAreas from "./ServiceAreas";
import FinalCTA from "./FinalCTA";
import Gallery from "./Gallery";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <Gallery />
      <ServiceAreas />
      <FinalCTA />
    </main>
  );
}