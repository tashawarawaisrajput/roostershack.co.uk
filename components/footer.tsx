import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook,  } from "lucide-react"

const ORDER_URL = "https://roostershack.touchtakeaway.net/menu"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/rooster-shack-logo.jpeg"
                alt="Rooster Shack"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Proper chicken. Proper flavour. Serving the finest piri piri chicken and loaded burgers.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold uppercase text-foreground mb-4 text-sm tracking-wide">
              Our Branches
            </h4>
            <ul className="space-y-3">
              <li>
                <p className="font-semibold text-foreground text-sm">Aldershot</p>
                <p className="text-muted-foreground text-xs">165 North Lane, Aldershot GU12 4TA</p>
                <p className="text-muted-foreground text-xs">01252 978777</p>
              </li>
              <li>
                <p className="font-semibold text-foreground text-sm">Farncombe</p>
                <p className="text-muted-foreground text-xs">13 Farncombe Street, Godalming GU7 3BA</p>
                <p className="text-muted-foreground text-xs">01483 340866</p>
              </li>
              <li>
                <p className="font-semibold text-foreground text-sm">Woking</p>
                <p className="text-muted-foreground text-xs">32 Maybury Hill, Woking GU22 8AL</p>
                <p className="text-muted-foreground text-xs">01483 725406</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase text-foreground mb-4 text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#menu" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#locations" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Locations
                </Link>
              </li>
              <li>
                <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Order Online
                </a>
              </li>
              <li>
                <Link href="/franchise" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Become a Franchisee
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold uppercase text-foreground mb-4 text-sm tracking-wide">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/roostershackuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/roostershackuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
  href="https://www.tiktok.com/@roostershack"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
  aria-label="TikTok"
>
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-current"
    style={{ display: 'block', margin: 'auto' }}
  >
    <path d="M12.525.02c1.312 0 2.61.01 3.91.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.11-2.89-.68-3.98-1.72-.01 3.5-.01 7-.01 10.5-.11 1.78-.6 3.6-1.8 4.96-1.2 1.36-2.9 2.19-4.7 2.45-1.75.26-3.6-.1-5.1-.96-1.5-.86-2.7-2.3-3.2-3.9-.5-1.6-.3-3.3.4-4.8.7-1.5 2-2.7 3.5-3.3v4.1c-.6.3-1.2.7-1.6 1.3-.4.6-.5 1.3-.4 2 .1.7.4 1.4.9 1.9.5.5 1.1.9 1.8 1 .7.1 1.4.1 2.1-.2.7-.3 1.2-.7 1.6-1.3.4-.6.5-1.3.4-2.1.01-4.72.01-9.44.01-14.16z" />
  </svg>
</a>
            </div>
            
            <div className="mt-6">
              <a 
                href={ORDER_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold uppercase text-sm px-6 py-3 rounded-full hover:bg-accent/90 transition-all duration-300"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rooster Shack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/franchise" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Franchise
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
