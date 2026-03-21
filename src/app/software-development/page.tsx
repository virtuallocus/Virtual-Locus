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
            image: "/images/w-step-2.png",
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
            image: "/images/w-step-1.png",
            items: ["Unit & Integration Testing", "Security Audits", "Performance Testing"],
            result: "Flawless, production-ready software."
        },
        {
            step: "04",
            title: "Deployment & Scaling",
            desc: "Smooth deployment pipelines utilizing modern DevOps practices for zero-downtime releases.",
            image: "/images/w-step-5.png",
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
                                src="/images/software-dev-concept.png"
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
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px]">
                                        <Image 
                                            src={step.image} 
                                            alt={step.title} 
                                            fill 
                                            className="object-cover transition-transform duration-700 hover:scale-105" 
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Stack */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#56B2C7_1px,transparent_1px)] [background-size:24px_24px]"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                   <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                       <div className="max-w-2xl text-left">
                            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tighter">Our Core <span className="text-[#56B2C7]">Engineering Stack</span></h2>
                            <p className="text-slate-400 font-medium">We utilize high-performance tools to build resilient, enterprise-grade software architectures.</p>
                       </div>
                       <div className="flex items-center gap-6 text-slate-500 font-bold uppercase text-xs tracking-widest border-l border-white/10 pl-8">
                           Distributed Systems | Cloud Native | High Availability
                       </div>
                   </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Frontend", items: ["Next.js 14", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js", "Zustand", "Redux"] },
                            { title: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "NestJS", "FastAPI", "gRPC", "Prisma"] },
                            { title: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "Redis", "Terraform", "GitHub Actions", "Nginx", "MongoDB"] },
                            { title: "Monitoring", items: ["Grafana", "Prometheus", "Sentry", "New Relic", "Datadog", "LogRocket", "Mixpanel", "Segment"] }
                        ].map((cat, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                                <h4 className="text-[#56B2C7] font-black text-sm uppercase tracking-widest mb-6 border-b border-white/5 pb-2">{cat.title}</h4>
                                <ul className="grid grid-cols-1 gap-y-3">
                                    {cat.items.map((t, idx) => (
                                        <li key={idx} className="text-white font-bold text-[11px] flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-[#56B2C7]"></div>{t}
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
