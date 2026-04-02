"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { ModeToggle } from "@/app/_components/ui/modeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { title: "Home", href: "/" },
        { title: "Services", href: "/services" },
        { title: "Technology", href: "/technology" },
        { title: "Projects", href: "/projects" },
        { title: "About Us", href: "/about" },
        { title: "Contact", href: "/contact" },
    ];
    return (
        <>
            <nav className="h-[80px] flex items-center justify-between px-[10vw] mx-auto border-b border-border bg-background sticky top-0 z-100 transition-colors">
                {/* Logo */}
                <div className="flex items-center gap-[9px] font-brand text-[18px] font-black text-text-main tracking-[-0.3px] cursor-pointer group shrink-0">
                    <div className="logo-sun w-[28px] h-[28px] rounded-full bg-brand-subtle flex items-center justify-center transition-all duration-300 group-hover:shadow-(var(--card-shadow)),0_0_16px_(var(--card-shadow))]">
                        <Leaf size={16} strokeWidth={2.5} fill="currentColor" />
                    </div>
                    <span className="block uppercase"> Energy Trutol </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-[2px]">
                    {menuItems.map((item) => (
                        <Button
                            key={item.title}
                            asChild
                            variant="ghost"
                            className="font-brand text-md px-[14px]"
                        >
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-[6px] md:gap-[8px]">
                    <ModeToggle />
                    {/* Login Button */}
                    <Button
                        asChild
                        className="hidden lg:flex font-brand text-lg px-[24px] hover:translate-y-0 font-medium"
                    >
                        <Link href="/">Login</Link>
                    </Button>

                    {/* Hamburger Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-0 h-10 w-10 text-text-main active:scale-90"
                    >
                        {isOpen ? (
                            <X size={24} strokeWidth={2.5} />
                        ) : (
                            <Menu size={24} strokeWidth={2.5} />
                        )}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`
                fixed inset-0 z-90 bg-background backdrop-blur-xl transition-all duration-300 lg:hidden
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
            `}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                    {menuItems.map((item) => (
                        <Button
                            key={item.title}
                            asChild
                            variant="link"
                            onClick={() => setIsOpen(false)}
                            className="font-brand text-xl text-text-main transition-colors tracking-widest h-auto decoration-transparent"
                        >
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                    ))}
                    <Button
                        asChild
                        variant="outline"
                        className="mt-4 w-full font-brand text-sm font-medium text-text-main border-border py-6 rounded-[8px]"
                    >
                        <Link href="/">Login</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
