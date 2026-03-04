'use client';

import React from 'react';
import { Linkedin, Instagram, Youtube } from "lucide-react";

const SocialSidebar = () => {
    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/company/virtuallocus/", label: "LinkedIn", color: "#0077B5" },
        { icon: Instagram, href: "https://www.instagram.com/virtuallocus/", label: "Instagram", color: "#E4405F" },
        { icon: Youtube, href: "https://www.youtube.com/@thevirtuallocus", label: "YouTube", color: "#FF0000" },
    ];

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1">
            {socialLinks.map((social, i) => (
                <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center"
                    aria-label={social.label}
                >
                    {/* Label Tooltip */}
                    <span className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                        {social.label}
                    </span>

                    {/* Icon Box */}
                    <div
                        className="w-12 h-12 bg-white flex items-center justify-center text-slate-400 border-y border-r border-slate-100 first:rounded-tr-lg last:rounded-br-lg transition-all duration-300 group-hover:w-14 shadow-sm"
                        style={{ "--hover-color": social.color } as React.CSSProperties}
                    >
                        <social.icon
                            size={20}
                            className="transition-colors group-hover:text-[var(--hover-color)]"
                        />
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SocialSidebar;
