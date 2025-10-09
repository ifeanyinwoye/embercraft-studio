"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Every project is unique. Most branding or visual design projects take 1–3 weeks, while full creative packages may take up to 6 weeks depending on complexity.",
  },
  {
    question: "Do you offer custom pricing?",
    answer:
      "Absolutely. If your project doesn’t fit into our listed packages, we’ll tailor a plan specifically for your needs.",
  },
  {
    question: "What’s your payment process?",
    answer:
      "We require a 50% deposit upfront to begin, and the rest is paid upon final delivery. Secure payment links are provided.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes! We include up to 3 rounds of revisions for all design and visual projects to ensure your satisfaction.",
  },
  {
    question: "Do you collaborate with other creatives or agencies?",
    answer:
      "Yes — EmberCraft often partners with studios, agencies, and freelancers to deliver large-scale creative projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-[#0a0a0a] via-black to-[#111] text-white min-h-screen pt-16 pb-24">
        {/* Hero Section */}
        <section className="relative min-h-screen text-center px-6 mb-20 overflow-hidden">
          {/* Gradient and glow background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#120808] to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.12),transparent_70%)]" />

          {/* Floating ember particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <span
                key={i}
                className="absolute bg-orange-500 rounded-full opacity-20 animate-pulse"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative text-5xl md:text-6xl font-extrabold z-10 mt-40"
          >
            Got{" "}
            <span className="text-orange-500 drop-shadow-[0_0_10px_rgba(255,100,0,0.8)]">
              Questions
            </span>
            ?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative text-gray-300 mt-6 max-w-3xl mx-auto text-lg z-10 leading-relaxed"
          >
            We’ve compiled some of the most common inquiries to help you
            understand how we craft emotion through{" "}
            <span className="text-orange-400">design</span>,
            <span className="text-orange-400"> storytelling</span>, and
            <span className="text-orange-400"> visuals</span>.
          </motion.p>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-6 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-800 rounded-2xl overflow-hidden bg-[#141414]/70 backdrop-blur-md hover:border-orange-500/50 transition-all duration-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium text-gray-200 hover:text-orange-400"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-orange-400" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-400 border-t border-gray-800"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center mt-20 px-6">
          <div className="inline-block px-8 py-6 rounded-2xl border border-orange-500/30 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] shadow-[0_0_25px_rgba(255,100,0,0.2)]">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Didn’t find what you’re looking for?
            </h3>
            <p className="text-gray-400 mb-6">
              Let’s connect and discuss how we can bring your vision to life.
            </p>
            <Link href="/contact">
              <button className="px-6 py-2 cursor-pointer bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,100,0,0.4)]">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
