"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

const SimulationCanvas = dynamic(
  () =>
    import("@/components/visual/simulation-canvas").then(
      (m) => m.SimulationCanvas,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-zinc-950">
        <div className="size-8 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin" />
      </div>
    ),
  },
);

export function Solution() {
  return (
    <section
      id="product"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Container className="relative">
        <div className="grid gap-16 md:gap-20 items-center lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="size-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            </motion.div>

            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-5xl mb-6 md:mb-8 leading-tight">
              A generative platform for <br className="hidden sm:block" />{" "}
              intense conceptual clarity.
            </h2>

            <p className="text-base md:text-lg text-zinc-600 font-medium leading-relaxed mb-8">
              Forget pre-made assets. MIFA Dynamics utilizes a specialized
              multi-agent LLM architecture to interpret complex technical
              queries and generate simulation code in real-time.
            </p>

            <ul className="space-y-4 md:space-y-6 mb-10">
              {[
                "Procedural generation of complex mechanics.",
                "Real-time variable manipulation and validation.",
                "Expert-validated conceptual accuracy.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start md:items-center gap-4 text-zinc-900 font-bold"
                >
                  <div className="size-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button className="w-full sm:w-auto rounded-full px-8 h-12 font-bold shadow-lg shadow-zinc-900/10 hover:shadow-zinc-900/20" asChild>
              <Link href="https://app-mifa-dynamics.vercel.app" target="_blank" rel="noopener noreferrer">Explore Experimental Features</Link>
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-tr from-indigo-500/10 to-transparent blur-2xl rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-square rounded-[2rem] md:rounded-[2.5rem] border border-zinc-200 bg-white p-3 md:p-6 shadow-2xl overflow-hidden">
                {/* Simulated Product UI Layout */}
                <div className="w-full h-full flex flex-col gap-3 md:gap-4">
                  <div className="h-10 md:h-12 w-full rounded-xl bg-zinc-50 border border-zinc-100 flex items-center px-4 justify-between">
                    <div className="flex gap-1.5 font-mono text-[9px] md:text-[10px] text-zinc-400">
                      <span className="text-indigo-600 font-bold uppercase tracking-widest hidden sm:inline">
                        Active Proof:
                      </span>{" "}
                      "Dynamic Vectors"
                    </div>
                    <div className="size-5 md:size-6 rounded-full bg-zinc-200" />
                  </div>

                  <div className="flex-1 rounded-2xl bg-zinc-950 border border-zinc-900 overflow-hidden relative group/inner flex items-center justify-center">
                    {/* 3D Simulation (Desktop Only) */}
                    <div className="hidden lg:block w-full h-full absolute inset-0">
                      <SimulationCanvas />
                    </div>

                    {/* Abstract Static Graph Visual (Mobile Only) */}
                    <div className="lg:hidden w-full max-w-[240px] aspect-square relative opacity-80 p-8">
                      <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_10s_linear_infinite]" />
                      <div className="absolute inset-4 rounded-full border border-indigo-500/40 animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="size-16 rounded-full bg-indigo-500/20 blur-xl animate-pulse" />
                        <div className="size-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
                      </div>
                      {/* Technical spikes */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                        <div
                          key={deg}
                          className="absolute top-1/2 left-1/2 h-px w-24 bg-linear-to-r from-indigo-500/50 to-transparent origin-left"
                          style={{ transform: `rotate(${deg}deg)` }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-zinc-950/50 to-transparent lg:hidden" />
                  </div>

                  <div className="h-20 md:h-24 w-full flex gap-3 md:gap-4">
                    <div className="flex-1 rounded-xl bg-zinc-50 border border-zinc-100 p-2 md:p-3">
                      <div className="h-2 w-10 md:w-12 bg-zinc-200 rounded-full mb-3" />
                      <div className="h-1 w-full bg-indigo-200 rounded-full mb-1.5" />
                      <div className="h-1 w-3/4 bg-zinc-200 rounded-full" />
                    </div>
                    <div className="flex-1 rounded-xl bg-zinc-900 p-2 md:p-3">
                      <div className="h-2 w-14 md:w-16 bg-white/20 rounded-full mb-3" />
                      <div className="flex items-end gap-1 h-6 md:h-8">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: ["20%", "70%", "20%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            className="flex-1 bg-indigo-500 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
