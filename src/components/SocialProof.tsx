"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const images = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1497933321190-957443660ee2?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=400"
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-[#E7CFC2]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#8C5A3C] font-bold tracking-widest uppercase text-sm mb-4">
            <Instagram size={18} />
            @COFFEEROAST_CO
          </div>
          <h2 className="text-3xl md:text-[32px] font-semibold">JOIN OUR COMMUNITY</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => showSuccess("Opening Instagram post...")}
              className="aspect-square rounded-[16px] overflow-hidden group relative cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Community coffee ${index}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;