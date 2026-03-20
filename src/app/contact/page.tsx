"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Software Development",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", phone: "", company: "", service: "Software Development", message: "" });
            } else {
                const data = await res.json();
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to connect to the server. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-40 pb-24">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 mb-6 tracking-tighter">
                        Start Your Project
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Ready to build something great? Fill out the form below and let&apos;s discuss your vision.
                    </p>
                </div>

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                        {/* Left Side: Info Cards */}
                        <div className="lg:w-1/3 flex flex-col gap-6">
                            {[
                                { title: "Email Us", val: "virtuallocus@gmail.com", href: "mailto:virtuallocus@gmail.com?subject=Project Inquiry | Virtual Locus", icon: Mail, color: "bg-[#E8F6F8] text-[#56B2C7]" },
                                { title: "Call Us", val: "76200 89669", href: "tel:+917620089669", val2: "95615 99403", href2: "tel:+919561599403", icon: Phone, color: "bg-[#E8F6F8] text-[#51B1C7]" },
                                { title: "Visit Us", val: "Digital-First Agency", val2: "Available Worldwide", icon: MapPin, color: "bg-[#E8F6F8] text-[#56B2C7]" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6 transition-all hover:border-[#56B2C7]/30 hover:shadow-md group">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${item.color} transition-transform group-hover:scale-110`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-heading font-black text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <div className="text-slate-500 text-sm font-medium flex flex-col">
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="hover:text-[#56B2C7] transition-all hover:translate-x-1 inline-flex items-center gap-1"
                                                >
                                                    {item.val}
                                                </a>
                                            ) : (
                                                <span>{item.val}</span>
                                            )}
                                            {item.val2 && (
                                                item.href2 ? (
                                                    <a
                                                        href={item.href2}
                                                        className="hover:text-[#56B2C7] transition-all hover:translate-x-1 inline-flex items-center gap-1"
                                                    >
                                                        {item.val2}
                                                    </a>
                                                ) : (
                                                    <span>{item.val2}</span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Next Steps Card */}
                            <div className="bg-[#56B2C7] p-8 rounded-[2rem] text-white shadow-xl">
                                <h3 className="text-2xl font-heading font-black mb-8">Next Steps</h3>
                                <ul className="space-y-6">
                                    {[
                                        "Form Submission & Internal Review",
                                        "Free 30-Min Strategy Call",
                                        "Detailed Proposal & Roadmap"
                                    ].map((step, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="font-black text-white/50">{idx + 1}.</span>
                                            <span className="font-bold text-sm tracking-tight">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-50 relative overflow-hidden">
                                {submitted ? (
                                    <div className="text-center py-20">
                                        <div className="w-24 h-24 bg-primary-teal/10 text-primary-teal rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Message Received</h2>
                                        <p className="text-slate-500 font-medium">We&apos;ll be in touch within 24 hours to schedule your strategy call.</p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-10 text-primary-sky font-bold hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        {error && (
                                            <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-medium border border-red-100 italic">
                                                {error}
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <label className="block text-sm font-black text-slate-900 mb-3 ml-1 uppercase tracking-wider">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-[#F4F4F4] border-transparent rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#56B2C7] transition-all outline-none font-medium text-slate-800"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-black text-slate-900 mb-3 ml-1 uppercase tracking-wider">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-[#F4F4F4] border-transparent rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#56B2C7] transition-all outline-none font-medium text-slate-800"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <label className="block text-sm font-black text-slate-900 mb-3 ml-1 uppercase tracking-wider">Phone Number</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full bg-[#F4F4F4] border-transparent rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#56B2C7] transition-all outline-none font-medium text-slate-800"
                                                    placeholder="+91 00000 00000"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-black text-slate-900 mb-3 ml-1 uppercase tracking-wider">Company (Optional)</label>
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full bg-[#F4F4F4] border-transparent rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#56B2C7] transition-all outline-none font-medium text-slate-800"
                                                    placeholder="Your Company Name"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-black text-slate-900 mb-3 ml-1 uppercase tracking-wider">Interested Service</label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full bg-[#F4F4F4] border-transparent rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#56B2C7] transition-all outline-none font-bold text-slate-900 appearance-none cursor-pointer"
                                            >
                                                <option>Software Development</option>
                                                <option>B2B SaaS Solutions</option>
                                                <option>AI Automation</option>
                                                <option>Full Digital Suite</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-black text-slate-900 mb-3 ml-1 uppercase tracking-wider">Project Details</label>
                                            <textarea
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-[#F4F4F4] border-transparent rounded-xl px-5 py-4 focus:bg-white focus:ring-2 focus:ring-[#56B2C7] transition-all outline-none font-medium text-slate-800 resize-none"
                                                placeholder="Tell us about your goals, timeline, and any specific requirements..."
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-[#56B2C7] text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-[#459fb1] transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {loading ? "Sending..." : "Send Message"} <Send size={20} />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
