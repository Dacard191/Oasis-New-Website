import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Truck, Package, Headphones, ClipboardCheck, Clock, Shield, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Oasis Distribution UK",
  description: "Discover our comprehensive industrial supply services including distribution, supply solutions, and technical support across the UK.",
}

const services = [
  {
    id: "distribution",
    icon: Truck,
    title: "Distribution Services",
    description: "Reliable and efficient distribution of industrial supplies across the UK. Our modern logistics network ensures your products arrive on time, every time.",
    features: [
      "UK-wide delivery coverage",
      "Flexible delivery schedules",
      "Real-time order tracking",
      "Secure handling and packaging"
    ]
  },
  {
    id: "supply",
    icon: Package,
    title: "Supply Solutions",
    description: "Comprehensive supply solutions tailored to your business needs. From single orders to ongoing supply agreements, we have you covered.",
    features: [
      "Extensive product range",
      "Competitive pricing",
      "Stock management support",
      "Custom ordering options"
    ]
  },
  {
    id: "support",
    icon: Headphones,
    title: "Technical Support",
    description: "Expert technical guidance and support from our experienced team. We help you find the right products for your specific requirements.",
    features: [
      "Product recommendations",
      "Technical specifications",
      "Application guidance",
      "Problem-solving assistance"
    ]
  }
]

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Quality Assured",
    description: "All products sourced from leading manufacturers"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient processing and delivery times"
  },
  {
    icon: Shield,
    title: "Reliable Partner",
    description: "Consistent service you can depend on"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Services
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl text-balance">
              Comprehensive Industrial Supply Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From distribution to technical support, we provide end-to-end services designed to maximise efficiencies and reduce costs within your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-8 flex flex-col gap-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        <span className="text-base text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button asChild className="group">
                      <Link href="/contact">
                        Enquire Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-muted ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <Image
                    src={index === 0 ? "/images/delivery-truck.jpg" : index === 1 ? "/images/industrial-products.jpg" : "/images/team-warehouse.jpg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              Benefits of Working With Oasis
            </h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="text-center p-8 rounded-lg border border-border bg-background"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <benefit.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              How We Work
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              Simple, Efficient Process
            </h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Enquiry", description: "Contact us with your requirements" },
              { step: "02", title: "Consultation", description: "We discuss your specific needs" },
              { step: "03", title: "Quote", description: "Receive transparent pricing" },
              { step: "04", title: "Delivery", description: "Products delivered to your door" }
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-serif text-border">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
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
              Contact our team today to discuss your industrial supply requirements.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/products">
                  View Products
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
