"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Coffee Enthusiast",
    content: "The aroma of their Ethiopian roast is simply unmatched. It's become my essential morning ritual.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Cafe Owner",
    content: "As a professional, I appreciate the consistency of their roasting process. Truly world-class beans.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Elena Rodriguez",
    role: "Home Barista",
    content: "The subscription service is a lifesaver. Fresh beans delivered right to my door every two weeks.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#E7CFC2]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[32px] font-semibold mb-4">WHAT OUR BREWERS SAY</h2>
          <div className="flex justify-center gap-1 text-[#8C5A3C]">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F2DFD6] p-8 rounded-[18px] relative"
            >
              <Quote className="absolute top-6 right-6 text-[#8C5A3C]/20" size={40} />
              <p className="text-[#1A1A1A] mb-8 italic leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-[#2C1E1A]">{t.name}</h4>
                  <p className="text-sm text-[#6B6B6B]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;