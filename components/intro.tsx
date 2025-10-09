// export default function Intro() {
//   return (
//     <section
//       id="about"
//       className="bg-white py-20 px-6 md:px-12 lg:px-20 text-center md:text-left"
//     >
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Image or short video */}
//         <div className="relative rounded-2xl overflow-hidden shadow-lg">
//           <img
//             src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
//             alt="EmberCraft Studio workspace"
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-black/30"></div>
//         </div>

//         {/* Text content */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             About <span className="text-orange-600">EmberCraft Studio</span>
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed mb-6">
//             At EmberCraft Studio, we believe creativity is the spark that brings
//             stories to life. Our team blends art, photography, and modern design
//             to create visuals that resonate — helping brands and individuals
//             express their vision through stunning imagery and thoughtful design.
//           </p>
//           <p className="text-gray-600">
//             From captivating portraits to innovative digital designs, every
//             project we take on is a reflection of passion, detail, and
//             storytelling.
//           </p>

//           <a
//             href="#portfolio"
//             className="mt-8 inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
//           >
//             Explore Our Work
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-24 overflow-hidden"
    >
      {/* Decorative blur background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-orange-600/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* Left side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
              alt="Studio workspace"
              className="object-cover w-full h-[500px] md:h-[550px] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </motion.div>

        {/* Right side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            We Don’t Just Create — <br />
            <span className="text-orange-500">We Ignite Ideas</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            EmberCraft Studio is a collective of creators, designers, and
            storytellers. We capture the emotion behind every frame, blending
            art and innovation to craft visuals that move people and define
            brands.
          </p>

          <p className="text-gray-400">
            Whether it’s a bold campaign or an intimate portrait, we infuse
            every project with passion, precision, and purpose.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/portfolio"
            className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all"
          >
            See Our Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
