"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';

const ShippingPolicy = () => {
  return (
    <PageLayout title="Shipping Policy" subtitle="Fast and fresh delivery to your door.">
      <div className="space-y-8 text-[#1A1A1A]">
        <section>
          <h2 className="text-2xl font-bold mb-4">Shipping Rates</h2>
          <p className="leading-relaxed">We offer free shipping on all orders over $50. For orders under $50, a flat rate of $5.99 applies.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Delivery Times</h2>
          <p className="leading-relaxed">Orders are typically processed within 1-2 business days. Standard shipping takes 3-5 business days within the continental US.</p>
        </section>
      </div>
    </PageLayout>
  );
};

export default ShippingPolicy;