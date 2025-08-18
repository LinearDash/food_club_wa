const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 px-4 text-gray-900 scroll-mt-24">
      {/* Main heading */}
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">About Us</h2>

      {/* Company description */}
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-10">
        Food Club WA is all about bold flavors, friendly faces, and serving great food wherever the road takes us.
      </p>

      {/* Key highlights grid - showcases main selling points */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Local sourcing highlight */}
        <div className="bg-white rounded-xl shadow-sm border border-primary/10 p-6">
          <h3 className="font-semibold text-xl mb-2">Local & Fresh</h3>
          <p className="text-gray-700">We source quality local ingredients and prep fresh every day.</p>
        </div>

        {/* Seasonal menu highlight */}
        <div className="bg-white rounded-xl shadow-sm border border-primary/10 p-6">
          <h3 className="font-semibold text-xl mb-2">Seasonal Specials</h3>
          <p className="text-gray-700">Rotating menus that keep things exciting all year round.</p>
        </div>

        {/* Events and catering highlight */}
        <div className="bg-white rounded-xl shadow-sm border border-primary/10 p-6">
          <h3 className="font-semibold text-xl mb-2">Events & Catering</h3>
          <p className="text-gray-700">From festivals to private parties—we bring the kitchen to you.</p>
        </div>
      </div>

      {/* Statistics section - displays key metrics */}
      <div className="max-w-4xl mx-auto grid grid-cols-3 text-center">
        <div>
          <div className="text-3xl font-bold text-primary">100+</div>
          <div className="text-gray-600">Events Served</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary">4.9</div>
          <div className="text-gray-600">Avg. Rating</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary">7 Days</div>
          <div className="text-gray-600">A Week On Call</div>
        </div>
      </div>
    </section>
  );
};

export default About;