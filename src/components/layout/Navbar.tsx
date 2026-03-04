"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setScrolled(currentScroll > 10);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Process", href: "/#process" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-white border-b border-slate-100/50 ${scrolled
                ? "py-3 md:py-4 shadow-md"
                : "py-4 md:py-6 shadow-sm"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group transition-all duration-300">
                    <Image
                        src="/images/icon.png"
                        alt="Virtual Locus Icon"
                        width={50}
                        height={50}
                        className="h-12 w-auto object-contain transition-transform group-hover:rotate-12"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10">
                    <div className="flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-700 hover:text-primary-teal transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="bg-[#56B2C7] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#459fb1] transition-all shadow-md active:scale-95"
                    >
                        Start a Project
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 transition-all duration-300 shadow-xl overflow-hidden ${isOpen ? "max-h-[400px]" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-semibold text-slate-900"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-[#56B2C7] text-white px-6 py-3 rounded-lg text-center font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        Start a Project
                    </Link>
                </div>
            </div>
        </nav >
    );
}
