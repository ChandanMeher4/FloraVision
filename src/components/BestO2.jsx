'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BestO2() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[1728px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12 md:mb-16"
        >
          <Image src="/assets/leaf-decoration-left.svg" alt="" width={69} height={69} className="w-12 h-12 md:w-[69px] md:h-[69px]" />
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight lg:leading-[67px] text-center">
            Our Best o2
          </h2>
          <Image src="/assets/leaf-decoration-right.svg" alt="" width={69} height={69} className="w-12 h-12 md:w-[69px] md:h-[69px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass-card-section">
            <div className="glass-inner">
              <div className="flex flex-col lg:flex-row items-center py-8 lg:py-12">
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-start lg:-ml-8 xl:-ml-12 flex-shrink-0">
                  <Image
                    src="/assets/aglaonema-card.png"
                    alt="Best O2 Plant"
                    width={877}
                    height={877}
                    className="w-[280px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] h-auto drop-shadow-2xl"
                  />
                </div>

                <div className="w-full lg:w-[55%] px-8 md:px-12 lg:px-8 xl:px-16 pb-8 lg:pb-0">
                  <h3 className="text-white/75 font-inter font-semibold text-2xl md:text-3xl lg:text-[38px] leading-tight lg:leading-[46px] mb-6">
                    We Have Small And Best O2 Plants Collection&apos;s
                  </h3>
                  <p className="text-white/75 font-inter font-semibold text-sm md:text-lg lg:text-xl xl:text-[28px] leading-relaxed lg:leading-[34px] mb-4">
                    Oxygen-producing plants, often referred to as &quot;O2 plants,&quot; are those that release oxygen into the atmosphere through the process of photosynthesis.
                  </p>
                  <p className="text-white/75 font-inter font-semibold text-sm md:text-lg lg:text-xl xl:text-[28px] leading-relaxed lg:leading-[34px] mb-8">
                    Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
                  </p>
                  <button className="btn-outline text-lg md:text-[28px] px-8 md:px-14 py-3 md:py-4">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-end gap-4 mt-8 mr-4">
          <button className="hover:opacity-70 transition-opacity rotate-180">
            <Image src="/assets/right-arrow.png" alt="Previous" width={24} height={24} />
          </button>
          <span className="text-white/75 font-inter font-bold text-lg md:text-xl">01/04</span>
          <button className="hover:opacity-70 transition-opacity">
            <Image src="/assets/right-arrow.png" alt="Next" width={24} height={24} />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <Image src="/assets/scroll-dots.svg" alt="Scroll indicator" width={85} height={11} />
        </div>
      </div>
    </section>
  );
}
