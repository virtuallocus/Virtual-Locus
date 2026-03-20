import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Bot, Cpu, Sparkles, Workflow,
    DatabaseZap, BrainCircuit, Activity,
    TrendingUp, CheckCircle2,
    Zap, Link2, MessageSquare
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "AI Automation Agency | Custom AI Agents & Workflows",
    description: "10x your business efficiency with our AI Automation Agency. We build intelligent agentic workflows, custom LLM integrations, and machine learning models.",
    keywords: ["AI Automation Agency", "AI Agents", "Agentic Workflows", "LLM Integration", "Business Automation", "Machine Learning Solutions"],
};

export default function AIAutomation() {
    const offers = [
        { title: "Custom LLM Agents", desc: "Intelligent AI agents trained on your custom company data to autonomously handle complex business tasks.", icon: Bot },
        { title: "Agentic Workflows", desc: "multi-agent systems that communicate with each other to solve intricate multi-step operational problems.", icon: Workflow },
        { title: "Data Extraction & Processing", desc: "Automate the extraction of unstructured data from PDF, docs, and emails into structured databases using AI.", icon: DatabaseZap },
        { title: "AI Customer Support", desc: "Next-gen conversational AI that instantly resolves customer tickets, handles bookings, and boosts satisfaction.", icon: MessageSquare },
        { title: "System Integrations", desc: "Connecting your existing SaaS tools (CRM, ERP, Slack) into centralized, AI-powered automation pipelines.", icon: Link2 },
        { title: "Predictive Analytics", desc: "Leverage machine learning models to analyze historical data and predict future trends, sales, and operations.", icon: BrainCircuit },
    ];

    const process = [
        {
            step: "01",
            title: "Process Audit",
            desc: "We analyze your current operations to identify bottlenecks and repetitive tasks that are draining your resources.",
            image: "/images/v-step-1.png",
            items: ["Workflow Mapping", "Bottleneck ID", "ROI Calculation"],
            result: "Identified high-impact automation targets."
        },
        {
            step: "02",
            title: "AI Strategy & Setup",
            desc: "Selecting the optimal AI models (GPT-4, Claude, Llama 3) and designing the data pipeline for your automation.",
            image: "/images/v-step-4.png",
            items: ["Model Selection", "Data Structuring", "Security Review"],
            result: "A secure, customized AI architecture."
        },
        {
            step: "03",
            title: "Agent Development",
            desc: "Building, training, and testing custom AI agents to intelligently execute the targeted workflows with high accuracy.",
            image: "/images/w-step-4.png",
            items: ["Prompt Engineering", "RAG Integration", "Agent Testing"],
            result: "Highly capable autonomous agents."
        },
        {
            step: "04",
            title: "Deployment & Optimization",
            desc: "Rolling out the automation into your live environment and continuously tuning the models based on human feedback.",
            image: "/images/v-step-2.png",
            items: ["Seamless Integration", "Human-in-the-loop", "Performance Tuning"],
            result: "Maximum operational efficiency."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                     <BrainCircuit size={400} className="text-[#56B2C7] -m-20" />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-7xl font-heading font-black text-slate-900 mb-8 tracking-tighter max-w-4xl mx-auto leading-[1.1]">
                        10x Your Operations with <span className="text-[#56B2C7]"><br />AI Automation</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                        We build custom generative AI agents, automate manual workflows, and turn your company data into intelligent, revenue-generating systems.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-[#56B2C7] text-white px-10 py-4 rounded-lg font-black text-base hover:bg-[#459fb1] transition-all shadow-lg flex inline-flex items-center gap-2 mx-auto"
                    >
                        <Sparkles size={20} /> Build Your AI Agents
                    </Link>

                    <div className="mt-16 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white mx-auto max-w-5xl group">
                        <div className="relative h-[400px] md:h-[500px] w-full bg-slate-900">
                            <Image 
                                src="/images/hero.png"
                                alt="AI Automation Interface"
                                fill
                                className="object-cover transition-transform duration-[2000ms] group-hover:scale-125"
                                priority
                            />
                            <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[2px]"></div>

                            {/* AI Neural HUD */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[80%] h-[80%] border border-white/10 rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>
                                <div className="absolute w-[60%] h-[60%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-20"></div>
                                
                                <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/20 shadow-[0_0_50px_rgba(86,178,199,0.2)] max-w-md">
                                     <div className="flex items-center gap-4 mb-6">
                                          <div className="w-12 h-12 bg-[#56B2C7] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(86,178,199,0.5)]">
                                               <BrainCircuit size={24} className="text-white" />
                                          </div>
                                          <div className="font-heading font-black text-white text-xl uppercase tracking-tighter">AI Core Active</div>
                                     </div>
                                     <div className="space-y-4">
                                          {[
                                               {label: "NLP Core", val: "Claude 3.5 Sonnet / GPT-4o"},
                                               {label: "Automation Level", val: "Autonomous Agentic"}
                                          ].map((item, i) => (
                                              <div key={i} className="flex flex-col gap-1">
                                                   <div className="text-[10px] font-black text-[#56B2C7] uppercase">{item.label}</div>
                                                   <div className="text-sm font-bold text-white/80">{item.val}</div>
                                              </div>
                                          ))}
                                     </div>
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
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">AI Agency Services</h2>
                        <p className="text-slate-500 font-medium">Next-generation automation solutions that give you an unfair advantage.</p>
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
                        <h2 className="text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">How We Automate</h2>
                    </div>

                    <div className="space-y-32">
                        {process.map((step, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2">
                                    <div className="text-[#56B2C7] font-black text-xl mb-6">
                                        Step {step.step}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6">{step.title}</h3>
                                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">{step.desc}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                        <div className="bg-[#F4F4F4] p-6 rounded-xl border border-slate-100">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-4">Focus</h4>
                                            <ul className="space-y-2">
                                                {step.items.map((it, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-slate-900 text-sm font-bold">
                                                        <CheckCircle2 size={14} className="text-[#56B2C7]" /> {it}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-[#E8F6F8] p-6 rounded-xl border border-[#56B2C7]/10">
                                            <h4 className="text-[10px] font-black uppercase text-[#56B2C7] tracking-widest mb-4">Value Delivered</h4>
                                            <p className="text-slate-900 text-sm font-bold leading-relaxed">{step.result}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0A0A0A] border-4 border-white h-[400px] p-8 flex flex-col justify-center group/hud">
                                        <div className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover/hud:scale-110">
                                            <Image src={step.image} alt={step.title} fill className="object-cover grayscale" />
                                        </div>
                                        
                                        {i === 0 && (
                                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 relative z-10 transform translate-y-4 group-hover/hud:translate-y-0 transition-all duration-500 shadow-2xl">
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                                                        <Activity className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Efficiency Audit</div>
                                                        <div className="text-white font-black text-lg">Workflow Analysis</div>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-end">
                                                        <div className="text-[10px] font-bold text-white/40 uppercase">Bottleneck Density</div>
                                                        <div className="text-xs font-black text-red-400">High</div>
                                                    </div>
                                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                        <div className="h-full w-[75%] bg-red-500/50"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {i === 1 && (
                                            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 p-8 relative z-10 shadow-2xl">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="w-12 h-12 bg-[#56B2C7] rounded-xl flex items-center justify-center shadow-lg shadow-[#56B2C7]/20">
                                                        <BrainCircuit className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-[#56B2C7] uppercase tracking-widest">Model Strategy</div>
                                                        <div className="text-white font-black text-lg">LLM Selection</div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {["GPT-4o", "Claude 3.5", "Llama 3"].map(m => (
                                                        <div key={m} className="px-3 py-1 bg-white/10 border border-white/10 rounded text-[10px] font-black text-white">{m}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {i === 2 && (
                                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 relative z-10 transform -rotate-2 group-hover/hud:rotate-0 transition-all duration-500 shadow-2xl">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                                        <Bot className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Agent Swarm</div>
                                                        <div className="text-white font-black text-lg">Active Agents</div>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    {[1, 2].map(j => (
                                                        <div key={j} className="flex items-center gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                                            <div className="h-2 w-full bg-white/10 rounded"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {i === 3 && (
                                            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 p-10 relative z-10 shadow-2xl overflow-hidden text-center">
                                                <div className="w-20 h-20 bg-gradient-to-tr from-[#56B2C7] to-emerald-500 rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6 group-hover/hud:scale-110 transition-transform">
                                                    <Sparkles className="text-white" size={40} />
                                                </div>
                                                <div className="text-[10px] font-black text-[#56B2C7] uppercase tracking-[0.3em] mb-2">Automated Ops</div>
                                                <div className="text-2xl font-black text-white leading-none tracking-tighter">MAX EFFICIENCY</div>
                                            </div>
                                        )}
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
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Bot size={200} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 tracking-tighter relative z-10">
                            Stop Wasting Time on Manual Tasks.
                        </h2>
                        <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto font-medium text-center relative z-10">
                            Let us deploy custom AI agents today and instantly cut operational costs while scaling your output.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#56B2C7] px-12 py-5 rounded-lg font-black text-lg hover:shadow-xl hover:scale-105 transition-all relative z-10"
                        >
                            Automate Your Business
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
