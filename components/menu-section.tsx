"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Search } from "lucide-react"
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
  bannerImage: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    id: "meal-deals",
    title: "Meal Deals",
    subtitle: "Value Bundles & Family Feasts",
    bannerImage: "/images/menu/overhead-group-1.jpg",
    items: [
      { id: 101, name: "Family Bucket", description: "Southern fried chicken pieces, wings, fries and sides.", image: "/images/menu/southern-fried-family-bucket.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-101` },
      { id: 102, name: "Mixed Platter", description: "A variety of grilled and fried chicken favorites.", image: "/images/menu/mixed-platter.jpg", orderUrl: `${BASE_URL}#item-102` },
      { id: 103, name: "Variety Bucket", description: "A mix of wings, strips, and chicken pieces.", image: "/images/menu/variety-bucket-1.jpg", orderUrl: `${BASE_URL}#item-103` },
      { id: 104, name: "Kids Nuggets Meal", description: "Crispy nuggets with fries and a drink.", image: "/images/menu/kids-nuggets-meal.jpg", orderUrl: `${BASE_URL}#item-104` },
    ],
  },
  {
    id: "piri-piri",
    title: "Piri Piri Chicken",
    subtitle: "Flame Grilled to Perfection",
    bannerImage: "/images/menu/whole-chicken.jpg",
    items: [
      { id: 201, name: "Quarter Piri Piri Chicken", description: "Grilled quarter chicken with signature spices.", image: "/images/menu/quater-chicken.jpg", orderUrl: `${BASE_URL}#item-201` },
      { id: 202, name: "Half Piri Piri Chicken", description: "Succulent half chicken grilled to order.", image: "/images/menu/half-chicken.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-202` },
      { id: 203, name: "Whole Piri Piri Chicken", description: "Full chicken marinated for 24 hours.", image: "/images/menu/whole-chicken.jpg", orderUrl: `${BASE_URL}#item-203` },
      { id: 204, name: "Piri Piri Wings", description: "Flame-grilled wings bursting with flavor.", image: "/images/menu/piri-piri-wings.jpg", orderUrl: `${BASE_URL}#item-204` },
    ],
  },
  {
    id: "famous-burgers",
    title: "Famous Burgers",
    subtitle: "Chicken, Beef & Infusion Burgers",
    bannerImage: "/images/menu/mexican-burger.jpg",
    items: [
      { id: 301, name: "Mexican Burger", description: "Spicy chicken fillet, salsa & jalapeños.", image: "/images/menu/mexican-burger.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-301` },
      { id: 302, name: "The Smash Burger", description: "Double beef patty, double cheese & house sauce.", image: "/images/menu/smash.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-302` },
      { id: 303, name: "Texan Burger", description: "Beef patty with BBQ sauce and onion rings.", image: "/images/menu/texan-burger.jpg", orderUrl: `${BASE_URL}#item-303` },
      { id: 304, name: "Thai Burger", description: "Aromatic Thai flavors with a spicy twist.", image: "/images/menu/thai-burger.jpg", orderUrl: `${BASE_URL}#item-304` },
      { id: 305, name: "Double Cheese Burger", description: "Two beef patties with melted cheese.", image: "/images/menu/double-cheese-burger.jpg", orderUrl: `${BASE_URL}#item-305` },
      { id: 306, name: "Cod Burger", description: "Crispy fish fillet with tartar sauce.", image: "/images/menu/cod-burger-1.jpg", orderUrl: `${BASE_URL}#item-306` },
      { id: 307, name: "Vegan Burger", description: "Plant-based patty with fresh salad.", image: "/images/menu/vegan-burger.jpg", orderUrl: `${BASE_URL}#item-307` },
      { id: 308, name: "Infusion Burger", description: "Our special infusion grilled burger.", image: "/images/menu/infusion-burger.jpg", orderUrl: `${BASE_URL}#item-308` },
    ],
  },
  {
    id: "wraps",
    title: "Wraps",
    subtitle: "Freshly Rolled Toasted Wraps",
    bannerImage: "/images/menu/grilled-chicken-wrap.jpg",
    items: [
      { id: 401, name: "Grilled Chicken Wrap", description: "Grilled chicken with salad & mayo.", image: "/images/menu/grilled-chicken-wrap.jpg", orderUrl: `${BASE_URL}#item-401` },
      { id: 402, name: "Double Cheese Wrap", description: "Extra cheesy chicken wrap.", image: "/images/menu/double-cheese-wrap.jpg", orderUrl: `${BASE_URL}#item-402` },
    ],
  },
  {
    id: "pitta",
    title: "Pitta",
    subtitle: "Soft Toasted Pitta Breads",
    bannerImage: "/images/menu/whole-chicken.jpg",
    items: [
      { id: 501, name: "Piri Piri Pitta", description: "Flame-grilled chicken in a soft pitta.", image: "/images/menu/half-chicken.jpg", orderUrl: `${BASE_URL}#item-501` },
    ],
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    subtitle: "Cheesy Toasted Tortillas",
    bannerImage: "/images/menu/chicken-quesadilla-1.jpg",
    items: [
      { id: 601, name: "Chicken Quesadilla", description: "Grilled chicken, cheese & salsa in a tortilla.", image: "/images/menu/chicken-quesadilla-1.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-601` },
      { id: 602, name: "Lamb Quesadilla", description: "Succulent lamb with melted cheese.", image: "/images/menu/lamb-quesadilla.jpg", orderUrl: `${BASE_URL}#item-602` },
    ],
  },
  {
    id: "rice-boxes",
    title: "Rice Boxes",
    subtitle: "Seasoned Rice with Grilled Toppings",
    bannerImage: "/images/menu/chicken-rice-box.jpg",
    items: [
      { id: 701, name: "Chicken Rice Box", description: "Grilled chicken on spicy rice.", image: "/images/menu/chicken-rice-box.jpg", orderUrl: `${BASE_URL}#item-701` },
      { id: 702, name: "Paneer Rice Box", description: "Grilled paneer on seasoned rice.", image: "/images/menu/paneer-rice-box.jpg", orderUrl: `${BASE_URL}#item-702` },
    ],
  },
  {
    id: "salad-boxes",
    title: "Salad Boxes",
    subtitle: "Fresh & Healthy Garden Salads",
    bannerImage: "/images/menu/piri-chicken-salad-box.jpg",
    items: [
      { id: 801, name: "Piri Chicken Salad Box", description: "Healthy mixed salad with grilled chicken.", image: "/images/menu/piri-chicken-salad-box.jpg", orderUrl: `${BASE_URL}#item-801` },
    ],
  },
  {
    id: "fried-chicken",
    title: "Fried Chicken",
    subtitle: "Crispy Southern Style Chicken",
    bannerImage: "/images/menu/southern-fried-family-bucket.jpg",
    items: [
      { id: 901, name: "Fried Chicken Piece", description: "Classic crispy southern fried chicken.", image: "/images/menu/southern-fried-family-bucket.jpg", orderUrl: `${BASE_URL}#item-901` },
    ],
  },
  {
    id: "fried-wings-strips",
    title: "Wings & Strips (Fried)",
    subtitle: "Crispy & Spicy Fried Chicken",
    bannerImage: "/images/menu/wicked-wings.jpg",
    items: [
      { id: 1001, name: "Wicked Wings", description: "Our famous spicy fried wings.", image: "/images/menu/wicked-wings.jpg", orderUrl: `${BASE_URL}#item-1001` },
      { id: 1002, name: "Chicken Strips", description: "Golden crispy chicken strips.", image: "/images/menu/strips.jpg", orderUrl: `${BASE_URL}#item-1002` },
      { id: 1003, name: "Southern Fried Wings", description: "Classic crispy fried wings.", image: "/images/menu/southern-fried-wings.jpg", orderUrl: `${BASE_URL}#item-1003` }
    ]
  },
  {
    id: "sides",
    title: "Sides",
    subtitle: "Perfect Accompaniments",
    bannerImage: "/images/menu/mozzarella-sticks.jpg",
    items: [
      { id: 1101, name: "Mozzarella Sticks", description: "Gooey melted cheese sticks.", image: "/images/menu/mozzarella-sticks.jpg", orderUrl: `${BASE_URL}#item-1101` },
      { id: 1102, name: "Regular Fries", description: "Crispy golden potato fries.", image: "/images/menu/mixed-platter.jpg", orderUrl: `${BASE_URL}#item-1102` },
    ],
  },
  {
    id: "dips",
    title: "Dips",
    subtitle: "Extra Flavor for Your Meal",
    bannerImage: "/images/menu/dip-1.jpg",
    items: [
      { id: 1301, name: "Garlic Mayo", description: "Creamy garlic mayo.", image: "/images/menu/dip-1.jpg", orderUrl: `${BASE_URL}#item-1301` },
      { id: 1302, name: "Piri Mayo", description: "Zesty piri piri flavored mayo.", image: "/images/menu/dip-2.jpg", orderUrl: `${BASE_URL}#item-1302` },
      { id: 1303, name: "BBQ Dip", description: "Smoky and sweet BBQ sauce.", image: "/images/menu/dip-3.jpg", orderUrl: `${BASE_URL}#item-1303` },
      { id: 1304, name: "Sweet Chilli", description: "Zesty sweet and spicy dip.", image: "/images/menu/dip-4.jpg", orderUrl: `${BASE_URL}#item-1304` },
    ],
  },
  {
    id: "drinks-shakes",
    title: "Drinks & Shakes",
    subtitle: "Refreshing Beverages",
    bannerImage: "/images/menu/milk-shakes.jpg",
    items: [
      { id: 1401, name: "Milk Shakes", description: "Thick and creamy milkshakes.", image: "/images/menu/milk-shakes.jpg", isPopular: true, orderUrl: `${BASE_URL}#item-1401` },
    ],
  },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])
  const [viewMode, setViewMode] = useState<"categories" | "products">("categories")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = searchQuery.trim() === "" 
    ? activeCategory.items 
    : menuCategories.flatMap(cat => cat.items).filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )

  const handleCategorySelect = (category: MenuCategory) => {
    setActiveCategory(category)
    setViewMode("products")
    setSearchQuery("")
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section id="menu" className="bg-background min-h-screen pb-10 border-t border-border/10">
      <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto">
        
        {/* --- DESKTOP SIDEBAR --- */}
        <aside className="hidden md:block w-72 lg:w-80 bg-card border-r border-border/10 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto z-20">
          <div className="p-6">
            <h2 className="text-xl font-black uppercase text-foreground mb-6">Categories</h2>
            <nav className="space-y-1">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category)
                    setSearchQuery("")
                  }}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all font-bold uppercase text-xs tracking-wider ${
                    activeCategory.id === category.id && searchQuery === "" 
                    ? "bg-primary text-white shadow-lg translate-x-1" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>{category.title}</span>
                  {activeCategory.id === category.id && searchQuery === "" && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* --- MOBILE CONTENT AREA --- */}
        <div className="md:hidden w-full">
          <div className="p-4 bg-card sticky top-[64px] z-30 border-b border-border/10 shadow-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search items..." 
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                    if (e.target.value !== "") setViewMode("products")
                }}
                className="w-full bg-background rounded-full py-3 pl-10 pr-4 text-xs font-bold border border-border/20 text-foreground focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
          </div>

          {viewMode === "categories" && searchQuery === "" && (
            <div className="p-4 grid grid-cols-2 gap-4">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category)}
                  className="bg-card rounded-2xl shadow-sm border border-border/10 overflow-hidden"
                >
                  <div className="relative aspect-square w-full">
                    <Image src={category.bannerImage} fill className="object-cover" alt={category.title} />
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-[10px] font-black uppercase tracking-tight text-foreground">{category.title}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {(viewMode === "products" || searchQuery !== "") && (
            <div>
              {searchQuery === "" && (
                <div className="sticky top-[136px] z-30 bg-card border-b border-border/10 shadow-sm flex items-center px-2">
                  <button onClick={() => setViewMode("categories")} className="p-3 text-primary">
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
                          : "text-muted-foreground bg-muted"
                        }`}
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 space-y-6">
                 {filteredItems.map((item) => (
                     <div key={item.id} className="bg-card rounded-2xl shadow-sm border border-border/10 flex flex-col overflow-hidden">
                        <div className="relative aspect-video w-full">
                          <Image src={item.image} fill className="object-cover" alt={item.name} />
                        </div>
                        <div className="p-4">
                          {/* ✅ FIX: text-foreground */}
                          <h4 className="text-lg font-black uppercase text-foreground mb-1">{item.name}</h4>
                          <p className="text-muted-foreground text-xs mb-4">{item.description}</p>
                          <Button asChild className="w-full bg-primary hover:opacity-90 text-white font-bold uppercase rounded-xl py-6">
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
            <div className="mb-8 relative max-w-md ml-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                    type="text" 
                    placeholder="Search menu..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-card border border-border/10 text-foreground rounded-full py-3 pl-10 pr-4 text-xs font-bold outline-none focus:ring-2 focus:ring-primary/20"
                />
            </div>

            {searchQuery === "" && (
                <div className="relative overflow-hidden bg-primary rounded-2xl p-8 md:p-12 mb-10 flex items-center min-h-[140px]">
                    <div className="absolute inset-0 z-0">
                        <Image src={activeCategory.bannerImage} fill className="object-cover opacity-50" alt={activeCategory.title} />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-black uppercase text-white">{activeCategory.title}</h3>
                        <p className="text-white/80 font-bold uppercase text-sm tracking-wide">{activeCategory.subtitle}</p>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                  <div key={item.id} className="bg-card rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all border border-border/10 flex flex-col overflow-hidden group">
                    <div className="relative aspect-[4/3] w-full">
                      <Image src={item.image} fill className="object-cover group-hover:scale-105 transition-all duration-500" alt={item.name} />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-center">
                      {/* ✅ FIX: text-foreground */}
                      <h4 className="text-lg font-black uppercase text-foreground mb-2 flex-grow flex items-center justify-center">{item.name}</h4>
                      <p className="text-muted-foreground text-xs mb-6 line-clamp-2 italic">{item.description}</p>
                      <Button asChild className="w-full bg-primary hover:opacity-90 text-white font-bold uppercase rounded-xl py-6 mt-auto">
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