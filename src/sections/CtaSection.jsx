import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const CtaSection = () => (
  <section className="relative py-20 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=85" alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-sw-dark/85" />
    <div className="absolute inset-0 bg-gradient-to-r from-sw-orange/20 via-transparent to-transparent" />

    <div className="relative container-sw text-center max-w-3xl mx-auto">
      <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-3">Order Now</p>
      <h2 className="font-display font-black text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
        Hungry? We're <span className="text-sw-orange">30 Minutes Away.</span>
      </h2>
      <p className="font-body text-white/70 text-lg mb-8 max-w-lg mx-auto">
        Fresh, hot, authentic food — delivered direct from our kitchen, with zero commission and zero compromise.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to="/menu"
          className="flex items-center gap-2 bg-sw-orange hover:bg-sw-orangeD text-white font-display font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sw-orange/30 hover:-translate-y-0.5">
          Order Now <FiArrowRight size={18} />
        </Link>
        <a href="https://wa.me/917037778881" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-display font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
          <FaWhatsapp size={22} /> WhatsApp Us
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;
