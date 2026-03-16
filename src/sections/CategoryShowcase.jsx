import React from 'react';
import { Link } from 'react-router-dom';

const cats = [
  { label: "Starters",    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=85", count: 6,  color: "from-orange-400/60" },
  { label: "Main Course", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=85", count: 8,  color: "from-red-500/60" },
  { label: "Biryani",     img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&q=85", count: 5,  color: "from-yellow-600/60" },
  { label: "Chinese",     img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=85", count: 4,  color: "from-green-600/60" },
  { label: "Snacks",      img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=85", count: 3,  color: "from-pink-500/60" },
  { label: "Desserts",    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=85", count: 4,  color: "from-purple-500/60" },
];

const CategoryShowcase = () => (
  <section className="section-pad bg-sw-light">
    <div className="container-sw">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-1">Browse By Category</p>
          <h2 className="font-display font-black text-sw-dark text-3xl md:text-4xl">What Are You\nCraving?</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {cats.map(c => (
          <Link to="/menu" key={c.label}
            className="relative h-36 sm:h-44 rounded-2xl overflow-hidden group cursor-pointer shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
            <img src={c.img} alt={c.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            <div className={`absolute inset-0 bg-gradient-to-t ${c.color} to-transparent`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-display font-black text-white text-base leading-tight">{c.label}</p>
              <p className="font-body text-white/70 text-xs">{c.count} items</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryShowcase;
