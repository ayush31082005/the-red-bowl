import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menuData';

const FeaturedDishes = () => {
  const featured = menuItems.filter(i => ['No. 1', "Chef's Pick", 'Bestseller', 'Premium'].includes(i.badge)).slice(0, 8);

  return (
    <section className="section-pad bg-white">
      <div className="container-sw">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-1">Top Picks</p>
            <h2 className="font-display font-black text-sw-dark text-3xl md:text-4xl">Most Loved Dishes</h2>
            <p className="font-body text-sw-gray mt-1.5 text-sm max-w-md">
              Handpicked favourites that our customers order again and again.
            </p>
          </div>
          <Link to="/menu" className="hidden sm:flex items-center gap-1.5 font-display font-bold text-sw-orange hover:underline text-sm">
            Full Menu <FiArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featured.map(item => <MenuCard key={item.id} item={item} />)}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
            View All Dishes <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
