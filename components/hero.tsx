// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full">
//       {/* Background Image or Video */}
//       <div className="absolute inset-0">
//         {/* Option 1: Image Background */}
//         <img
//           src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1920&q=80"
//           alt="Creative studio background"
//           className="w-full h-full object-cover"
//         />

//         {/* Option 2 (replace above img): Video Background */}
//         {/* <video
//           src="/videos/hero.mp4"
//           autoPlay
//           loop
//           muted
//           className="w-full h-full object-cover"
//         /> */}

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
//         <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
//           Crafting Visuals That Tell{" "}
//           <span className="text-orange-500">Stories</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
//           EmberCraft Studio brings your ideas to life through photography and
//           design — blending creativity with emotion.
//         </p>
//         <a
//           href="#portfolio"
//           className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
//         >
//           View Our Work
//         </a>
//       </div>
//     </section>
//   );
// }

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Video background */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Crafting Visuals That Tell{" "}
          <span className="text-orange-500">Stories</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          EmberCraft Studio brings your ideas to life through photography and
          design — blending creativity with emotion.
        </p>
        <a
          href="#portfolio"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
        >
          View Our Work
        </a>
      </div>
    </section>
  );
}
