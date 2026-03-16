import React, { useState, useMemo, useRef, useEffect } from 'react';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';
import CategoryFilter from '../components/CategoryFilter';
import MenuCard from '../components/MenuCard';
import { menuItems, categories } from '../data/menuData';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const { totalItems, totalPrice, setIsCartOpen } = useCart();

  const filtered = useMemo(() => menuItems.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
    const matchVeg = !vegOnly || item.isVeg;
    return matchCat && matchSearch && matchVeg;
  }), [activeCategory, search, vegOnly]);

  const grouped = useMemo(() => {
    if (activeCategory !== 'all') return null;
    const g = {};
    filtered.forEach(item => {
      if (!g[item.category]) g[item.category] = [];
      g[item.category].push(item);
    });
    return g;
  }, [filtered, activeCategory]);

  return (
    <div className="min-h-screen bg-sw-light">
      {/* Page hero */}
      <div className="relative h-48 sm:h-60 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1400&q=85" alt="menu" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sw-dark/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-1">Explore</p>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl mb-2">Our Full Menu</h1>
          <p className="font-body text-white/70 text-sm">36 dishes · 8 categories · Fresh every day</p>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-[64px] md:top-[88px] z-30 bg-white shadow-nav border-b border-gray-100">
        <div className="container-sw py-3 space-y-3">
          {/* Search + toggles */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1">
              <FiSearch size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sw-gray" />
              <input type="text" placeholder="Search dishes..." value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-sw pl-9 pr-10 py-2.5 text-sm" />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-sw-gray hover:text-sw-dark">
                  <FiX size={15} />
                </button>
              )}
            </div>

            {/* Veg toggle */}


            {/* Cart shortcut */}
            {totalItems > 0 && (
              <button onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 bg-sw-orange text-white font-display font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-sw-orangeD transition-colors whitespace-nowrap">
                🛒 {totalItems} item{totalItems > 1 ? 's' : ''} · ₹{totalPrice}
              </button>
            )}
          </div>

          {/* Image category filter */}
          <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />
        </div>
      </div>

      {/* Content */}
      <div className="container-sw py-8">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
            <img src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=300&q=70" alt="empty" className="w-32 h-32 object-cover rounded-full opacity-50" />
            <h3 className="font-display font-black text-sw-dark text-2xl">Nothing Found</h3>
            <p className="font-body text-sw-gray text-sm">Try a different search or reset filters.</p>
            <button onClick={() => { setSearch(''); setActiveCategory('all'); setVegOnly(false); }} className="btn-primary mt-2">
              Reset Filters
            </button>
          </div>
        ) : activeCategory !== 'all' ? (
          <>
            <p className="font-body text-sw-gray text-sm mb-5"><span className="font-bold text-sw-dark">{filtered.length}</span> items found</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map(item => <MenuCard key={item.id} item={item} />)}
            </div>
          </>
        ) : (
          /* Grouped by category */
          Object.entries(grouped).map(([catId, items]) => {
            const cat = categories.find(c => c.id === catId);
            if (!items.length) return null;
            return (
              <div key={catId} className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={cat?.img} alt={cat?.label} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="font-display font-black text-sw-dark text-2xl">{cat?.label}</h2>
                    <p className="font-body text-sw-gray text-xs">{items.length} items</p>
                  </div>
                  <div className="flex-1 h-px bg-gray-200 ml-2" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {items.map(item => <MenuCard key={item.id} item={item} />)}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Menu;
