import Image from "next/image";

// Testimonials section - shows customer reviews on the homepage
const Testimonials = () => {
  // Static testimonials data. Replace with real reviews later if desired.
  const reviews = [
    {
      name: "Sophie Nguyen",
      role: "Local Guide",
      img: "/Logo.png",
      quote:
        "Best food truck in WA. The burgers are juicy, the fries are crisp, and the team is super friendly!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Event Organizer",
      img: "/Food_Photo/fishandchips.jpg",
      quote:
        "We booked them for our festival—service was smooth and the crowd loved the menu!",
      rating: 5,
    },
    {
      name: "Amelia Rossi",
      role: "Regular Customer",
      img: "/Food_Photo/CinnamonandberryDonut.jpg",
      quote:
        "I keep coming back for the schnitzel. Consistently delicious and fast!",
      rating: 4,
    },
  ];

  // Utility to render star rating using Unicode stars for simplicity
  const renderStars = (count: number) => {
    const full = "★".repeat(count);
    const empty = "☆".repeat(5 - count);
    return (
      <span aria-label={`${count} out of 5 stars`} className="text-yellow-300">
        {full}
        <span className="text-yellow-200/40">{empty}</span>
      </span>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary px-4 text-gray-900 scroll-mt-24">
      {/* Section heading and blurb */}
      <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">Customer Reviews</h2>
      <p className="text-center text-white mb-10">What our customers say about Food Club WA</p>

      {/* Testimonials grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure key={r.name} className="bg-white rounded-xl shadow-sm border border-primary/10 p-6">
            {/* Avatar and meta */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={r.img}
                alt={`${r.name} avatar`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover border border-primary/20"
              />
              <figcaption>
                <div className="font-semibold text-gray-900">{r.name}</div>
                <div className="text-sm text-gray-600">{r.role}</div>
              </figcaption>
            </div>

            {/* Quote */}
            <blockquote className="text-gray-800 leading-relaxed mb-4">“{r.quote}”</blockquote>

            {/* Rating */}
            <div className="text-lg">{renderStars(r.rating)}</div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 