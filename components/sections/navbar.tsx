"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "Expert Flow" },
  { href: "#team", label: "The Lab" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "py-3 glass border-zinc-200/50"
          : "py-5 bg-transparent border-transparent",
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative size-10 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="MIFA Dynamics"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-zinc-900">
            MIFA Dynamics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold text-zinc-500 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <Button
              variant="ghost"
              className="font-bold text-xs tracking-[0.2em] text-zinc-500 hover:text-zinc-900"
              asChild
            >
              <Link href="https://app-mifa-dynamics.vercel.app/sign-in" target="_blank" rel="noopener noreferrer">LOG IN</Link>
            </Button>
            <Button 
              className="rounded-full px-8 h-11 font-extrabold bg-zinc-900 text-white shadow-xl shadow-zinc-900/10 hover:shadow-zinc-900/20 transition-all uppercase tracking-[0.2em] text-xs"
              asChild
            >
              <Link href="https://app-mifa-dynamics.vercel.app/sign-up" target="_blank" rel="noopener noreferrer">Request Access</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6 text-zinc-900" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left py-4 text-2xl font-bold">
                    MIFA Dynamics
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8 px-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-bold text-zinc-900 hover:text-indigo-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="h-px bg-zinc-100 my-4" />
                  <Button
                    variant="ghost"
                    className="justify-start px-0 font-bold text-lg text-zinc-500 hover:text-zinc-900 h-auto"
                    asChild
                  >
                    <Link href="https://app-mifa-dynamics.vercel.app/sign-in" target="_blank" rel="noopener noreferrer">LOG IN</Link>
                  </Button>
                  <Button 
                    className="rounded-full w-full h-14 font-extrabold bg-zinc-900 text-white transition-all uppercase tracking-widest text-sm mt-4"
                    asChild
                  >
                    <Link href="https://app-mifa-dynamics.vercel.app/sign-up" target="_blank" rel="noopener noreferrer">Request Access</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
}
