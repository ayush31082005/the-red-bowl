import React, { useState } from 'react';
import { FiStar, FiClock, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

const MenuCard = ({ item }) => {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const [imgErr, setImgErr] = useState(false);
  const cartItem = cartItems.find(i => i.id === item.id);
  const qty      = cartItem?.quantity || 0;
  const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : null;

  return (
    <div className="card-hover flex flex-col group">
      {/* Image */}
      <div className="relative overflow-hidden h-44 sm:h-48">
        <img
          src={imgErr ? 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80' : item.image}
          alt={item.name}
          onError={() => setImgErr(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Badge */}
        {item.badge && (
          <span className={`absolute top-2.5 left-2.5 ${item.badgeColor || 'bg-sw-orange'} text-white text-[11px] font-display font-bold px-2.5 py-1 rounded-full shadow-md`}>
            {item.badge}
          </span>
        )}
        {/* Discount */}
        {discount && (
          <span className="absolute top-2.5 right-2.5 bg-sw-green text-white text-[11px] font-display font-bold px-2 py-0.5 rounded-md shadow">
            {discount}% OFF
          </span>
        )}
        {/* Veg indicator */}
        <div className={`absolute bottom-2.5 left-2.5 w-4.5 h-4.5 bg-white rounded-sm flex items-center justify-center shadow ${item.isVeg ? 'border-2 border-sw-green' : 'border-2 border-sw-red'}`}>
          <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-sw-green' : 'bg-sw-red'}`} />
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        {/* Name + rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-sw-dark text-base leading-snug flex-1">{item.name}</h3>
          <div className="flex items-center gap-1 bg-sw-green text-white text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0">
            <FiStar size={10} className="fill-white" />
            {item.rating}
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-sw-gray font-body">
          <span className="flex items-center gap-1"><FiClock size={11} /> {item.prepTime}</span>
          <span>{item.reviews} reviews</span>
        </div>

        {/* Description */}
        <p className="font-body text-sw-gray text-xs leading-relaxed line-clamp-2 flex-1">{item.description}</p>

        {/* Tags */}
        {item.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.slice(0,2).map(t => (
              <span key={t} className="tag bg-sw-light text-sw-gray">{t}</span>
            ))}
          </div>
        )}

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <div>
            <span className="font-display font-black text-sw-dark text-lg">{formatPrice(item.price)}</span>
            {item.originalPrice && (
              <span className="font-body text-sw-gray text-xs line-through ml-1.5">{formatPrice(item.originalPrice)}</span>
            )}
          </div>

          {qty === 0 ? (
            <button
              onClick={() => addToCart(item)}
              className="flex items-center gap-1.5 bg-white border-2 border-sw-orange text-sw-orange font-display font-bold text-sm px-4 py-1.5 rounded-lg hover:bg-sw-orange hover:text-white transition-all duration-200 active:scale-95"
            >
              <FiPlus size={15} /> ADD
            </button>
          ) : (
            <div className="flex items-center gap-0 border-2 border-sw-orange rounded-lg overflow-hidden">
              <button onClick={() => updateQuantity(item.id, qty - 1)}
                className="w-8 h-8 bg-sw-orange text-white flex items-center justify-center hover:bg-sw-orangeD transition-colors font-bold">
                <FiMinus size={13} />
              </button>
              <span className="w-8 text-center font-display font-bold text-sw-orange text-sm">{qty}</span>
              <button onClick={() => addToCart(item)}
                className="w-8 h-8 bg-sw-orange text-white flex items-center justify-center hover:bg-sw-orangeD transition-colors font-bold">
                <FiPlus size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
