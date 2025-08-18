import Image from "next/image";

const Team = () => {
  // Team member data - replace with actual team photos and info
  // Current images are placeholders from the food menu
  const members = [
    { name: "Alex Carter", role: "Head Chef", img: "/Food_Photo/BeefBurgerandchips.jpg" },
    { name: "Maya Singh", role: "Operations Lead", img: "/Food_Photo/CinnamonandberryDonut.jpg" },
    { name: "Liam Brown", role: "Event Coordinator", img: "/TruckPic.png" },
  ];

  return (
    <section id="team" className="py-20 bg-white px-4 text-gray-900">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Our Team</h2>

      {/* Team description */}
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-10">
        Small team, big heart. Meet the folks who keep Food Club WA rolling.
      </p>

      {/* Team members grid - responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m) => (
          <div key={m.name} className="bg-white rounded-xl shadow-sm border border-primary/10 p-6 text-center">
            {/* Team member photo - circular with border */}
            <Image
              src={m.img}
              alt={`${m.name} — ${m.role}`}
              width={96}
              height={96}
              className="mx-auto mb-3 w-24 h-24 rounded-full object-cover border-2 border-primary/20"
            />

            {/* Team member info */}
            <div className="font-semibold text-xl">{m.name}</div>
            <div className="text-gray-600">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 