import React from 'react';
import HeroSection          from '../sections/HeroSection';
import OffersBanner         from '../sections/OffersBanner';
import CategoryShowcase     from '../sections/CategoryShowcase';
import FeaturedDishes       from '../sections/FeaturedDishes';
import HowItWorks           from '../sections/HowItWorks';
import LoyaltySection       from '../sections/LoyaltySection';
import TestimonialsSection  from '../sections/TestimonialsSection';
import CtaSection           from '../sections/CtaSection';

const Home = () => (
  <>
    <HeroSection />
    <OffersBanner />
    <CategoryShowcase />
    <FeaturedDishes />
    <HowItWorks />
    <LoyaltySection />
    <TestimonialsSection />
    <CtaSection />
  </>
);

export default Home;
