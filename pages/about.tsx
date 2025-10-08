"use client";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ava Morgan",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Liam Carter",
    role: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sophia Lee",
    role: "Motion Artist",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ethan Brooks",
    role: "Technical Director",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  },
];

export default function about() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="mt-14  min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0a0a0e] via-[#141417] to-[#0a0a0e] text-white">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.15)_0%,transparent_70%)] animate-pulse-slow" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-30"
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
          >
            We Don’t Just Create — <br /> We{" "}
            <span className="text-orange-500">Inspire.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            EmberCraft Studio blends emotion and design to craft visual stories
            that ignite imagination.
          </motion.p>
        </div>

        {/* Subtle Glow Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-500/20 blur-[120px]" />
      </section>

      {/* Our Story */}
      <section
        id="about"
        className="relative py-24 bg-[#0a0a0e] text-gray-300 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,100,0,0.2)]">
              <Image
                src="/our-story.png"
                alt="Our Story"
                fill
                className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full -z-10" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Our <span className="text-orange-500">Story</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Born from a passion for storytelling and visual design,
              <span className="text-white font-semibold">
                {" "}
                EmberCraft Studio{" "}
              </span>
              stands as a creative collective redefining the way brands
              communicate. Every frame, pixel, and sound we craft carries
              emotion, purpose, and timeless impact.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              From cinematic visuals to bold identities, we combine creativity
              with technology to ignite imagination and leave lasting
              impressions.
            </p>
          </motion.div>
        </div>

        {/* Soft bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-500/10 blur-[120px]" />
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-[#0b0b0b] to-[#121212] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
          >
            Our Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/10 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                “Crafting visuals that move people.” At EmberCraft, our mission
                is to transform imagination into experiences that touch emotions
                and inspire action.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#1a1a1a] border border-white/10 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                “To redefine digital storytelling through creativity and
                technology.” We aim to merge art and innovation to build
                meaningful, memorable digital experiences for the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0e] via-[#141417] to-[#0a0a0e] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                </div>
                <div className="p-6 text-center relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtle Glow Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-500/20 blur-[120px]"></div>
      </section>

      {/*  */}
      <section className="relative py-32 bg-gradient-to-b from-[#0a0a0e] via-[#141417] to-[#0a0a0e] text-white overflow-hidden">
        {/* Subtle glowing fog background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.1)_0%,transparent_70%)] blur-3xl"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-[3px] h-[3px] bg-orange-400/40 rounded-full"
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
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

        {/* Bottom glowing fog */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-orange-500/25 blur-[140px]" />
      </section>
      <Footer />
    </>
  );
}
