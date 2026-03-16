import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiPhone, FiMapPin } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const links = [
    { to: '/',         label: 'Home' },
    { to: '/menu',     label: 'Menu' },
    { to: '/about',    label: 'About' },
    { to: '/feedback', label: 'Reviews' },
    { to: '/contact',  label: 'Contact' },
  ];

  const active = (p) => location.pathname === p;

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-nav' : 'shadow-sm'}`}>
        {/* Top bar */}
        <div className="hidden md:block bg-sw-dark text-white py-1.5 text-xs">
          <div className="container-sw flex items-center justify-between">
            <div className="flex items-center gap-1 text-gray-300">
              <FiMapPin size={12} />
              <span>Delivering to: <strong className="text-white">Kalyan Nagar, Meerut</strong></span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span>⏰ Open: 11 AM – 11 PM</span>
              <a href="tel:07037778881" className="flex items-center gap-1 hover:text-sw-orange transition-colors">
                <FiPhone size={11} /> 070377 78881
              </a>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="container-sw">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-sw-orange flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=80&q=80" alt="food" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="leading-none">
                <span className="font-display font-black text-xl text-sw-dark tracking-tight">The Red Bowl</span>
                <span className="block text-[10px] font-body text-sw-gray tracking-widest uppercase">Meerut's Finest</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <Link key={l.to} to={l.to}
                  className={`font-body font-semibold text-sm transition-colors relative group ${active(l.to) ? 'text-sw-orange' : 'text-sw-dark hover:text-sw-orange'}`}>
                  {l.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-sw-orange rounded-full transition-all duration-200 ${active(l.to) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              <button onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 bg-sw-orange hover:bg-sw-orangeD text-white font-display font-bold text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md active:scale-95">
                <FiShoppingCart size={18} />
                <span className="hidden sm:inline">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-sw-red text-white text-[10px] font-black rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-sw-dark hover:text-sw-orange transition-colors">
                {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80' : 'max-h-0'}`}>
          <div className="container-sw py-3 flex flex-col gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                className={`py-2.5 px-4 rounded-xl font-body font-semibold text-sm transition-all ${active(l.to) ? 'bg-sw-orange text-white' : 'text-sw-dark hover:bg-sw-light'}`}>
                {l.label}
              </Link>
            ))}
            <a href="tel:07037778881" className="py-2.5 px-4 flex items-center gap-2 text-sw-orange font-body font-semibold text-sm">
              <FiPhone size={14} /> 070377 78881
            </a>
          </div>
        </div>
      </nav>
      <div className="h-16 md:h-[88px]" />
    </>
  );
};

export default Navbar;
