"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const ORDER_URL = "https://roostershack.touchtakeaway.net/menu"

const branches = [
  {
    id: "aldershot",
    name: "Aldershot",
    address: "165 North Lane, Aldershot GU12 4TA",
  },
  {
    id: "farncombe",
    name: "Farncombe",
    address: "13 Farncombe Street, Farncombe, Godalming GU7 3BA",
  },
  {
    id: "woking",
    name: "Woking",
    address: "32 Maybury Hill, Woking GU22 8AL",
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    
    // Load selected branch from localStorage
    const savedBranch = localStorage.getItem("rooster-shack-branch")
    if (savedBranch) {
      setSelectedBranch(savedBranch)
    }
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSelectBranch = (branchId: string) => {
    localStorage.setItem("rooster-shack-branch", branchId)
    setSelectedBranch(branchId)
  }

  const currentBranch = branches.find(b => b.id === selectedBranch)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between h-20">
          {/* Left Nav Links */}
          <div className="flex items-center gap-8">
            <Link
              href="#menu"
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:text-accent transition-colors"
            >
              Menu
            </Link>
            
            {/* Locations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:text-accent transition-colors flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {currentBranch ? currentBranch.name : "Locations"}
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                {branches.map((branch) => (
                  <DropdownMenuItem
                    key={branch.id}
                    onClick={() => handleSelectBranch(branch.id)}
                    className={cn(
                      "flex flex-col items-start py-3 cursor-pointer",
                      selectedBranch === branch.id && "bg-accent/10"
                    )}
                  >
                    <span className="font-bold text-foreground">{branch.name}</span>
                    <span className="text-xs text-muted-foreground">{branch.address}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/rooster-shack-logo.jpeg"
              alt="Rooster Shack"
              width={80}
              height={80}
              className="rounded-full animate-spin-slow-reverse"
              priority
            />
          </Link>

          {/* Right CTA */}
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase text-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation - Hamburger | Logo | Order Now */}
        <nav className="md:hidden flex items-center justify-between h-16">
          {/* Left - Hamburger Menu */}
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Center - Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/rooster-shack-logo.jpeg"
              alt="Rooster Shack"
              width={56}
              height={56}
              className="rounded-full animate-spin-slow-reverse"
              priority
            />
          </Link>

          {/* Right - Order Now Button */}
          <Button
            asChild
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase text-xs px-3 py-1 rounded-full"
          >
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              Order
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border py-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              <Link
                href="#menu"
                className="text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:text-accent transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="#locations"
                className="text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:text-accent transition-colors px-4 py-2 flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MapPin className="w-4 h-4" />
                Locations
              </Link>
              <Link
                href="/franchise"
                className="text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:text-accent transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Franchise
              </Link>
              
              {/* Mobile Branch Selection */}
              <div className="px-4 py-2 border-t border-border mt-2 pt-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Select Branch</p>
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => {
                      handleSelectBranch(branch.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={cn(
                      "w-full text-left py-2 px-2 rounded-lg transition-colors",
                      selectedBranch === branch.id ? "bg-accent/10 text-accent" : "text-foreground/80 hover:bg-secondary"
                    )}
                  >
                    <span className="font-semibold text-sm">{branch.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
