import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Urban Portrait Series",
    description: "A storytelling photography project capturing city moods.",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Minimal Design Campaign",
    description: "Clean, bold, and modern design visuals for a brand campaign.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Creative Studio Rebrand",
    description: "A full identity redesign for a digital creative agency.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our Top Projects
        </h2>
        <p className="text-gray-400 text-lg">
          A selection of our favorite works — where creativity meets precision.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:opacity-80 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-end p-5 opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-1">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
