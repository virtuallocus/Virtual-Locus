import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Briefcase, ShoppingCart, Cpu, Layout,
    Zap, Search, CheckCircle2, Terminal,
    Bug, TrendingUp, Palette, Smartphone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopment() {
    const offers = [
        { title: "Business Portfolio Websites", desc: "Showcase your brand with a modern, high-impact presence.", icon: Briefcase },
        { title: "E-Commerce Websites", desc: "Convert visitors into customers with a seamless shopping experience.", icon: ShoppingCart },
        { title: "Custom Web Applications", desc: "Complex tools and systems built to solve your unique business problems.", icon: Cpu },
        { title: "Website Redesign", desc: "Modernize your digital presence for the modern web.", icon: Layout },
        { title: "Performance Optimization", desc: "Lightning fast load speeds and SEO-ready architecture.", icon: Zap },
        { title: "SEO-ready Structure", desc: "Built with search engines in mind to drive organic traffic.", icon: Search },
    ];

    const process = [
        {
            step: "01",
            title: "Business Analysis",
            desc: "We deep-dive into your business to understand the technical hurdles and how we can best solve your goals.",
            image: "/images/w-step-1.png",
            items: ["Goal Identification", "Technical Audit", "Competitor Research"],
            result: "A technical blueprint for your success."
        },
        {
            step: "02",
            title: "Strategy & Planning",
            desc: "A blueprint for a successful development cycle to achieve an alignment between stakeholders and developers.",
            image: "/images/w-step-2.png",
            items: ["Sitemap & Architecture", "Feature Prioritization", "Platform Selection"],
            result: "Clear roadmap and timeline for delivery."
        },
        {
            step: "03",
            title: "UI/UX Design",
            desc: "High-fidelity designs that increase user response and deliver results for your digital assets.",
            image: "/images/w-step-3.png",
            items: ["Interactive Prototypes", "Modern Aesthetics", "User-First Flows"],
            result: "A stunning, user-friendly digital interface."
        },
        {
            step: "04",
            title: "Development",
            desc: "The heavy lifting. Tech built with robust, clean and scalable systems developed with the latest code.",
            image: "/images/w-step-4.png",
            items: ["Full-stack Architecture", "Clean Code Standards", "API Integrations"],
            result: "High-performance, scalable web systems."
        },
        {
            step: "05",
            title: "Testing & Launch",
            desc: "Rigorous quality assurance ensures your new platform forms a perfectly stable environment for visitors.",
            image: "/images/w-step-5.png",
            items: ["Cross-browser Testing", "Performance Profiling", "Launch Management"],
            result: "A flawless, production-ready platform."
        },
        {
            step: "06",
            title: "Growth & Support",
            desc: "We don't just launch and leave. We monitor ROI for you to maximize performance and results for the long run.",
            image: "/images/w-step-6.png",
            items: ["Performance Tuning", "Continuous Updates", "Technical Support"],
            result: "Sustainable, long-term digital growth."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-7xl font-heading font-black text-slate-900 mb-8 tracking-tighter max-w-4xl mx-auto leading-[1.1]">
                        Professional Web Development <span className="text-[#56B2C7]"><br />for Growing Businesses</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                        We design and build custom websites that convert visitors into customers. From performance to UX, we handle the technical heavy lifting while you focus on the growth.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-[#56B2C7] text-white px-10 py-4 rounded-lg font-black text-base hover:bg-[#459fb1] transition-all shadow-lg"
                    >
                        Start Today
                    </Link>

                    <div className="mt-16 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white mx-auto max-w-5xl h-auto min-h-[220px] md:min-h-0">
                        <Image
                            src="/images/web-hero.png"
                            alt="Web development setup"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover rounded-[2.5rem]"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-24 bg-[#F9F9F9]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">What We Offer</h2>
                        <p className="text-slate-500 font-medium">Specialized web solutions tailored to business impact.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offers.map((offer, i) => (
                            <div key={i} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="text-[#56B2C7] mb-6 transform group-hover:scale-110 transition-transform">
                                    <offer.icon size={28} />
                                </div>
                                <h3 className="text-xl font-heading font-black text-slate-900 mb-3">{offer.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{offer.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Flow */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">Our Web Development Process</h2>
                    </div>

                    <div className="space-y-32">
                        {process.map((step, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2">
                                    <div className="text-[#56B2C7] font-black text-xl mb-6">
                                        #{step.step}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6">{step.title}</h3>
                                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">{step.desc}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                        <div className="bg-[#F4F4F4] p-6 rounded-xl border border-slate-100">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-4">Focus On</h4>
                                            <ul className="space-y-2">
                                                {step.items.map((it, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-slate-900 text-sm font-bold">
                                                        <CheckCircle2 size={14} className="text-[#56B2C7]" /> {it}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-[#E8F6F8] p-6 rounded-xl border border-[#56B2C7]/10">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-4">Result</h4>
                                            <p className="text-slate-900 text-sm font-bold leading-relaxed">{step.result}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border-4 border-white h-auto min-h-[220px] sm:min-h-[300px] lg:min-h-0">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-cover rounded-3xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-[#56B2C7] rounded-[2.5rem] py-20 px-10 text-center relative overflow-hidden shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 tracking-tighter">
                            Ready to start your project?
                        </h2>
                        <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto font-medium text-center">
                            Let&apos;s build digital systems that work for your business 24/7.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#56B2C7] px-12 py-5 rounded-lg font-black text-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Start Today
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
