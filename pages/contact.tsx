"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="mt-20 relative min-h-screen bg-gradient-to-b from-[#0a0a0e] via-[#141417] to-[#0a0a0e] text-white overflow-hidden py-20 px-6 md:px-20">
        {/* Glowing Background Animation */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.12),transparent_70%)] animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/20 blur-[150px]" />

        {/* Header */}
        <div className="relative z-10 text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-4"
          >
            Let’s{" "}
            <span className="text-orange-500 drop-shadow-[0_0_10px_rgba(255,100,0,0.6)]">
              Connect
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Have a vision in mind? Let’s bring it to life — from concept to
            cinematic reality.
          </motion.p>
        </div>

        {/* Contact Form + Info */}
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#121217]/60 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_25px_rgba(255,100,0,0.1)] border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">
              Send Us a Message
            </h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-orange-500 focus:ring-0 transition-all"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-orange-500 focus:ring-0 transition-all"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-orange-500 focus:ring-0 transition-all resize-none"
                required
              />
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-3 rounded-lg shadow-[0_0_20px_rgba(255,100,0,0.4)] hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Contact Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Reach Out Directly
              </h2>
              <p className="text-gray-400 mb-2">📍 Enugu, Nigeria</p>
              <a
                href="mailto:contact@embercraftstudio.com"
                className="text-orange-500 hover:underline flex items-center space-x-2"
              >
                <FaEnvelope /> <span>contact@embercraftstudio.com</span>
              </a>
              <a
                href="https://wa.me/2348109398547"
                target="_blank"
                className="text-orange-500 hover:underline flex items-center space-x-2 mt-2"
              >
                <FaWhatsapp /> <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-white/5 p-3 rounded-full hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
