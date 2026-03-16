import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward, FiUsers, FiTruck, FiHeart } from 'react-icons/fi';

const team = [
  { name: "Chef Arjun Malhotra", role: "Head Chef", exp: "12 years experience", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=85", spec: "North Indian Classics" },
  { name: "Chef Priya Sharma",   role: "Biryani Specialist", exp: "8 years experience", img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=85", spec: "Dum Biryani & Rice" },
  { name: "Chef Rahul Gupta",    role: "Tandoor Expert", exp: "10 years experience", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=85", spec: "Kebabs & Tandoor" },
];

const values = [
  { icon: <FiHeart size={24} />, title: "Made With Love", desc: "Every dish is prepared with the same care and dedication as home-cooked food — because we believe food is an act of love." },
  { icon: <FiAward size={24} />, title: "Quality First", desc: "We source only the freshest ingredients daily. No frozen shortcuts, no compromise on quality — ever." },
  { icon: <FiUsers size={24} />, title: "Community Focus", desc: "We're a local Meerut restaurant that reinvests in the community. When you order from us, you support local." },
  { icon: <FiTruck size={24} />, title: "Fast & Reliable", desc: "Our logistics are optimised for speed without sacrificing care. Average 30-minute delivery, every single day." },
];

const About = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <div className="relative h-64 sm:h-80 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=85" alt="about" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-sw-dark/75" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-2">Our Story</p>
        <h1 className="font-display font-black text-white text-4xl sm:text-5xl">About The Red Bowl</h1>
        <p className="font-body text-white/70 mt-2 text-sm">Meerut's homegrown food destination</p>
      </div>
    </div>

    {/* Story */}
    <section className="section-pad bg-white">
      <div className="container-sw grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-3">Our Beginning</p>
          <h2 className="font-display font-black text-sw-dark text-3xl md:text-4xl mb-5 leading-snug">
            Born in Meerut,<br />Built for Meerut
          </h2>
          <div className="space-y-4 font-body text-sw-gray leading-relaxed text-sm">
            <p>The Red Bowl began with a single question: why should Meerut families pay 20–30% commission to apps just to order local food? We believed there was a better way — and we built it.</p>
            <p>Founded at Shop No. 4, Vardhman Plaza on Garh Road, Kalyan Nagar, our restaurant started as a small kitchen with a big ambition: to make authentic North Indian food accessible, affordable and fast — directly, no middlemen.</p>
            <p>Today we serve 500+ happy families across Meerut with 36 dishes spanning North Indian curries, Dum Biryani, Indo-Chinese, tandoor items and indulgent desserts. Every dish is prepared fresh — no pre-cooking, no frozen shortcuts.</p>
            <p>Our team of 3 specialist chefs brings a combined 30+ years of culinary experience, from Kashmiri-style slow-braised mutton to perfectly-balanced butter chicken that could rival any 5-star restaurant.</p>
          </div>
          <Link to="/menu" className="inline-flex items-center gap-2 btn-primary mt-6 text-sm">
            Explore Our Menu <FiArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=85" alt="food" className="rounded-2xl object-cover w-full h-48 shadow-card" />
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=85" alt="chef" className="rounded-2xl object-cover w-full h-48 shadow-card mt-6" />
          <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&q=85" alt="biryani" className="rounded-2xl object-cover w-full h-48 shadow-card -mt-6" />
          <img src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&q=85" alt="curry" className="rounded-2xl object-cover w-full h-48 shadow-card" />
        </div>
      </div>
    </section>

    {/* Numbers */}
    <section className="py-12 bg-sw-orange">
      <div className="container-sw grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
        {[["500+","Happy Customers"],["36+","Menu Items"],["4.9★","Average Rating"],["30 Min","Avg Delivery"]].map(([v,l]) => (
          <div key={l}>
            <p className="font-display font-black text-4xl sm:text-5xl">{v}</p>
            <p className="font-body text-white/80 text-sm mt-1">{l}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="section-pad bg-sw-light">
      <div className="container-sw">
        <div className="text-center mb-10">
          <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-2">Our Promise</p>
          <h2 className="font-display font-black text-sw-dark text-3xl md:text-4xl">What Makes Us Different</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-xl bg-sw-orange/10 text-sw-orange flex items-center justify-center mb-4">{v.icon}</div>
              <h3 className="font-display font-bold text-sw-dark text-lg mb-2">{v.title}</h3>
              <p className="font-body text-sw-gray text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-pad bg-white">
      <div className="container-sw">
        <div className="text-center mb-10">
          <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-2">The Team</p>
          <h2 className="font-display font-black text-sw-dark text-3xl md:text-4xl">Meet Our Chefs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {team.map((m, i) => (
            <div key={i} className="card text-center overflow-hidden group">
              <div className="h-56 overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-sw-dark text-base">{m.name}</h3>
                <p className="font-body text-sw-orange text-xs font-semibold mt-0.5">{m.role}</p>
                <p className="font-body text-sw-gray text-xs mt-1">{m.exp}</p>
                <div className="mt-2 inline-block bg-sw-light text-sw-gray text-xs font-body px-3 py-1 rounded-full">
                  {m.spec}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
