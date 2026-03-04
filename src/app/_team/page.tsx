import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Team() {
    const team = [
        {
            name: "Tejas Waje",
            role: "Founder",
            image: "/images/team/founder.png",
            bio: "Strategic visionary behind Virtual Locus, focused on high-performance digital systems and brand scaling.",
            socials: {
                linkedin: "https://www.linkedin.com/company/virtuallocus/",
                instagram: "https://www.instagram.com/virtuallocus/",
                email: "mailto:virtuallocus@gmail.com"
            }
        },
        {
            name: "Om Pendharkar",
            role: "Co-Founder",
            image: "/images/team/cofounder.png",
            bio: "Leading the technical execution and ensuring structural excellence across all digital products.",
            socials: {
                linkedin: "https://www.linkedin.com/company/virtuallocus/",
                instagram: "https://www.instagram.com/virtuallocus/",
                email: "mailto:virtuallocus@gmail.com"
            }
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 mb-8 tracking-tighter">
                        The Minds Behind <br /> <span className="text-primary-sky">Virtual Locus</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        A dedicated duo driving innovation, technical precision, and strategic growth for modern brands.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i} className="group relative">
                                <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                    {/* Content inside image */}
                                    <div className="absolute bottom-0 left-0 p-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <div className="inline-block px-4 py-1.5 bg-[#56B2C7] text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                                            {member.role}
                                        </div>
                                        <h3 className="text-3xl font-heading font-black text-white mb-2">{member.name}</h3>
                                        <p className="text-white/80 font-medium text-sm leading-relaxed mb-6 max-w-xs">
                                            {member.bio}
                                        </p>

                                        {/* Socials */}
                                        <div className="flex gap-4">
                                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all border border-white/20">
                                                <Linkedin size={18} />
                                            </a>
                                            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all border border-white/20">
                                                <Instagram size={18} />
                                            </a>
                                            <a href={member.socials.email} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all border border-white/20">
                                                <Mail size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-6 h-6 bg-[#56B2C7]/20 rounded-lg flex items-center justify-center">
                                        <div className="w-2 h-2 bg-[#56B2C7] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
