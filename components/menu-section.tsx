"use client"

import { Button } from "@/components/ui/button"
import { Flame, Drumstick, IceCream, Percent, Pizza, Soup, Coffee, Utensils, Sandwich, Star } from "lucide-react"
import Image from "next/image"

const BASE_URL = "https://roostershack.touchtakeaway.net/menu"

interface MenuItem {
  id: number
  name: string
  description: string
  image: string
  isPopular?: boolean
  orderUrl: string
}

interface MenuCategory {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  bannerImage: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    id: "meal-deals",
    title: "Meal Deals",
    subtitle: "Value Bundles & Family Feasts",
    icon: <Percent className="w-8 h-8" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 101, name: "Rooster Meal Deal", description: "Any Classic Burger, Regular Fries & Drink.", image: "/images/deal-combo.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-101` },
      { id: 102, name: "Family Feast", description: "4 Burgers, 2 Large Fries, 4 Drinks & 12 Wings.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-102` },
    ],
  },
  {
    id: "piri-piri",
    title: "Piri Piri Chicken",
    subtitle: "Flame Grilled to Perfection",
    icon: <Flame className="w-8 h-8" />,
    bannerImage: "/images/hero-piri-piri.jpg",
    items: [
      { id: 201, name: "Quarter Piri Piri Chicken", description: "Grilled quarter chicken with signature spices.", image: "/images/hero-piri-piri.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-201` },
      { id: 202, name: "Half Piri Piri Chicken", description: "Succulent half chicken grilled to order.", image: "/images/hero-piri-piri.jpg", orderUrl: `${BASE_URL}#item-202` },
      { id: 203, name: "Whole Piri Piri Chicken", description: "Full chicken marinated for 24 hours.", image: "/images/hero-piri-piri.jpg", orderUrl: `${BASE_URL}#item-203` },
    ],
  },
  {
    id: "famous-burgers",
    title: "Famous Burgers",
    subtitle: "Chicken, Beef & Infusion Burgers",
    icon: <Drumstick className="w-8 h-8" />,
    bannerImage: "/images/hero-burger.jpg",
    items: [
      { id: 301, name: "The Classic Rooster", description: "Chicken fillet, lettuce & mayo.", image: "/images/classic-burger.jpg", orderUrl: `${BASE_URL}#item-301` },
      { id: 302, name: "Chicken Fillet Tower", description: "Chicken fillet, hash brown & cheese.", image: "/images/hero-burger.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-302` },
      { id: 303, name: "The Smash Burger", description: "Double beef patty, double cheese & piri mayo.", image: "/images/hero-burger.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-303` },
      { id: 304, name: "The Shack Burger", description: "100% Beef patty with shack sauce.", image: "/images/classic-burger.jpg", orderUrl: `${BASE_URL}#item-304` },
      { id: 305, name: "The Punjabi Burger", description: "Flame grilled with Inferno hot chilli sauce.", image: "/images/spicy-burger.jpg", orderUrl: `${BASE_URL}#item-305` },
    ],
  },
  {
    id: "wraps",
    title: "Wraps",
    subtitle: "Toasted Tortilla Selection",
    icon: <Sandwich className="w-8 h-8" />,
    bannerImage: "/images/hero-piri-piri.jpg",
    items: [
      { id: 401, name: "Piri Chicken Wrap", description: "Grilled chicken with salad & mayo.", image: "/images/hero-piri-piri.jpg", orderUrl: `${BASE_URL}#item-401` },
    ],
  },
  {
    id: "pitta",
    title: "Pitta",
    subtitle: "Freshly Toasted Pittas",
    icon: <Utensils className="w-8 h-8" />,
    bannerImage: "/images/hero-piri-piri.jpg",
    items: [
      { id: 501, name: "Piri Chicken Pitta", description: "Grilled chicken in a soft pitta.", image: "/images/hero-piri-piri.jpg", orderUrl: `${BASE_URL}#item-501` },
    ],
  },
  {
    id: "quesadilla",
    title: "Quesadilla",
    subtitle: "Cheesy Grilled Tortillas",
    icon: <Pizza className="w-8 h-8" />,
    bannerImage: "/images/hero-piri-piri.jpg",
    items: [
      { id: 601, name: "Shack Chicken Quesadilla", description: "Grilled chicken, cheese & salsa.", image: "/images/hero-piri-piri.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-601` },
    ],
  },
  {
    id: "rice-boxes",
    title: "Rice Boxes",
    subtitle: "Spicy Rice Meals",
    icon: <Soup className="w-8 h-8" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 701, name: "Piri Rice Box", description: "Grilled chicken on spicy rice.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-701` },
    ],
  },
  {
    id: "salad-boxes",
    title: "Salad Boxes",
    subtitle: "Fresh & Healthy Greens",
    icon: <Soup className="w-8 h-8" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 801, name: "Garden Salad Box", description: "Healthy mixed salad with grilled chicken.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-801` },
    ],
  },
  {
    id: "southern-fried",
    title: "Southern Fried Chicken",
    subtitle: "Classic Crispy Pieces",
    icon: <Drumstick className="w-8 h-8" />,
    bannerImage: "/images/wings.jpg",
    items: [
      { id: 901, name: "2pc Chicken Piece", description: "Classic crispy fried chicken.", image: "/images/wings.jpg", orderUrl: `${BASE_URL}#item-901` },
    ],
  },
  {
    id: "fried-wings-strips",
    title: "Wings & Strips (Fried)",
    subtitle: "Crispy & Spicy Fried Chicken",
    icon: <Flame className="w-8 h-8" />,
    bannerImage: "/images/wings.jpg",
    items: [
      { id: 1001, name: "6 Spicy Fried Wings", description: "Golden fried spicy wings.", image: "/images/wings.jpg", orderUrl: `${BASE_URL}#item-1001` },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    subtitle: "Tasty Accompaniments",
    icon: <Utensils className="w-8 h-8" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 1101, name: "Regular Fries", description: "Salted potato fries.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-1101` },
      { id: 1102, name: "Piri Piri Fries", description: "Fries with piri piri salt.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-1102` },
    ],
  },
  {
    id: "loaded-fries",
    title: "Loaded Fries",
    subtitle: "Topped with Indulgence",
    icon: <Star className="w-8 h-8" />,
    bannerImage: "/images/hero-burger.jpg",
    items: [
      { id: 1201, name: "Chicken Loaded Fries", description: "Fries with cheese & grilled chicken.", image: "/images/hero-burger.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-1201` },
    ],
  },
  {
    id: "dips",
    title: "Dips",
    subtitle: "House Made Sauces",
    icon: <Soup className="w-8 h-8" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 1301, name: "Piri Mayo Dip", description: "Creamy piri mayo.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-1301` },
    ],
  },
  {
    id: "awesome-shakes",
    title: "Awesome Shakes",
    subtitle: "Thick & Creamy Milkshakes",
    icon: <IceCream className="w-8 h-8" />,
    bannerImage: "/images/shake.jpg",
    items: [
      { id: 1401, name: "Ferrero Rocher Shake", description: "Hazelnut chocolate shake.", image: "/images/shake.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-1401` },
      { id: 1402, name: "Oreo Cookie Shake", description: "Blended with real Oreos.", image: "/images/shake.jpg", orderUrl: `${BASE_URL}#item-1402` },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    subtitle: "Refreshing Beverages",
    icon: <Coffee className="w-8 h-8" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 1501, name: "Soft Drink Can", description: "330ml Chilled can.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-1501` },
      { id: 1502, name: "Mineral Water", description: "500ml Bottled water.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-1502` },
    ],
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FDF8F1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Menu</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground mb-4">Feast Your Eyes</h2>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category) => (
            <div key={category.id}>
              {/* Category Banner */}
              <div className="relative overflow-hidden bg-primary rounded-2xl p-6 md:p-12 mb-8 flex items-center gap-4 min-h-[160px] md:min-h-[200px]">
                <div className="absolute inset-0 z-0">
                  <Image src={category.bannerImage} fill className="object-cover opacity-40" alt={category.title} priority />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="relative z-10 w-12 h-12 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white shrink-0">
                  {category.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-5xl font-black uppercase text-white drop-shadow-lg">{category.title}</h3>
                  <p className="text-white/90 font-bold uppercase text-xs md:text-lg">{category.subtitle}</p>
                </div>
              </div>

              {/* Items Grid with Button Fix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-10 lg:px-20">
                {category.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                      {item.isPopular && (
                        <div className="absolute top-4 left-4 bg-primary text-white font-black uppercase text-[10px] px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow text-center">
                      <h4 className="text-xl font-black uppercase text-foreground mb-2 min-h-[3.5rem] flex items-center justify-center">
                        {item.name}
                      </h4>
                      <p className="text-muted-foreground text-sm flex-grow min-h-[3rem]">
                        {item.description}
                      </p>
                      
                      {/* Fixed Button at the bottom */}
                      <div className="mt-6 pt-2">
                        <Button asChild className="w-full bg-accent hover:bg-primary text-white font-bold uppercase rounded-xl py-6">
                          <a href={item.orderUrl} target="_blank" rel="noopener noreferrer">
                            Order Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}