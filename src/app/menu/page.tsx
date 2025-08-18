import FoodCard from "@/components/cards/foodCard";

export default function MenuPage() {
  const items = [
    { name: "Beef Burger and Chips", price: "$8", img: "/BeefBurgerandchips.jpg" },
    { name: "Cinnamon and Berry Donut", price: "$6", img: "/CinnamonandberryDonut.jpg" },
    { name: "Schnitzel Loaded Chicken", price: "$5", img: "/schnitzloadedchicken.jpg" },
    { name: "Classic Hotdog", price: "$7", img: "/TruckPic.png" },
    { name: "Loaded Fries", price: "$5", img: "/TruckPic.png" },
    { name: "Veggie Wrap", price: "$6", img: "/TruckPic.png" },
    { name: "Spicy Tacos", price: "$7", img: "/TruckPic.png" },
    { name: "Grilled Cheese", price: "$4", img: "/TruckPic.png" },
    { name: "Chicken Nuggets", price: "$5", img: "/TruckPic.png" },
  ];

  return (
    <section className="py-20 bg-gray-50 text-gray-900 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary">Full Menu</h1>
      <p className="text-center text-gray-700 mb-12">All your favorites from Food Truck WA</p>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <FoodCard key={i} name={item.name} price={item.price} img={item.img} />
        ))}
      </div>
    </section>
  );
} 