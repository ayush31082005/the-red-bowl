import React from 'react';

const steps = [
  {
    num: "01", title: "Browse Menu",
    desc: "Explore 36+ dishes across 8 categories. Filter by veg/non-veg, search by name, or browse by category.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=85",
  },
  {
    num: "02", title: "Add to Cart",
    desc: "Add your favourite dishes to the cart. Adjust quantities anytime. Automatic discount applied on orders above ₹500.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=85",
  },
  {
    num: "03", title: "Confirm on WhatsApp",
    desc: "Your order is sent directly to our WhatsApp. We confirm within 2 minutes — no app needed, no account required.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=85",
  },
  {
    num: "04", title: "Enjoy Fresh Food",
    desc: "Hot, freshly-prepared food arrives at your door in 30 minutes average. Packed hygienically, delivered with care.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=85",
  },
];

const HowItWorks = () => (
  <section className="section-pad bg-white">
    <div className="container-sw">
      <div className="text-center mb-12">
        <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-2">Simple Process</p>
        <h2 className="font-display font-black text-sw-dark text-3xl md:text-4xl mb-3">
          Order in 4 Easy Steps
        </h2>
        <p className="font-body text-sw-gray max-w-lg mx-auto text-sm">
          No app downloads, no hidden fees, no middlemen. Just great food, delivered fresh.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connector (desktop) */}
        <div className="hidden lg:block absolute top-20 left-[13%] right-[13%] h-px border-t-2 border-dashed border-sw-orange/30 z-0" />

        {steps.map((s, i) => (
          <div key={i} className="relative flex flex-col items-center text-center group z-10">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:border-sw-orange/30 transition-all duration-300 mb-5">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-white text-4xl opacity-90">
                {s.num}
              </span>
            </div>
            {/* Step dot */}
            <div className="absolute top-[108px] -translate-y-1/2 w-7 h-7 bg-sw-orange rounded-full border-4 border-white shadow-md flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <h3 className="font-display font-black text-sw-dark text-xl mb-2">{s.title}</h3>
            <p className="font-body text-sw-gray text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
