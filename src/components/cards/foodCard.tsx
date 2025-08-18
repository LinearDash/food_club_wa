import Image from "next/image";

// Props interface for FoodCard component
export type FoodCardProps = {
  name: string;        // Food item name
  price: string;       // Price display (e.g., "$8")
  img: string;         // Image path for the food item
  description?: string; // Optional description that shows on hover
};

export default function FoodCard({ name, price, img, description }: FoodCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden border border-primary/10 transition transform hover:-translate-y-1">
      {/* Image container with hover effects */}
      <div className="relative">
        {/* Food image - scales up slightly on hover */}
        <Image
          src={img}
          alt={name}
          width={600}
          height={300}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Description overlay - appears on hover if description is provided */}
        {description && (
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white text-base sm:text-lg leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
            {description}
          </div>
        )}
      </div>

      {/* Card footer - food name and price */}
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        {/* Price badge - changes color on hover */}
        <span className="font-bold text-primary bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors rounded-full px-2 py-1">
          {price}
        </span>
      </div>
    </div>
  );
}