"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import BackgroundDecoration from "@/app/_components/ui/backgroundDecoration";

const PRODUCTS = [
    {
        id: "01",
        name: "MONOCRYSTALLINE SERIES",
        tagline: "Ultra-High Efficiency for Residential Use",
        description:
            "Engineered with single-crystal silicon for maximum conductivity. Our monocrystalline panels offer the highest power density in the industry, making them perfect for limited roof space.",
        features: [
            "22.8% Conversion Efficiency",
            "Superior Low-Light Performance",
            "Sleek Aesthetics",
            "25-Year Warranty",
        ],
        stats: [
            { label: "Power Output", value: "450W - 550W" },
            { label: "Cell Type", value: "N-Type Mono" },
            { label: "Degradation", value: "< 0.4% / Year" },
        ],
        color: "var(--brand-dominant)",
    },
    {
        id: "02",
        name: "BIFACIAL MODULE TECHNOLOGY",
        tagline: "Harvest Energy from Both Sides",
        description:
            "Capture reflected sunlight from the ground and surrounding surfaces. Ideal for commercial installations and solar farms on light-colored terrain or gravel.",
        features: [
            "Up to 30% Extra Power Gain",
            "Enhanced Durability",
            "PID Resistant",
            "Double-Glass Structure",
        ],
        stats: [
            { label: "Power Output", value: "580W - 670W" },
            { label: "Bifaciality", value: "85% ± 5%" },
            { label: "Snow Load", value: "5400 Pa" },
        ],
        color: "var(--green)",
    },
    {
        id: "03",
        name: "TOPCON CELL SOLUTIONS",
        tagline: "The Future of Solar Efficiency",
        description:
            "Tunnel Oxide Passivated Contact (TOPCon) technology minimizes electron recombination, pushing the boundaries of what's possible with silicon-based solar energy.",
        features: [
            "Next-Gen Passivation",
            "Higher Open-Circuit Voltage",
            "Lower Temp. Coefficient",
            "Maximum ROI",
        ],
        stats: [
            { label: "Power Output", value: "600W+" },
            { label: "Cell Count", value: "156 Cells" },
            { label: "Life Expectancy", value: "30+ Years" },
        ],
        color: "var(--brand-dominant)",
    },
];

export default function Highlight() {
    return (
        <section id="highlight" className="bg-background">
            {/* Page Header */}
            <div className="relative pt-32 pb-24 px-8 md:px-12 lg:px-48 overflow-hidden">
                <BackgroundDecoration />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="relative z-10 max-w-5xl mx-auto space-y-8 text-center"
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.165, 0.84, 0.44, 1],
                        }}
                        className="text-6xl md:text-8xl font-black text-text-main tracking-[-0.05em] leading-none uppercase"
                    >
                        SOLAR <span className="text-green">INNOVATIONS</span>
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-xl md:text-2xl max-w-2xl text-text-sub mx-auto font-medium leading-relaxed"
                    >
                        Explore our advanced range of solar cells designed for
                        maximum performance, efficiency, and long-term
                        sustainability.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        className="pt-4"
                    >
                        <div className="w-12 h-1 bg-brand-dominant mx-auto rounded-full" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Product Sections */}
            <div className="divide-y divide-border/30">
                {PRODUCTS.map((product, index) => (
                    <div
                        key={product.id}
                        className={`py-32 px-8 md:px-12 lg:px-48 overflow-hidden ${index % 2 === 1 ? "bg-surface/30" : ""}`}
                    >
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            {/* Content Side */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -40 : 40,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`space-y-10 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-brand-dominant font-black">
                                        <span className="text-4xl text-green-light">
                                            {product.id}
                                        </span>
                                        <div className="h-px w-12 bg-brand-dominant/30" />
                                        <span className="tracking-[0.2em] text-sm uppercase">
                                            {product.tagline}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tight leading-none uppercase">
                                        {product.name}
                                    </h2>
                                </div>

                                <p className="text-lg text-text-sub font-medium leading-relaxed max-w-xl">
                                    {product.description}
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {product.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="shrink-0 w-6 h-6 rounded-full bg-brand-dominant/10 flex items-center justify-center text-brand-dominant">
                                                <Check
                                                    className="w-4 h-4"
                                                    strokeWidth={3}
                                                />
                                            </div>
                                            <span className="font-bold text-text-main text-sm">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats Grid */}
                                <div className="p-8 rounded-4xl bg-brand-dominant/5 border border-brand-dominant/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {product.stats.map((stat, i) => (
                                        <div key={i} className="space-y-1">
                                            <p className="text-xs font-black text-brand-dominant/60 uppercase tracking-widest">
                                                {stat.label}
                                            </p>
                                            <p className="text-xl font-black text-text-main leading-none">
                                                {stat.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button className="h-14 px-8 rounded-full bg-brand-dominant hover:bg-brand-dominant/90 text-white font-black text-base shadow-xl shadow-brand-dominant/20 transition-all active:scale-95">
                                        VIEW DATASHEET
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-14 px-8 rounded-full border-2 border-brand-dominant/20 hover:border-brand-dominant text-brand-dominant font-black text-base transition-all"
                                    >
                                        GET A QUOTE
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Image Placeholder Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`relative aspect-square rounded-[3rem] overflow-hidden bg-brand-dominant/5 border-2 border-brand-dominant/10 group ${index % 2 === 1 ? "lg:order-1" : ""}`}
                            >
                                {/* Decorative elements for placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center space-y-4 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                        <Zap className="w-16 h-16 text-brand-dominant mx-auto" />
                                        <p className="font-black text-brand-dominant tracking-widest text-lg">
                                            PRODUCT IMAGE
                                        </p>
                                        <p className="text-xs text-text-sub font-bold uppercase tracking-widest">
                                            Type: {product.name}
                                        </p>
                                    </div>
                                </div>

                                {/* Background Grid Animation */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,var(--brand-dominant)_1px,transparent_0)] bg-size-[40px_40px]" />

                                {/* Floating Overlay Info */}
                                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-brand-dominant flex items-center justify-center text-white">
                                                <BarChart3 className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-black text-brand-dominant uppercase">
                                                    Model Status
                                                </p>
                                                <p className="text-sm font-black text-text-main uppercase tracking-tight">
                                                    Active Production
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-brand-dominant/10 flex items-center justify-center text-brand-dominant">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="py-24 px-8 text-center border-t border-border/30">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <h3 className="text-4xl font-black text-text-main tracking-tight leading-none uppercase">
                        Not sure which one fits?
                    </h3>
                    <p className="text-lg text-text-sub font-medium">
                        Our engineering team is ready to help you calculate the
                        optimal configuration for your specific energy needs.
                    </p>
                    <Button className="h-16 px-12 rounded-full bg-brand-dominant hover:bg-brand-dominant/90 text-white font-black text-lg shadow-2xl shadow-brand-dominant/30 flex items-center gap-3 mx-auto transition-all active:scale-95">
                        CONSULT AN EXPERT <ArrowRight className="w-6 h-6" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
