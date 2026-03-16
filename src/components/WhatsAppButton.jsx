import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a href="https://wa.me/917037778881?text=Hello%20The%20Red%20Bowl!%20I%20want%20to%20place%20an%20order."
    target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Order"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group">
    <FaWhatsapp size={28} color="white" />
    <span className="absolute right-16 bg-sw-dark text-white text-xs font-body font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
      Order on WhatsApp
    </span>
    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
  </a>
);

export default WhatsAppButton;
