"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const ORDER_URL = "https://roostershack.touchtakeaway.net/menu"

interface MenuCardProps {
  name: string
  description: string
  image: string
  isPopular?: boolean
}

export function MenuCard({ name, description, image, isPopular }: MenuCardProps) {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl flex flex-col h-full">
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
          Popular
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-center">
        {/* ✅ FIX: text-foreground */}
        <h3 className="text-lg font-black uppercase tracking-tighter mb-2 flex-grow flex items-center justify-center text-foreground">
          {name}
        </h3>
        {/* ✅ FIX: text-muted-foreground */}
        <p className="text-xs text-muted-foreground mb-6 line-clamp-2 italic leading-relaxed">
          {description}
        </p>

        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase text-[10px] tracking-widest py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20 mt-auto"
        >
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
            Order Now
          </a>
        </Button>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-primary/20" />
    </div>
  )
}