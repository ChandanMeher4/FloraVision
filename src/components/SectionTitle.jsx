'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SectionTitle({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center gap-2 mb-12 md:mb-16"
    >
      <Image src="/assets/leaf-left.svg" alt="" width={62} height={63} className="w-10 h-10 md:w-[62px] md:h-[63px]" />
      <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight lg:leading-[67px] text-center">
        {children}
      </h2>
      <Image src="/assets/leaf-right.svg" alt="" width={61} height={63} className="w-10 h-10 md:w-[61px] md:h-[63px]" />
    </motion.div>
  );
}
