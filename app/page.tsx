"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building, HardHat, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ParallaxSection } from "./components/ParallaxSection";

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="flex flex-col bg-neutral-950 text-white selection:bg-amber-500 selection:text-black">
      {/* Cinematic Hero */}
      <section className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541976594320-0f3f5dd69a23?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-neutral-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/20" />
        </motion.div>

        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-20 bg-amber-500" />
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em]">
                Est. 2002
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
              DYNAMIC
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                WILL.
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-neutral-400 max-w-2xl font-light mb-12 leading-relaxed">
              We don&apos;t just build structures.
              <br />
              We engineer legacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/about"
                className="group flex items-center gap-3 px-8 py-4 bg-amber-500 text-black text-lg font-bold rounded-full hover:bg-white transition-colors"
              >
                <span>Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 text-lg font-bold rounded-full hover:bg-white/20 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Statement Section */}
      <section className="py-32 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Beyond Concrete <br />
                <span className="text-neutral-500">& Steel.</span>
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed font-light">
                Dynamic Will Construction has spent over two decades mastering
                the art of heavy construction. Dealing with complex logistics,
                massive scale, and intricate engineering challenges is our
                baseline.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <StatBox number="22+" label="Years of Excellence" />
                <StatBox number="$2B+" label="Project Value" />
                <StatBox number="150+" label="Major Projects" />
                <StatBox number="100%" label="Safety Record" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full"
            >
              <div className="absolute top-10 right-10 w-full h-full bg-amber-500/10 rounded-3xl" />
              <div className="absolute inset-0 bg-neutral-900 rounded-3xl overflow-hidden border border-white/10">
                <Image
                  width={100}
                  height={100}
                  alt="CEO"
                  unoptimized
                  src="/ceo.jpg"
                  className="w-full h-full object-top object-cover opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Parallax */}
      <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2600&auto=format&fit=crop">
        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-amber-500 font-bold tracking-[0.2em] mb-4">
              OUR EXPERTISE
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white">
              We Build The World
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Infrastructure"
              desc="Highways, bridges, and tunnels that connect nations."
              icon={<Truck className="w-10 h-10" />}
            />
            <ServiceCard
              title="Commercial"
              desc="Industrial complexes and retail centers driving economy."
              icon={<Building className="w-10 h-10" />}
            />
            <ServiceCard
              title="Skyscrapers"
              desc="Vertical engineering marvels defining skylines."
              icon={<HardHat className="w-10 h-10" />}
            />
          </div>
        </div>
      </ParallaxSection>

      {/* Modern Masonry Project Grid */}
      <section id="projects" className="py-32 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-neutral-500">
                Selected projects from Canada & USA.
              </p>
            </div>
            {/* <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 font-bold text-xl hover:text-amber-500 transition-colors"
            >
              View Index <ArrowRight />
            </Link> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
            {/* Project 1 - Large */}
            <ProjectCard
              className="lg:col-span-2"
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
              title="Toronto Financial Core"
              location="Toronto, CA"
              category="Commercial"
            />
            {/* Project 2 */}
            <ProjectCard
              image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              title="Fairfax Interchange"
              location="Fairfax, USA"
              category="Infrastructure"
            />
            {/* Project 3 */}
            <ProjectCard
              image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
              title="Vertex Tower A"
              location="New York, USA"
              category="Skyscraper"
            />
            {/* Project 4 - Large */}
            <ProjectCard
              className="lg:col-span-2"
              image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
              title="West Coast Expansion"
              location="California, USA"
              category="Industrial"
            />
          </div>

          {/* <div className="mt-12 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold text-xl hover:text-amber-500 transition-colors"
            >
              View Index <ArrowRight />
            </Link>
          </div> */}
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="py-32 bg-neutral-900 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-amber-500 mx-auto mb-8 fill-amber-500" />
          <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-4xl mx-auto leading-tight">
            &quot;Dynamic Will executes with a level of precision that is rare
            in this industry. Our ability to handle trans-national logistics
            is unmatched.&quot;
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-neutral-700 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">James Sterling</div>
              <div className="text-amber-500 text-sm">
                Director of Infrastructure, City of Toronto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Pre-cursor */}
      <section className="relative py-40 overflow-hidden flex items-center justify-center bg-amber-500 text-black">
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">
            LET&apos;S BUILD
          </h2>
          <Link
            href="/#contact"
            className="inline-block px-12 py-6 bg-black text-white text-2xl font-bold rounded-full hover:scale-105 hover:bg-neutral-800 transition-all"
          >
            Start Project
          </Link>
        </div>
      </section>
    </div>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="border-l-2 border-amber-500 pl-4">
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-neutral-500 text-sm uppercase font-medium">
        {label}
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:bg-amber-500 hover:border-amber-500 transition-all group duration-500"
    >
      <div className="mb-8 text-neutral-400 group-hover:text-black transition-colors">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-4 group-hover:text-black">
        {title}
      </h3>
      <p className="text-neutral-400 group-hover:text-black/80 text-lg leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

function ProjectCard({
  image,
  title,
  location,
  category,
  className = "",
}: {
  image: string;
  title: string;
  location: string;
  category: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative h-full overflow-hidden bg-neutral-100 ${className}`}
    >
      <img
        src={image}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors" />
      <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
          {category}
        </div>
        <h3 className="text-3xl font-bold mb-1">{title}</h3>
        <p className="text-white/80">{location}</p>
      </div>
    </div>
  );
}
