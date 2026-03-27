"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Flame, Drumstick, IceCream, Percent, Pizza, Soup, Coffee, Utensils, Sandwich, Star, ChevronRight, ChevronLeft, Search } from "lucide-react"
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
    icon: <Percent className="w-5 h-5" />,
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
    icon: <Flame className="w-5 h-5" />,
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
    icon: <Drumstick className="w-5 h-5" />,
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
    icon: <Sandwich className="w-5 h-5" />,
    bannerImage: "/images/hero-piri-piri.jpg",
    items: [
      { id: 401, name: "Piri Chicken Wrap", description: "Grilled chicken with salad & mayo.", image: "/images/hero-piri-piri.jpg", orderUrl: `${BASE_URL}#item-401` },
    ],
  },
  {
    id: "pitta",
    title: "Pitta",
    subtitle: "Freshly Toasted Pittas",
    icon: <Utensils className="w-5 h-5" />,
    bannerImage: "/images/hero-piri-piri.jpg",
    items: [
      { id: 501, name: "Piri Chicken Pitta", description: "Grilled chicken in a soft pitta.", image: "/images/hero-piri-piri.jpg", orderUrl: `${BASE_URL}#item-501` },
    ],
  },
  {
    id: "quesadilla",
    title: "Quesadilla",
    subtitle: "Cheesy Grilled Tortillas",
    icon: <Pizza className="w-5 h-5" />,
    bannerImage: "/images/hero-piri-piri.jpg",
    items: [
      { id: 601, name: "Shack Chicken Quesadilla", description: "Grilled chicken, cheese & salsa.", image: "/images/hero-piri-piri.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-601` },
    ],
  },
  {
    id: "rice-boxes",
    title: "Rice Boxes",
    subtitle: "Spicy Rice Meals",
    icon: <Soup className="w-5 h-5" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 701, name: "Piri Rice Box", description: "Grilled chicken on spicy rice.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-701` },
    ],
  },
  {
    id: "salad-boxes",
    title: "Salad Boxes",
    subtitle: "Fresh & Healthy Greens",
    icon: <Soup className="w-5 h-5" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 801, name: "Garden Salad Box", description: "Healthy mixed salad with grilled chicken.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-801` },
    ],
  },
  {
    id: "southern-fried",
    title: "Southern Fried Chicken",
    subtitle: "Classic Crispy Pieces",
    icon: <Drumstick className="w-5 h-5" />,
    bannerImage: "/images/wings.jpg",
    items: [
      { id: 901, name: "2pc Chicken Piece", description: "Classic crispy fried chicken.", image: "/images/wings.jpg", orderUrl: `${BASE_URL}#item-901` },
    ],
  },
  {
    id: "fried-wings-strips",
    title: "Wings & Strips (Fried)",
    subtitle: "Crispy & Spicy Fried Chicken",
    icon: <Flame className="w-5 h-5" />,
    bannerImage: "/images/wings.jpg",
    items: [
      { id: 1001, name: "6 Spicy Fried Wings", description: "Golden fried spicy wings.", image: "/images/wings.jpg", orderUrl: `${BASE_URL}#item-1001` },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    subtitle: "Tasty Accompaniments",
    icon: <Utensils className="w-5 h-5" />,
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
    icon: <Star className="w-5 h-5" />,
    bannerImage: "/images/hero-burger.jpg",
    items: [
      { id: 1201, name: "Chicken Loaded Fries", description: "Fries with cheese & grilled chicken.", image: "/images/hero-burger.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-1201` },
    ],
  },
  {
    id: "dips",
    title: "Dips",
    subtitle: "House Made Sauces",
    icon: <Soup className="w-5 h-5" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 1301, name: "Piri Mayo Dip", description: "Creamy piri mayo.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-1301` },
    ],
  },
  {
    id: "awesome-shakes",
    title: "Awesome Shakes",
    subtitle: "Thick & Creamy Milkshakes",
    icon: <IceCream className="w-5 h-5" />,
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
    icon: <Coffee className="w-5 h-5" />,
    bannerImage: "/images/deal-combo.jpg",
    items: [
      { id: 1501, name: "Soft Drink Can", description: "330ml Chilled can.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-1501` },
      { id: 1502, name: "Mineral Water", description: "500ml Bottled water.", image: "/images/deal-combo.jpg", orderUrl: `${BASE_URL}#item-1502` },
    ],
  },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])
  const [viewMode, setViewMode] = useState<"categories" | "products">("categories")

  const handleCategorySelect = (category: MenuCategory) => {
    setActiveCategory(category)
    setViewMode("products")
    // Mobile par product view par jaate waqt top par scroll ho jaye
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section id="menu" className="bg-[#FDF8F1] min-h-screen">
      
      <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto">
        
        {/* --- DESKTOP SIDEBAR --- */}
        <aside className="hidden md:block w-72 lg:w-80 bg-white border-r border-slate-200 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto z-20">
          <div className="p-6">
            <h2 className="text-xl font-black uppercase text-foreground mb-6">Categories</h2>
            <nav className="space-y-1">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all font-bold uppercase text-xs tracking-wider ${
                    activeCategory.id === category.id 
                    ? "bg-primary text-white shadow-lg translate-x-1" 
                    : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {category.icon}
                    {category.title}
                  </div>
                  {activeCategory.id === category.id && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* --- MOBILE VIEW --- */}
        <div className="md:hidden w-full">
          
          {/* SEARCH BAR (Always Visible) */}
          <div className="p-4 bg-white sticky top-[64px] z-30 border-b border-slate-100 shadow-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search items..." 
                className="w-full bg-slate-50 rounded-full py-3 pl-10 pr-4 text-xs font-bold border-none focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
          </div>

          {/* MODE 1: Category Selection Grid */}
          {viewMode === "categories" && (
            <div className="p-4 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category)}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group flex flex-col"
                >
                  <div className="relative aspect-square w-full">
                    <Image src={category.bannerImage} fill className="object-cover" alt={category.title} />
                  </div>
                  <div className="p-3 bg-white text-center">
                    <span className="text-[10px] font-black uppercase tracking-tight text-foreground">{category.title}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* MODE 2: Horizontal Scroll + Products */}
          {viewMode === "products" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="sticky top-[136px] z-30 bg-white border-b border-slate-200 shadow-sm flex items-center px-2">
                <button 
                  onClick={() => setViewMode("categories")} 
                  className="p-3 text-primary"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex overflow-x-auto py-3 gap-3 no-scrollbar items-center flex-1">
                  {menuCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full font-bold uppercase text-[10px] transition-all ${
                        activeCategory.id === category.id 
                        ? "bg-primary text-white" 
                        : "text-slate-500 bg-slate-100"
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Content for Mobile */}
              <div className="p-4 space-y-6">
                 {activeCategory.items.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
                       <div className="relative aspect-video w-full">
                         <Image src={item.image} fill className="object-cover" alt={item.name} />
                       </div>
                       <div className="p-4">
                         <h4 className="text-lg font-black uppercase text-foreground mb-1">{item.name}</h4>
                         <p className="text-muted-foreground text-xs mb-4">{item.description}</p>
                         <Button asChild className="w-full bg-accent hover:bg-primary text-white font-bold uppercase rounded-xl py-6">
                            <a href={item.orderUrl} target="_blank" rel="noopener noreferrer">Order Now</a>
                         </Button>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          )}
        </div>

        {/* --- DESKTOP CONTENT AREA --- */}
        <main className="hidden md:block flex-1 p-4 md:p-10">
          <div className="max-w-5xl mx-auto">
            {/* Banner aur Products wahi rahenge */}
            <div className="relative overflow-hidden bg-primary rounded-2xl p-8 md:p-12 mb-10 flex items-center gap-4 min-h-[140px]">
              <div className="absolute inset-0 z-0">
                <Image src={activeCategory.bannerImage} fill className="object-cover opacity-40" alt={activeCategory.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black uppercase text-white">{activeCategory.title}</h3>
                <p className="text-white/90 font-bold uppercase text-sm md:text-lg">{activeCategory.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeCategory.items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={item.image} fill className="object-cover" alt={item.name} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-center">
                    <h4 className="text-lg font-black uppercase text-foreground mb-2 flex-grow flex items-center justify-center">{item.name}</h4>
                    <p className="text-muted-foreground text-xs mb-6">{item.description}</p>
                    <Button asChild className="w-full bg-accent hover:bg-primary text-white font-bold uppercase rounded-xl py-6 mt-auto">
                      <a href={item.orderUrl} target="_blank" rel="noopener noreferrer">Order Now</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

      </div>
    </section>
  )
}