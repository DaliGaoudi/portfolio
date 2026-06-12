import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import About from "@/components/About";
import Path from "@/components/Path";
import Toolkit from "@/components/Toolkit";
import EducationLanguages from "@/components/EducationLanguages";
import Footer from "@/components/Footer";
import RevealMount from "@/components/RevealMount";

export default function Home() {
  return (
    <div id="top">
      <RevealMount />
      <Nav />
      <Hero />
      <Stats />
      <Marquee />
      <div className="container">
        <Work />
        <About />
        <Path />
        <Toolkit />
        <EducationLanguages />
      </div>
      <Footer />
    </div>
  );
}
