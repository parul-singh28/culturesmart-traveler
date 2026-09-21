import React from 'react';
import { X, MapPin, Calendar, Utensils, Sparkles, Shield, Heart, ArrowRight } from 'lucide-react';

export const DestinationDetailModal = ({ destination, isOpen, onClose, onPlanForThisState }) => {
  if (!isOpen || !destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-950/80 backdrop-blur-md no-print animate-fade-in overflow-y-auto">
      <div className="bg-[#FFF9F0] border border-sand-300 rounded-3xl max-w-4xl w-full my-auto shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-20 bg-[#FFF9F0]/95 backdrop-blur-md px-6 py-4 border-b border-sand-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-charcoal-800">
              Cultural Monograph • {destination.state}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-sand-200 text-charcoal-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Monograph Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Banner */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-terracotta-500/90 text-white backdrop-blur-md">
                {destination.capital} (Capital)
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-editorial tracking-tight">
                {destination.name}
              </h2>
              <p className="text-sm sm:text-base text-sand-200 italic">
                "{destination.tagline}"
              </p>
            </div>
          </div>

          {/* Greeting Callout */}
          <div className="p-4 rounded-2xl bg-sand-200/80 border border-sand-300 flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta-600 block">
                Regional Reverent Greeting
              </span>
              <p className="text-sm sm:text-base font-bold text-charcoal-900">
                {destination.greeting}
              </p>
            </div>
            <div className="text-xs font-semibold text-charcoal-800/70 bg-white px-3 py-1.5 rounded-xl border border-sand-300">
              Best Season: {destination.bestTime.split('(')[0]}
            </div>
          </div>

          {/* Cultural Overview Narrative */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold font-editorial text-charcoal-900">
              The Living Spirit of {destination.name}
            </h3>
            <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed">
              {destination.culturalDescription}
            </p>
            <blockquote className="p-4 border-l-4 border-terracotta-500 bg-sand-100 rounded-r-xl italic text-sm text-charcoal-900 font-medium">
              "{destination.featuredQuote}"
            </blockquote>
          </div>

          {/* Grid of Key Dimensions: Food, Crafts, Etiquette */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Signature Foods */}
            <div className="p-5 rounded-2xl bg-white border border-sand-300 space-y-3">
              <h4 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-terracotta-500" />
                Signature Culinary Heritage
              </h4>
              <div className="flex flex-wrap gap-2">
                {destination.signatureFoods.map((dish, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-sand-100 text-charcoal-800 font-medium border border-sand-200">
                    {dish}
                  </span>
                ))}
              </div>
            </div>

            {/* Crafts Heritage */}
            <div className="p-5 rounded-2xl bg-white border border-sand-300 space-y-3">
              <h4 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-500" />
                Artisan & Craft Guilds
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                {destination.craftHeritage}
              </p>
            </div>
          </div>

          {/* Essential Cultural Etiquette */}
          <div className="p-5 rounded-2xl bg-forest-500/10 border border-forest-500/30 space-y-3">
            <h4 className="text-base font-bold text-forest-700 flex items-center gap-2">
              <Shield className="w-4 h-4 text-forest-600" />
              Respectful Etiquette Guidelines for {destination.name}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-800">
              {destination.etiquetteTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-forest-600 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-[#FFF9F0] border-t border-sand-300 px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-charcoal-800 hover:bg-sand-200 transition-colors"
          >
            Close Monograph
          </button>
          <button
            onClick={() => {
              onClose();
              onPlanForThisState(destination.name);
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs sm:text-sm font-semibold shadow-warm-md hover:shadow-warm-lg transition-all"
          >
            <span>Plan a {destination.name} Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
