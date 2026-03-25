"use client"

import { MapPin, Clock, Phone, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const ORDER_URL = "https://roostershack.touchtakeaway.net/menu"

interface Location {
  id: string
  name: string
  address: string
  phone: string
  hours: string
  mapUrl: string
}

const locations: Location[] = [
  {
    id: "aldershot",
    name: "Aldershot",
    address: "165 North Lane, Aldershot GU12 4TA",
    phone: "01252 978777",
    hours: "11:00 AM to 11:00 PM",
    mapUrl: "https://www.google.com/maps?q=Aldershot+Rooster+Shack",
  },
  {
    id: "farncombe",
    name: "Farncombe",
    address: "13 Farncombe Street, Farncombe, Godalming GU7 3BA",
    phone: "01483 340866",
    hours: "11:00 AM to 10:00 PM",
    mapUrl: "https://www.google.com/maps?q=Farncombe+Rooster+Shack",
  },
  {
    id: "woking",
    name: "Woking",
    address: "32 Maybury Hill, Woking GU22 8AL",
    phone: "01483 725406",
    hours: "11:00 AM to 11:00 PM",
    mapUrl: "https://www.google.com/maps?q=Woking+Rooster+Shack",
  },
]

export function LocationsSection() {
  return (
    <section id="locations" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground mb-4">
            Our Locations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Visit us at any of our three locations for the ultimate chicken experience.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-card rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <MapPin className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-2xl font-bold uppercase text-foreground mb-4">
                {location.name}
              </h3>

              <div className="space-y-3 mb-6 flex-1">
                <p className="text-muted-foreground flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{location.address}</span>
                </p>
                <p className="text-muted-foreground flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span>{location.hours}</span>
                </p>
                <p className="text-muted-foreground flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
                    {location.phone}
                  </a>
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase rounded-full transition-all duration-300"
                >
                  <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
                    Order Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase rounded-full transition-all duration-300"
                >
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
