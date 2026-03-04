"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  Code2, Megaphone, Video, ArrowRight,
  Search, Target, Cpu, Rocket, LineChart,
  CheckCircle2, Lightbulb, TrendingUp
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import * as ga from "@/lib/ga";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites, high-converting eCommerce platforms, and robust web applications.",
      icon: Code2,
      href: "/web-development",
      image: "/images/web-dev.png",
      ctaText: "Build Your Website",
    },
    {
      title: "Digital Marketing",
      description: "Performance-focused marketing strategies and end-to-end brand growth services.",
      icon: Megaphone,
      href: "/marketing",
      image: "/images/marketing.png",
      ctaText: "Grow Your Brand",
    },
    {
      title: "Video Production",
      description: "Cinematic commercials, brand films, and viral-ready social media content.",
      icon: Video,
      href: "/video-production",
      image: "/images/video.png",
      ctaText: "Start Production",
    },
  ];

  const processSteps = [
    { title: "Discovery", desc: "We analyze your unique business goals and challenges.", icon: Search },
    { title: "Strategy", desc: "Defining digital plans that drive sustainable growth.", icon: Target },
    { title: "Design & Dev", desc: "Building high-performance, tailored digital systems.", icon: Cpu },
    { title: "Launch", desc: "Rigorous testing and optimization and smooth deployment.", icon: Rocket },
    { title: "Growth", desc: "Continuous improvement, scaling, and future operation.", icon: LineChart },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl md:text-[81px] font-heading font-black text-slate-900 leading-[1.1] md:leading-[0.9] mb-8 tracking-tighter">
                We Build Digital <br className="hidden md:block" />
                Systems <br className="hidden md:block" />
                <span className="text-primary-sky italic">That Grow <br className="hidden md:block" /> Businesses.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
                Web Development • Marketing • Video Production. <br />
                Tailored high-performance solutions designed for scale.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  onClick={() => ga.event({
                    action: 'cta_click',
                    category: 'engagement',
                    label: 'hero_start_project',
                  })}
                  className="w-full sm:w-auto bg-[#56B2C7] text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-[#459fb1] transition-all shadow-lg active:scale-95"
                >
                  Start a Project
                </Link>
                <Link
                  href="/#services"
                  className="w-full sm:w-auto bg-[#F4F4F4] text-slate-900 px-10 py-4 rounded-lg font-bold text-base hover:bg-slate-200 transition-all active:scale-95"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-auto min-h-[250px] md:min-h-0">
                <Image
                  src="/images/hero.png"
                  alt="Workplace setup"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover rounded-[2.5rem]"
                  priority
                />
              </div>
              {/* Decorative floating icon/label element from screenshot */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                <div className="bg-primary-sky/10 w-10 h-10 rounded-full flex items-center justify-center text-primary-sky mb-2">
                  <TrendingUp size={24} />
                </div>
                <div className="text-[10px] font-black uppercase text-slate-400">Exponential Growth</div>
                <div className="text-sm font-bold text-slate-900">Strategic Brand Scaling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-500 font-medium">Comprehensive digital solutions for the modern brand.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4 tracking-tight">Our Process</h2>
            <p className="text-slate-500 font-medium">Built on a foundation of trust and precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-[#E8F6F8] rounded-full flex items-center justify-center text-[#56B2C7] mb-6 group-hover:bg-[#56B2C7] group-hover:text-white transition-all duration-300 shadow-sm relative">
                  <div className="absolute -top-2 -left-2 bg-white w-7 h-7 rounded-full shadow-md flex items-center justify-center text-[#56B2C7] text-[10px] font-black border border-slate-50">
                    0{index + 1}
                  </div>
                  <step.icon size={28} />
                </div>
                <h3 className="text-lg font-heading font-black text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-6 tracking-tighter">
              Why We&apos;re Different
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Most agencies provide services. We build growth-centered digital ecosystems that outperform traditional marketing.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* The "Other Agencies" side */}
            <div className="lg:w-1/2 bg-slate-50 rounded-[2.5rem] p-10 md:p-16 border border-slate-100 flex flex-col">
              <div className="mb-10 inline-flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] tracking-[0.2em]">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div> Traditional Agencies
              </div>
              <ul className="space-y-8 flex-grow">
                {[
                  "Disconnected services (Marketing vs Dev)",
                  "Focus on vanity metrics (Likes/Follows)",
                  "Generic templates & one-size-fits-all",
                  "Hidden costs and slow communication",
                  "Short-term project mindset"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-400">
                    <div className="mt-1.5"><CheckCircle2 size={16} className="text-slate-300 flex-shrink-0" /></div>
                    <span className="font-medium text-base leading-snug">{item}</span>
                  </li>))}
              </ul>
            </div>

            {/* The "Virtualocus" side */}
            <div className="lg:w-1/2 bg-[#1A1A1A] rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col lg:scale-105 z-10">
              <div className="absolute top-0 right-0 p-8">
                <TrendingUp size={120} className="text-white/5 absolute -top-10 -right-10 rotate-12" />
              </div>

              <div className="mb-10 inline-flex items-center gap-2 text-[#56B2C7] font-black uppercase text-[10px] tracking-[0.2em]">
                <div className="w-2 h-2 rounded-full bg-[#56B2C7] animate-pulse"></div> The Virtual Locus Way
              </div>

              <h3 className="text-3xl font-heading font-black mb-10 leading-tight">
                How We Help Your <br /> Brand Grow Better
              </h3>

              <ul className="space-y-8 flex-grow">
                {[
                  { title: "Unified Systems", desc: "We integrate Dev, Marketing, and Content into one cohesive growth engine." },
                  { title: "Revenue-First Approach", desc: "We focus on real business ROI, not just traffic and empty numbers." },
                  { title: "Bespoke Architecture", desc: "Every solution is custom-engineered for your specific brand challenges." },
                  { title: "Transparency & Speed", desc: "Complete visibility into our process with rapid iterative delivery." },
                  { title: "Growth Partnership", desc: "We scale with you, acting as your dedicated technical & strategy team." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="mt-1 bg-[#56B2C7]/20 p-1 rounded-full"><CheckCircle2 size={18} className="text-[#56B2C7]" /></div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#56B2C7] rounded-[2.5rem] py-20 px-10 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tighter">
              Ready to Build Your <br /> Digital Presence?
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-12 max-w-2xl mx-auto font-medium">
              Let&apos;s discuss how our systems can transform your business trajectory.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#56B2C7] px-12 py-5 rounded-lg font-black text-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
