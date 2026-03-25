"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const stories = [
  {
    region: "Sidamo, Ethiopia",
    title: "The Heirloom Project",
    description: "How we partnered with 150 smallholder farmers to preserve ancient heirloom varieties while increasing their annual income by 40%.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    stats: "150+ Farmers"
  },
  {
    region: "Huila, Colombia",
    title: "Sustainable Water Management",
    description: "Implementing closed-loop water filtration systems in the Huila region to protect local ecosystems from processing runoff.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
    stats: "90% Water Saved"
  }
];

const OriginStories = () => {
  return (
    <section id="stories" className="py-24 bg-[#E7CFC2]">
      <div className="container-custom">
        <div className="mb-16">
          <span className="text-[#8C5A3C] font-bold tracking-widest uppercase text-sm mb-4 block">
            CASE STUDIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            IMPACT AT THE <span className="text-[#8C5A3C]">SOURCE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-[#F2DFD6] rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#8C5A3C] text-sm font-bold mb-4">
                    <MapPin size={16} />
                    {story.region}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#8C5A3C] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                    {story.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-[#E5D6CF]">
                  <span className="text-sm font-bold text-[#2C1E1A]">{story.stats}</span>
                  <button 
                    onClick={() => showSuccess(`Opening story: ${story.title}`)}
                    className="flex items-center gap-2 text-sm font-bold text-[#8C5A3C] hover:gap-3 transition-all"
                  >
                    Read Story <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginStories;