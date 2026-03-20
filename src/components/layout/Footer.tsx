"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/company/virtuallocus/", label: "LinkedIn", color: "#0077B5" },
        { icon: Instagram, href: "https://www.instagram.com/virtuallocus/", label: "Instagram", color: "#E4405F" },
        { icon: Youtube, href: "https://www.youtube.com/@thevirtuallocus", label: "YouTube", color: "#FF0000" },
    ];

    return (
        <footer className="bg-[#F9F9F9] pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-4 mb-6 group transition-all duration-300">
                            <Image
                                src="/images/icon.png"
                                alt="Virtual Locus Icon"
                                width={60}
                                height={60}
                                className="h-14 w-auto object-contain transition-transform group-hover:rotate-12"
                            />
                        </Link>
                        <p className="mt-6 text-slate-500 font-medium leading-relaxed mb-8 text-sm">
                            We build high-performance digital systems that help businesses scale.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-400 transition-all border border-slate-100 hover:shadow-lg group"
                                    aria-label={social.label}
                                    style={{ "--hover-color": social.color } as React.CSSProperties}
                                >
                                    <social.icon
                                        size={18}
                                        className="transition-colors group-hover:text-[var(--hover-color)]"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Services</h4>
                        <ul className="space-y-4 text-slate-500 font-medium text-sm">
                            <li><Link href="/software-development" className="hover:text-[#56B2C7] transition-colors">Software Development</Link></li>
                            <li><Link href="/saas" className="hover:text-[#56B2C7] transition-colors">B2B SaaS Solutions</Link></li>
                            <li><Link href="/ai-automation" className="hover:text-[#56B2C7] transition-colors">AI Automation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Company</h4>
                        <ul className="space-y-4 text-slate-500 font-medium text-sm">
                            <li><Link href="/about" className="hover:text-[#56B2C7] transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-[#56B2C7] transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-[#56B2C7] transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Contact Us</h4>
                        <ul className="space-y-4 text-slate-500 font-medium text-xs">
                            <li className="flex items-center gap-2">
                                <span className="text-[#56B2C7] font-bold">Email:</span>
                                <a href="mailto:virtuallocus@gmail.com?subject=Inquiry | Virtual Locus" className="hover:text-[#56B2C7]">virtuallocus@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#56B2C7] font-bold">Call:</span>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+917620089669" className="hover:text-[#56B2C7]">+91 76200 89669</a>
                                    <a href="tel:+919561599403" className="hover:text-[#56B2C7]">+91 95615 99403</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-200 text-center">
                    <p className="text-slate-400 text-sm font-medium">
                        © {year} Virtual Locus. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
