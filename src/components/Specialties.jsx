import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Specialties() {
  const specialties = [
    {
      title: "Anxiety & Panic",
      desc: "Stop the cycle of overthinking and racing thoughts. We use CBT and mindfulness to help regulate your nervous system.",
      img: "/mist.jpg" 
    },
    {
      title: "Trauma & Resilience",
      desc: "Whether it’s a single incident or complex patterns, we pace our work carefully to help you feel safe and grounded.",
      img: "/stone.jpg" 
    },
    {
      title: "Burnout & Perfectionism",
      desc: "For high-achievers who feel disconnected after years of stress. Reconnect with yourself and build sustainable habits.",
      img: "/eucalyptus.jpeg" 
    },
  ];

  return (
    <section className="bg-maya-sand py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal width="100%">
          <h2 className="text-5xl font-serif text-maya-text text-center mb-16">My Specialties</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((item, index) => (
            <Reveal key={index} delay={index * 0.2} width="100%">
              <div className="bg-[#E5E0D8] p-12 h-full flex flex-col border border-black/5">
                <h3 className="text-2xl font-serif text-maya-text mb-6">{item.title}</h3>
                <p className="text-maya-text/80 text-md leading-relaxed mb-12 flex-grow">
                  {item.desc}
                </p>
                
                <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-transparent shadow-sm">
                  <Image 
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}