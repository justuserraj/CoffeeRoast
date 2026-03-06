"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fresh is the coffee when it arrives?",
    answer: "We roast our beans in small batches every Monday and ship them by Tuesday. Depending on your location, you'll receive your coffee 2-4 days after roasting, which is the ideal window for peak flavor."
  },
  {
    question: "Do you offer pre-ground coffee?",
    answer: "Yes! While we recommend whole bean for maximum freshness, we can grind your coffee for Drip, Espresso, French Press, or Cold Brew. Just select your preference on the product page."
  },
  {
    question: "Where do you source your beans?",
    answer: "We practice direct trade, working closely with farmers in Ethiopia, Colombia, Guatemala, and Sumatra. This ensures we get the highest quality micro-lots while paying farmers well above fair-trade prices."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Absolutely. There are no commitments. You can pause, skip, or cancel your subscription through your account dashboard at any time before your next billing cycle."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-[#EAD3C6]">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[32px] font-semibold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-[#6B6B6B]">Everything you need to know about our beans and service.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#F2DFD6] border-none rounded-[18px] px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#2C1E1A] hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#6B6B6B] leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;