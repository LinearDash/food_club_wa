// Events page - displays upcoming food truck events and locations
// This is a dedicated page accessible from the navbar and homepage
import EventCard from "@/components/cards/eventCard";

export default function EventsPage() {
  // Sample event data - replace with real upcoming events
  // In a real app, this would come from a calendar API or CMS
  const events = [
    { name: "Central Park Pop-up", date: "Aug 20", location: "Central Park, Pokhara", img: "/TruckPic.png" },
    { name: "Lakeside Food Fest", date: "Sep 5", location: "Lakeside", img: "/TruckPic.png" },
    { name: "University Carnival", date: "Sep 15", location: "University Grounds", img: "/TruckPic.png" },
  ];

  return (
    <section className="pt-24 py-20 bg-gray-50 text-gray-900 px-4">
      {/* Page heading and description */}
      <h1 className="text-4xl font-bold text-center mb-6 text-primary">Upcoming Events</h1>
      <p className="text-center text-gray-700 mb-12">Find Food Club WA at these locations and dates</p>

      {/* Events grid - responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {events.map((e) => (
          <EventCard key={`${e.name}-${e.date}`} name={e.name} date={e.date} location={e.location} img={e.img} />
        ))}
      </div>
    </section>
  );
}