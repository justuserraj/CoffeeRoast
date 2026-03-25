"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';

const ReturnsExchanges = () => {
  return (
    <PageLayout title="Returns & Exchanges" subtitle="Our commitment to your satisfaction.">
      <div className="space-y-8 text-[#1A1A1A]">
        <section>
          <h2 className="text-2xl font-bold mb-4">Coffee Returns</h2>
          <p className="leading-relaxed">Due to the perishable nature of coffee, we do not accept returns on coffee beans. However, if you are unsatisfied with your order, please contact us within 14 days.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Equipment Returns</h2>
          <p className="leading-relaxed">Unused brewing equipment in its original packaging can be returned within 30 days of purchase for a full refund.</p>
        </section>
      </div>
    </PageLayout>
  );
};

export default ReturnsExchanges;