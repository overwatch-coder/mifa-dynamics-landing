"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";

const HeroCanvas = dynamic(
  () => import("@/components/visual/hero-canvas").then((m) => m.HeroCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-zinc-950">
        <div className="size-8 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin" />
      </div>
    ),
  },
);

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] -z-10 bg-[radial-gradient(circle_at_center,var(--color-indigo-50)_0%,transparent_70%)] opacity-50" />

      <Container className="text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white shadow-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-[0.2em]">
            Expert Simulation Engine v1.5
          </span>
        </div>

        <h1 className="max-w-5xl mx-auto text-4xl font-extrabold tracking-tight text-zinc-900 md:text-7xl lg:text-8xl leading-[1.1] mb-8">
          Turn abstract concepts into <br className="hidden md:block" />
          <span className="bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
            interactive simulations.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base text-zinc-500 md:text-xl font-medium leading-relaxed mb-12 px-4 md:px-0">
          MIFA Dynamics bridges the gap between theory and intuition. Our
          generative AI engine produces high-fidelity simulations for serious
          technical education.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <Button
            size="lg"
            className="w-full sm:w-auto h-14 px-10 rounded-full text-base font-bold bg-zinc-900 text-white hover:scale-105 active:scale-95 transition-all shadow-xl shadow-zinc-900/10"
            asChild
          >
            <Link href="https://app-mifa-dynamics.vercel.app/sign-up" target="_blank" rel="noopener noreferrer">Join Early Access</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-14 px-10 rounded-full text-base font-bold border-zinc-200 hover:bg-zinc-50 hover:scale-105 active:scale-95 transition-all"
            asChild
          >
            <Link href="https://app-mifa-dynamics.vercel.app" target="_blank" rel="noopener noreferrer">View Expert Demo</Link>
          </Button>
        </div>

        {/* ── Visual Mockup ── */}
        <div className="mt-16 md:mt-24 relative px-4 md:px-0">
          <div className="absolute inset-x-0 -top-20 h-80 bg-indigo-500/10 blur-[100px] rounded-full -z-10" />
          <div className="mx-auto max-w-5xl aspect-video rounded-3xl border border-zinc-200 glass p-2 sm:p-4 shadow-2xl overflow-hidden">
            {/* Window chrome bar */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 pb-2 sm:pb-3">
              <div className="size-2 sm:size-3 rounded-full bg-zinc-200" />
              <div className="size-2 sm:size-3 rounded-full bg-zinc-200" />
              <div className="size-2 sm:size-3 rounded-full bg-zinc-200" />
              <div className="ml-4 flex-1 h-5 sm:h-7 rounded-md bg-zinc-50 border border-zinc-100 flex items-center px-2 sm:px-3">
                <span className="text-[8px] sm:text-[10px] font-mono text-zinc-300 truncate">
                  mifa.ai/engine · simulation · quantum-mechanics
                </span>
              </div>
            </div>
            {/* ── 3D Visual (Desktop Only) ── */}
            <div className="hidden lg:block w-full h-full rounded-2xl overflow-hidden bg-zinc-950 relative border border-zinc-800">
              <HeroCanvas />
              {/* HUD overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 flex flex-col gap-1 pointer-events-none text-left z-10">
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
                  ΔMESH // System v1.5
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  SECURE · EXPERT · VALIDATED
                </span>
              </div>
            </div>

            {/* ── Static Premium Visual (Mobile Only) ── */}
            <div
              className="lg:hidden w-full h-full rounded-2xl overflow-hidden bg-zinc-950 relative flex items-center justify-center border border-zinc-800"
              style={{ maxHeight: "calc(100% - 2.5rem)" }}
            >
              {/* Abstract CSS Graphic */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[150%] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)]" />
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />
              </div>

              <div className="relative text-center p-8">
                <div className="size-20 sm:size-24 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin mx-auto mb-6 shadow-[0_0_40px_rgba(99,102,241,0.2)]" />
                <h3 className="text-lg sm:text-2xl font-black text-white mb-2 tracking-tight">
                  Procedural Pipeline Active
                </h3>
                <p className="text-xs sm:text-sm font-bold text-indigo-400 uppercase tracking-[0.2em]">
                  Real-time Simulation Rendering
                </p>
              </div>

              {/* HUD overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 flex flex-col gap-1 pointer-events-none text-left">
                <span className="text-[8px] sm:text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
                  ΔMESH // System v1.5
                </span>
                <span className="text-[8px] sm:text-[10px] font-mono text-zinc-500">
                  SECURE · EXPERT · VALIDATED
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
