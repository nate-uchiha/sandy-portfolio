import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
// import EventGallery from "@/components/EventGallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      {/* <Projects /> */}
      {/* <EventGallery /> */}
      <Contact />
    </main>
  );
}