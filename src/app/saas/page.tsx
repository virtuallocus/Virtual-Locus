import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Cloud, Server, Users, ShieldCheck,
    Lock, Zap, LayoutDashboard, Globe,
    Repeat, CheckCircle2, DollarSign, Key, TrendingUp
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "B2B SaaS Development Company | Cloud-Native SaaS Solutions",
    description: "Launch and scale your SaaS product. We specialize in B2B SaaS development, multi-tenant architecture, subscription management, and secure cloud platforms.",
    keywords: ["SaaS Development Company", "B2B SaaS Solutions", "Multi-Tenant Architecture", "SaaS Development Agency", "Cloud Software Build"],
};

export default function SaaSDevelopment() {
    const offers = [
        { title: "Multi-Tenant Architecture", desc: "Build highly isolated, secure, and scalable architectures for serving thousands of B2B clients simultaneously.", icon: Server },
        { title: "Subscription Management", desc: "Integrate recurring billing, usage-based pricing, and flexible subscription tiers with Stripe or Paddle.", icon: DollarSign },
        { title: "Role-Based Access Control", desc: "Implement complex RBAC systems and secure authentication using the latest security protocols.", icon: Key },
        { title: "Analytics & Admin Dashboards", desc: "Comprehensive dashboards for tenant management, tracking MRR, churn, and user engagement metrics.", icon: LayoutDashboard },
        { title: "Cloud-Native Infrastructure", desc: "Deploy your SaaS on AWS, GCP, or Azure with auto-scaling to handle unpredictable traffic spikes.", icon: Cloud },
        { title: "Data Security & Compliance", desc: "Ensure your platform meets SOC2, GDPR, and HIPAA compliance standards with enterprise-grade security.", icon: ShieldCheck },
    ];

    const process = [
        {
            step: "01",
            title: "SaaS Strategy & Prototyping",
            desc: "Validating your product concept to guarantee market fit. We design interactive UI/UX prototypes before writing a single line of code.",
            image: "/images/w-step-1.png",
            items: ["Market Validation", "UI/UX Prototyping", "MVP Definition"],
            result: "A mapped-out SaaS product ready for engineering."
        },
        {
            step: "02",
            title: "Core Infrastructure & MVP",
            desc: "Developing the absolute core functionality and multi-tenant infrastructure to get your SaaS to market rapidly and efficiently.",
            image: "/images/w-step-4.png",
            items: ["Database Schema", "Multi-tenancy Setup", "Authentication System"],
            result: "A robust Minimum Viable Product (MVP)."
        },
        {
            step: "03",
            title: "Payments & Feature Scale",
            desc: "Implementing subscription systems and billing cycles, followed by building out advanced features required by your user segments.",
            image: "/images/w-step-2.png",
            items: ["Stripe/Paddle Integration", "Pricing Tiers", "Feature Expansion"],
            result: "A fully monetizable SaaS platform."
        },
        {
            step: "04",
            title: "Cloud Scale & Ops",
            desc: "Launching the product and shifting focus to high-availability operations to ensure 99.99% uptime for your enterprise clients.",
            image: "/images/w-step-6.png",
            items: ["Load Balancing", "Performance Tuning", "Automated Backups"],
            result: "Enterprise reliability and scale."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-7xl font-heading font-black text-slate-900 mb-8 tracking-tighter max-w-4xl mx-auto leading-[1.1]">
                        Build Complete <span className="text-[#56B2C7]"><br />B2B SaaS Platforms</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                        Transform your software idea into a recurring revenue machine. We design, engineer, and scale powerful B2B SaaS applications built for enterprise performance.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-[#56B2C7] text-white px-10 py-4 rounded-lg font-black text-base hover:bg-[#459fb1] transition-all shadow-lg"
                    >
                        Launch Your SaaS
                    </Link>
                    
                    <div className="mt-16 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white mx-auto max-w-5xl group">
                        <div className="relative h-[400px] md:h-[500px] w-full">
                            <Image 
                                src="/images/marketing-hero.png"
                                alt="B2B SaaS Analytics"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>

                            {/* SaaS Metrics HUD */}
                            <div className="absolute top-12 left-12 grid grid-cols-2 gap-4 pointer-events-none">
                                {[
                                    {label: "Monthy Recurring Revenue", val: "$420,000"},
                                    {label: "Active Enterprises", val: "1,240"}
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl">
                                        <div className="text-[10px] font-black text-[#56B2C7] uppercase tracking-widest mb-1">{stat.label}</div>
                                        <div className="text-2xl font-black text-white">{stat.val}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute bottom-12 right-12 w-64 pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl">
                                     <div className="h-2 w-full bg-white/20 rounded-full mb-6 relative overflow-hidden">
                                          <div className="absolute top-0 left-0 h-full w-2/3 bg-[#56B2C7] animate-[pulse_2s_infinite]"></div>
                                     </div>
                                     <div className="space-y-4">
                                          {[1,2,3].map(i => (
                                              <div key={i} className="flex justify-between items-center">
                                                   <div className="w-1/2 h-2 bg-white/10 rounded"></div>
                                                   <div className="w-1/4 h-2 bg-white/20 rounded"></div>
                                              </div>
                                          ))}
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-24 bg-[#F9F9F9]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">SaaS Core Features</h2>
                        <p className="text-slate-500 font-medium">Everything required to run a successful, high-ARR software business.</p>
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
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">SaaS Development Lifecycle</h2>
                    </div>

                    <div className="space-y-32">
                        {process.map((step, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2">
                                    <div className="text-[#56B2C7] font-black text-xl mb-6">
                                        Phase {step.step}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6">{step.title}</h3>
                                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">{step.desc}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                        <div className="bg-[#F4F4F4] p-6 rounded-xl border border-slate-100">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-4">Crucial Steps</h4>
                                            <ul className="space-y-2">
                                                {step.items.map((it, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-slate-900 text-sm font-bold">
                                                        <CheckCircle2 size={14} className="text-[#56B2C7]" /> {it}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-[#E8F6F8] p-6 rounded-xl border border-[#56B2C7]/10">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-4">Outcome</h4>
                                            <p className="text-slate-900 text-sm font-bold leading-relaxed">{step.result}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    {i === 0 && (
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0A0A0A] border-4 border-white h-[400px] p-8 flex flex-col justify-center group">
                                            <div className="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-110">
                                                <Image src={step.image} alt={step.title} fill className="object-cover grayscale" />
                                            </div>
                                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 relative z-10 transform -rotate-2 group-hover:rotate-0 transition-all duration-500 shadow-2xl">
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                                        <LayoutDashboard className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Blueprint Alpha</div>
                                                        <div className="text-white font-black text-lg">System Layout</div>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-end">
                                                        <div className="text-[10px] font-bold text-white/40 uppercase">Wireframe Progress</div>
                                                        <div className="text-xs font-black text-white">85%</div>
                                                    </div>
                                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                        <div className="h-full w-[85%] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                                                    </div>
                                                    <div className="grid grid-cols-3 gap-2 pt-2">
                                                        {[1,2,3].map(j => <div key={j} className="h-8 bg-white/5 rounded border border-white/5"></div>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {i === 1 && (
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#050505] border-4 border-white h-[400px] p-8 flex flex-col justify-center group">
                                            <div className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-125">
                                                <Image src={step.image} alt={step.title} fill className="object-cover grayscale" />
                                            </div>
                                            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 p-8 relative z-10 shadow-2xl">
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className="w-12 h-12 bg-[#56B2C7] rounded-xl flex items-center justify-center shadow-lg shadow-[#56B2C7]/20">
                                                        <Server className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-[#56B2C7] uppercase tracking-widest">Core Engine</div>
                                                        <div className="text-white font-black text-lg">Infrastructure</div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                                        <div className="text-[10px] font-bold text-white/30 uppercase mb-2">Instances</div>
                                                        <div className="text-2xl font-black text-white">128</div>
                                                    </div>
                                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                                        <div className="text-[10px] font-bold text-white/30 uppercase mb-2">Latency</div>
                                                        <div className="text-2xl font-black text-[#56B2C7]">14ms</div>
                                                    </div>
                                                </div>
                                                <div className="mt-6 flex gap-1 justify-between">
                                                    {[1,2,3,4,5,6,7,8,9,10].map(k => (
                                                        <div key={k} className={`h-4 w-1 rounded-full ${k < 8 ? 'bg-[#56B2C7]' : 'bg-white/10'}`}></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {i === 2 && (
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0A0A0A] border-4 border-white h-[400px] p-8 flex flex-col justify-center group">
                                            <div className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover:scale-105">
                                                <Image src={step.image} alt={step.title} fill className="object-cover grayscale" />
                                            </div>
                                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 mb-4 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl relative z-10">
                                                <div className="flex justify-between items-center mb-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-[#56B2C7] rounded-lg flex items-center justify-center shadow-lg shadow-[#56B2C7]/20">
                                                            <DollarSign className="text-white" size={20} />
                                                        </div>
                                                        <span className="font-heading font-black text-white uppercase text-xs tracking-widest">Billing Gateway</span>
                                                    </div>
                                                    <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-black uppercase tracking-widest">Active</div>
                                                </div>
                                                <div className="h-6 w-1/3 bg-white/20 rounded mb-4"></div>
                                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full w-2/3 bg-[#56B2C7] animate-pulse"></div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 transform rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl overflow-hidden">
                                                    <div className="text-[10px] font-black text-[#56B2C7] uppercase mb-4 tracking-widest leading-none">ARR Growth</div>
                                                    <TrendingUp className="text-white opacity-10 absolute -top-4 -right-2" size={80} />
                                                    <div className="text-2xl font-black text-white">+84%</div>
                                                </div>
                                                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-2xl overflow-hidden">
                                                    <div className="text-[10px] font-black text-[#56B2C7] uppercase mb-4 tracking-widest leading-none">New Users</div>
                                                    <Users className="text-white opacity-10 absolute -top-4 -right-2" size={80} />
                                                    <div className="text-2xl font-black text-white">412</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {i === 3 && (
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border-4 border-white h-[400px] p-8 flex flex-col justify-center group">
                                            <div className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-110">
                                                <Image src={step.image} alt={step.title} fill className="object-cover grayscale" />
                                            </div>
                                            <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/20 p-10 relative z-10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                                <div className="flex items-center gap-6 mb-8">
                                                    <div className="w-16 h-16 bg-gradient-to-tr from-[#56B2C7] to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl rotate-3">
                                                        <Globe className="text-white" size={32} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-[#56B2C7] uppercase tracking-[0.2em] mb-1">Production</div>
                                                        <div className="text-2xl font-black text-white leading-none tracking-tighter">GLOBAL OPS</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-green-400 font-black text-[10px] tracking-widest bg-green-400/10 px-4 py-2 rounded-full w-fit">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                                    99.9% CLOUD UPTIME
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
                            Ready to Disrupt the Market?
                        </h2>
                        <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto font-medium text-center">
                            Partner with us to engineer a SaaS application that generates serious MRR.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#56B2C7] px-12 py-5 rounded-lg font-black text-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Build Your SaaS
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
