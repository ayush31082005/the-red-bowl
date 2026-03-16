import React from 'react';
import { FiX, FiShoppingBag, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  return (
    <div className="flex items-center gap-3 py-3.5 border-b border-gray-100 last:border-0">
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-sw-light">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-bold text-sw-dark text-sm truncate">{item.name}</p>
        <p className="font-body text-sw-orange text-sm font-bold mt-0.5">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center gap-0 border-2 border-sw-orange rounded-lg overflow-hidden flex-shrink-0">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-7 h-7 bg-sw-orange text-white flex items-center justify-center hover:bg-sw-orangeD">
          <FiMinus size={11} />
        </button>
        <span className="w-7 text-center font-display font-bold text-sw-orange text-xs">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-7 h-7 bg-sw-orange text-white flex items-center justify-center hover:bg-sw-orangeD">
          <FiPlus size={11} />
        </button>
      </div>
    </div>
  );
};

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, totalItems, totalPrice, clearCart } = useCart();
  const delivery  = totalPrice > 350 ? 0 : 49;
  const discount  = totalPrice > 500 ? 50 : 0;
  const total     = totalPrice + delivery - discount;

  const whatsappMsg = () => {
    let m = '🍽️ *New Order — The Red Bowl*\n\n';
    cartItems.forEach(i => { m += `• ${i.name} ×${i.quantity} = ${formatPrice(i.price * i.quantity)}\n`; });
    m += `\n───────────────\n`;
    m += `Subtotal: ${formatPrice(totalPrice)}\n`;
    m += `Delivery: ${delivery === 0 ? 'FREE 🎉' : formatPrice(delivery)}\n`;
    if (discount) m += `Discount: -${formatPrice(discount)}\n`;
    m += `*Total: ${formatPrice(total)}*\n\n`;
    m += `📍 Delivery Address: `;
    return encodeURIComponent(m);
  };

  return (
    <>
      {isCartOpen && <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />}

      <div className={`fixed right-0 top-0 h-full w-full max-w-[420px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <FiShoppingBag size={20} className="text-sw-orange" />
            <span className="font-display font-black text-sw-dark text-xl">Your Cart</span>
            {totalItems > 0 && <span className="bg-sw-orange text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{totalItems}</span>}
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-1.5 hover:bg-sw-light rounded-lg transition-colors text-sw-gray hover:text-sw-dark">
            <FiX size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
              <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&q=80" alt="empty" className="w-36 h-36 object-cover rounded-full opacity-50" />
              <div>
                <p className="font-display font-black text-sw-dark text-xl mb-1">Your cart is empty!</p>
                <p className="font-body text-sw-gray text-sm">Add delicious items to get started.</p>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="btn-primary mt-2">Browse Menu</button>
            </div>
          ) : (
            <>
              {cartItems.map(i => <CartItem key={i.id} item={i} />)}

              {/* Offers */}
              <div className="mt-3 mb-1">
                {totalPrice < 350 ? (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs font-body">
                    🚴 Add <strong className="text-sw-orange">{formatPrice(350 - totalPrice)}</strong> more for <strong className="text-sw-green">FREE delivery</strong>!
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-xs font-body text-sw-green font-bold">
                    ✅ You've unlocked FREE delivery!
                  </div>
                )}
                {totalPrice >= 500 && (
                  <div className="bg-orange-50 border border-sw-orange/30 rounded-xl p-3 text-xs font-body text-sw-orange font-bold mt-2">
                    🎉 ₹50 discount applied on orders above ₹500!
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3 bg-white">
            <div className="space-y-2 text-sm font-body">
              <div className="flex justify-between text-sw-gray"><span>Item Total</span><span>{formatPrice(totalPrice)}</span></div>
              <div className="flex justify-between text-sw-gray">
                <span>Delivery Charge</span>
                <span className={delivery === 0 ? 'text-sw-green font-bold' : ''}>{delivery === 0 ? 'FREE 🎉' : formatPrice(delivery)}</span>
              </div>
              {discount > 0 && <div className="flex justify-between text-sw-green font-bold"><span>Discount</span><span>-{formatPrice(discount)}</span></div>}
              <div className="flex justify-between font-display font-black text-sw-dark text-base pt-2 border-t border-gray-100">
                <span>To Pay</span>
                <span className="text-sw-orange">{formatPrice(total)}</span>
              </div>
            </div>

            <a href={`https://wa.me/917037778881?text=${whatsappMsg()}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-display font-bold py-3.5 rounded-xl transition-colors">
              <FaWhatsapp size={22} /> Place Order on WhatsApp
            </a>
            <button onClick={clearCart} className="w-full text-xs text-sw-gray hover:text-sw-red transition-colors font-body py-0.5">
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
