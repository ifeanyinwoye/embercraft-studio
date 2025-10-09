"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { Check, Infinity, Layers, Sparkles } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Starter Spark",
    tagline: "Perfect for small shoots or single designs",
    price: "$250",
    features: [
      "1-day shoot or single design",
      "Basic retouching & edits",
      "Standard resolution deliverables",
      "Email support",
    ],
    button: "Get Started",
  },
  {
    title: "Creative Flame",
    tagline: "For brands needing more coverage & creativity",
    price: "$750",
    features: [
      "3-day shoot / multi-design project",
      "Advanced editing & motion effects",
      "Full brand asset delivery",
      "Priority support",
    ],
    button: "Let’s Collaborate",
  },
  {
    title: "Ember Elite",
    tagline: "Full storytelling package — design, photo & video",
    price: "$1500",
    features: [
      "End-to-end visual direction",
      "Cinematic photography & film",
      "Branding + creative suite",
      "Dedicated art direction",
    ],
    button: "Join the Elite",
  },
  {
    title: "Custom Plan",
    tagline: "Tailored solutions for agencies or long-term collaborations",
    price: "Contact Us",
    features: [
      "Personalized strategy call",
      "Fully customized creative package",
      "Ongoing creative support",
      "Exclusive EmberCraft partnership benefits",
    ],
    button: "Contact Us",
  },
];

const reasons = [
  {
    icon: <Layers className="w-8 h-8 text-orange-400" />,
    title: "No Templates",
    desc: "Every project is crafted from scratch — built uniquely for your brand’s story.",
  },
  {
    icon: <Infinity className="w-8 h-8 text-orange-400" />,
    title: "Unlimited Creativity",
    desc: "Boundless imagination, no hidden fees. We bring your boldest ideas to life.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-orange-400" />,
    title: "Art Meets Tech",
    desc: "We blend creativity with innovation to craft visuals that feel timeless.",
  },
];

export default function Pricing() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="mt-24 min-h-[75vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0a0a0e] via-[#141417] to-[#0a0a0e] text-white">
        {/* Soft Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.1)_0%,transparent_70%)] blur-[120px]" />

        {/* Animated Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-[3px] h-[3px] bg-orange-400/60 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                // repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Glass Reflection Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent backdrop-blur-[2px]" />

        {/* Hero Text */}
        <div className="relative z-10 px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"
          >
            Creativity Within Your Reach — <br />
            <span className="text-orange-500">Priced to Inspire.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            Choose a plan that fits your vision. Every package is designed to
            spark creativity, precision, and cinematic impact.
          </motion.p>
        </div>

        {/* Bottom Glow Accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-500/25 blur-[120px]" />
      </section>

      {/* Pricing lists */}
      <section className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,85,0,0.15),_transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Our Creative Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Choose the perfect package that matches your creative journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(255,85,0,0.3)",
              }}
              className="relative rounded-2xl bg-[#141414]/80 border border-gray-800 backdrop-blur-md p-8 hover:border-orange-500/50 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-white">
                {plan.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{plan.tagline}</p>

              <div className="text-3xl font-bold mt-6 text-orange-400">
                {plan.price}
              </div>

              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2">
                    <Check className="text-orange-400 w-5 h-5 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full bg-orange-500/20 border border-orange-500 text-orange-300 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition duration-300">
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Why choose us */}
      <section className="relative bg-gradient-to-b from-[#0a0a0a] via-black to-[#111] py-24 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,85,0,0.08),_transparent_70%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Why Choose <span className="text-orange-400">EmberCraft</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            We don’t follow trends — we create timeless experiences that ignite
            emotion and connection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255,85,0,0.25)",
              }}
              className="rounded-2xl border border-gray-800 bg-[#141414]/70 p-8 backdrop-blur-md hover:border-orange-500/50 transition-all duration-500"
            >
              <div className="flex justify-center mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
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
