// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const links = [
//   {
//     title: "About Us",
//     desc: "Learn more about our story and what drives our creativity.",
//     href: "#about",
//   },
//   {
//     title: "Portfolio",
//     desc: "Explore our collection of photography and design works.",
//     href: "#portfolio",
//   },
//   {
//     title: "Contact",
//     desc: "Let’s bring your vision to life — reach out today.",
//     href: "#contact",
//   },
// ];

// const QuickLinks = () => {
//   return (
//     <section className="bg-gray-50 py-16 px-6 md:px-20">
//       <div className="max-w-6xl mx-auto text-center mb-10">
//         <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
//           Quick Links
//         </h2>
//         <p className="text-gray-600 text-lg">
//           Navigate through key parts of our studio journey.
//         </p>
//       </div>

//       <div className="grid gap-8 md:grid-cols-3">
//         {links.map((link, index) => (
//           <motion.a
//             key={index}
//             href={link.href}
//             whileHover={{ y: -8 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between text-left border hover:border-black transition duration-300"
//           >
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-900 mb-3">
//                 {link.title}
//               </h3>
//               <p className="text-gray-600">{link.desc}</p>
//             </div>
//             <div className="mt-5 flex items-center text-black font-medium">
//               Explore <ArrowRight className="ml-2 w-5 h-5" />
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default QuickLinks;

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = [
  {
    title: "About Us",
    desc: "Learn more about who we are and our creative philosophy.",
    href: "/about",
  },
  {
    title: "Portfolio",
    desc: "See our best photography and design works in action.",
    href: "/portfolio",
  },
  {
    title: "Contact",
    desc: "Let’s collaborate to bring your vision to life.",
    href: "/contact",
  },
];

const QuickLinks = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151515] to-black pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Explore More
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Navigate through the core of EmberCraft Studio.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3 relative z-10">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="group relative bg-black border border-[#1f1f1f] hover:border-orange-500/70 rounded-2xl p-8 shadow-md hover:shadow-orange-500/20 transition-all duration-500"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-orange-500 transition-colors duration-300">
                {link.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {link.desc}
              </p>
              <div className="flex items-center text-orange-500 font-medium">
                Explore <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
