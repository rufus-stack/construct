"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HardHat } from "lucide-react"; // HardHat as a construction icon
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-neutral-900/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-amber-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
            <HardHat className="text-black w-6 h-6" />
          </div>
          <span className="text-xl md:text-2xl font-bold font-sans text-white tracking-tight">
            DYNAMIC WILL <span className="text-amber-500">CONSTRUCTION</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <Link
            href="/#contact"
            className="px-6 py-2 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
                About Us
              </MobileNavLink>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="text-center py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/80 hover:text-amber-500 transition-colors font-medium text-lg relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white text-lg font-medium py-2 border-b border-white/5 hover:text-amber-500"
    >
      {children}
    </Link>
  );
}
