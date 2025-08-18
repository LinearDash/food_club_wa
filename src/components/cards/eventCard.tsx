import Image from "next/image";

export type EventCardProps = {
  name: string;
  date: string;
  location: string;
  img: string;
};

export default function EventCard({ name, date, location, img }: EventCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md border border-primary/10 transition transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <Image src={img} alt={name} width={600} height={300} className="w-full h-36 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        {/* Hover overlay for date & location */}
        <div className="hidden md:block absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white text-sm sm:text-base leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="mb-1">📅 {date}</p>
          <p>📍 {location}</p>
        </div>
      </div>
      <div className="p-5 text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        {/* Mobile visible details (no hover on touch) */}
        <div className="md:hidden text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-medium text-gray-800">Date:</span> {date}
          </p>
          <p>
            <span className="font-medium text-gray-800">Location:</span> {location}
          </p>
        </div>
      </div>
    </div>
  );
} 