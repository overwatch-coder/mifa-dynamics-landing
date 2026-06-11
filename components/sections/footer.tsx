import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "AI Simulations", href: "/#product" },
      { label: "Procedural Engine", href: "/#how-it-works" },
      { label: "Technical Benchmarks", href: "/#comparison" },
      { label: "The Lab", href: "/#team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Expert Case Studies", href: "https://app-mifa-dynamics.vercel.app" },
      { label: "Technical Papers", href: "https://app-mifa-dynamics.vercel.app" },
      { label: "Documentation", href: "https://app-mifa-dynamics.vercel.app" },
      { label: "API Reference", href: "https://app-mifa-dynamics.vercel.app" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Mission & Values", href: "/#product" },
      { label: "Founding Team", href: "/#team" },
      { label: "Security Protocol", href: "/privacy" },
      { label: "Contact Expert", href: "/#contact" },
    ],
  },
];

const socials = [
  { icon: FaXTwitter, href: "https://x.com", label: "X (Twitter)" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 pt-20 pb-10 md:pt-24 md:pb-12 overflow-hidden relative border-t border-zinc-800">
      <Container>
        <div className="grid gap-12 md:gap-16 lg:grid-cols-12 mb-16 md:mb-20 relative z-10">
          <div className="lg:col-span-4 max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 md:mb-8 group"
            >
              <div className="size-10 relative">
                <Image
                  src="/logo.png"
                  alt="MIFA Dynamics"
                  fill
                  className="object-contain filter invert opacity-90 brightness-200"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                MIFA Dynamics
              </span>
            </Link>
            <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed mb-8 md:mb-10">
              Accelerating technical education through a high-precision
              generative simulation engine. Built for experts, by researchers.
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 md:size-11 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                >
                  <Icon className="size-4 md:size-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid gap-8 grid-cols-2 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6 md:mb-8">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs md:text-sm font-semibold text-zinc-500 hover:text-white transition-colors duration-200"
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 md:pt-12 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative z-10 text-center md:text-left">
          <div className="text-[9px] md:text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} MIFA Dynamics Logic Engine. All rights
            reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <Link
              href="/privacy"
              className="text-[9px] md:text-[10px] font-bold text-zinc-500 hover:text-indigo-400 uppercase tracking-[0.2em] transition-colors"
            >
              Privacy Protocol
            </Link>
            <Link
              href="/terms"
              className="text-[9px] md:text-[10px] font-bold text-zinc-500 hover:text-indigo-400 uppercase tracking-[0.2em] transition-colors"
            >
              Terms of Engagement
            </Link>
            <Link
              href="/cookies"
              className="text-[9px] md:text-[10px] font-bold text-zinc-500 hover:text-indigo-400 uppercase tracking-[0.2em] transition-colors"
            >
              Cookie Management
            </Link>
          </div>
        </div>
      </Container>

      {/* Decorative large logo in background */}
      <div className="absolute -bottom-24 -right-24 size-[400px] md:size-[600px] opacity-10 pointer-events-none z-0">
        <div className="relative w-full h-full opacity-10">
          <Image
            src="/logo.png"
            alt=""
            fill
            className="filter invert grayscale blur-2xl md:blur-3xl"
          />
        </div>
      </div>
    </footer>
  );
}
