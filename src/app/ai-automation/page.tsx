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
            image: "/images/w-step-1.png",
            items: ["Workflow Mapping", "Bottleneck ID", "ROI Calculation"],
            result: "Identified high-impact automation targets."
        },
        {
            step: "02",
            title: "AI Strategy & Setup",
            desc: "Selecting the optimal AI models (GPT-4, Claude, Llama 3) and designing the data pipeline for your automation.",
            image: "/images/w-step-2.png",
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
            image: "/images/w-step-5.png",
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
                                src="/images/ai-automation-agent.png"
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
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px]">
                                        <Image 
                                            src={step.image} 
                                            alt={step.title} 
                                            fill 
                                            className="object-cover transition-transform duration-700 hover:scale-105" 
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Infrastructure Stack */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#56B2C7]/5 via-white to-transparent opacity-40"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                         <div className="inline-flex items-center gap-2 mb-6 bg-[#56B2C7]/10 px-4 py-2 rounded-full text-[10px] font-black uppercase text-[#56B2C7] tracking-widest">Model Agnostic Infrastructure</div>
                         <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-6 tracking-tighter">AI <span className="text-[#56B2C7]">Power Architecture</span></h2>
                         <p className="text-slate-500 font-medium leading-relaxed">We leverage the world&apos;s most advanced models and vector search technologies to build intelligent automation engines.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Base Models", items: ["GPT-4o / Reasoning", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Llama 3 (70B)", "Mistral Large", "Grok-1", "DALL-E 3", "Sora", "Stable Diffusion", "Midjourney", "Whisper", "ElevenLabs"] },
                            { title: "AI Frameworks", items: ["LangChain", "CrewAI", "AutoGen", "Haystack", "LlamaIndex", "Semantic Kernel", "Brev.dev", "Vercel AI SDK", "DSPy", "Instructor", "PydanticAI", "Flowise"] },
                            { title: "Vector Ops", items: ["Pinecone", "Weaviate", "Redis Stack", "ChromaDB", "Zilliz", "Milvus", "Qdrant", "Elasticsearch", "SingleStore", "Faiss", "LanceDB", "MongoDB Atlas"] },
                            { title: "Agents & Logic", items: ["Python (FastAPI)", "Node.js", "n8n", "Make.com", "Zapier Central", "Bee-Agent", "Fetch.ai", "SuperAGI", "BabyAGI", "AgentGPT", "HyperWrite", "MultiOn"] }
                        ].map((cat, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative">
                                <div className="absolute top-8 right-8 text-[40px] font-serif italic text-slate-200 opacity-20 pointer-events-none">{i+1}</div>
                                <h4 className="text-slate-900 font-black text-sm mb-8 underline decoration-[#56B2C7] decoration-4 underline-offset-8 decoration-opacity-10 group-hover:decoration-opacity-100 transition-all uppercase tracking-widest">{cat.title}</h4>
                                <ul className="grid grid-cols-1 gap-y-3">
                                    {cat.items.map((t, idx) => (
                                        <li key={idx} className="text-slate-600 font-bold text-[11px] flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                                            <div className="w-1 h-1 bg-[#56B2C7] rounded-full"></div> {t}
                                        </li>
                                    ))}
                                </ul>
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
