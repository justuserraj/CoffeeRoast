"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { showSuccess } from '@/utils/toast';

const plans = [
  {
    name: "The Taster",
    price: "$19",
    period: "/month",
    features: ["1 Bag of Fresh Beans", "Brewing Guide", "Free Shipping", "Cancel Anytime"],
    recommended: false
  },
  {
    name: "The Connoisseur",
    price: "$35",
    period: "/month",
    features: ["2 Bags of Fresh Beans", "Exclusive Micro-lots", "Priority Shipping", "10% Shop Discount"],
    recommended: true
  },
  {
    name: "The Roaster",
    price: "$60",
    period: "/month",
    features: ["4 Bags of Fresh Beans", "Custom Roast Profile", "Early Access", "20% Shop Discount"],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-[#EAD3C6]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[32px] font-semibold mb-4">COFFEE SUBSCRIPTIONS</h2>
          <p className="text-[#6B6B6B]">Never run out of your favorite beans again.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[20px] flex flex-col ${
                plan.recommended 
                ? 'bg-[#2C1E1A] text-white scale-105 shadow-xl z-10' 
                : 'bg-[#F2DFD6] text-[#2C1E1A]'
              }`}
            >
              {plan.recommended && (
                <span className="bg-[#8C5A3C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.recommended ? 'text-white/60' : 'text-[#6B6B6B]'}>{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={18} className={plan.recommended ? 'text-[#8C5A3C]' : 'text-[#8C5A3C]'} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => showSuccess(`Subscribing to ${plan.name}...`)}
                className={`w-full rounded-[24px] py-6 transition-transform hover:scale-105 ${
                  plan.recommended 
                  ? 'bg-white text-[#2C1E1A] hover:bg-[#E5E5E5]' 
                  : 'bg-[#2C1E1A] text-white hover:bg-[#5B3A29]'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;