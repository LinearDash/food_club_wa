import FoodCard from "@/components/cards/foodCard";

export default function MenuPage() {
  const items = [
    { name: "Beef Burger and Chips", price: "$18", img: "/Food_Photo/BeefBurgerandchips.jpg" },
    { name: "Cinnamon and Berry Donut", price: "$16", img: "/Food_Photo/CinnamonandberryDonut.jpg" },
    { name: "Schnitzel Loaded Chicken", price: "$15", img: "/Food_Photo/schnitzloadedchicken.jpg" },
    { name: "Chicken Manchurian", price: "$27", img: "/Food_Photo/ChickenManchurian.jpg" },
    { name: "Chicken Over Rice", price: "$27", img: "/Food_Photo/Chickenoverrice.jpg" },
    { name: "Fish and Chips", price: "$17", img: "/Food_Photo/fishandchips.jpg" },
    { name: "Lemon Pepper Squid", price: "$23", img: "/Food_Photo/LemonPepperSquid.jpg" },
    { name: "Nuggets and Chips", price: "$15", img: "/Food_Photo/Nuggetsandchips.jpg" },
    { name: "Pork Belly and Rice", price: "$23", img: "/Food_Photo/PorkBellyandRice.JPG" },
    { name: "Pork Bowl", price: "$18", img: "/Food_Photo/PorkBowl.jpg" },
    { name: "Pork on the Bun", price: "$28", img: "/Food_Photo/Porkonthebun.jpg" },
    { name: "Ribs Rice and Salad", price: "$10", img: "/Food_Photo/RibsRiceandSalad.jpg" },
  ];

  return (
    <section className="pt-24 py-20 bg-gray-50 text-gray-900 px-4">
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