import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowRight, User, Heart, Sparkles } from 'lucide-react';

export const Navbar = ({ onOpenPlanner, onOpenProfile, onSelectDestination }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Explore", href: "#destinations" },
    { label: "Culture Guide", href: "#culture-guide" },
    { label: "Food & Experiences", href: "#food-experiences" },
    { label: "Smart Map", href: "#smart-map" },
    { label: "Festivals", href: "#festivals" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF9F0]/95 backdrop-blur-md shadow-warm-sm py-3 border-b border-sand-200'
          : 'bg-gradient-to-b from-indigo-950/70 via-indigo-950/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-terracotta-500 to-terracotta-600 flex items-center justify-center text-white shadow-warm-md group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className={`text-xl font-bold tracking-tight block font-editorial ${isScrolled ? 'text-charcoal-900' : 'text-white'}`}>
              Culture<span className="text-terracotta-500">Smart</span>
            </span>
            <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase block -mt-1 ${isScrolled ? 'text-charcoal-800/60' : 'text-sand-200'}`}>
              Traveller
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-terracotta-500 ${
                isScrolled ? 'text-charcoal-800' : 'text-cream-100 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3.5">
          {/* User Profile Pill */}
          <button
            onClick={onOpenProfile}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
              isScrolled
                ? 'bg-cream-100 border-sand-200 text-charcoal-800 hover:border-terracotta-500/40'
                : 'bg-indigo-950/40 border-white/20 text-white hover:bg-indigo-950/70'
            }`}
            title="View Cultural Travel Profile"
          >
            <div className="w-5 h-5 rounded-full bg-terracotta-500 text-white flex items-center justify-center text-[10px]">
              PS
            </div>
            <span>Parul Singh</span>
          </button>

          {/* Primary CTA: Plan My Trip */}
          <button
            onClick={onOpenPlanner}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs sm:text-sm font-semibold shadow-warm-md hover:shadow-warm-lg transition-all hover:scale-102"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenProfile}
            className="p-2 rounded-full text-terracotta-500"
          >
            <User className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-charcoal-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9F0] border-b border-sand-200 px-6 py-5 space-y-4 shadow-xl text-charcoal-900 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal-800 hover:text-terracotta-500 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-sand-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenProfile();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-sand-300 text-sm font-semibold"
            >
              <User className="w-4 h-4 text-terracotta-500" />
              <span>Cultural Travel Profile</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-terracotta-500 text-white text-sm font-semibold shadow-warm-md"
            >
              <span>Plan My Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
