import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import CartDrawer   from './components/CartDrawer';
import WhatsAppButton from './components/WhatsAppButton';
import Home         from './pages/Home';
import Menu         from './pages/Menu';
import About        from './pages/About';
import Feedback     from './pages/Feedback';
import Contact      from './pages/Contact';

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), [pathname]);
  return null;
};

const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 gap-5">
    <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca368f?w=300&q=70" alt="404" className="w-40 h-40 object-cover rounded-full opacity-60" />
    <h1 className="font-display font-black text-6xl text-sw-dark">404</h1>
    <p className="font-body text-sw-gray text-lg">Oops! This page doesn't exist.</p>
    <a href="/" className="btn-primary text-sm">Back to Home</a>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ScrollTop />
          <main className="flex-1">
            <Routes>
              <Route path="/"         element={<Home />} />
              <Route path="/menu"     element={<Menu />} />
              <Route path="/about"    element={<About />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact"  element={<Contact />} />
              <Route path="*"         element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
