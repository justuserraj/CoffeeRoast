"use client";

import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: "The Secret to Perfect Pour-Over",
    excerpt: "Master the art of manual brewing with our comprehensive guide to water temperature and grind size.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    date: "Oct 24, 2023"
  },
  {
    title: "Understanding Coffee Origins",
    excerpt: "From the highlands of Ethiopia to the volcanic soil of Guatemala, explore how terroir affects flavor.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
    date: "Oct 18, 2023"
  },
  {
    title: "Sustainable Sourcing Matters",
    excerpt: "Learn about our direct-trade relationships and how we support local farming communities.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    date: "Oct 12, 2023"
  }
];

const BlogGrid = () => {
  return (
    <section id="blog" className="py-20 bg-[#E7CFC2]">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-[32px] font-semibold">BREW JOURNAL</h2>
          <button className="text-[#8C5A3C] font-medium hover:underline">Read All Posts</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#F2DFD6] p-[18px] rounded-[18px] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[16px] mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <span className="text-[12px] font-medium text-[#8C5A3C] mb-2 block">{post.date}</span>
                <h3 className="text-xl font-semibold text-[#2C1E1A] mb-3 group-hover:text-[#8C5A3C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="text-sm font-bold text-[#2C1E1A] underline underline-offset-4 hover:text-[#8C5A3C] transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;