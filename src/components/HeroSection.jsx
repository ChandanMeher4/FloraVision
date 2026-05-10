'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/hero-bg.png"
          alt="Lush green plants background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#1B2316]"></div>
      </div>

      <div className="relative z-10 max-w-[1728px] mx-auto px-6 md:px-10 pt-32 md:pt-40 lg:pt-56 pb-20 min-h-screen">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-0">
          <div className="flex-1 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-white font-inter font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[118px] leading-[1.2] xl:leading-[143px] mb-4 md:mb-3"
            >
              Earth&apos;s Exhale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-white font-inter font-medium text-base sm:text-lg md:text-xl lg:text-[23px] leading-relaxed lg:leading-[28px] max-w-[775px] mb-8 lg:mb-10"
            >
              &quot;Earth Exhale&quot; symbolizes the purity and vitality of the Earth&apos;s natural environment and its essential role in sustaining life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-4 flex-wrap"
            >
              <button className="btn-outline text-lg md:text-[28px] text-white/75 px-8 md:px-12 py-3 md:py-4">
                Buy Now
              </button>

              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full border-2 border-white/40 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-indie text-white text-lg md:text-[25px]">Live Demo...</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 lg:mt-14 max-w-[409px]"
            >
              <div className="glass-card-testimonial">
                <div className="glass-inner p-6 md:p-7">
                  <div className="flex items-center gap-4 md:gap-6 mb-4">
                    <Image
                      src="/assets/reviewer-avatar.png"
                      alt="Ronnie Hamill"
                      width={64}
                      height={64}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <h4 className="text-white font-inter text-lg md:text-[22px] leading-tight">Ronnie Hamill</h4>
                      <div className="mt-1">
                        <Image src="/assets/stars.svg" alt="5 stars" width={104} height={15} className="h-3 md:h-4 w-auto" />
                      </div>
                    </div>
                  </div>
                  <p className="text-white font-inter text-sm md:text-[17px] leading-relaxed md:leading-[21px]">
                    I can&apos;t express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="w-full lg:w-auto lg:ml-auto"
          >
            <div className="relative w-full max-w-[420px] lg:max-w-[512px] mx-auto lg:mx-0">
              <div className="absolute left-0 right-0 glass-card-hero" style={{ top: '75px', bottom: '0' }}>
                <div className="glass-inner"></div>
              </div>

              <div className="relative z-10">
                <Image
                  src="/assets/aglaonema-card.png"
                  alt="Aglaonema Plant"
                  width={459}
                  height={459}
                  className="w-[80%] mx-auto relative z-10 drop-shadow-2xl"
                />
              </div>

              <div className="relative z-10 px-8 lg:px-16 pb-8 lg:pb-12">
                <p className="text-white/75 font-inter text-lg lg:text-[23px] leading-tight mb-1">Indoor Plant </p>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white/75 font-inter text-2xl lg:text-[38px] leading-tight">Aglaonema  plant</h3>
                  <Image src="/assets/right-arrow.png" alt="View" width={20} height={20} className="opacity-75" />
                </div>

                <button className="btn-outline mt-2 text-white/75 text-xl lg:text-[28px] px-8 lg:px-12 py-3 lg:py-4">
                  Buy Now
                </button>

                <div className="flex items-center gap-3 justify-center mt-6 lg:mt-10">
                  <span className="w-5 h-1.5 bg-white rounded-full"></span>
                  <span className="w-1.5 h-1.5 rounded-full border border-white/50"></span>
                  <span className="w-1.5 h-1.5 rounded-full border border-white/50"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
