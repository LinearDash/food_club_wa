import Link from "next/link";
import FoodCard from "@/components/cards/foodCard";

const Menu = () => {
  const items = [
    { name: "Beef Burger and Chips", price: "$8", img: "/Food_Photo/BeefBurgerandchips.jpg" },
    { name: "Cinnamon and Berry Donut", price: "$6", img: "/Food_Photo/CinnamonandberryDonut.jpg" },
    { name: "Schnitzel Loaded Chicken", price: "$5", img: "/Food_Photo/schnitzloadedchicken.jpg" },
  ];
  return (
    <section id="menu" className="py-20 bg-gray-50 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">Our Menu 🍔</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {items.map((item, i) => (
          <FoodCard key={i} name={item.name} price={item.price} img={item.img} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/menu" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90">
          See full menu
        </Link>
      </div>
    </section>
  );
};

export default Menu;