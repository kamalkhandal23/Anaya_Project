import React, { useState } from "react";

import Slider from "react-slick";
import { motion } from "motion/react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts.tsx";
import { Link } from "react-router-dom";
import OfferBar from "./components/layout/OfferBar.tsx";
import Header from "./components/layout/Header";

import HeroCarousel from "./components/home/HeroCarousel";
import BrandPhilosophy from "./components/home/BrandPhilosophy";
import Collections from "./components/home/Collections";  
import VideoShowcase from "./components/home/VideoShowcase";
import {
  Menu,
  ShoppingBag,
  User,
  Star,
  Truck,
  Shield,
  Award,
  Sparkles,
  ChevronDown,
  Play,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import BestSellers from "./components/home/BestSellers";
import FragranceNotes from "./components/home/FragranceNotes";
import OccasionFragrances from "./components/home/OccasionFragrances";
import WhyChooseUs from "./components/home/WhyChooseUs";
import LifestyleImage from "./components/home/LifestyleImage";
import BrandStory from "./components/home/BrandStory";
import Testimonials from "./components/home/Testimonials.tsx";
import FAQSection from "./components/home/FAQSection.tsx";
import NewsletterSection from "./components/home/NewsletterSection.tsx";
import Footer from "./components/layout/Footer.tsx";
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hero carousel settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  // Product carousel settings
  const productSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Collection carousel settings
  const collectionSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            className="min-h-screen bg-[#FAFAF8]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <div
              className="min-h-screen bg-[#FAFAF8]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <OfferBar />
              <Header />
              <HeroCarousel />
              

              {/* Hero Carousel Section */}
             

              {/* Brand Philosophy Section */}
              <BrandPhilosophy />

              {/* Collections Carousel Section */}
              <Collections />

              {/* Best Sellers Carousel with 3D Effect */}
              <BestSellers />

              {/* Fragrance Notes Section */}
              <FragranceNotes />

              {/* Occasion-Based Fragrances Section */}
              <OccasionFragrances />
              {/* Video Showcase Section */}
              <VideoShowcase />

              {/* Why Choose Us */}
              <WhyChooseUs />

              {/* Lifestyle Image Section */}
              <LifestyleImage />

              {/* Brand Story */}
              <BrandStory />

              {/* Testimonials */}
              <Testimonials />

              {/* FAQ Section */}
              <FAQSection />

              {/* Newsletter */}
              <NewsletterSection />

              {/* Footer */}
              <Footer />
            </div>
          </div>
        }
      />

      <Route path="/products" element={<AllProducts />} />
    </Routes>
  );
}