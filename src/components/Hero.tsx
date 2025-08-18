const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-[url('/TruckPic.png')] bg-cover bg-center text-white relative"
    >
      <div className="bg-black/60 p-8 rounded-xl text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">Food Truck WA 🚚</h1>
        <p className="text-xl mb-6 text-white">Fresh bites, rolling to your city!</p>
        <a
          href="/menu"
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90"
        >
          See Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
