import Hero from "@/components/Hero";
import Events from "@/components/Events";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Events />
      <About />
      <Contact />
    </>
  );
}
