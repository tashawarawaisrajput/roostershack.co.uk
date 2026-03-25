"use client"

import { MenuCard } from "./menu-card"
import { Button } from "@/components/ui/button"
import { Flame, Drumstick, IceCream, Percent } from "lucide-react"

const ORDER_URL = "https://roostershack.touchtakeaway.net/menu"

interface MenuItem {
  id: number
  name: string
  description: string
  image: string
  isPopular?: boolean
}

interface MenuCategory {
  id: string
  title: string
  subtitle: string
  icon: React.ReactNode
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    id: "piri-piri",
    title: "Piri Piri Chicken",
    subtitle: "Flame Grilled Perfection",
    icon: <Flame className="w-8 h-8" />,
    items: [
      {
        id: 1,
        name: "Quarter Chicken",
        description: "Succulent quarter chicken marinated in our signature piri piri spices and flame grilled to perfection.",
        image: "/images/hero-piri-piri.jpg",
        isPopular: true,
      },
      {
        id: 2,
        name: "Half Chicken",
        description: "Half a chicken with our famous piri piri marinade. Served with your choice of two sides.",
        image: "/images/hero-piri-piri.jpg",
      },
      {
        id: 3,
        name: "Full Chicken",
        description: "A whole piri piri chicken for the real chicken lovers. Perfect for sharing or a feast for one.",
        image: "/images/hero-piri-piri.jpg",
        isPopular: true,
      },
    ],
  },
  {
    id: "burgers",
    title: "Loaded Burgers",
    subtitle: "Stacked High and Crispy",
    icon: <Drumstick className="w-8 h-8" />,
    items: [
      {
        id: 4,
        name: "The Classic Rooster",
        description: "Crispy fried chicken fillet with fresh lettuce, pickles, and our signature mayo on a toasted brioche bun.",
        image: "/images/classic-burger.jpg",
        isPopular: true,
      },
      {
        id: 5,
        name: "Spicy Inferno Burger",
        description: "Our hottest creation. Crispy chicken with jalapeños, fiery sauce, and melted pepper jack cheese.",
        image: "/images/spicy-burger.jpg",
      },
      {
        id: 6,
        name: "Double Stack Supreme",
        description: "Two crispy chicken fillets, double cheese, bacon, lettuce, and special Rooster sauce.",
        image: "/images/hero-burger.jpg",
        isPopular: true,
      },
    ],
  },
  {
    id: "wings",
    title: "Saucy Wings",
    subtitle: "Tossed Fresh To Order",
    icon: <Drumstick className="w-8 h-8" />,
    items: [
      {
        id: 7,
        name: "Classic Buffalo Wings",
        description: "Six crispy wings tossed in our tangy buffalo sauce. Served with blue cheese dip.",
        image: "/images/wings.jpg",
        isPopular: true,
      },
      {
        id: 8,
        name: "Honey BBQ Wings",
        description: "Six wings glazed with sweet honey BBQ sauce. Perfectly caramelized and finger licking good.",
        image: "/images/wings.jpg",
      },
      {
        id: 9,
        name: "Garlic Parmesan Wings",
        description: "Six wings coated in buttery garlic parmesan sauce with herbs. A savoury delight.",
        image: "/images/wings.jpg",
      },
    ],
  },
  {
    id: "shakes",
    title: "Thick Shakes",
    subtitle: "Creamy and Indulgent",
    icon: <IceCream className="w-8 h-8" />,
    items: [
      {
        id: 10,
        name: "Chocolate Overload Shake",
        description: "Rich chocolate ice cream blended with chocolate sauce and topped with whipped cream.",
        image: "/images/shake.jpg",
        isPopular: true,
      },
      {
        id: 11,
        name: "Strawberry Dream Shake",
        description: "Fresh strawberry shake made with real fruit and vanilla ice cream. Sweet and refreshing.",
        image: "/images/shake.jpg",
      },
      {
        id: 12,
        name: "Oreo Cookie Shake",
        description: "Creamy vanilla shake blended with crushed Oreo cookies. A cookies and cream classic.",
        image: "/images/shake.jpg",
      },
    ],
  },
  {
    id: "deals",
    title: "Meal Deals",
    subtitle: "Best Value Combos",
    icon: <Percent className="w-8 h-8" />,
    items: [
      {
        id: 13,
        name: "Rooster Meal Deal",
        description: "Classic Rooster burger, regular fries, and a medium drink. The perfect combo.",
        image: "/images/deal-combo.jpg",
        isPopular: true,
      },
      {
        id: 14,
        name: "Family Feast",
        description: "Four burgers, two large fries, four drinks, and twelve wings. Feeds the whole crew.",
        image: "/images/deal-combo.jpg",
      },
      {
        id: 15,
        name: "Wing Wednesday Special",
        description: "Twelve wings of any flavour with two dips. Available every Wednesday only.",
        image: "/images/wings.jpg",
      },
    ],
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground mb-4">
            Feast Your Eyes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From flame grilled piri piri to crispy burgers, every item is crafted with premium ingredients and bold flavours.
          </p>
        </div>

        {/* Menu Categories with Banners */}
        <div className="space-y-16">
          {menuCategories.map((category) => (
            <div key={category.id}>
              {/* Category Banner */}
              <div className="bg-primary rounded-2xl p-6 md:p-8 mb-8 flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-foreground/20 rounded-xl flex items-center justify-center text-primary-foreground">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase text-primary-foreground">
                    {category.title}
                  </h3>
                  <p className="text-primary-foreground/80 font-medium uppercase tracking-wide text-sm md:text-base">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <MenuCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    isPopular={item.isPopular}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-primary text-accent-foreground font-bold uppercase tracking-wide rounded-full px-10 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              View Full Menu & Order
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
