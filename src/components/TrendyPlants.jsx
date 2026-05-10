'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    image: '/assets/desk-plant-1.png',
    title: 'For Your Desks Decorations',
    description: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: 'Rs. 599/-',
    imagePosition: 'left',
  },
  {
    id: 2,
    image: '/assets/desk-plant-2.png',
    title: 'For Your Desks Decorations',
    description: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming',
    price: 'Rs. 399/-',
    imagePosition: 'right',
  },
];

export default function TrendyPlants() {
  return (
    <section id="plants" className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-[1728px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-center gap-2 mb-12 md:mb-16">
          <Image src="/assets/leaf-left.svg" alt="" width={62} height={63} className="w-10 h-10 md:w-[62px] md:h-[63px]" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="section-heading text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight lg:leading-[67px] text-center"
          >
            Our Trendy plants
          </motion.h2>
          <Image src="/assets/leaf-right.svg" alt="" width={61} height={63} className="w-10 h-10 md:w-[61px] md:h-[63px]" />
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative"
            >
              <div className="glass-card-pill">
                <div className="glass-inner">
                  <div className={`flex flex-col ${product.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center min-h-[400px] md:min-h-[526px]`}>
                    <div className="relative w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-0">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={601}
                        height={732}
                        className="w-[280px] md:w-[400px] lg:w-[500px] xl:w-[601px] h-auto drop-shadow-2xl relative z-10 -mt-8 lg:-mt-16"
                      />
                    </div>

                    <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-16 pb-8 lg:pb-0 flex flex-col justify-center">
                      <h3 className="text-white font-inter font-semibold text-2xl md:text-3xl lg:text-[38px] leading-tight lg:leading-[46px] mb-4">
                        {product.title}
                      </h3>
                      <p className="text-white font-inter font-semibold text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[24px] mb-6">
                        {product.description}
                      </p>
                      <p className="text-white font-inter font-semibold text-2xl md:text-3xl lg:text-[38px] leading-tight lg:leading-[46px] mb-6">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex items-center gap-3 mt-6 ${product.imagePosition === 'left' ? 'justify-end mr-4 md:mr-10' : 'justify-start ml-4 md:ml-10'}`}>
                <button className="btn-outline text-lg md:text-[28px] font-medium px-6 md:px-12 py-3 md:py-4">
                  Explore
                </button>
                <button className="border-2 border-white rounded-xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Image src="/assets/bag-icon.png" alt="Add to cart" width={26} height={26} className="w-5 h-5 md:w-[26px] md:h-[26px]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
