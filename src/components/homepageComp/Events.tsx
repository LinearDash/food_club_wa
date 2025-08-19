import EventCard from "@/components/cards/eventCard";
import Link from "next/link";

const Events = () => {
  // Sample event data - in a real app, this would come from a CMS or API
  const events = [
    { name: "Central Park Pop-up", date: "Aug 20", location: "Central Park, Pokhara", img: "/TruckPic.png" },
    { name: "Lakeside Food Fest", date: "Sep 5", location: "Lakeside", img: "/TruckPic.png" },
    { name: "University Carnival", date: "Sep 15", location: "University Grounds", img: "/TruckPic.png" },
  ];

  return (
    <section id="events" className="py-20 bg-accent px-4 text-gray-900 scroll-mt-24">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-950">Events</h2>

       {/* Event Description */}
      <p className="max-w-3xl mx-auto text-center text-lg mb-10">
        Discover the exciting events we&apos;ve been a part of and join us for more unforgettable experiences!
      </p>

      {/* Events grid - responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((e) => (
          <EventCard key={`${e.name}-${e.date}`} name={e.name} date={e.date} location={e.location} img={e.img} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/events" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90">
          See all events
        </Link>
      </div>
    </section>
  );
};

export default Events;