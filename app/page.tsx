import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Package, Truck, HeadphonesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: Package,
    title: "Quality Products",
    description: "High quality industrial supplies from leading manufacturers across the UK."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Efficient distribution network ensuring timely delivery to your business."
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Technical support and guidance from our experienced team."
  }
]

const promises = [
  "Quality Products from Leading Manufacturers",
  "Transparent Pricing with No Hidden Fees",
  "Exceptional Customer Satisfaction",
  "Technical Support & Guidance"
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-warehouse.jpg"
            alt="Industrial warehouse"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80">
              Industrial Supplies Specialists
            </p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Essential Industry & Engineering Supplies Across the UK
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Family run industrial supplies distribution business based in Worcestershire. We are passionate about delivering high levels of customer service and support to industry.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/products">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Commitment
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              Our Promise to You
            </h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 rounded-lg border border-border bg-background p-6"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground leading-relaxed">
                  {promise}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/team-warehouse.jpg"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Our Mission
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
                Delivering Value, Service & Technical Support
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                To provide our customers with unrivalled levels of value, service and technical support to maximise efficiencies and reduce costs within our clients business.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Operating from modern premises in Worcestershire, we pride ourselves on our ability to supply our customers with high quality products, all of which are from leading manufacturers, combining this with exceptional levels of service and support.
              </p>
              <div className="mt-8">
                <Button asChild className="group">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              What Sets Us Apart
            </h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="rounded-lg border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl text-balance">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
              Contact our team today to discuss your industrial supply needs.
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
