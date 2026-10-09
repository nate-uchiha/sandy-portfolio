import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import EventGallery from "@/components/EventGallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <div className="site-background" aria-hidden="true">
        <div className="site-background__orb site-background__orb--purple" />
        <div className="site-background__orb site-background__orb--pink" />
        <div className="site-background__orb site-background__orb--cyan" />
      </div>

      <div className="site-grid" aria-hidden="true" />

      <Navbar />

      <Hero />

      <About />

      <Expertise />

      <Projects />

      <EventGallery />

      <Contact />
    </main>
  );
}