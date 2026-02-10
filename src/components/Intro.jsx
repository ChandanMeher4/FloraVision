import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif text-maya-text mb-8 leading-tight">
              "I feel functional on the outside, but exhausted on the inside."
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-maya-text/80 mb-6 leading-relaxed">
              Many of the people I work with are thoughtful, self-aware, and
              successful on paper. Yet, quietly, you might be struggling with
              constant worry, tension, or a sense that you’re always bracing for
              something to go wrong.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-maya-text/80 mb-10 leading-relaxed">
              I specialize in helping you disconnect from the pressure to be
              perfect and reconnect with your sense of safety.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <button className="text-maya-terra font-bold border-b-2 border-maya-terra pb-1 hover:text-maya-text transition-colors">
              Read more about my approach &rarr;
            </button>
          </Reveal>
        </div>

        <div className="w-full h-full flex justify-center">
          <Reveal delay={0.2} width="100%">
            <div className="relative h-[500px] w-full bg-maya-muted shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-center p-4">
                <Image
                  src="/beach.jpg" 
                  alt="Soft Pacific ocean waves in Santa Monica symbolizing the grounding and nervous system regulation provided in Dr. Maya Reynold's therapy sessions"
                  fill
                  className="object-cover"
                  priority 
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
