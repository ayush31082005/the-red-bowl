import React from 'react';
import { FiStar } from 'react-icons/fi';

const ReviewCard = ({ review }) => (
  <div className="card p-5 flex flex-col gap-3">
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sw-orange flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0">
          {review.avatar}
        </div>
        <div>
          <p className="font-display font-bold text-sw-dark text-sm">{review.name}</p>
          <p className="font-body text-sw-gray text-xs">{review.location}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-sw-green text-white text-xs font-bold px-2 py-0.5 rounded flex-shrink-0">
        <FiStar size={10} className="fill-white" /> {review.rating}.0
      </div>
    </div>

    <p className="font-body text-sw-gray text-sm leading-relaxed">"{review.text}"</p>

    {review.order && (
      <div className="bg-sw-light rounded-lg px-3 py-2 text-xs font-body text-sw-gray">
        🍽️ Ordered: <span className="font-semibold text-sw-dark">{review.order}</span>
      </div>
    )}

    <div className="flex items-center justify-between mt-auto">
      <span className="text-xs text-sw-gray font-body">{review.date}</span>
      {review.verified && (
        <span className="text-xs text-sw-green font-body font-semibold flex items-center gap-1">✓ Verified Order</span>
      )}
    </div>
  </div>
);

export default ReviewCard;
