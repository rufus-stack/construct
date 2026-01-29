"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  History,
  Award,
  HardHat,
  Shield,
  Users,
  Leaf,
  Quote,
} from "lucide-react";
import Link from "next/link";
import { Timeline } from "../components/Timeline";
import { ParallaxSection } from "../components/ParallaxSection";

export default function AboutPage() {
  const historyItems = [
    {
      year: "2002",
      title: "Foundation",
      description:
        "Dynamic Will Construction is established in Toronto, Canada, starting with small paving contracts.",
    },
    {
      year: "2008",
      title: "First Major Highway",
      description:
        "Awarded contract for a 40km stretch of Highway 401, marking entry into major infrastructure.",
    },
    {
      year: "2012",
      title: "Commercial Division",
      description:
        "Launched vertical construction division, focusing on mid-rise commercial buildings.",
    },
    {
      year: "2015",
      title: "US Expansion",
      description:
        "Opened first US office in Fairfax, VA. 'Dynamic Will USA' begins operations.",
    },
    {
      year: "2020",
      title: "International Scale",
      description:
        "Reached $1B in completed project value across North America.",
    },
    {
      year: "2024",
      title: "Sustainable Future",
      description:
        "Commitment to 100% carbon-neutral capable construction sites by 2030.",
    },
  ];

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen">
      {/* Hero Header - Dark to fix Navbar contrast */}
      <section className="relative bg-neutral-900 text-white pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 to-neutral-50 dark:to-neutral-950" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
          >
            OUR <span className="text-amber-500">LEGACY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            22 Years of Strength, Precision, and Dynamic Will.
            <br />
            From local roads to international landmarks.
          </motion.p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4 -mt-20 relative z-20 mb-32">
        <div className="flex flex-col gap-8">
          {/* CEO - Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white dark:bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800"
          >
            <div className="relative h-[500px] md:h-auto min-h-[500px]">
              <img
                src="/ceo.jpg"
                alt="CEO of Dynamic Will Construction"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-amber-500 font-bold uppercase tracking-widest mb-1">
                  Founder & CEO
                </div>
                <h3 className="text-4xl font-bold">The Visionary</h3>
              </div>
            </div>

            <div className="p-10 md:p-20 flex flex-col justify-center bg-neutral-900 text-white">
              <Quote className="w-12 h-12 text-amber-500 mb-8 opacity-50" />
              <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-8">
                &quot;Construction is about people. It&apos;s about the families
                who drive on our roads and the businesses that thrive in our
                buildings.&quot;
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                At Dynamic Will, we don&apos;t just finish projects; we set
                standards. Our expansion from Toronto to the US was driven by a
                desire to share our distinct culture of excellence.
              </p>
              <div className="h-px w-full bg-neutral-800" />
            </div>
          </motion.div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CFO Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-xl border border-neutral-100 dark:border-neutral-800 flex flex-col group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                  alt="CFO of Dynamic Will Construction"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <div className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">
                  Chief Financial Officer
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                  Michael Reynolds
                </h3>
                <div className="w-12 h-1 bg-amber-500 mb-6" />
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  With over 15 years of experience in construction finance,
                  Michael ensures our projects are delivered on budget while
                  maximizing value for stakeholders.
                </p>
              </div>
            </motion.div>

            {/* VP Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-xl border border-neutral-100 dark:border-neutral-800 flex flex-col group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580411363668-4b59002b6962?q=80&w=800&auto=format&fit=crop"
                  alt="VP of Dynamic Will Construction"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <div className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">
                  VP of Operations
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                  David Anderson
                </h3>
                <div className="w-12 h-1 bg-amber-500 mb-6" />
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  David oversees day-to-day operations across all sites,
                  coordinating resources to ensure safety, efficiency, and
                  timely project completion.
                </p>
              </div>
            </motion.div>

            {/* PM Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-xl border border-neutral-100 dark:border-neutral-800 flex flex-col group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
                  alt="Project Manager of Dynamic Will Construction"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <div className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">
                  Project Manager
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                  Michelle Okonjo
                </h3>
                <div className="w-12 h-1 bg-amber-500 mb-6" />
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Michelle leads our project delivery teams with precision and
                  passion, ensuring every milestone is met with excellence and
                  every client expectation exceeded.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-20 mb-20">
        <div className="text-center mb-20">
          <h2 className="text-amber-500 font-bold tracking-[0.2em] mb-4">
            WHAT DRIVES US
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold dark:text-white">
            Core Values
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={<Shield className="w-10 h-10" />}
            title="Uncompromising Safety"
            desc="We maintain a zero-tolerance policy for unsafe practices. Everyone goes home safe, every day."
          />
          <ValueCard
            icon={<Users className="w-10 h-10" />}
            title="Collaborative Spirit"
            desc="We believe the best solutions come from diverse minds working together towards a singular goal."
          />
          <ValueCard
            icon={<Leaf className="w-10 h-10" />}
            title="Sustainable Practice"
            desc="Building for the future means protecting it. We prioritize green materials and efficient processes."
          />
        </div>
      </section>

      {/* Safety Parallax */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
        height="h-[60vh]"
        overlayOpacity={0.7}
      >
        <div className="text-center px-4">
          <div className="text-amber-500 text-6xl md:text-8xl font-black mb-4">
            ZERO
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Accidents Target
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-neutral-300">
            Safety isn&apos;t just a guideline; it&apos;s our culture. We are
            proud recipients of the National Safety Award for 5 consecutive
            years.
          </p>
        </div>
      </ParallaxSection>

      {/* History Timeline */}
      <section className="bg-white dark:bg-neutral-950 py-32">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold dark:text-white mb-4">
            Our Journey
          </h2>
          <p className="text-neutral-500 text-xl">
            From humble beginnings to continental impact.
          </p>
        </div>
        <Timeline items={historyItems} />
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-[3rem] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <Globe className="w-12 h-12 text-amber-500 mb-8" />
                <h2 className="text-4xl font-bold dark:text-white mb-8">
                  Headquarters
                </h2>
                <div className="space-y-6 text-xl dark:text-neutral-300">
                  <p>
                    4001 Rosemeade Dr
                    <br />
                    Fairfax, VA 22033
                  </p>
                  <p>+1 (571) 460-7214</p>
                  <p>info@dynamicwill.com</p>
                </div>
              </div>
              <div className="h-[400px] lg:h-auto bg-neutral-300 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.634661730768!2d-77.4063!3d38.8853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDUzJzA3LjEiTiA3N8KwMjQnMjIuNyJX!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({
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
      className="bg-neutral-100 dark:bg-neutral-900 p-10 rounded-3xl border border-transparent hover:border-amber-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all"
    >
      <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-black mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 dark:text-white">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
}
