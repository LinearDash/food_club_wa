import Image from "next/image";

const Team = () => {
  const members = [
    { name: "Alex Carter", role: "Head Chef", img: "/Food_Photo/BeefBurgerandchips.jpg" },
    { name: "Maya Singh", role: "Operations Lead", img: "/Food_Photo/CinnamonandberryDonut.jpg" },
    { name: "Liam Brown", role: "Event Coordinator", img: "/TruckPic.png" },
  ];

  return (
    <section id="team" className="py-20 bg-white px-4 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Our Team</h2>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-10">
        Small team, big heart. Meet the folks who keep Food Truck WA rolling.
      </p>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m) => (
          <div
            key={m.name}
            className="group bg-white rounded-xl shadow-sm border border-primary/10 p-6 text-center transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto mb-4 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/20 ring-0 group-hover:ring-2 group-hover:ring-primary/40 transition">
              <Image
                src={m.img}
                alt={`${m.name} — ${m.role}`}
                width={160}
                height={160}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="font-bold text-xl group-hover:text-primary transition-colors">{m.name}</div>
            <div className="font-bold text-gray-700">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 