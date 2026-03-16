import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiMail, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-sw-dark text-white">
    {/* Promo Strip */}
    <div className="bg-sw-orange py-3.5">
      <div className="container-sw flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-display font-bold text-base">🍽️ Skip the commission — order directly from The Red Bowl!</p>
        <a href="https://wa.me/917037778881" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-sw-orange px-5 py-2 rounded-lg font-display font-bold text-sm hover:bg-sw-light transition-colors whitespace-nowrap">
          <FaWhatsapp size={16} /> Order on WhatsApp
        </a>
      </div>
    </div>

    <div className="container-sw py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=80&q=80" alt="logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-black text-xl">The Red Bowl</span>
        </div>
        <p className="font-body text-gray-400 text-sm leading-relaxed mb-5">
          Meerut's favourite restaurant delivering authentic North Indian, Chinese and desserts — fresh, fast, commission-free.
        </p>
        <div className="flex gap-3">
          {[
            { icon: <FaWhatsapp size={16} />, href: "https://wa.me/917037778881", color: "hover:bg-green-600" },
            { icon: <FiInstagram size={16} />, href: "#", color: "hover:bg-pink-600" },
            { icon: <FaFacebook size={16} />, href: "#", color: "hover:bg-blue-600" },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center ${s.color} transition-colors`}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {[['/', 'Home'], ['/menu', 'Menu'], ['/about', 'About Us'], ['/feedback', 'Reviews'], ['/contact', 'Contact']].map(([to, label]) => (
            <li key={to}>
              <Link to={to} className="font-body text-gray-400 hover:text-sw-orange transition-colors text-sm flex items-center gap-2">
                <span className="text-sw-orange">›</span> {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-display font-bold text-lg mb-4">Our Menu</h4>
        <ul className="space-y-2">
          {['Starters', 'Main Course', 'Biryani', 'Chinese', 'Snacks', 'Beverages', 'Desserts'].map(c => (
            <li key={c}>
              <Link to="/menu" className="font-body text-gray-400 hover:text-sw-orange transition-colors text-sm flex items-center gap-2">
                <span className="text-sw-orange">›</span> {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-display font-bold text-lg mb-4">Find Us</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-gray-400">
            <FiMapPin size={15} className="text-sw-orange mt-0.5 flex-shrink-0" />
            <span>Shop No. 4, Vardhman Plaza, Garh Rd, Kalyan Nagar, Meerut, UP</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-400">
            <FiPhone size={15} className="text-sw-orange flex-shrink-0" />
            <a href="tel:07037778881" className="hover:text-sw-orange transition-colors">070377 78881</a>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-400">
            <FiMail size={15} className="text-sw-orange flex-shrink-0" />
            <a href="mailto:hello@theredbowl.in" className="hover:text-sw-orange transition-colors">hello@theredbowl.in</a>
          </li>
        </ul>
        <div className="mt-4 bg-white/5 rounded-xl p-4 space-y-1.5 text-xs text-gray-400 font-body">
          <p>⏰ <strong className="text-white">Hours:</strong> Daily 11:00 AM – 11:00 PM</p>
          <p>🚴 <strong className="text-white">Delivery:</strong> All areas in Meerut</p>
          <p>📦 <strong className="text-white">Free delivery</strong> on orders above ₹350</p>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-sw py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <b><p className="text-gray-500 text-xs font-body">© 2025 The Red Bowl. All rights reserved. Meerut, Uttar Pradesh.</p></b>
        <b> <p className="text-gray-600 text-xs font-body">Created with ❤️ by AI Growth exa</p></b>
      </div>
    </div>
  </footer>
);

export default Footer;
