import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin, FiStar, FiClock, FiShield } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    tag: "🔥 Today's Special",
    headline: "Authentic Flavours,\nDelivered Fresh",
    sub: "Skip Zomato & Swiggy — order directly from us. No commissions, lower prices, faster delivery.",
    cta: "Order Now",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=90",
    accent: "from-orange-900/80",
  },
  {
    id: 2,
    tag: "⭐ No. 1 in Meerut",
    headline: "Meerut's Best\nBiryani is Here",
    sub: "Slow-cooked dum biryani, made with aged basmati and hand-ground spices. Every grain perfected.",
    cta: "See Biryani Menu",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=90",
    accent: "from-yellow-900/80",
  },
  {
    id: 3,
    tag: "🍗 Crowd Favourite",
    headline: "Bold, Smoky &\nUnforgettable",
    sub: "From Butter Chicken to Seekh Kebabs — North Indian comfort food the way it's meant to taste.",
    cta: "Explore Menu",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=900&q=90",
    accent: "from-red-900/80",
  },
];

const stats = [
  { icon: <FiStar size={16} />, value: "4.9★", label: "Rating" },
  { icon: <FiClock size={16} />, value: "30 Min", label: "Avg Delivery" },
  { icon: <FiShield size={16} />, value: "0%", label: "Commission" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[88vh] min-h-[560px] max-h-[780px] overflow-hidden">
      {/* Background Images with crossfade */}
      {slides.map((s, i) => (
        <div key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.accent} via-black/50 to-transparent`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container-sw flex flex-col justify-end pb-14 md:justify-center md:pb-0">
        <div className="max-w-xl">
          {/* Tag */}
          <div key={`tag-${current}`} className="animate-fade-in inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-display font-bold px-4 py-1.5 rounded-full mb-4">
            {slide.tag}
          </div>

          {/* Headline */}
          <h1 key={`h-${current}`} className="animate-slide-up font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4" style={{ whiteSpace: 'pre-line' }}>
            {slide.headline}
          </h1>

          {/* Sub */}
          <p key={`p-${current}`} className="animate-slide-up font-body text-white/80 text-base sm:text-lg leading-relaxed mb-6 max-w-md" style={{ animationDelay: '0.1s' }}>
            {slide.sub}
          </p>

          {/* Location pill */}
          <div className="flex items-center gap-2 text-white/70 text-sm font-body mb-6">
            <FiMapPin size={14} className="text-sw-orange" />
            <span>Delivering to <strong className="text-white">Kalyan Nagar, Meerut</strong></span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link to="/menu"
              className="flex items-center gap-2 bg-sw-orange hover:bg-sw-orangeD text-white font-display font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sw-orange/30 hover:-translate-y-0.5 active:scale-95">
              {slide.cta} <FiArrowRight />
            </Link>
            <a href="https://wa.me/917037778881"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-display font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95">
              <FaWhatsapp size={20} /> WhatsApp Order
            </a>
          </div>
        </div>

        {/* Slide Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 md:bottom-12 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-sw-orange' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`} />
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100">
        <div className="container-sw py-3 flex items-center justify-center gap-8 sm:gap-16">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-sw-dark">
              <span className="text-sw-orange">{s.icon}</span>
              <div>
                <p className="font-display font-black text-sm leading-none">{s.value}</p>
                <p className="font-body text-sw-gray text-[10px] leading-none mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
          <div className="hidden sm:flex items-center gap-2 text-sw-dark">
            <span className="text-sw-orange"><FiShield size={16} /></span>
            <div>
              <p className="font-display font-black text-sm leading-none">500+</p>
              <p className="font-body text-sw-gray text-[10px] leading-none mt-0.5">Happy Orders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
