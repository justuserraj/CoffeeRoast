"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flame, Truck, Coffee } from 'lucide-react';

const steps = [
  {
    icon: Leaf,
    title: "Ethical Sourcing",
    description: "We partner directly with farmers in Ethiopia and Colombia to ensure fair wages and sustainable practices."
  },
  {
    icon: Flame,
    title: "Small Batch Roasting",
    description: "Each batch is roasted to order in our vintage Probat roaster to bring out unique flavor profiles."
  },
  {
    icon: Coffee,
    title: "Quality Testing",
    description: "Our Q-Graders cup every roast to ensure it meets our rigorous standards for clarity and sweetness."
  },
  {
    icon: Truck,
    title: "Fresh Delivery",
    description: "Roasted on Monday, shipped on Tuesday. We ensure your beans arrive at their peak flavor window."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-[#E7CFC2] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
                alt="Roasting process" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative floating element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-[#2C1E1A] p-8 rounded-[24px] text-white shadow-xl hidden md:block"
            >
              <p className="text-3xl font-bold mb-1">12+</p>
              <p className="text-sm text-white/60">Years of Excellence</p>
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <span className="text-[#8C5A3C] font-bold tracking-widest uppercase text-sm mb-4 block">
                OUR CRAFT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                FROM SEED TO CUP, <br />
                <span className="text-[#8C5A3C]">WITHOUT COMPROMISE</span>
              </h2>
              <p className="text-[#6B6B6B] text-lg leading-relaxed">
                We believe that great coffee is a result of meticulous attention to detail at every stage of the journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 bg-[#F2DFD6] rounded-[16px] flex items-center justify-center text-[#8C5A3C]">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;