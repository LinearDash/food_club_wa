import Link from "next/link";
import FoodCard from "@/components/cards/foodCard";

const Menu = () => {
  // Sample menu items for the homepage preview
  // This shows just 3 items to give visitors a taste - full menu available at /menu
  const items = [
    { name: "Beef Burger and Chips", price: "$8", img: "/Food_Photo/BeefBurgerandchips.jpg", description: "Juicy beef patty with crispy chips and house sauce." },
    { name: "Cinnamon and Berry Donut", price: "$6", img: "/Food_Photo/CinnamonandberryDonut.jpg", description: "Warm cinnamon donut topped with fresh berries." },
    { name: "Schnitzel Loaded Chicken", price: "$5", img: "/Food_Photo/schnitzloadedchicken.jpg", description: "Crispy chicken schnitzel loaded with flavor." },
  ];

  return (
    <section id="menu" className="py-20 bg-background-alt text-gray-900 scroll-mt-24">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">Our Menu</h2>

      {/* Menu items grid - 3 columns on desktop, responsive on mobile */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {items.map((item, i) => (
          <FoodCard key={i} name={item.name} price={item.price} img={item.img} description={item.description} />
        ))}
      </div>

      {/* Call-to-action to view full menu */}
      <div className="mt-10 text-center">
        <Link href="/menu" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90">
          See full menu
        </Link>
      </div>
    </section>
  );
};

export default Menu;