import Image from "next/image";

export type FoodCardProps = {
  name: string;
  price: string;
  img: string;
};

export default function FoodCard({ name, price, img }: FoodCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden border border-primary/10 transition-shadow">
      <Image src={img} alt={name} width={600} height={300} className="w-full h-48 object-cover" />
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <span className="font-bold text-primary">{price}</span>
      </div>
    </div>
  );
}