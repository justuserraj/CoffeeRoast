"use client";

import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const Wholesale = () => {
  return (
    <PageLayout title="Wholesale" subtitle="Partner with us to serve exceptional coffee.">
      <div className="space-y-8 text-[#1A1A1A]">
        <p className="text-lg leading-relaxed">Whether you run a cafe, restaurant, or office, we provide premium coffee solutions tailored to your needs. Our wholesale partners receive exclusive access to micro-lots and professional training.</p>
        <div className="bg-[#2C1E1A] text-white p-8 rounded-[24px] text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to elevate your coffee program?</h3>
          <Button className="bg-[#8C5A3C] hover:bg-[#5B3A29] text-white rounded-[24px] px-8 py-6 font-bold">
            Inquire Now
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Wholesale;