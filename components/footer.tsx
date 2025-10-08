// import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaBehance } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-[#0b0b0f] to-[#141417] text-gray-300 pt-16 pb-8 px-6 md:px-20 border-t border-white/10">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
//         {/* Brand Section */}
//         <div>
//           <h2 className="text-3xl font-extrabold text-white mb-4">
//             Ember<span className="text-orange-500">Craft</span>
//           </h2>
//           <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
//             Crafting visuals that ignite emotion and tell timeless stories.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
//           <ul className="space-y-3">
//             {["Home", "About", "Portfolio", "Services", "Contact"].map(
//               (link, i) => (
//                 <li key={i}>
//                   <a
//                     href={`#${link.toLowerCase()}`}
//                     className="hover:text-orange-500 transition-colors duration-300"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-white font-semibold mb-4 text-lg">Connect</h3>
//           <div className="flex justify-center md:justify-start space-x-4">
//             <a
//               href="#"
//               className="bg-white/10 p-3 rounded-full hover:bg-orange-500 hover:scale-110 transition-all duration-300"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="#"
//               className="bg-white/10 p-3 rounded-full hover:bg-orange-500 hover:scale-110 transition-all duration-300"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="#"
//               className="bg-white/10 p-3 rounded-full hover:bg-orange-500 hover:scale-110 transition-all duration-300"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="#"
//               className="bg-white/10 p-3 rounded-full hover:bg-orange-500 hover:scale-110 transition-all duration-300"
//             >
//               <FaBehance />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} EmberCraft Studio — All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaBehance,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b0b0f] to-[#141417] text-gray-300 pt-20 pb-10 px-6 md:px-20 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
            Ember<span className="text-orange-500">Craft</span>
          </h2>
          <p className="text-gray-400 max-w-sm">
            A collective of visual creators crafting cinematic stories through
            design and motion. Every project, a spark of emotion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 uppercase tracking-wide">
            Explore
          </h3>
          <ul className="space-y-3 text-base">
            {[
              "About",
              "Portfolio",
              "Services",
              "Pricing",
              "FAQ",
              "Contact",
            ].map((link, i) => (
              <li key={i} className="group inline-block md:block">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="relative hover:text-orange-500 transition-colors duration-300"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 uppercase tracking-wide">
            Connect
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {[FaInstagram, FaFacebookF, FaTwitter, FaBehance, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/5 p-3 rounded-full hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Divider + Bottom Text */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-500 font-semibold">
            EmberCraft Studio
          </span>{" "}
          — Crafted with passion & precision.
        </p>
      </div>

      {/* Background glow effect */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-orange-500/20 blur-[120px] rounded-full"></div>
    </footer>
  );
};

export default Footer;
