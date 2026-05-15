import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import BeforeAfter from "./BeforeAfter";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Emergency from "./Emergency";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import ServiceAreas from "./ServiceAreas";
import FinalCTA from "./FinalCTA";
import Gallery from "./Gallery";

export default function HomePage() {
  return (
    <main>
      <Hero />
<Services />
<About />
<Process />
<BeforeAfter />
<Gallery />
<Emergency />
<Testimonials />
<FAQ />
<ServiceAreas />
<ContactForm />
<FinalCTA />
    </main>
  );
}