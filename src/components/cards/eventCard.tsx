import Image from "next/image";

export type EventCardProps = {
  name: string;
  date: string;
  location: string;
  img: string;
};

export default function EventCard({ name, date, location, img }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-primary/10 transition-shadow overflow-hidden">
      <Image src={img} alt={name} width={600} height={300} className="w-full h-36 sm:h-40 md:h-48 object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="text-sm text-gray-700 space-y-1">
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