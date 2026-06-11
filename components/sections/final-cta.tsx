import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section id="contact" className="py-32 bg-white relative">
      <Container>
        <div className="relative mx-auto max-w-5xl rounded-[3rem] bg-zinc-900 p-12 md:p-24 overflow-hidden border border-zinc-800 shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#312e81_0%,transparent_50%)] opacity-40" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#1e1b4b_0%,transparent_50%)] opacity-40" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-white/5 backdrop-blur-sm mb-8">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                Limited Technical Previews Open
              </span>
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl mb-8 leading-[1.1]">
              Reshape the technical learning curve.
            </h2>

            <p className="text-lg text-zinc-400 font-bold mb-12">
              Join the elite waitlist for our v1.0 engine rollout. Accelerate
              your engineering or educational workflow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-12 rounded-full text-base font-bold bg-indigo-600 text-white hover:scale-105 active:scale-95 transition-all hover:bg-indigo-600/90"
                asChild
              >
                <Link href="https://app-mifa-dynamics.vercel.app/sign-up" target="_blank" rel="noopener noreferrer">Join Early Access</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-12 rounded-full text-base font-bold border-zinc-700 text-black hover:bg-white/5 hover:scale-105 active:scale-95 transition-all hover:text-white"
                asChild
              >
                <Link href="https://app-mifa-dynamics.vercel.app/sign-up" target="_blank" rel="noopener noreferrer">Request API Access</Link>
              </Button>
            </div>

            <p className="mt-10 text-xs font-bold text-zinc-500 uppercase tracking-widest">
              Secured & Expert-Validated Systems
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
