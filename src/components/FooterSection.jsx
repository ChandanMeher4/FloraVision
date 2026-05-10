'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const quickLinks = ['Home', "Type's Of plant's", 'Contact', 'Privacy'];

export default function Footer() {
  return (
    <footer id="contact" className="pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12">
      <div className="max-w-[1728px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/assets/plant-logo.png"
                alt="FloraVision"
                width={94}
                height={94}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-[94px] lg:h-[94px]"
              />
              <span className="text-white font-inter font-black text-3xl md:text-4xl lg:text-[45px] leading-tight">
                FloraVision.
              </span>
            </div>
            <p className="text-white font-inter font-medium text-base md:text-lg lg:text-[28px] leading-relaxed lg:leading-[34px] max-w-[580px] mb-8">
              &quot;From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.&quot;
            </p>

            <div className="flex items-center gap-12 md:gap-16">
              <a href="#" className="text-white font-inter font-extrabold text-xl md:text-2xl lg:text-[28px] hover:opacity-70 transition-opacity">FB</a>
              <a href="#" className="text-white font-inter font-extrabold text-xl md:text-2xl lg:text-[28px] hover:opacity-70 transition-opacity">TW</a>
              <a href="#" className="text-white font-inter font-extrabold text-xl md:text-2xl lg:text-[28px] hover:opacity-70 transition-opacity">LI</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-white font-inter font-extrabold text-xl md:text-2xl lg:text-[28px] leading-tight mb-6 md:mb-8">
              Quick Link&apos;s
            </h3>
            <ul className="flex flex-col gap-4 md:gap-6">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white font-inter font-medium text-base md:text-lg lg:text-2xl leading-relaxed hover:opacity-70 transition-opacity">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-inter font-extrabold text-xl md:text-2xl lg:text-[28px] leading-tight mb-6 md:mb-8">
              For Every Update.
            </h3>
            <div className="relative flex items-center max-w-[562px]">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-transparent border-2 border-white rounded-lg py-4 md:py-5 px-5 md:px-6 text-white placeholder:text-white/75 font-inter font-medium text-base md:text-lg lg:text-2xl focus:outline-none focus:border-white/80 transition-colors pr-32 md:pr-40"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-white text-[#1B2316] font-inter font-semibold text-base md:text-lg px-5 md:px-8 rounded-r-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>

            <p className="text-white font-inter font-medium text-sm md:text-base lg:text-2xl leading-relaxed mt-8 md:mt-12 lg:mt-48">
              FloraVision © all right reserve
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
