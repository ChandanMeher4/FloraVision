import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function LavenderSection() {
  return (
    <section className="bg-lilac-accent grid grid-cols-1 md:grid-cols-2">
      <div className="min-h-[500px] bg-gray-400 relative">
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
          <Image
            src="/office.jpg"
            alt="Dr. Maya Reynolds - Santa Monica Licensed Clinical Psychologist Office"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="p-12 md:p-24 flex flex-col justify-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-serif text-lilac-text mb-6 leading-tight">
            You don't have to do this all <span className="italic">alone.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-6 text-lilac-text/80 font-medium">
            If you are facing any of these, there's hope:
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="space-y-4 text-lilac-text/80 mb-10 list-disc pl-5 leading-relaxed">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
          </ul>
        </Reveal>

        <Reveal delay={0.3}>
          <button className="text-xs font-bold tracking-widest uppercase border-b border-lilac-text w-max pb-1 hover:opacity-60 transition-opacity">
            Work with me &rarr;
          </button>
        </Reveal>
      </div>
    </section>
  );
}
