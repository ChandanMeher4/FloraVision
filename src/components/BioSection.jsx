import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function BioSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif text-maya-text mb-2">
              Hi, I'm Dr. Maya.
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-maya-terra mb-8">
              Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-maya-text/80 mb-6 leading-relaxed">
              I take a warm, collaborative, and grounded approach to therapy. My
              sessions are structured enough to feel supportive, while still
              leaving space for depth.
            </p>
            <p className="text-lg text-maya-text/80 mb-8 leading-relaxed">
              I integrate evidence-based methods such as{" "}
              <strong>CBT, EMDR, and Body-Oriented techniques</strong> to help
              you understand both the emotional and physiological sides of what
              you're experiencing.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <button className="bg-maya-text text-white px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase hover:bg-maya-terra transition-all">
              My Credentials &rarr;
            </button>
          </Reveal>
        </div>

        <div className="relative h-[500px] order-1 md:order-2 flex justify-center items-center">
          <Reveal>
            <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] bg-gray-200 rounded-arch overflow-hidden shadow-2xl z-0">
              <Image
                src="/Dr-Maya-Reynolds.png"
                alt="Dr. Maya Reynolds PsyD - Licensed Clinical Psychologist specializing in Trauma and Anxiety in Santa Monica"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <div className="absolute -bottom-6 -right-4 md:bottom-0 md:right-12 z-10">
            <Reveal delay={0.5}>
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-maya-sage rounded-full border-[4px] border-white overflow-hidden shadow-lg">
                <Image
                  src="/office1.jpeg"
                  alt="Modern and uncluttered therapy office environment in Santa Monica for high-achieving professionals"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
