import React, { useState } from 'react';
import { FiStar, FiSend } from 'react-icons/fi';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../data/reviewsData';

const Feedback = () => {
  const [form, setForm] = useState({ name:'', location:'', rating:5, text:'', order:'' });
  const [hover, setHover] = useState(0);
  const [done, setDone] = useState(false);

  const handleSubmit = e => { e.preventDefault(); if (form.name && form.text) setDone(true); };

  return (
    <div className="min-h-screen bg-sw-light">
      {/* Header */}
      <div className="relative h-48 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1400&q=85" alt="reviews" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sw-dark/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl">Reviews & Feedback</h1>
          <p className="font-body text-white/70 text-sm mt-2">Real reviews from real customers in Meerut</p>
        </div>
      </div>

      <div className="container-sw py-10 grid lg:grid-cols-5 gap-8">
        {/* Reviews */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-black text-sw-dark text-2xl">Customer Reviews <span className="text-sw-gray font-body text-base font-normal">({reviews.length})</span></h2>
          </div>
          {/* Rating summary */}
          <div className="bg-white rounded-2xl p-5 shadow-card flex items-center gap-6">
            <div className="text-center">
              <p className="font-display font-black text-6xl text-sw-orange">4.9</p>
              <div className="flex gap-0.5 justify-center my-1">
                {[...Array(5)].map((_,i) => <span key={i} className="text-sw-yellow text-lg">★</span>)}
              </div>
              <p className="font-body text-sw-gray text-xs">500+ ratings</p>
            </div>
            <div className="flex-1 space-y-1.5">
              {[[5,90],[4,7],[3,2],[2,0.5],[1,0.5]].map(([star, pct]) => (
                <div key={star} className="flex items-center gap-2 text-xs font-body">
                  <span className="text-sw-gray w-4">{star}</span>
                  <span className="text-sw-yellow text-xs">★</span>
                  <div className="flex-1 bg-sw-light rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-sw-yellow rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-sw-gray w-8">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {reviews.map(r => <ReviewCard key={r.id} review={r} />)}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-card p-6 sticky top-32">
            {done ? (
              <div className="text-center py-10">
                <img src="https://images.unsplash.com/photo-1601303516534-bf4c95fd45e3?w=200&q=80" alt="thanks" className="w-28 h-28 object-cover rounded-full mx-auto mb-4 opacity-80" />
                <h3 className="font-display font-black text-sw-dark text-2xl mb-2">Thank You! 🙏</h3>
                <p className="font-body text-sw-gray text-sm">Your review has been submitted. It helps us serve Meerut better!</p>
                <button onClick={() => { setDone(false); setForm({ name:'', location:'', rating:5, text:'', order:'' }); }} className="btn-primary mt-5 text-sm">Write Another Review</button>
              </div>
            ) : (
              <>
                <h2 className="font-display font-black text-sw-dark text-xl mb-5">Share Your Experience ⭐</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-body text-xs font-semibold text-sw-dark block mb-1.5">Your Name *</label>
                    <input required type="text" placeholder="e.g. Rahul Sharma" value={form.name} onChange={e => setForm({...form, name:e.target.value})} className="input-sw text-sm" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-sw-dark block mb-1.5">Location</label>
                    <input type="text" placeholder="e.g. Civil Lines, Meerut" value={form.location} onChange={e => setForm({...form, location:e.target.value})} className="input-sw text-sm" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-sw-dark block mb-1.5">What Did You Order?</label>
                    <input type="text" placeholder="e.g. Chicken Biryani + Butter Naan" value={form.order} onChange={e => setForm({...form, order:e.target.value})} className="input-sw text-sm" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-sw-dark block mb-2">Your Rating *</label>
                    <div className="flex gap-2">
                      {[1,2,3,4,5].map(s => (
                        <button type="button" key={s} onClick={() => setForm({...form, rating:s})} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)}
                          className="transition-transform hover:scale-110">
                          <FiStar size={28} className={`${(hover||form.rating) >= s ? 'fill-sw-yellow text-sw-yellow' : 'text-gray-200'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-sw-dark block mb-1.5">Your Review *</label>
                    <textarea required rows={4} placeholder="How was the food? How was delivery? What would you recommend?" value={form.text} onChange={e => setForm({...form, text:e.target.value})} className="input-sw text-sm resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
                    <FiSend size={15} /> Submit Review
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
