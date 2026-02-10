import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Office() {
  return (
    <section className="bg-maya-sand py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-serif text-maya-text mb-4">
              A Calm Space for Healing
            </h2>
            <p className="text-maya-text/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Located in Santa Monica, my office is a private space designed to feel calm and grounding. 
              With natural light and an uncluttered environment, it provides a safe setting for reflection and depth.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="w-full h-full min-h-[400px] md:min-h-[600px]">
            <Reveal width="100%">
              <div className="relative aspect-[3/4] md:aspect-auto md:h-[600px] w-full rounded-xl overflow-hidden shadow-xl group border-4 border-white">
                <Image
                  src="/office1.jpeg" 
                  alt="Dr. Maya Reynolds Santa Monica Therapy Office - Exposed Brick and Natural Light"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 text-xs font-bold tracking-widest uppercase text-maya-text shadow-sm">
                  Therapy Room
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8">
            <div className="w-full">
              <Reveal width="100%" delay={0.2}>
                <div className="relative aspect-video md:h-[285px] w-full rounded-xl overflow-hidden shadow-xl group border-4 border-white">
                  <Image
                    src="/office2.jpeg" 
                    alt="Modern and uncluttered therapy environment in Santa Monica"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>

            <div className="w-full">
              <Reveal width="100%" delay={0.4}>
                <div className="bg-maya-text min-h-[285px] w-full rounded-xl flex items-center justify-center text-white p-10 text-center shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-serif mb-4">Visit the Practice</h3>
                    <p className="text-base opacity-90 leading-relaxed mb-6">
                      123th Street 45 W<br />
                      Santa Monica, CA 90401
                    </p>
                    <p className="text-xs font-bold tracking-widest uppercase py-2 px-4 border border-white/30 inline-block">
                      In-Person & Telehealth
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
