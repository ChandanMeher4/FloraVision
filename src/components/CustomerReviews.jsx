'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Shelly Russel',
    avatar: '/assets/reviewer-1.png',
    review: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    avatar: '/assets/reviewer-2.png',
    review: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    name: 'Carol Huels',
    avatar: '/assets/reviewer-3.png',
    review: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="glass-card-review h-full">
        <div className="glass-inner p-8 md:p-10 lg:p-14 flex flex-col min-h-[380px] md:min-h-[480px]">
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
            <Image
              src={review.avatar}
              alt={review.name}
              width={88}
              height={88}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-[88px] lg:h-[88px] rounded-full object-cover shadow-xl"
            />
            <div>
              <h4 className="text-white font-inter font-semibold text-xl md:text-2xl lg:text-[38px] leading-tight lg:leading-[46px]">
                {review.name}
              </h4>
              <div className="mt-1.5">
                <Image src="/assets/stars-large.svg" alt="5 star rating" width={131} height={19} className="h-3 md:h-4 lg:h-5 w-auto" />
              </div>
            </div>
          </div>

          <p className="text-white/75 font-inter text-base md:text-lg lg:text-2xl leading-relaxed lg:leading-[29px] flex-1">
            {review.review}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
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
            Customer Review
          </motion.h2>
          <Image src="/assets/leaf-right.svg" alt="" width={61} height={63} className="w-10 h-10 md:w-[61px] md:h-[63px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
