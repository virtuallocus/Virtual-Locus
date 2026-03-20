import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Target, Zap, Shield, Users } from "lucide-react";

export default function About() {
    const values = [
        { title: "Precision", desc: "Technical accuracy in everything we build.", icon: Target },
        { title: "Growth", desc: "Results-oriented focus for every client.", icon: Zap },
        { title: "Integrity", desc: "Transparent processes and honest advice.", icon: Shield },
        { title: "Community", desc: "Building long-term successful partnerships.", icon: Users },
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 mb-8 tracking-tighter">
                        About Virtual Locus
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        We are a high-performance software agency dedicated to building systems that
                        empower businesses to scale through AI-driven automation, robust SaaS infrastructure, and powerful software development.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 bg-[#F9F9F9]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-heading font-black text-slate-900 mb-10 tracking-tight">Our Philosophy</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                At Virtual Locus, we believe that a website is more than just a digital brochure;
                                it&apos;s a vital component of your business infrastructure. Our &ldquo;Systems First&rdquo;
                                approach ensures that every pixel and every line of code serves a specific business purpose.
                            </p>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We combine technical excellence with cutting-edge AI automation to deliver
                                software solutions that drive real operational impact.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {values.map((value, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="text-[#56B2C7] mb-6">
                                            <value.icon size={32} />
                                        </div>
                                        <h3 className="text-xl font-heading font-black text-slate-900 mb-3">{value.title}</h3>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                            {value.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-6">
                <div className="h-px bg-slate-200 w-full" />
            </div>

            <Footer />
        </main>
    );
}
