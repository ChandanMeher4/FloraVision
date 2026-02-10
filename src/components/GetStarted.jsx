import Reveal from "@/components/Reveal";

export default function GetStarted() {
  return (
    <section className="bg-maya-olive py-24 px-6 md:px-20 text-white text-center">
      <div className="max-w-4xl mx-auto">
        
        <Reveal width="100%">
          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-white">
            Get started today.
          </h2>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Ready to take the first step towards a calmer, more grounded you? 
            I offer a space to reconnect, whether in my Santa Monica office or through secure telehealth sessions.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <button className="border-2 border-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-maya-olive transition-all duration-300">
            Book a Consultation &rarr;
          </button>
        </Reveal>

      </div>
    </section>
  );
}