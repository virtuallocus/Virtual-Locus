import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Share2, MousePointer2, Globe, Mail,
    Megaphone, Users, Zap, BarChart3,
    Search, Target, Rocket, TrendingUp,
    CheckCircle2, Sparkles, PieChart,
    Users2, ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Marketing() {
    const services = [
        { title: "Social Media Management", desc: "Data-driven strategies to build community and authority.", icon: Share2 },
        { title: "Paid Acquisition (PPC)", desc: "High-ROI campaigns across Google, Meta, and LinkedIn.", icon: MousePointer2 },
        { title: "Search Engine Optimization", desc: "Combining analytics and content for organic growth.", icon: Globe },
        { title: "Email Automation", desc: "Intelligent nurture sequences that drive conversion at scale.", icon: Mail },
        { title: "Content Strategy", desc: "Strategic content that builds authority and trust.", icon: Megaphone },
        { title: "Influencer Marketing", desc: "Connecting your brand with authentic voices.", icon: Users },
        { title: "Conversion Optimization", desc: "Turning more of your current traffic into customers.", icon: Zap },
        { title: "Analytics & Data", desc: "Clear reporting showing exactly where growth comes from.", icon: BarChart3 },
    ];

    const methodology = [
        {
            step: "01",
            title: "Deep Research",
            desc: "Our process begins with an exhaustive analysis of your market, competitors, and target audience behavior.",
            image: "/images/w-step-1.png", // Reusing high-quality data analysis image
            focus: ["Audience Segmentation", "Competitor Gap Analysis", "Keyword & Intent Research"],
            result: "A data-backed foundation for all marketing actions."
        },
        {
            step: "02",
            title: "Marketing System Design",
            desc: "We don't just run ads; we design full-funnel systems that guide users from first touch to loyal customer.",
            image: "/images/w-step-2.png", // Reusing high-quality strategy/whiteboard image
            focus: ["Funnel Architecture", "Cross-Channel Strategy", "Tracking & Attribution Setup"],
            result: "A cohesive, measurable growth engine."
        },
        {
            step: "03",
            title: "Campaign Execution",
            desc: "Deploying high-performance campaigns across the digital landscape with precision and creative excellence.",
            image: "/images/marketing-hero.png", // Reusing the specific marketing dashboard image
            focus: ["Creative Asset Production", "Media Buying & Bidding", "A/B Testing Deployment"],
            result: "High-impact market presence and lead generation."
        },
        {
            step: "04",
            title: "Growth Optimization",
            desc: "Continuous refinement. We use real-time data to scale what works and pivot where necessary to maximize ROI.",
            image: "/images/w-step-6.png", // Reusing the growth/plant image
            focus: ["Conversion Rate Optimization", "Budget Scaling Logic", "Retention Strategy"],
            result: "Sustainable, exponential business growth."
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#E8F6F8] text-[#56B2C7] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                        <Sparkles size={12} /> Performance Marketing
                    </div>
                    <h1 className="text-4xl md:text-8xl font-heading font-black text-slate-900 mb-8 tracking-tighter max-w-5xl mx-auto leading-[0.9]">
                        Strategic Marketing Systems <span className="text-[#56B2C7]"><br />Built for Real Growth.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                        We move beyond simple ads. We build end-to-end marketing systems that
                        identify, engage, and convert your ideal customers into lifetime value.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-[#56B2C7] text-white px-12 py-5 rounded-lg font-black text-lg hover:bg-[#459fb1] transition-all shadow-xl active:scale-95"
                        >
                            Request a Strategy Call
                        </Link>
                    </div>

                    <div className="mt-20 relative aspect-[16/8] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white mx-auto max-w-6xl bg-slate-50">
                        <Image
                            src="/images/marketing-hero.png"
                            alt="Marketing Analytics Dashboard"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-6 tracking-tight">Full-Stack Digital Strategy</h2>
                            <p className="text-slate-500 text-lg font-medium">Comprehensive marketing solutions engineered for the modern brand landscape.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <div key={i} className="bg-[#F9F9F9] p-10 rounded-3xl border border-slate-100 hover:border-[#56B2C7]/30 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                                <div className="text-[#56B2C7] mb-8 transform group-hover:-translate-y-1 transition-transform">
                                    <service.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-heading font-black text-slate-900 mb-4 leading-tight">{service.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section (The Detailed Flow) */}
            <section className="py-32 bg-[#F4F4F4]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-6 tracking-tight">Our Marketing Methodology</h2>
                        <p className="text-[#56B2C7] font-black uppercase tracking-[0.2em] text-xs">A data-first approach to brand scaling</p>
                    </div>

                    <div className="space-y-40">
                        {methodology.map((step, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2">
                                    <div className="text-[#56B2C7] font-black text-2xl mb-8 flex items-center gap-4">
                                        <span className="w-12 h-[2px] bg-[#56B2C7]"></span> #{step.step}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-8 tracking-tight">{step.title}</h3>
                                    <p className="text-slate-500 text-xl font-medium leading-relaxed mb-12">{step.desc}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-6">Focus On</h4>
                                            <ul className="space-y-4">
                                                {step.focus.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-slate-900 text-sm font-bold">
                                                        <div className="w-5 h-5 bg-[#E8F6F8] rounded-full flex items-center justify-center text-[#56B2C7] shrink-0">
                                                            <ArrowUpRight size={10} strokeWidth={3} />
                                                        </div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-[#E8F6F8] p-8 rounded-2xl border border-[#56B2C7]/10">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-6">Result</h4>
                                            <p className="text-slate-900 text-base font-black leading-tight">{step.result}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-auto min-h-[250px] lg:min-h-0 bg-white border-8 border-white">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-cover rounded-[2.5rem]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-[#1A1A1A] rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 leading-tight">Ready to scale your digital footprint?</h2>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed">
                                Stop guessing with your marketing budget. Join the businesses that
                                use our digital systems to drive predictable, scalable revenue.
                            </p>
                        </div>
                        <div className="lg:w-auto">
                            <Link
                                href="/contact"
                                className="inline-block bg-[#56B2C7] text-white px-12 py-5 rounded-xl font-black text-xl hover:scale-105 transition-all shadow-2xl"
                            >
                                Book Strategy Call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
