import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Briefcase, Code2, Cpu, Layout,
    Zap, Search, CheckCircle2, Terminal,
    Bug, TrendingUp, Shield, Database
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Software Development Company | Custom Enterprise Software",
    description: "Award-winning software development services. We build custom enterprise software, highly scalable web applications, and robust digital products designed for growth.",
    keywords: ["Software Development Company", "Custom Software", "Enterprise Software Development", "Web Application Development", "Full Stack Development"],
};

export default function SoftwareDevelopment() {
    const offers = [
        { title: "Custom Enterprise Software", desc: "Tailor-made software solutions designed to digitize and streamline your business operations.", icon: Briefcase },
        { title: "Web Application Development", desc: "Highly interactive and complex web applications built with modern frameworks and scalable architectures.", icon: Code2 },
        { title: "Cloud-Native Systems", desc: "Resilient systems leveraging the power of cloud computing for infinite scalability and performance.", icon: Cpu },
        { title: "Legacy System Modernization", desc: "Upgrade and migrate your outdated systems to modern tech stacks without business disruption.", icon: Layout },
        { title: "API Development & Integration", desc: "Custom API development and seamless third-party service integration.", icon: Zap },
        { title: "Database Architecture", desc: "Secure, optimized, and highly available database designs for your mission-critical data.", icon: Database },
    ];

    const process = [
        {
            step: "01",
            title: "Architecture & Discovery",
            desc: "We analyze your technical requirements and construct a resilient system architecture blueprint to handle future scale.",
            image: "/images/w-step-1.png",
            items: ["Tech Stack Selection", "System Architecture Design", "Feasibility Analysis"],
            result: "A robust technical blueprint."
        },
        {
            step: "02",
            title: "Agile Development",
            desc: "Iterative sprints focused on delivering functional software rapidly with continuous feedback loops.",
            image: "/images/w-step-4.png",
            items: ["Sprint Planning", "Feature Development", "Code Reviews"],
            result: "Faster time to market."
        },
        {
            step: "03",
            title: "Quality Assurance & Testing",
            desc: "Rigorous automated and manual testing to ensure your software is bug-free, secure, and reliable.",
            image: "/images/w-step-5.png",
            items: ["Unit & Integration Testing", "Security Audits", "Performance Testing"],
            result: "Flawless, production-ready software."
        },
        {
            step: "04",
            title: "Deployment & Scaling",
            desc: "Smooth deployment pipelines utilizing modern DevOps practices for zero-downtime releases.",
            image: "/images/w-step-6.png",
            items: ["CI/CD Pipelines", "Docker/Kubernetes", "Monitoring Setup"],
            result: "Effortless, scalable deployment."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-24">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-7xl font-heading font-black text-slate-900 mb-8 tracking-tighter max-w-4xl mx-auto leading-[1.1]">
                        Elite Software Development <span className="text-[#56B2C7]"><br />Engineered for Scale</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                        We build high-performance, secure, and scalable software solutions. From complex enterprise systems to blazing-fast web applications, we are the engineering partner your business needs.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-[#56B2C7] text-white px-10 py-4 rounded-lg font-black text-base hover:bg-[#459fb1] transition-all shadow-lg"
                    >
                        Start Your Project
                    </Link>

                    <div className="mt-16 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white mx-auto max-w-5xl group">
                        <div className="relative h-[400px] md:h-[500px] w-full">
                            <Image 
                                src="/images/web-hero.png"
                                alt="Software Development Environment"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
                            
                            {/* Dashboard HUD Overlay */}
                            <div className="absolute inset-x-8 bottom-8 top-8 flex flex-col pointer-events-none">
                                <div className="flex justify-between items-start mb-auto">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-2xl animate-pulse">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest">System Status: Active</span>
                                        </div>
                                        <div className="h-1 w-32 bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-[#56B2C7]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-2xl">
                                        <Database size={20} className="text-[#56B2C7] mb-2" />
                                        <div className="text-[10px] font-black text-white">DB_UPTIME: 99.99%</div>
                                    </div>
                                </div>
                                <div className="mt-auto flex gap-4 overflow-hidden">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="flex-1 bg-white/5 backdrop-blur-sm rounded-t-2xl border-t border-x border-white/10 p-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <div className="h-2 w-12 bg-white/20 rounded-full mb-4"></div>
                                            <div className="h-4 w-full bg-white/10 rounded mb-2"></div>
                                            <div className="h-4 w-2/3 bg-white/10 rounded"></div>
                                        </div>
                                    ))}
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
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">Our Engineering Capabilities</h2>
                        <p className="text-slate-500 font-medium">World-class software development tailored for market leaders.</p>
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
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">How We Build Software</h2>
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
                                <div className="lg:w-1/2 w-full">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0A0A0A] border-4 border-white h-[400px] p-8 flex flex-col justify-center group/hud">
                                        <div className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover/hud:scale-110">
                                            <Image src={step.image} alt={step.title} fill className="object-cover grayscale" />
                                        </div>
                                        
                                        {i === 0 && (
                                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 relative z-10 transform -rotate-2 group-hover/hud:rotate-0 transition-all duration-500 shadow-2xl">
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className="w-12 h-12 bg-[#56B2C7] rounded-xl flex items-center justify-center shadow-lg shadow-[#56B2C7]/20">
                                                        <Search className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-[#56B2C7] uppercase tracking-widest">Discovery Phase</div>
                                                        <div className="text-white font-black text-lg">Logic Mapping</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    {[1, 2, 3].map(j => (
                                                        <div key={j} className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                            <div className={`h-full bg-[#56B2C7] rounded-full w-[${30 + j * 20}%] opacity-60`}></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {i === 1 && (
                                            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 p-8 relative z-10 shadow-2xl">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                                                        <Terminal className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-green-400 uppercase tracking-widest">Active Development</div>
                                                        <div className="text-white font-black text-lg">Sprint Cycle #12</div>
                                                    </div>
                                                </div>
                                                <div className="bg-black/50 p-4 rounded-lg font-mono text-[10px] text-green-400 space-y-1">
                                                    <div>{">"} npm run build:prod</div>
                                                    <div className="animate-pulse">{">"} compiling assets... done</div>
                                                    <div>{">"} bundle size: 42.4kb</div>
                                                </div>
                                            </div>
                                        )}

                                        {i === 2 && (
                                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 relative z-10 transform scale-95 group-hover/hud:scale-100 transition-all duration-500 shadow-2xl">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
                                                        <Bug className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-red-400 uppercase tracking-widest">QA Automation</div>
                                                        <div className="text-white font-black text-lg">Stress Testing</div>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="text-center">
                                                        <div className="text-[10px] text-white/40 uppercase mb-1 font-bold">Passed</div>
                                                        <div className="text-2xl font-black text-green-400 tracking-tighter">1,240</div>
                                                    </div>
                                                    <div className="text-center border-l border-white/10 text-slate-300">
                                                        <div className="text-[10px] text-white/40 uppercase mb-1 font-bold">Failed</div>
                                                        <div className="text-2xl font-black text-white/20 tracking-tighter">0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {i === 3 && (
                                            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 p-10 relative z-10 shadow-2xl overflow-hidden">
                                                <div className="flex items-center gap-6 mb-8">
                                                    <div className="w-16 h-16 bg-gradient-to-tr from-[#56B2C7] to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl rotate-6 group-hover/hud:rotate-0 transition-transform duration-500">
                                                        <Zap className="text-white" size={32} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-[#56B2C7] uppercase tracking-[0.2em] mb-1">Live Server</div>
                                                        <div className="text-2xl font-black text-white leading-none tracking-tighter underline decoration-[#56B2C7] decoration-4 underline-offset-8">SCALABILITY</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-green-400 font-black text-[10px] tracking-widest bg-green-400/10 px-4 py-2 rounded-full w-fit">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                                    CD_PIPELINE: SUCCESS
                                                </div>
                                            </div>
                                        )}
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
                            Ready to scale your tech?
                        </h2>
                        <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto font-medium text-center">
                            Let&apos;s engineer world-class software that dominates your industry.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#56B2C7] px-12 py-5 rounded-lg font-black text-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Talk to an Engineer
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
