import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { MenuSection } from "@/components/menu-section"
import { LocationsSection } from "@/components/locations-section"
import { Footer } from "@/components/footer"
import { BranchModal } from "@/components/branch-modal"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <MenuSection />
      <LocationsSection />
      <Footer />
      <BranchModal />
    </main>
  )
}
