"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import BlogGrid from '@/components/BlogGrid';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <ProductGrid />
        <Testimonials />
        <Pricing />
        <BlogGrid />
        <CTA />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;