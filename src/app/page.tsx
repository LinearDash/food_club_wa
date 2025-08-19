// Homepage component - main landing page for Food Club WA
// Imports all the main sections and renders them in order
import Hero from "@/components/homepageComp/Hero";
import Events from "@/components/homepageComp/Events";
import About from "@/components/homepageComp/About";
import Contact from "@/components/homepageComp/Contact";
import Menu from "@/components/homepageComp/Menu";
import Team from "@/components/homepageComp/Team";
import Testimonials from "@/components/homepageComp/Testimonials";

export default function Home() {
  return (
    <>
      {/* Hero section - full-screen welcome with background image */}
      <Hero />

      {/* Menu preview - shows 3 sample items with link to full menu */}
      <Menu />

      {/* Events section - displays upcoming food truck events */}
      <Events />

      {/* About section - company info, highlights, and statistics */}
      <About />

      {/* Testimonials section - customer reviews */}
      <Testimonials />

      {/* Team section - introduces key team members */}
      <Team />

      {/* Contact section - contact form and business information */}
      <Contact />
    </>
  );
}
