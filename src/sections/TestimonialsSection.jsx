import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../data/reviewsData';

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="section-pad bg-sw-light">
      <div className="container-sw">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-body font-semibold text-sw-orange text-sm uppercase tracking-wider mb-1">Customer Stories</p>
            <h2 className="font-display font-black text-sw-dark text-3xl md:text-4xl">What People Are Saying</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}
              className="w-10 h-10 rounded-xl border-2 border-sw-orange text-sw-orange flex items-center justify-center hover:bg-sw-orange hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              <FiChevronLeft size={18} />
            </button>
            <button onClick={() => setPage(p => Math.min(pages - 1, p + 1))} disabled={page >= pages - 1}
              className="w-10 h-10 rounded-xl border-2 border-sw-orange text-sw-orange flex items-center justify-center hover:bg-sw-orange hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {visible.map(r => <ReviewCard key={r.id} review={r} />)}
        </div>

        {/* Overall stats */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "4.9", label: "Average Rating", sub: "Based on 500+ reviews" },
              { value: "500+", label: "Happy Customers", sub: "And growing every day" },
              { value: "98%", label: "Repeat Orders", sub: "Customers who reorder" },
              { value: "30 min", label: "Avg Delivery", sub: "Across all of Meerut" },
            ].map((s, i) => (
              <div key={i} className={i < 3 ? "sm:border-r border-gray-100" : ""}>
                <p className="font-display font-black text-4xl text-sw-orange">{s.value}</p>
                <p className="font-display font-bold text-sw-dark text-sm mt-1">{s.label}</p>
                <p className="font-body text-sw-gray text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
