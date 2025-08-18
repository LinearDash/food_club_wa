import FoodCard from "@/components/cards/foodCard";

export default function MenuPage() {
  const items = [
    { name: "Beef Burger and Chips", price: "$18", img: "/Food_Photo/BeefBurgerandchips.jpg", description: "Grilled beef, cheddar, lettuce, tomato, and crispy chips." },
    { name: "Cinnamon and Berry Donut", price: "$16", img: "/Food_Photo/CinnamonandberryDonut.jpg", description: "Cinnamon sugar donut topped with fresh berries." },
    { name: "Schnitzel Loaded Chicken", price: "$15", img: "/Food_Photo/schnitzloadedchicken.jpg", description: "Golden fried schnitzel stacked with creamy slaw." },
    { name: "Chicken Manchurian", price: "$27", img: "/Food_Photo/ChickenManchurian.jpg", description: "Crispy chicken tossed in a tangy-spicy sauce." },
    { name: "Chicken Over Rice", price: "$27", img: "/Food_Photo/Chickenoverrice.jpg", description: "Juicy chicken, herbed rice, and our white sauce." },
    { name: "Fish and Chips", price: "$17", img: "/Food_Photo/fishandchips.jpg", description: "Beer-battered fish with hand-cut chips." },
    { name: "Lemon Pepper Squid", price: "$23", img: "/Food_Photo/LemonPepperSquid.jpg", description: "Zesty squid with lemon-pepper seasoning." },
    { name: "Nuggets and Chips", price: "$15", img: "/Food_Photo/Nuggetsandchips.jpg", description: "Crispy nuggets with golden chips." },
    { name: "Pork Belly and Rice", price: "$23", img: "/Food_Photo/PorkBellyandRice.JPG", description: "Slow-cooked pork belly over steamed rice." },
    { name: "Pork Bowl", price: "$18", img: "/Food_Photo/PorkBowl.jpg", description: "Hearty pork bowl with pickled veg and sauce." },
    { name: "Pork on the Bun", price: "$28", img: "/Food_Photo/Porkonthebun.jpg", description: "Pulled pork on a toasted bun with slaw." },
    { name: "Ribs Rice and Salad", price: "$10", img: "/Food_Photo/RibsRiceandSalad.jpg", description: "Tender ribs with rice and a fresh salad." },
  ];

  return (
    <section className="pt-24 py-20 bg-gray-50 text-gray-900 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-primary">Full Menu</h1>
      <p className="text-center text-gray-700 mb-12">All your favorites from Food Truck WA</p>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <FoodCard key={i} name={item.name} price={item.price} img={item.img} description={item.description} />
        ))}
      </div>
    </section>
  );
} 