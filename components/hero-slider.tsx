"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const ORDER_URL = "https://roostershack.touchtakeaway.net/menu"

interface Slide {
  id: number
  image: string
  title: string[]
  subtitle: string
  description: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/hero-piri-piri.jpg",
    title: ["Piri Piri", "Perfection"],
    subtitle: "Flame Grilled Goodness",
    description: "Succulent chicken marinated in our secret piri piri blend, flame grilled to perfection with that signature char.",
  },
  {
    id: 2,
    image: "/images/hero-burgers.jpg",
    title: ["Loaded", "Burgers"],
    subtitle: "Stack It High",
    description: "Crispy fried chicken, melted cheese, fresh toppings, and our signature sauces on a toasted brioche bun.",
  },
  {
    id: 3,
    image: "/images/hero-wings.jpg",
    title: ["Saucy", "Wings"],
    subtitle: "Tossed To Order",
    description: "Crispy wings tossed in your choice of buffalo, honey BBQ, or garlic parmesan. Finger licking good.",
  },
  {
    id: 4,
    image: "/images/hero-shakes.jpg",
    title: ["Thick", "Shakes"],
    subtitle: "Indulgent Treats",
    description: "Creamy, dreamy milkshakes made with real ice cream. The perfect sweet finish to your meal.",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const slide = slides[currentSlide]

  return (
    <section className="relative min-h-[75vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={s.image}
            alt={s.title.join(" ")}
            fill
            className="object-cover object-center"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl pt-20">
          <span 
            key={`subtitle-${currentSlide}`}
            className="inline-block text-primary font-bold uppercase tracking-widest text-sm mb-4 animate-in fade-in slide-in-from-left duration-500"
          >
            {slide.subtitle}
          </span>
          
          <h1 
            key={`title-${currentSlide}`}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6 animate-in fade-in slide-in-from-left duration-700 delay-150"
          >
            {slide.title.map((line, i) => (
              <span key={i} className={cn("block", i % 2 === 0 ? "text-foreground" : "text-primary")}>
                {line}
              </span>
            ))}
          </h1>

          <p 
            key={`desc-${currentSlide}`}
            className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 animate-in fade-in slide-in-from-left duration-700 delay-300"
          >
            {slide.description}
          </p>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-left duration-700 delay-500">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-primary text-accent-foreground font-bold uppercase text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 font-bold uppercase text-base px-8 py-6 rounded-full transition-all duration-300"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        // Shuru mein 'hidden' add kar diya hai
        className="hidden absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        // Yahan bhi shuru mein 'hidden' add kar diya hai
        className="hidden absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-primary w-8" 
                : "bg-foreground/30 hover:bg-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  )
}
