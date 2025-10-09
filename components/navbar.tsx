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

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    "About",
    "Portfolio",
    "Services",
    "Pricing",
    "FAQ",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-[0_0_25px_rgba(255,100,0,0.1)] transition-all duration-300 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white tracking-tight">
          <Link href="/">
            Ember<span className="text-orange-500">Craft</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            const route = `/${item.toLowerCase()}`;
            const isActive = pathname === route;

            return (
              <Link
                key={item}
                href={route}
                className={`relative font-medium tracking-wide transition-colors duration-300 group ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-orange-500"
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
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
            {navItems.map((item, i) => {
              const route = `/${item.toLowerCase()}`;
              const isActive = pathname === route;

              return (
                <Link
                  key={i}
                  href={route}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-orange-500"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
