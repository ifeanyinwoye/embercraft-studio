import Hero from "@/components/hero";
import Navbar from "../components/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import Intro from "@/components/intro";
import ProjectShowcase from "@/components/projectsShowCase";
import QuickLinks from "@/components/quickLinks";
import TestimonialSection from "@/components/testimonialSection";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={geistMono.className}>
      <div className="font-sans min-h-screen bg-gray-50">
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
