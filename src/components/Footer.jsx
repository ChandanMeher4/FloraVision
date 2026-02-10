import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer className="bg-maya-text text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm tracking-wide">
        
        <div>
          <Reveal>
            <h3 className="text-2xl font-serif mb-6">Dr. Maya Reynolds, PsyD</h3>
            <p className="mb-1 italic opacity-80">Licensed Clinical Psychologist</p>
            <p className="mb-1">123th Street 45 W</p>
            <p className="mb-6">Santa Monica, CA 90401</p>

            <p className="mb-1">
              <a
                href="mailto:hello@drmayareynolds.com"
                className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity"
              >
                hello@drmayareynolds.com
              </a>
            </p>
          </Reveal>
        </div>

        <div className="hidden md:block"></div>

        <div>
          <Reveal delay={0.2}>
            <h4 className="font-bold text-lg mb-4">Practice</h4>
            <p className="mb-2">Monday – Friday</p>
            <p className="mb-6">9am – 6pm</p>
            <p className="text-xs opacity-70">By Appointment Only</p>
          </Reveal>
        </div>

        <div className="flex flex-col items-start">
          <Reveal delay={0.3}>
            <h4 className="font-bold text-lg mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity"
              >
                About Dr. Maya
              </Link>
              <Link
                href="/services"
                className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Services
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/20 text-center text-xs opacity-70">
        <Reveal delay={0.4} width="100%">
          <div className="flex justify-center space-x-4 mb-4 flex-wrap gap-y-2">
            <span className="underline cursor-pointer hover:opacity-80">
              Privacy Policy
            </span>
            <span className="underline cursor-pointer hover:opacity-80">
              Good Faith Estimate
            </span>
            <span className="underline cursor-pointer hover:opacity-80">
              Terms & Conditions
            </span>
          </div>
          <p>All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD.</p>
        </Reveal>
      </div>
    </footer>
  );
}
