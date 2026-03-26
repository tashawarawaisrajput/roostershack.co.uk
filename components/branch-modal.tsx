"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Branch {
  id: string
  name: string
  icon: React.ReactNode
}

// Location SVG icons for each branch
const LocationIcon = () => (
  <svg 
    className="w-10 h-10 text-accent" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
    />
  </svg>
)

const branches: Branch[] = [
  {
    id: "aldershot",
    name: "Aldershot",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Tower/Observatory Icon */}
        <path d="M12 2L9 7h6l-3-5zM9 7v15M15 7v15M6 22h12M9 12h6M9 17h6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "farncombe",
    name: "Farncombe",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Boat/Water Icon */}
        <path d="M2 17c5 0 5-2 10-2s5 2 10 2M3 17l2 4h14l2-4M12 15V3L8 7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "woking",
    name: "Woking",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Modern Landmark/Tripod Icon */}
        <path d="M12 3c-2 0-4 2-4 5 0 2 1 4 3 5l-3 8M12 13l3 8M12 3c2 0 4 2 4 5 0 2-1 4-3 5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="8" r="2" />
      </svg>
    ),
  },
]

export function BranchModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSelectedBranch = localStorage.getItem("rooster-shack-branch")
    if (!hasSelectedBranch) {
      const timer = setTimeout(() => setIsOpen(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSelectBranch = (branchId: string) => {
    localStorage.setItem("rooster-shack-branch", branchId)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-black uppercase text-center text-foreground">
            Choose Your Location
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Select your nearest Rooster Shack
          </DialogDescription>
        </DialogHeader>

        {/* Minimalist Grid - 3 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => handleSelectBranch(branch.id)}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-secondary/50 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 group aspect-square"
            >
              <div className="mb-3 group-hover:scale-110 transition-transform">
                {branch.icon}
              </div>
              <span className="font-bold text-foreground group-hover:text-accent transition-colors text-sm md:text-base text-center">
                {branch.name}
              </span>
            </button>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-4">
          You can change your location anytime from the menu.
        </p>
      </DialogContent>
    </Dialog>
  )
}
