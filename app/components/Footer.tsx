import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              DYNAMIC WILL <span className="text-amber-500">CONSTRUCTION</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Build roads, commercial sites, skyscrapers and more. Delivering
              excellence in heavy construction for over 22 years. From Toronto
              to the US, building the future together.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Linkedin />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-500">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-lg font-semibold mb-6 text-amber-500">
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-amber-500 w-6 h-6 shrink-0" />
                <span className="text-neutral-300">
                  4001 Rosemeade dr,
                  <br />
                  Fairfax VA 22033
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-amber-500 w-5 h-5 shrink-0" />
                <a
                  href="tel:+15714607214"
                  className="text-neutral-300 hover:text-white"
                >
                  +1 (571) 460-7214
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-amber-500 w-5 h-5 shrink-0" />
                <a
                  href="mailto:info@dynamicwill.com"
                  className="text-neutral-300 hover:text-white"
                >
                  info@dynamicwill.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-neutral-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dynamic Will Construction. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-black transition-all"
    >
      {icon}
    </a>
  );
}
