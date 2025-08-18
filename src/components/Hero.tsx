"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-[url('/TruckPic.png')] bg-cover bg-center text-white relative overflow-hidden"
    >
      {/* Gradient overlay for better text contrast over the background image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Animated van */}
      <div
        className="absolute bottom-10 animate-[move-left_20s_linear_infinite] text-6xl sm:text-7xl w-screen flex justify-end cursor-pointer"
        onClick={() => {
          const audio = new Audio('/audio/honk.mp3');
          audio.play();
        }}
      >
        🚐💨
      </div>

      <style jsx>{`
        @keyframes move-left {
          0% {
        transform: translateX(100%);
          }
          100% {
        transform: translateX(-100%);
          }
        }
      `}</style>

      {/* Main hero content - positioned above the overlay */}
      <div className="relative z-10 max-w-xl px-6 sm:px-0 text-center">
        {/* Main heading with gradient text effect */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">Food Club WA</span>
        </h1>

        {/* Subtitle text */}
        <p className="text-base sm:text-xl mb-6 text-white/90">Fresh bites, rolling to your city!</p>

        {/* Feature badges highlighting key selling points */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-sm">🔥 Fresh & Fast</span>
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-sm">🌱 Vegan Options</span>
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-sm">⭐ 4.9 Rated</span>
        </div>

        {/* Call-to-action buttons - stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Primary CTA - links to menu page */}
          <a
            href="/menu"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 w-full sm:w-auto inline-block"
          >
            See Menu
          </a>

          {/* Secondary CTA - links to events page */}
          <a
            href="/events"
            className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg shadow-md w-full sm:w-auto inline-block"
          >
            See Past Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
