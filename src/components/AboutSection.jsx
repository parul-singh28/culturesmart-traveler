import React from 'react';
import { Compass, Sparkles, Heart, Shield, ArrowRight } from 'lucide-react';

export const AboutSection = ({ onStartPlanning }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-sand-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Text (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sand-200 border border-sand-300">
            <Compass className="w-3.5 h-3.5" />
            Our Guiding Manifesto
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight font-editorial leading-[1.15]">
            Travel shouldn't just take you somewhere. <br className="hidden sm:inline" />
            <span className="italic text-terracotta-600 font-normal">
              It should help you understand where you are.
            </span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-charcoal-800/85 leading-relaxed">
            <p>
              Traditional travel platforms focus overwhelmingly on flight fares, hotel ratings, and rushing tourists through checklist monuments. But when you land in the ancient gullies of Varanasi or the desert hamlets of Shekhawati, the questions that actually define your journey are cultural:
            </p>
            <p className="italic font-medium pl-4 border-l-2 border-terracotta-500 text-charcoal-900">
              “How do I enter this sanctum respectfully? Why do locals insist on serving fresh white butter with bajra? What does 'Khamma Ghani' mean to a Rajput host?”
            </p>
            <p>
              <strong>CultureSmart Traveller</strong> was born to bridge this gap. We combine intelligent itinerary architecture with deep ethnographic insight across <strong>Haryana, Delhi, Rajasthan, and Uttar Pradesh</strong>—ensuring you travel as an honored guest rather than an intrusive spectator.
            </p>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={onStartPlanning}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs sm:text-sm shadow-warm-md hover:shadow-warm-lg transition-all"
            >
              <span>Build Your Cultural Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Feature Card Comparison (5 cols) */}
        <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-sand-300 shadow-warm-md space-y-6">
          <h3 className="text-xl font-bold font-editorial text-charcoal-900 border-b border-sand-200 pb-3">
            The CultureSmart Difference
          </h3>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-sand-100 border border-sand-200 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-800/60 block">
                Traditional Tourism Apps
              </span>
              <ul className="space-y-1 text-charcoal-800">
                <li>✕ Generic checklist attractions</li>
                <li>✕ Commercialized commission traps</li>
                <li>✕ Zero cultural or religious etiquette guidance</li>
                <li>✕ Cookie-cutter itineraries</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-forest-500/10 border border-forest-500/25 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700 block">
                CultureSmart Traveller
              </span>
              <ul className="space-y-1 text-charcoal-900 font-medium">
                <li>✓ Living traditions & generational artisan encounters</li>
                <li>✓ Explicit DOs, DON'Ts, and sanctum dress etiquette</li>
                <li>✓ Bespoke AI itineraries matched to your palate & pace</li>
                <li>✓ Direct support of local rural & weaving communities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
