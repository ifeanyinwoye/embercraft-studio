"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaLightbulb,
  FaPencilRuler,
  FaFilm,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Photography",
    desc: "Capturing timeless moments — weddings, portraits, events, and product shoots with cinematic precision.",
    img: "/images/service-photography.png",
  },
  {
    title: "Branding & Graphic Design",
    desc: "Building strong brand identities through stunning logos, visuals, and cohesive design language.",
    img: "/images/service-video.png",
  },
  {
    title: "Web / UI Design",
    desc: "Designing sleek, interactive, and user-friendly web experiences that elevate your digital presence.",
    img: "/images/service-web.png",
  },
  {
    title: "Video Editing & Creative Direction",
    desc: "From raw footage to emotion-packed visuals — crafting stories that inspire and engage audiences.",
    img: "/images/service-editing.png",
  },
];

const steps = [
  {
    icon: <FaLightbulb className="text-orange-500 text-3xl mb-4" />,
    title: "Concept & Discovery",
    desc: "Understanding your story, goals, and vision to lay the creative foundation.",
  },
  {
    icon: <FaPencilRuler className="text-orange-500 text-3xl mb-4" />,
    title: "Design & Direction",
    desc: "Crafting the visual language, style, and creative direction that defines your brand.",
  },
  {
    icon: <FaFilm className="text-orange-500 text-3xl mb-4" />,
    title: "Execution & Editing",
    desc: "Turning imagination into reality through stunning visuals and cinematic precision.",
  },
  {
    icon: <FaCheckCircle className="text-orange-500 text-3xl mb-4" />,
    title: "Delivery & Feedback",
    desc: "Delivering your masterpiece with room for feedback until it’s perfect.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="mt-10 min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0a0a0e] via-[#141417] to-[#0a0a0e] text-white">
        {/* Subtle animated glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.15)_0%,transparent_70%)] animate-pulse-slow" />

        {/* Floating ambient particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-[2px] h-[2px] bg-orange-500 rounded-full opacity-30"
              animate={{
                y: [0, -25, 0],
                opacity: [0.3, 0.9, 0.3],
                x: [0, Math.random() * 10 - 5, 0],
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
            We Turn{" "}
            <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(255,100,0,0.4)]">
              Ideas
            </span>{" "}
            Into Visuals
            <br />
            That Speak Louder Than Words.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            From branding to motion design — EmberCraft brings imagination,
            precision, and storytelling together to create visuals that *move*
            people.
          </motion.p>
        </div>

        {/* Subtle Glow at the Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] h-[200px] bg-orange-500/20 blur-[120px]" />
      </section>

      {/* What we Offer */}
      <section className=" min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#141417] to-[#0b0b0f] text-white py-24 px-6 md:px-20 overflow-hidden">
        {/* Subtle glowing particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-20"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
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

        {/* Radial glow */}
        <div className="mt-20  inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08)_0%,transparent_70%)] blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-center mb-16"
          >
            What We <span className="text-orange-500">Offer</span>
          </motion.h1>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_35px_rgba(255,100,0,0.25)] hover:-translate-y-3 transition-all duration-500"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-orange-400 mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ProcessSection */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0e] via-[#141417] to-[#0a0a0e] text-white overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.12)_0%,transparent_70%)] blur-3xl"></div>

        {/* Title */}
        <div className="relative z-10 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Our <span className="text-orange-500">Creative Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Every masterpiece starts with a spark — here’s how we transform
            ideas into stunning visuals.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative z-10 grid gap-12 md:grid-cols-4 max-w-7xl mx-auto px-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative group bg-[#141417]/60 border border-white/10 rounded-2xl p-8 text-center shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,100,0,0.25)] transition-all duration-500"
            >
              <div className="flex flex-col items-center">
                {step.icon}
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-500 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Subtle bottom orange glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-500/20 blur-[120px]" />
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
