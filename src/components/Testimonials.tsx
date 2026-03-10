"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Coffee Enthusiast",
    content: "Best coffee subscription I've tried. The flavor is amazing and delivery is always on time. Every morning feels like a luxury now.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Cafe Owner",
    content: "As a professional, I appreciate the consistency of their roasting process. Truly world-class beans that my customers absolutely love.",
    avatar: "https://i.pravatar.cc/150?u=michael",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Home Barista",
    content: "The subscription service is a lifesaver. Fresh beans delivered right to my door every two weeks. The variety is incredible!",
    avatar: "https://i.pravatar.cc/150?u=elena",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#EAD3C6]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">WHAT OUR BREWERS SAY</h2>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their morning ritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F2DFD6] p-10 rounded-[32px] relative shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <Quote className="absolute top-8 right-8 text-[#8C5A3C]/10 group-hover:text-[#8C5A3C]/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#8C5A3C" className="text-[#8C5A3C]" />
                ))}
              </div>

              <p className="text-[#1A1A1A] mb-10 text-lg leading-relaxed italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[#E5D6CF]">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" 
                />
                <div>
                  <h4 className="font-bold text-[#2C1E1A] text-lg">{t.name}</h4>
                  <p className="text-sm text-[#6B6B6B] font-medium">{t.role}</p>
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