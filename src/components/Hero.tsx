const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-[url('/TruckPic.png')] bg-cover bg-center text-white relative"
    >
      <div className="bg-black/60 p-6 sm:p-8 rounded-xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 text-white">Food Truck WA 🚚</h1>
        <p className="text-base sm:text-xl mb-5 sm:mb-6 text-white">Fresh bites, rolling to your city!</p>
        <a
          href="/menu"
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 w-full sm:w-auto inline-block"
        >
          See Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
