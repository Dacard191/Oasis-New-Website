"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "01562 312326",
    href: "tel:01562312326"
  },
  {
    icon: Mail,
    title: "Email",
    content: "sales@oasisdistribution.com",
    href: "mailto:sales@oasisdistribution.com"
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Unit 3, Wilden Lane Ind Est, Wilden Lane, Stourport on Severn, Worcestershire, DY13 9JY",
    href: "https://maps.google.com/?q=Unit+3+Wilden+Lane+Ind+Est+Stourport+on+Severn+DY13+9JY"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 8:00 AM - 5:00 PM",
    href: null
  }
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Contact Us
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl text-balance">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Have a question or need a quote? Our team is ready to help. Reach out to us using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div 
                key={item.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.title}
                </h3>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-2 block text-base text-foreground hover:text-accent transition-colors"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                  >
                    {item.content}
                  </Link>
                ) : (
                  <p className="mt-2 text-base text-foreground">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Fill out the form below and we will get back to you as soon as possible.
              </p>
              
              {isSubmitted ? (
                <div className="mt-8 rounded-lg border border-border bg-background p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Send className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    Thank you for your enquiry. Our team will be in touch shortly.
                  </p>
                  <Button 
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8">
                  <FieldGroup>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          required 
                          placeholder="John"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          required 
                          placeholder="Smith"
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="email">Email Address</FieldLabel>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="john@company.com"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="01234 567890"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="company">Company Name</FieldLabel>
                      <Input 
                        id="company" 
                        name="company" 
                        placeholder="Your Company Ltd"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={5}
                        placeholder="Tell us about your requirements..."
                      />
                    </Field>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </FieldGroup>
                </form>
              )}
            </div>

            {/* Map & Info */}
            <div className="flex flex-col gap-8">
              <div className="rounded-lg border border-border bg-background overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.5!2d-2.3164!3d52.3664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzAxLjAiTiAywrAxOScwMC4wIlc!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oasis Distribution Location"
                  className="grayscale"
                />
              </div>

              <div className="rounded-lg border border-border bg-background p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Why Contact Us?
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {[
                    "Get a competitive quote for your supplies",
                    "Discuss your specific requirements",
                    "Learn about our product range",
                    "Set up a trade account",
                    "Technical product enquiries"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-primary p-8 text-primary-foreground">
                <h3 className="text-lg font-semibold">
                  Prefer to Call?
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Our team is available Monday to Friday, 8am - 5pm.
                </p>
                <Button asChild variant="secondary" className="mt-4">
                  <Link href="tel:01562312326">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 01562 312326
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
