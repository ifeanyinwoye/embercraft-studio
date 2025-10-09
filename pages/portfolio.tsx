"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

const categories = [
  "All",
  "Photography",
  "Brand Design",
  "Web Design",
  "Video Projects",
];

const projects = [
  {
    id: 1,
    title: "Ethereal Portraits",
    category: "Photography",
    client: "Private Client",
    description:
      "A cinematic portrait series exploring light and emotion through minimalist frames.",
    image: "/images/photo1.jpg",
  },
  {
    id: 2,
    title: "Luxe Brand Identity",
    category: "Brand Design",
    client: "Aura Cosmetics",
    description:
      "Elegant logo, typography, and visual system for a premium skincare brand.",
    image: "/images/brand1.jpg",
  },
  {
    id: 3,
    title: "Digital Flow UI",
    category: "Web Design",
    client: "Techflow Agency",
    description:
      "Clean, modern interface for a tech consultancy that bridges creativity and code.",
    image: "/images/web1.jpg",
  },
  {
    id: 4,
    title: "Urban Frames",
    category: "Photography",
    client: "City Life Magazine",
    description:
      "Capturing city energy through moody street visuals and depth of perspective.",
    image: "/images/photo2.jpg",
  },
  {
    id: 5,
    title: "The Ember Short Film",
    category: "Video Projects",
    client: "Independent",
    description:
      "A cinematic short capturing transformation and creative ignition.",
    image: "/images/video1.jpg",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0a0a0e] via-[#141417] to-[#0a0a0e] text-white">
        {/* Subtle moving glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.15)_0%,transparent_70%)] animate-pulse-slow"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-40"
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 1, 0.3],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.15,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="mt-14 min-h-72 px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
          >
            Every frame tells a story. <br />
            <span className="text-orange-500">Here are ours.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            A showcase of our passion, precision, and creative storytelling —
            where visuals speak louder than words.
          </motion.p>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-500/20 blur-[120px]" />
      </section>

      {/* Portfolio Lists */}
      <section className="mt-14 min-h-screen bg-[#0a0a0e] text-white py-24 px-6">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.1)_0%,transparent_70%)] blur-3xl"></div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-orange-500">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into our world of visuals — each project crafted with
            purpose and passion.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-[0_0_20px_rgba(255,100,0,0.5)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
                className="relative cursor-pointer group overflow-hidden rounded-2xl bg-[#141417]/50 border border-white/10 hover:border-orange-500/40 transition-all"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-72 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-[#141417] border border-white/10 rounded-3xl max-w-3xl w-full p-8 shadow-[0_0_40px_rgba(255,100,0,0.2)]"
              >
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={500}
                  className="rounded-xl object-cover mb-6"
                />
                <h2 className="text-3xl font-bold text-orange-500 mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 mb-1">
                  <span className="text-white font-semibold">Client:</span>{" "}
                  {selectedProject.client}
                </p>
                <p className="text-gray-300 mt-4">
                  {selectedProject.description}
                </p>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 bg-orange-500/20 hover:bg-orange-500/40 text-white px-3 py-1.5 rounded-full text-sm transition"
                >
                  ✕ Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Contact */}
      <div className="mt-14 mb-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
        >
          Ready to <span className="text-orange-500">ignite</span> ideas
          together?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Let’s collaborate and craft visuals that move people and define the
          next generation of digital storytelling.
        </motion.p>

        {/* Button with shimmer effect */}
        <Link href="/cantact">
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative inline-block px-10 py-4 rounded-full text-lg font-semibold text-black bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-400 transition-all duration-500 shadow-[0_0_30px_rgba(255,140,0,0.5)] hover:shadow-[0_0_50px_rgba(255,140,0,0.8)] overflow-hidden"
          >
            <span className="relative z-10">Let’s Collaborate</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></span>
          </motion.a>
        </Link>
      </div>
      <Footer />
    </>
  );
}
