import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar, Users, Compass } from 'lucide-react';

export const HeroSection = ({ onQuickPlan, onExploreClick }) => {
  const [selectedDestination, setSelectedDestination] = useState("Rajasthan");
  const [selectedDays, setSelectedDays] = useState(5);
  const [selectedTravellers, setSelectedTravellers] = useState("Couple");

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuickPlan({
      destination: selectedDestination,
      duration: selectedDays,
      companions: selectedTravellers
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic Background Image with Warm Vignette & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85"
          alt="Majestic heritage architecture of Rajasthan at warm sunset"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Subtle Dark & Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/45 to-indigo-950/50" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sand-200 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Intelligent Cultural Travel Companion</span>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-5 font-editorial max-w-4xl drop-shadow-sm">
          Travel deeper. <br className="hidden sm:inline" />
          <span className="italic font-normal text-sand-200">Understand the culture.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-cream-100/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          Discover places, people, traditions, food, and experiences across <strong>Haryana, Delhi, Rajasthan, and Uttar Pradesh</strong> — respectfully.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#trip-planner"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-sm sm:text-base shadow-warm-lg hover:shadow-xl transition-all hover:scale-102"
          >
            <span>Plan My Journey</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all"
          >
            <span>Explore Destinations</span>
            <Compass className="w-4 h-4 text-sand-300" />
          </button>
        </div>

        {/* Floating AI Trip Quick-Planner Box */}
        <div className="w-full max-w-3xl bg-[#FFF9F0]/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-2xl border border-sand-300 text-left">
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-sand-200">
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-500" />
              Instant AI Cultural Route Generator
            </span>
            <span className="text-[11px] font-semibold text-charcoal-800/60 hidden sm:inline">
              Haryana • Delhi • Rajasthan • Uttar Pradesh
            </span>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {/* Destination */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-800/70 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-terracotta-500" />
                Where to?
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-white border border-sand-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:border-terracotta-500"
              >
                <option value="Rajasthan">📍 Rajasthan</option>
                <option value="Delhi">📍 Delhi</option>
                <option value="Haryana">📍 Haryana</option>
                <option value="Uttar Pradesh">📍 Uttar Pradesh</option>
              </select>
            </div>

            {/* Duration */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-800/70 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-terracotta-500" />
                Duration
              </label>
              <select
                value={selectedDays}
                onChange={(e) => setSelectedDays(Number(e.target.value))}
                className="w-full bg-white border border-sand-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:border-terracotta-500"
              >
                <option value={3}>📅 3 Days (Weekend)</option>
                <option value={5}>📅 5 Days (Standard)</option>
                <option value={7}>📅 7 Days (Deep Dive)</option>
                <option value={10}>📅 10 Days (Grand Tour)</option>
              </select>
            </div>

            {/* Travellers */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal-800/70 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-terracotta-500" />
                Travellers
              </label>
              <select
                value={selectedTravellers}
                onChange={(e) => setSelectedTravellers(e.target.value)}
                className="w-full bg-white border border-sand-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-charcoal-900 focus:outline-none focus:border-terracotta-500"
              >
                <option value="Solo">👤 Solo</option>
                <option value="Couple">👥 Couple</option>
                <option value="Friends">👫 Friends</option>
                <option value="Family">👨‍👩‍👧‍👦 Family</option>
              </select>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-[38px] rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-warm-md hover:shadow-warm-lg transition-all"
              >
                <span>Build My Trip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
