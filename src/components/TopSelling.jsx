'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const plants = [
  {
    id: 1,
    image: '/assets/aglaonema-card.png',
    name: 'Aglaonema plant',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
    price: 'Rs. 300/-',
  },
  {
    id: 2,
    image: '/assets/desk-plant-1.png',
    name: 'Plantain Lilies',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    price: 'Rs. 380/-',
  },
  {
    id: 3,
    image: '/assets/cactus-plant.png',
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments',
    price: 'Rs. 259/-',
  },
  {
    id: 4,
    image: '/assets/swiss-cheese-plant.png',
    name: 'Swiss cheese Plant',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    price: 'Rs. 400/-',
  },
  {
    id: 5,
    image: '/assets/sansevieria-plant.png',
    name: 'Sansevieria plant',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
  },
  {
    id: 6,
    image: '/assets/agave-plant.png',
    name: 'Agave plant',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    price: 'Rs. 359/-',
  },
];

function PlantCard({ plant, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative z-20 flex justify-center mb-[-100px] md:mb-[-130px]">
        <Image
          src={plant.image}
          alt={plant.name}
          width={459}
          height={459}
          className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="glass-card-product">
        <div className="glass-inner pt-[110px] md:pt-[140px] px-6 md:px-8 lg:px-12 pb-8 md:pb-10">
          <h3 className="text-white/75 font-inter text-xl md:text-2xl lg:text-[32px] leading-tight lg:leading-[40px] mb-3">
            {plant.name}
          </h3>
          <p className="text-white/75 font-inter text-sm md:text-base lg:text-lg leading-relaxed lg:leading-[24px] mb-6 min-h-[60px] md:min-h-[72px]">
            {plant.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-white/75 font-inter text-xl md:text-2xl lg:text-[32px] leading-tight font-medium">
              {plant.price}
            </span>
            <button className="border-2 border-white/50 rounded-xl w-11 h-11 md:w-14 md:h-14 flex items-center justify-center hover:bg-white/10 transition-all group-hover:scale-110 duration-300">
              <Image src="/assets/bag-icon.png" alt="Add to cart" width={27} height={27} className="w-5 h-5 md:w-6 md:h-6 opacity-75" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TopSelling() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[1728px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-center gap-2 mb-16 md:mb-20">
          <Image src="/assets/leaf-left.svg" alt="" width={62} height={63} className="w-10 h-10 md:w-[62px] md:h-[63px]" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="section-heading text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight lg:leading-[67px] text-center"
          >
            Our Top Selling Plants
          </motion.h2>
          <Image src="/assets/leaf-right.svg" alt="" width={61} height={63} className="w-10 h-10 md:w-[61px] md:h-[63px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-20 md:gap-x-10 md:gap-y-24 lg:gap-x-12 lg:gap-y-28">
          {plants.map((plant, index) => (
            <PlantCard key={plant.id} plant={plant} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
