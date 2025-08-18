import Image from "next/image";

// Props interface for EventCard component
export type EventCardProps = {
  name: string;     // Event name
  date: string;     // Event date
  location: string; // Event location
  img: string;      // Image path for the event
};

export default function EventCard({ name, date, location, img }: EventCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md border border-primary/10 transition transform hover:-translate-y-1 overflow-hidden">
      {/* Image container with hover effects */}
      <div className="relative">
        {/* Event image - scales up slightly on hover */}
        <Image
          src={img}
          alt={name}
          width={600}
          height={300}
          className="w-full h-36 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover overlay for date & location - only visible on desktop */}
        {/* Mobile users can see this info below the image */}
        <div className="hidden md:block absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white text-sm sm:text-base leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="mb-1">📅 {date}</p>
          <p>📍 {location}</p>
        </div>
      </div>

      {/* Event details - always visible */}
      <div className="p-5 text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{name}</h3>

        {/* Mobile visible details - no hover on touch devices */}
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