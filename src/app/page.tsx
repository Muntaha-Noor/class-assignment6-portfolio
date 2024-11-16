import About from "./about/page";
import Hero from "./components/hero";
import Contact from "./contact/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Skills /> 
    <Contact />
    </>
  );
}
