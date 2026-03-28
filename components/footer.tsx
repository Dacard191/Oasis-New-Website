import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#distribution", label: "Distribution" },
    { href: "/services#supply", label: "Supply Solutions" },
    { href: "/services#support", label: "Technical Support" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl tracking-tight">
              Oasis Distribution
            </span>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Family run industrial supplies distribution business based in Worcestershire, delivering quality products with exceptional service.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  01562 312326
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a
                  href="mailto:sales@oasisdistribution.com"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  sales@oasisdistribution.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/80 leading-relaxed">
                  Unit 3, Wilden Lane Ind Est,<br />
                  Wilden Lane, Stourport on Severn,<br />
                  Worcestershire, DY13 9JY
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-foreground/60">
              Oasis Distribution UK Limited. Company Reg no 11783549
            </p>
            <p className="text-sm text-primary-foreground/60">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
