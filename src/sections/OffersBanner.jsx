import React from 'react';
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: "50% OFF up to ₹100",
    sub: "On your first order",
    code: "REDBOWL50",
    color: "from-orange-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&q=80",
  },
  {
    id: 2,
    title: "FREE Delivery",
    sub: "On orders above ₹350",
    code: "No code needed",
    color: "from-green-500 to-green-600",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300&q=80",
  },
  {
    id: 3,
    title: "Combo Meals",
    sub: "Save up to ₹80 on combos",
    code: "COMBO80",
    color: "from-red-500 to-red-700",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&q=80",
  },
  {
    id: 4,
    title: "Weekend Special",
    sub: "Extra 15% OFF on weekends",
    code: "WEEKEND15",
    color: "from-purple-500 to-purple-700",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&q=80",
  },
];

const OffersBanner = () => (
  <section className="py-8 bg-sw-light">
    <div className="container-sw">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display font-black text-sw-dark text-2xl">Deals & Offers</h2>
        <Link to="/menu" className="font-body font-semibold text-sw-orange text-sm hover:underline">See all</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {offers.map(o => (
          <Link to="/menu" key={o.id}
            className={`relative rounded-2xl bg-gradient-to-r ${o.color} text-white overflow-hidden flex items-center gap-3 p-4 hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5 group`}>
            {/* BG image */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img src={o.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 flex-1">
              <p className="font-display font-black text-lg leading-tight">{o.title}</p>
              <p className="font-body text-white/80 text-xs mt-0.5">{o.sub}</p>
              <div className="mt-2 inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[11px] font-display font-bold px-2.5 py-1 rounded-lg">
                {o.code}
              </div>
            </div>
            <span className="relative z-10 text-3xl opacity-80">🎁</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default OffersBanner;
