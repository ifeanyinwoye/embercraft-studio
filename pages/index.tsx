import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Intro from "../components/intro";
import ProjectShowcase from "../components/projectsShowCase";
import QuickLinks from "../components/quickLinks";
import TestimonialSection from "../components/testimonialSection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <Intro />
        <ProjectShowcase />
        <QuickLinks />
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
}
