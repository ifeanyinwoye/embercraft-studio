// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-gray-900 tracking-tight">
//           Ember<span className="text-orange-600">Craft</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8">
//           {["Home", "About", "Portfolio", "Services", "Contact"].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
//             >
//               {item}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Toggle Button */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-gray-800 hover:text-orange-600 transition"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown with Animation */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
//           isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
//         } bg-white border-t border-gray-200 shadow-md`}
//       >
//         <div className="flex flex-col items-center py-4 space-y-4">
//           {["Home", "About", "Portfolio", "Services", "Contact"].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               onClick={() => setIsOpen(false)}
//               className="text-gray-800 hover:text-orange-600 font-medium transition"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-[0_0_25px_rgba(255,100,0,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white tracking-tight">
          Ember<span className="text-orange-500">Craft</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {["About", "Portfolio", "Services", "Pricing", "FAQ", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-orange-500 font-medium tracking-wide transition-colors duration-300 group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-orange-500 transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0b0b0f]/95 backdrop-blur-lg border-t border-white/10 shadow-lg">
          <div className="flex flex-col items-start px-8 py-6 space-y-5">
            {[
              "About",
              "Portfolio",
              "Services",
              "Pricing",
              "FAQ",
              "Contact",
            ].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-orange-500 text-lg font-medium transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
              </a>
            ))}

            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(255,100,0,0.3)] hover:scale-105 transition-transform duration-300">
              Let’s Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
