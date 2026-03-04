"use client";

import Link from "next/link";
import * as ga from "@/lib/ga";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    image: string;
    ctaText: string;
}

export default function ServiceCard({ title, description, icon: Icon, href, image, ctaText }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className="group block h-full"
            onClick={() => ga.event({
                action: 'service_click',
                category: 'engagement',
                label: title,
            })}
        >
            <div className="bg-[#F4F4F4] rounded-2xl overflow-hidden border border-slate-100 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#56B2C7]/20">
                <div className="relative h-48 w-full p-3">
                    <div className="relative h-full w-full rounded-xl overflow-hidden shadow-sm">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>
                <div className="p-8 pt-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-primary-sky transition-transform duration-300 group-hover:scale-110">
                            <Icon size={24} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-slate-900 leading-tight">
                            {title}
                        </h3>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                        {description}
                    </p>
                    <div
                        className="mt-auto w-full bg-[#56B2C7] text-white py-4 rounded-xl font-bold text-center text-sm transition-all shadow-md group-hover:bg-[#459fb1] group-hover:shadow-lg active:scale-[0.98]"
                    >
                        {ctaText}
                    </div>
                </div>
            </div>
        </Link>
    );
}
