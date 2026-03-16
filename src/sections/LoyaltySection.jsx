import React from 'react';

const perks = [
  { img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80", title: "10% Off First Order", desc: "New customers get an instant 10% off. Use code REDBOWL10 at checkout." },
  { img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=300&q=80", title: "Loyalty Points", desc: "Earn 1 point per ₹10 spent. Redeem points for free dishes and upgrades." },
  { img: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?w=300&q=80", title: "Birthday Dessert", desc: "Free dessert on your birthday, every year. Just let us know when you order!" },
  { img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=300&q=80", title: "Priority Delivery", desc: "Members jump the queue. Your order is always prepared and dispatched first." },
];

const LoyaltySection = () => (
  <section className="section-pad bg-sw-dark relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=60" alt="" className="w-full h-full object-cover" />
    </div>
    <div className="container-sw relative z-10">
      <div className="text-center mb-10">
        <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-2">Rewards Program</p>
        <h2 className="font-display font-black text-white text-3xl md:text-4xl mb-3">
          Join The Red Bowl Family
        </h2>
        <p className="font-body text-gray-400 max-w-xl mx-auto text-sm">
          Become a member for free and unlock exclusive deals, birthday perks and priority delivery — every single order.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {perks.map((p, i) => (
          <div key={i} className="bg-white/5 border border-white/10 hover:border-sw-orange/40 rounded-2xl overflow-hidden group transition-all duration-300 hover:bg-white/10">
            <div className="h-36 overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="font-display font-bold text-white text-base mb-1.5">{p.title}</h3>
              <p className="font-body text-gray-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="https://wa.me/917037778881?text=Hi!%20I'd%20like%20to%20join%20The%20Red%20Bowl%20membership%20program."
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sw-orange hover:bg-sw-orangeD text-white font-display font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sw-orange/30 hover:-translate-y-0.5">
          🎉 Join Free — Get 10% Off Instantly
        </a>
      </div>
    </div>
  </section>
);

export default LoyaltySection;
