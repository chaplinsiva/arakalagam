import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import HighlightVideos from "@/components/HighlightVideos";
import Documentaries from "@/components/Documentaries";
import FeaturedInterviews from "@/components/FeaturedInterviews";
import NetworkChannels from "@/components/NetworkChannels";
import Analytics from "@/components/Analytics";
import Collaboration from "@/components/Collaboration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedInterviews />
        <Achievements />
        <HighlightVideos />
        <Documentaries />
        <NetworkChannels />
        <Analytics />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
