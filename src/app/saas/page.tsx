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
            image: "/images/w-step-2.png",
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
            image: "/images/w-step-1.png",
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
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px]">
                                        <Image 
                                            src={step.image} 
                                            alt={step.title} 
                                            fill 
                                            className="object-cover" 
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SaaS Tech Grid */}
            <section className="py-24 bg-[#0A0A0A] text-white relative h-full">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
                        <div className="max-w-2xl">
                             <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tighter leading-none tracking-tight">Enterprise <span className="text-[#56B2C7]">SaaS Stack</span></h2>
                             <p className="text-white/40 font-medium">Built for revenue, built for reliability, built for the future.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-full flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#56B2C7]">
                             <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> HIPAA COMPLIANT</div>
                             <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> SOC2 READY</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Billing & Revenue", items: ["Stripe Connect", "Paddle", "Appflow", "Chargebee", "Lago", "Togai", "Recurly", "Maxio", "Zuora", "LemonSqueezy", "Bill.com", "TaxJar"] },
                            { title: "Auth & Users", items: ["Clerk", "Auth0", "WorkOS", "Firebase", "Descope", "Kinde", "Supabase Auth", "Stytch", "Okta", "Ping Identity", "Magic.link", "SuperTokens"] },
                            { title: "Data & Scaling", items: ["Postgres (Prisma)", "Redis", "ElasticSearch", "Supabase", "Upstash", "Neon", "ClickHouse", "TiDB", "PlanetScale", "Snowflake", "BigQuery", "ScyllaDB"] },
                            { title: "Infrastructure", items: ["Vercel", "AWS", "Fly.io", "Cloudflare", "Railway", "Render", "DigitalOcean", "Hetzner", "Linode", "Azure", "GCP", "Netlify"] }
                        ].map((cat, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl group hover:border-[#56B2C7]/50 transition-all shadow-2xl">
                                <h4 className="text-[#56B2C7] font-black text-[10px] uppercase tracking-[0.3em] mb-8 flex justify-between items-center border-b border-white/5 pb-4">
                                    {cat.title} <div className="w-1.5 h-1.5 bg-[#56B2C7] rounded-full"></div>
                                </h4>
                                <ul className="grid grid-cols-1 gap-y-3">
                                    {cat.items.map((t, idx) => (
                                        <li key={idx} className="text-white text-[11px] font-black tracking-tight flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                                            <div className="text-[#56B2C7]/40 font-black text-[9px] w-4">0{idx+1}</div> {t}
                                        </li>
                                    ))}
                                </ul>
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
