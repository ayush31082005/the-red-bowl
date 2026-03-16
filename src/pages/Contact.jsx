import React, { useState } from 'react';
import { FiPhone, FiMapPin, FiMail, FiSend, FiClock, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name:'', phone:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const msg = `Hello The Red Bowl!\n\nName: ${form.name}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;
    window.open(`https://wa.me/917037778881?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  const infos = [
    { icon: <FiMapPin size={20}/>, title:"Address", content:"Shop No. 4, Vardhman Plaza, Garh Rd, Kalyan Nagar, Meerut, Uttar Pradesh 250001", color:"bg-red-50 text-sw-red" },
    { icon: <FiPhone size={20}/>, title:"Phone", content:"070377 78881", href:"tel:07037778881", color:"bg-blue-50 text-blue-600" },
    { icon: <FiMail size={20}/>, title:"Email", content:"hello@theredbowl.in", href:"mailto:hello@theredbowl.in", color:"bg-green-50 text-sw-green" },
    { icon: <FiClock size={20}/>, title:"Hours", content:"Daily — 11:00 AM to 11:00 PM (All 7 days)", color:"bg-orange-50 text-sw-orange" },
  ];

  return (
    <div className="min-h-screen bg-sw-light">
      {/* Header */}
      <div className="relative h-48 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85" alt="contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sw-dark/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl">Contact Us</h1>
          <p className="font-body text-white/70 text-sm mt-2">Orders, feedback or just a hello — we're always here</p>
        </div>
      </div>

      <div className="container-sw py-10 grid lg:grid-cols-2 gap-8">
        {/* Info side */}
        <div className="space-y-5">
          <h2 className="font-display font-black text-sw-dark text-2xl">Get In Touch</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {infos.map((info, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-card flex items-start gap-4">
                <div className={`${info.color} p-2.5 rounded-xl flex-shrink-0`}>{info.icon}</div>
                <div>
                  <p className="font-display font-bold text-sw-dark text-sm mb-0.5">{info.title}</p>
                  {info.href ? (
                    <a href={info.href} className="font-body text-sw-gray text-xs hover:text-sw-orange transition-colors leading-relaxed">{info.content}</a>
                  ) : (
                    <p className="font-body text-sw-gray text-xs leading-relaxed">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map visual */}
          <div className="relative h-52 rounded-2xl overflow-hidden shadow-card">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-sw-orange/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <a href="https://maps.google.com/?q=Vardhman+Plaza+Garh+Road+Kalyan+Nagar+Meerut" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-sw-dark font-display font-bold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm">
                <FiMapPin className="text-sw-red" size={16} /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="bg-white rounded-2xl p-5 shadow-card">
            <p className="font-display font-bold text-sw-dark mb-4">Follow Us</p>
            <div className="flex gap-3">
              {[
                { icon:<FaWhatsapp size={18}/>, label:"WhatsApp", color:"bg-green-500", href:"https://wa.me/917037778881" },
                { icon:<FaInstagram size={18}/>, label:"Instagram", color:"bg-gradient-to-r from-pink-500 to-orange-400", href:"#" },
                { icon:<FaFacebook size={18}/>, label:"Facebook", color:"bg-blue-600", href:"#" },
              ].map((s,i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`${s.color} text-white flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-bold text-xs hover:opacity-90 transition-opacity`}>
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-card p-6 h-fit">
          {sent ? (
            <div className="text-center py-10">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80" alt="sent" className="w-28 h-28 object-cover rounded-full mx-auto mb-4" />
              <FiCheckCircle size={40} className="text-sw-green mx-auto mb-3" />
              <h3 className="font-display font-black text-sw-dark text-2xl mb-2">Message Sent!</h3>
              <p className="font-body text-sw-gray text-sm">Your message was sent to our WhatsApp. We'll reply within 2 minutes.</p>
              <button onClick={() => { setSent(false); setForm({ name:'', phone:'', subject:'', message:'' }); }} className="btn-primary mt-5 text-sm">Send Another</button>
            </div>
          ) : (
            <>
              <h2 className="font-display font-black text-sw-dark text-xl mb-5">Send Us a Message 💬</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-semibold text-sw-dark block mb-1.5">Full Name *</label>
                    <input required type="text" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} className="input-sw text-sm" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-sw-dark block mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="10-digit number" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} className="input-sw text-sm" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-sw-dark block mb-1.5">Subject</label>
                  <select value={form.subject} onChange={e => setForm({...form, subject:e.target.value})} className="input-sw text-sm">
                    <option value="">Select a subject</option>
                    <option>Place an Order</option>
                    <option>Order Inquiry</option>
                    <option>Feedback / Complaint</option>
                    <option>Partnership / Bulk Order</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-sw-dark block mb-1.5">Message *</label>
                  <textarea required rows={5} placeholder="Type your message here..." value={form.message} onChange={e => setForm({...form, message:e.target.value})} className="input-sw text-sm resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
                  <FaWhatsapp size={18} /> Send via WhatsApp
                </button>
                <p className="font-body text-sw-gray text-xs text-center">This message will be sent directly to our WhatsApp number.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
