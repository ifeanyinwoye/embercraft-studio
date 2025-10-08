// import React, { useState, useEffect } from "react";

// const testimonials = [
//   {
//     quote:
//       "EmberCraft transformed our vision into something truly cinematic. Their attention to detail and storytelling made our campaign unforgettable.",
//     name: "Aisha Bello",
//     title: "Brand Manager at NovaTech",
//   },
//   {
//     quote:
//       "The team at EmberCraft brought our brand to life with creativity and precision. Every shot told a story — pure art in motion.",
//     name: "Daniel Okoro",
//     title: "Creative Director at VisioWorks",
//   },
//   {
//     quote:
//       "From concept to final cut, EmberCraft exceeded our expectations. Their visuals not only looked amazing but connected emotionally with our audience.",
//     name: "Chinwe Adeyemi",
//     title: "Founder of Bloom Agency",
//   },
//   {
//     quote:
//       "Working with EmberCraft felt like collaborating with artists who truly understood our goals. The result was beyond what we imagined.",
//     name: "Michael Eze",
//     title: "CEO of FrameLab Studios",
//   },
// ];

// const TestimonialSection = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 6000); // 6 seconds per slide
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-gradient-to-b from-[#0b0b0f] to-[#1a1a22] text-white py-24 px-6 md:px-20 text-center relative overflow-hidden">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
//           “Crafting Visuals That Tell Stories”
//         </h2>

//         <div className="relative h-56 md:h-48">
//           {testimonials.map((t, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === current ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <div className="bg-[#141417] rounded-2xl shadow-lg p-8 md:p-10 mx-auto max-w-3xl">
//                 <p className="text-gray-300 italic mb-6 text-lg">{`“${t.quote}”`}</p>
//                 <h3 className="text-orange-500 font-semibold text-lg">
//                   — {t.name}
//                 </h3>
//                 <p className="text-gray-400 text-sm">{t.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex justify-center mt-8 space-x-3">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === current ? "bg-orange-500 w-6" : "bg-gray-600"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

import React from "react";

const testimonials = [
  {
    quote:
      "EmberCraft captured the essence of our brand perfectly — the visuals felt alive, emotional, and unforgettable.",
    name: "Aisha Bello",
    title: "Brand Manager — NovaTech",
  },
  {
    quote:
      "From moodboards to final delivery, EmberCraft brought cinematic magic into every detail. True creative professionals.",
    name: "Daniel Okoro",
    title: "Creative Director — VisioWorks",
  },
  {
    quote:
      "Their work speaks emotion. Every project feels like a short film — powerful, intentional, and timeless.",
    name: "Chinwe Adeyemi",
    title: "Founder — Bloom Agency",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0b0b0f] to-[#141417] text-white py-24 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-4">
          “Crafting Visuals That Tell Stories”
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Every frame, every pixel, and every sound is designed to connect —
          inspiring emotions that last.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)] animate-fade-up"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
              “{t.quote}”
            </p>
            <div className="border-t border-white/10 pt-4">
              <h3 className="text-orange-500 font-semibold text-lg">
                {t.name}
              </h3>
              <p className="text-gray-400 text-sm">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
