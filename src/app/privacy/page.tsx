import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white selection:bg-[#56B2C7] selection:text-white">
            <Navbar />

            {/* Header */}
            <header className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-[#E8F6F8] text-[#56B2C7] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                            <Shield size={12} /> Compliance & Trust
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                            Privacy <span className="text-[#56B2C7] italic">Policy</span>
                        </h1>
                        <div className="flex flex-wrap gap-x-8 gap-y-2 text-slate-500 font-medium text-sm">
                            <p>Effective Date: <span className="text-slate-900 font-bold underline decoration-[#56B2C7]/30">March 4, 2026</span></p>
                            <p>Last Updated: <span className="text-slate-900 font-bold underline decoration-[#56B2C7]/30">March 4, 2026</span></p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Container */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Sidebar Navigation (Sticky) */}
                        <aside className="lg:w-1/4 hidden lg:block">
                            <div className="sticky top-32 space-y-2">
                                {[
                                    { id: "collection", label: "01. Information Collection", icon: Eye },
                                    { id: "usage", label: "02. Data Usage", icon: Lock },
                                    { id: "disclosure", label: "03. Sharing & Disclosure", icon: FileText },
                                    { id: "cookies", label: "04. Cookies & Tracking", icon: Shield },
                                    { id: "rights", label: "07. Your Rights", icon: CheckCircle2 }
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        href={`#${item.id}`}
                                        className="group flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                                    >
                                        <item.icon size={16} className="text-slate-400 group-hover:text-[#56B2C7] transition-colors" />
                                        <span className="text-xs font-black uppercase tracking-wider text-slate-500 group-hover:text-slate-900 transition-colors">
                                            {item.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </aside>

                        {/* Main Text Content */}
                        <div className="lg:w-3/4 max-w-3xl">
                            <div className="prose prose-slate prose-lg max-w-none">
                                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                                    Virtual Locus (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a premium digital agency offering web development, digital marketing, and video production services. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our services.
                                </p>
                                <p className="text-slate-600 font-medium leading-relaxed mb-16">
                                    By using our website or contacting us, you agree to the practices described in this policy.
                                </p>

                                {/* Section 1 */}
                                <div id="collection" className="mb-20">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-[#56B2C7] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#56B2C7]/20">
                                            <span className="font-heading font-black text-xl">01</span>
                                        </div>
                                        <h2 className="text-4xl font-heading font-black text-slate-900 tracking-tight m-0">Information We Collect</h2>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-[#F9F9F9] p-8 rounded-3xl border border-slate-100">
                                            <h3 className="text-xl font-heading font-black text-slate-900 mb-6 flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-[#56B2C7]" />
                                                Information you provide directly:
                                            </h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
                                                {[
                                                    "Your name and contact details",
                                                    "Business name & project requirements",
                                                    "Messages via contact form / WhatsApp",
                                                    "Files and creative briefs shared"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm bg-white p-4 rounded-xl border border-slate-50 shadow-sm">
                                                        <CheckCircle2 size={16} className="text-[#56B2C7] shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-[#E8F6F8] p-8 rounded-3xl border border-[#56B2C7]/10">
                                            <h3 className="text-xl font-heading font-black text-slate-900 mb-6 flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-[#56B2C7]" />
                                                Information collected automatically:
                                            </h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
                                                {[
                                                    "IP address and geographic location",
                                                    "Browser & device information",
                                                    "Pages visited and time spent",
                                                    "Referring URLs and navigation paths"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm bg-white/50 p-4 rounded-xl border border-white backdrop-blur-sm">
                                                        <CheckCircle2 size={16} className="text-[#56B2C7] shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div id="usage" className="mb-20">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                            <span className="font-heading font-black text-xl">02</span>
                                        </div>
                                        <h2 className="text-4xl font-heading font-black text-slate-900 tracking-tight m-0">How We Use Your Information</h2>
                                    </div>
                                    <p className="text-slate-600 font-medium mb-8">We use the information we collect to:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                        {[
                                            "Respond to inquiries & discuss projects",
                                            "Prepare proposals & project scopes",
                                            "Deliver and manage agreed services",
                                            "Send project-related updates",
                                            "Analyze usage to improve performance",
                                            "Comply with legal obligations"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-4 pb-6 border-b border-slate-100">
                                                <span className="text-[#56B2C7] font-black text-lg">/</span>
                                                <span className="text-slate-900 font-bold text-base leading-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-12 p-6 bg-slate-50 rounded-2xl border-l-4 border-[#56B2C7] text-slate-500 italic text-sm font-medium">
                                        We will not use your contact information to send unsolicited promotional communications unless you have explicitly opted in.
                                    </p>
                                </div>

                                {/* Section 3 */}
                                <div id="disclosure" className="mb-20">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm">
                                            <span className="font-heading font-black text-xl">03</span>
                                        </div>
                                        <h2 className="text-4xl font-heading font-black text-slate-900 tracking-tight m-0">Sharing & Disclosure</h2>
                                    </div>
                                    <p className="text-lg text-slate-900 font-black mb-8 italic">We do not sell, rent, or trade your personal data to third parties.</p>
                                    <div className="space-y-6">
                                        {[
                                            { title: "Service Providers", desc: "Trusted platforms used to operate our business who are contractually bound to protect your data." },
                                            { title: "Legal Compliance", desc: "If required by law, court order, or governmental authority, we may disclose information as necessary." },
                                            { title: "Business Transfers", desc: "In the event of a merger, your data may be transferred part of assets under the same protections." }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                                                <h4 className="text-lg font-heading font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Section 4 & 5 */}
                                <div id="cookies" className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-2xl font-heading font-black text-slate-900 mb-6 flex items-center gap-3 tracking-tight">
                                            <span className="text-[#56B2C7]">04.</span> Cookies & Tracking
                                        </h3>
                                        <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                                            Our website may use cookies to enhance your browsing experience and gather usage analytics.
                                        </p>
                                        <ul className="space-y-3 m-0 p-0 list-none">
                                            <li className="text-slate-900 font-bold text-xs uppercase tracking-widest bg-slate-50 p-3 rounded-lg flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#56B2C7]" /> Essential Cookies</li>
                                            <li className="text-slate-900 font-bold text-xs uppercase tracking-widest bg-slate-50 p-3 rounded-lg flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#56B2C7]" /> Analytics Cookies</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-heading font-black text-slate-900 mb-6 flex items-center gap-3 tracking-tight">
                                            <span className="text-[#56B2C7]">05.</span> Third Party Services
                                        </h3>
                                        <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                                            Our website is hosted on Vercel and integrates with Google Analytics, WhatsApp Business, Social Media and Gmail.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["Vercel", "Google Analytics", "WhatsApp", "LinkedIn", "YouTube", "Instagram"].map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-[#E8F6F8] text-[#56B2C7] font-black text-[9px] uppercase tracking-widest rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Section 7 */}
                                <div id="rights" className="mb-20">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-12 h-12 bg-[#56B2C7] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#56B2C7]/20">
                                            <span className="font-heading font-black text-xl">07</span>
                                        </div>
                                        <h2 className="text-4xl font-heading font-black text-slate-900 tracking-tight m-0">Your Rights</h2>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            { title: "Access", desc: "Request a copy of the personal data we hold about you." },
                                            { title: "Correction", desc: "Ask us to correct inaccurate or incomplete information." },
                                            { title: "Deletion", desc: "Request that we delete your personal data permanently." },
                                            { title: "Objection", desc: "Object to the processing of your data in certain cases." },
                                            { title: "Portability", desc: "Receive your data in a commonly used, readable format." }
                                        ].map((right, i) => (
                                            <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-white hover:border-[#56B2C7]/20 transition-all hover:shadow-xl group">
                                                <h4 className="text-base font-heading font-black text-slate-900 mb-2 uppercase tracking-wide group-hover:text-[#56B2C7] transition-colors">{right.title}</h4>
                                                <p className="text-slate-500 font-medium text-xs leading-relaxed">{right.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Section 11 - Contact */}
                                <div className="bg-[#020617] rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#56B2C7]/10 blur-[100px] rounded-full pointer-events-none" />
                                    <div className="relative z-10">
                                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 tracking-tighter leading-tight">
                                            Have Privacy <br /> <span className="text-[#56B2C7] italic">Questions?</span>
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                            <div>
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#56B2C7] mb-6">Direct Communication</h4>
                                                <ul className="space-y-4 list-none p-0 m-0">
                                                    <li className="flex flex-col">
                                                        <span className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-1">Email</span>
                                                        <a href="mailto:virtuallocus@gmail.com" className="text-lg font-bold hover:text-[#56B2C7] transition-all">virtuallocus@gmail.com</a>
                                                    </li>
                                                    <li className="flex flex-col">
                                                        <span className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-1">WhatsApp</span>
                                                        <a href="https://wa.me/917620089669" className="text-lg font-bold hover:text-[#56B2C7] transition-all">+91 76200 89669</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#56B2C7] mb-6">Business Identity</h4>
                                                <p className="text-lg font-bold">Virtual Locus</p>
                                                <p className="text-white/60 text-sm font-medium mt-2 leading-relaxed max-w-xs">
                                                    Premium digital agency engineering high-performance growth systems for modern brands.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                                            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">© 2026 Virtual Locus</p>
                                            <div className="flex gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#56B2C7] animate-pulse" />
                                                <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">Secure Data Protocol Active</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
