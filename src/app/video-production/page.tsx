import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Film, Megaphone, Camera, Users,
    Play, Monitor, Sparkles, CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VideoProduction() {
    const capabilities = [
        { title: "Brand Films", desc: "Showcasing your core values through cinematic storytelling.", icon: Film },
        { title: "Performance Ads", desc: "High-energy video commercials geared to convert viewers into leads.", icon: Megaphone },
        { title: "Product Showcases", desc: "Highlighting every detail of your product with premium lighting.", icon: Camera },
        { title: "Corporate Interviews", desc: "Professional interview segments that reinforce your brand's authority.", icon: Users },
        { title: "Motion Graphics", desc: "Engaging 2D/3D animations to explain complex concepts.", icon: Sparkles },
        { title: "Event Coverage", desc: "Capturing the energy and key moments of your brand's big events.", icon: Play },
    ];

    const flow = [
        {
            step: "01",
            title: "Pre-Production",
            desc: "The foundation of a great video. We plan every frame to ensure the final product meets your objectives.",
            image: "/images/v-step-1.png",
            points: ["Scripting & Storyboarding", "Location Scouting", "Cast & Crew Booking"],
            result: "A clear roadmap for a seamless shoot."
        },
        {
            step: "02",
            title: "Production",
            desc: "Where the magic happens. Our team uses top-tier equipment to capture stunning visuals on location or in studio.",
            image: "/images/v-step-2.png",
            points: ["4K/8K Cinematography", "Professional Lighting", "Crystal Clear Audio"],
            result: "Premium raw footage that tells your story."
        },
        {
            step: "03",
            title: "Post-Production",
            desc: "Polishing the gems. We bring the footage together with professional editing, sound, and color.",
            image: "/images/v-step-3.png",
            points: ["Color Grading", "Sound Design", "Motion Graphics"],
            result: "A cinematic masterpiece ready for your audience."
        },
        {
            step: "04",
            title: "Delivery & Strategy",
            desc: "We ensure your video is optimized for the platforms where your customers are.",
            image: "/images/v-step-4.png",
            points: ["Multi-Platform Optimization", "Social Media Cutdowns", "Strategy Consultation"],
            result: "A video that drives engagement and ROI."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#E8F6F8] text-[#56B2C7] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                        <Sparkles size={12} /> Visual Storytelling
                    </div>
                    <h1 className="text-4xl md:text-7xl font-heading font-black text-slate-900 mb-8 tracking-tighter max-w-4xl mx-auto leading-[1.1]">
                        Premium Video Production <span className="text-[#56B2C7]"><br />to Elevate Your Brand</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                        Cinematic visuals that capture attention and drive action. From brand films to performance ads, we produce content that resonates with your audience.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-[#56B2C7] text-white px-10 py-4 rounded-lg font-black text-base hover:bg-[#459fb1] transition-all shadow-lg"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 bg-[#F4F4F4]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">Our Capabilities</h2>
                        <p className="text-slate-500 font-medium italic">High-end video solutions for every digital platform.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 transform transition-transform hover:-translate-y-1">
                                <div className="text-[#56B2C7]">
                                    <cap.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-black text-slate-900 mb-2">{cap.title}</h3>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{cap.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Production Flow */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">The Production Flow</h2>
                    </div>

                    <div className="space-y-32">
                        {flow.map((step, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2">
                                    <div className="text-[#56B2C7] font-black text-xl mb-6">
                                        #{step.step}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6">{step.title}</h3>
                                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">{step.desc}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                        <div className="bg-[#F4F4F4] p-6 rounded-xl">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-4">Key Elements</h4>
                                            <ul className="space-y-2">
                                                {step.points.map((p, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-slate-900 text-sm font-bold">
                                                        <CheckCircle2 size={14} className="text-[#56B2C7]" /> {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-[#E8F6F8] p-6 rounded-xl">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-4">Result</h4>
                                            <p className="text-slate-900 text-sm font-bold leading-relaxed">{step.result}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 h-auto min-h-[250px] lg:min-h-0 border-4 border-white">
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
                            Ready to Capture Your Story?
                        </h2>
                        <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto font-medium text-center">
                            Let&apos;s create something visually unforgettable for your brand.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#56B2C7] px-12 py-5 rounded-lg font-black text-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Start a Project
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
