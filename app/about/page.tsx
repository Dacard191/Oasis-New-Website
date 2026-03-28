import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Target, Award, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Oasis Distribution UK",
  description: "Learn about Oasis Distribution UK - a family run industrial supplies distribution business based in Worcestershire, passionate about delivering exceptional service.",
}

const values = [
  {
    icon: Users,
    title: "Family Values",
    description: "As a family-run business, we understand the importance of building lasting relationships with our customers based on trust and reliability."
  },
  {
    icon: Target,
    title: "Customer Focus",
    description: "We are passionate about what we do and focused on delivering high levels of customer service and support to industry."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We pride ourselves on supplying high quality products from leading manufacturers, never compromising on standards."
  },
  {
    icon: Building2,
    title: "Modern Operations",
    description: "Operating from modern premises in Worcestershire, we have the infrastructure to serve businesses across the UK efficiently."
  }
]

const timeline = [
  {
    year: "Founded",
    title: "Established in Worcestershire",
    description: "Oasis Distribution UK Limited was founded with a vision to provide exceptional industrial supplies and service."
  },
  {
    year: "Growth",
    title: "Expanding Our Reach",
    description: "We expanded our product range and distribution capabilities to serve more businesses across the UK."
  },
  {
    year: "Today",
    title: "Industry Leaders",
    description: "Today we continue to grow, maintaining our commitment to quality, value, and customer satisfaction."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              About Us
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl text-balance">
              A Family Business Built on Trust
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Oasis Distribution UK Limited is a family run industrial supplies distribution business based in Worcestershire. We are passionate about what we do and focused on delivering high levels of customer service and support to industry.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/about-facility.jpg"
                alt="Our distribution facility"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Our Story
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
                Essential Supplies for UK Industry
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Operating from modern premises in Worcestershire, we pride ourselves on our ability to supply our customers with high quality products, all of which are from leading manufacturers, combining this with exceptional levels of service and support.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our dedicated team works tirelessly to ensure that every customer receives the products they need, when they need them, at competitive prices. We believe in building long-term partnerships rather than one-time transactions.
              </p>
              <div className="mt-8 p-6 bg-secondary rounded-lg border border-border">
                <p className="text-base font-medium text-foreground italic">
                  {'"To provide our customers with unrivalled levels of value, service and technical support to maximise efficiencies and reduce costs within our clients business."'}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  — Our Mission Statement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Values
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              What Drives Us Forward
            </h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div 
                key={value.title}
                className="flex gap-6 rounded-lg border border-border bg-background p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Journey
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              Growing Together
            </h2>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="relative rounded-lg border border-border bg-card p-8"
              >
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                  {item.year}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Work With Us?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Get in touch with our team to discuss how we can support your business.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
