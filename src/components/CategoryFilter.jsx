import React from 'react';
import { categories } from '../data/menuData';

const CategoryFilter = ({ active, onSelect }) => (
  <div className="flex gap-4 overflow-x-auto no-scrollbar py-1">
    {categories.map(cat => (
      <button key={cat.id} onClick={() => onSelect(cat.id)}
        className={`flex flex-col items-center gap-1.5 flex-shrink-0 transition-all duration-200 group ${active === cat.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}>
        <div className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-200 ${active === cat.id ? 'border-sw-orange shadow-md shadow-sw-orange/20 scale-105' : 'border-gray-200 group-hover:border-sw-orange/50'}`}>
          <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
        </div>
        <span className={`text-xs font-display font-bold whitespace-nowrap transition-colors ${active === cat.id ? 'text-sw-orange' : 'text-sw-gray group-hover:text-sw-dark'}`}>
          {cat.label}
        </span>
        {active === cat.id && <div className="w-6 h-0.5 bg-sw-orange rounded-full" />}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
