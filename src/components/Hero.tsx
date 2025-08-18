const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-[url('/TruckPic.png')] bg-cover bg-center text-white relative"
    >
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-xl px-6 sm:px-0 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">Food Truck WA</span>
        </h1>
        <p className="text-base sm:text-xl mb-6 text-white/90">Fresh bites, rolling to your city!</p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-sm">🔥 Fresh & Fast</span>
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-sm">🌱 Vegan Options</span>
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-sm">⭐ 4.9 Rated</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/menu"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 w-full sm:w-auto inline-block"
          >
            See Menu
          </a>
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
