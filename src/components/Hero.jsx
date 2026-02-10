import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-maya-sand min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start relative mb-10 md:mb-0">
        <Reveal>
          <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] rounded-arch overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/golden-hour.jpeg"
              alt="Peaceful Santa Monica sunset horizon representing mental clarity and calm for therapy clients"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left md:pl-16">
        <Reveal delay={0.2}>
          <p className="text-maya-terra font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Santa Monica, California
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <h1 className="text-5xl md:text-7xl font-serif text-maya-text leading-tight mb-6">
            Find calm within <br />
            the chaos.
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-lg md:text-xl text-maya-text/80 mb-10 font-light max-w-lg mx-auto md:mx-0">
            Therapy for high-achievers, creatives, and professionals navigating
            anxiety and burnout.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <button className="bg-maya-text text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-maya-terra transition-all duration-300">
            Book a Consultation &rarr;
          </button>
        </Reveal>
      </div>
    </section>
  );
}
