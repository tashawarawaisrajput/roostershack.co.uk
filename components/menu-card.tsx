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
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
          Popular
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-b from-secondary to-background/50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Glassmorphism overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold uppercase tracking-wide text-foreground mb-2 line-clamp-1">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <Button
          asChild
          className="w-full bg-accent hover:bg-primary text-accent-foreground font-bold uppercase text-sm px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
        >
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
            Order Now
          </a>
        </Button>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>
    </div>
  )
}
