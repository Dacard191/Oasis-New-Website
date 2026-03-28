import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Oasis Distribution UK",
  description: "Browse our extensive range of industrial supplies including fasteners, tools, safety equipment, abrasives, adhesives, and electrical components.",
}

const productCategories = [
  {
    id: "fasteners",
    title: "Fasteners & Fixings",
    description: "Comprehensive range of bolts, nuts, screws, and fixings from leading manufacturers. Available in various materials and specifications.",
    image: "/images/products/fasteners.jpg",
    items: ["Bolts & Nuts", "Screws & Fixings", "Washers & Spacers", "Rivets & Inserts", "Anchors & Plugs"]
  },
  {
    id: "tools",
    title: "Hand & Power Tools",
    description: "High quality hand tools and power tools for every industrial application. Trusted brands delivering reliability and performance.",
    image: "/images/products/tools.jpg",
    items: ["Wrenches & Spanners", "Screwdrivers", "Pliers & Cutters", "Power Tools", "Measuring Tools"]
  },
  {
    id: "safety",
    title: "Safety Equipment",
    description: "Essential personal protective equipment and safety supplies to keep your workforce protected and compliant.",
    image: "/images/products/safety.jpg",
    items: ["Head Protection", "Eye Protection", "Hand Protection", "Hi-Vis Clothing", "Respiratory Protection"]
  },
  {
    id: "abrasives",
    title: "Abrasives & Cutting",
    description: "Premium abrasives and cutting products for grinding, sanding, and finishing applications across all industries.",
    image: "/images/products/abrasives.jpg",
    items: ["Cutting Discs", "Grinding Wheels", "Sanding Discs", "Flap Discs", "Wire Brushes"]
  },
  {
    id: "adhesives",
    title: "Adhesives & Sealants",
    description: "Industrial adhesives, sealants, and tapes for bonding, sealing, and securing applications.",
    image: "/images/products/adhesives.jpg",
    items: ["Industrial Adhesives", "Sealants", "Tapes", "Thread Lockers", "Lubricants"]
  },
  {
    id: "electrical",
    title: "Electrical Supplies",
    description: "Electrical components and accessories for installation, maintenance, and repair work.",
    image: "/images/products/electrical.jpg",
    items: ["Cables & Wiring", "Connectors", "Terminals", "Cable Ties", "Electrical Tape"]
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Products
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl text-balance">
              Quality Industrial Supplies
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We supply our customers with high quality products from leading manufacturers. Browse our extensive range of industrial supplies below.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <div 
                key={category.id}
                id={category.id}
                className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                    {category.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.items.slice(0, 3).map((item) => (
                      <li 
                        key={item}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {item}
                      </li>
                    ))}
                    {category.items.length > 3 && (
                      <li className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">
                        +{category.items.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Product List Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Complete Range
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              Product Categories at a Glance
            </h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <div 
                key={`list-${category.id}`}
                className="rounded-lg border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {category.items.map((item) => (
                    <li 
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Quality Assured
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              Leading Manufacturers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We source all our products from leading manufacturers, ensuring you receive only the highest quality industrial supplies for your business.
            </p>
          </div>
          
          <div className="mt-12 p-8 rounded-lg border border-border bg-card">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {["Premium Quality", "Industry Trusted", "Certified Products", "Trade Approved"].map((badge) => (
                <div key={badge} className="flex items-center justify-center p-4">
                  <span className="text-sm font-medium text-muted-foreground text-center">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl text-balance">
              {"Can't Find What You're Looking For?"}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
              Contact our team and we will help source the products you need.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="tel:01562312326">
                  Call 01562 312326
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
