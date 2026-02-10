"use client"; 

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const faqs = [
  { 
    question: "Do you take insurance?", 
    answer: "I am an out-of-network provider. I can provide a superbill for you to submit to your insurance for potential reimbursement. Many clients receive 50-80% reimbursement depending on their plan." 
  },
  { 
    question: "What are your rates?", 
    answer: "My individual sessions are $250 per 50-minute hour. I also offer a limited number of sliding scale spots for those in financial need." 
  },
  { 
    question: "Do you offer in-person sessions?", 
    answer: "Yes, I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located anywhere in California." 
  },
  { 
    question: "How do I get started?", 
    answer: "You can reach out via my contact form to schedule a free 15-minute consultation to see if we are a good fit for your therapeutic goals." 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-maya-sand py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        <div className="hidden md:block w-full">
           <Reveal width="100%">
              <div className="relative w-full h-[600px] rounded-arch overflow-hidden shadow-xl border-4 border-white">
                 <Image 
                  src="/horizon.jpg" 
                  alt="Peaceful coastal landscape for psychological wellness and FAQ guidance"
                  fill 
                  className="object-cover"
                 />
              </div>
           </Reveal>
        </div>

        <div className="flex flex-col justify-center h-full">
          <Reveal width="100%">
             <p className="text-maya-terra font-bold tracking-widest uppercase text-xs mb-4">Common Questions</p>
             <h2 className="text-4xl md:text-5xl font-serif text-maya-text mb-12">Frequently Asked</h2>
          </Reveal>

          <div className="border-t border-maya-text/20">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.1} width="100%">
                <div className="border-b border-maya-text/20">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="text-xl font-serif text-maya-text group-hover:text-maya-terra transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-maya-terra font-light">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-60 opacity-100 mb-8" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-maya-text/70 text-lg leading-relaxed max-w-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}