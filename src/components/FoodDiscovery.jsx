import React, { useState } from 'react';
import { FOOD_CARDS, AI_FOOD_RECOMMENDATIONS } from '../data/foodData.js';
import { Utensils, Sparkles, MapPin, Check, ArrowRight } from 'lucide-react';

export const FoodDiscovery = () => {
  const [selectedDiet, setSelectedDiet] = useState("Pure Vegetarian");
  const [selectedSpice, setSelectedSpice] = useState("Medium");
  const [selectedOccasion, setSelectedOccasion] = useState("Wholesome Rustic Comfort");
  const [activeRecommendation, setActiveRecommendation] = useState(AI_FOOD_RECOMMENDATIONS[1]);

  const handleRecommend = (e) => {
    e.preventDefault();
    // Find closest match or fallback
    const matched = AI_FOOD_RECOMMENDATIONS.find(r => 
      r.criteria.diet === selectedDiet || r.criteria.spice === selectedSpice
    ) || AI_FOOD_RECOMMENDATIONS[0];
    setActiveRecommendation(matched);
  };

  return (
    <section id="food-experiences" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-14">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand-300 pb-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 flex items-center gap-1.5">
            <Utensils className="w-4 h-4" />
            Gastronomy of the Heartland
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight font-editorial">
            Taste the place.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
            Food in India is history served on a bronze plate. Discover five distinct culinary traditions shaped by emperors, desert survival, and pastoral bounty.
          </p>
        </div>

        <span className="text-xs font-semibold text-charcoal-800/70 bg-sand-200 px-3.5 py-1.5 rounded-full self-start md:self-auto">
          5 Iconic Culinary Traditions
        </span>
      </div>

      {/* Editorial Food Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {FOOD_CARDS.map((food, idx) => (
          <div
            key={food.id}
            className="group bg-white rounded-3xl overflow-hidden border border-sand-300 hover:border-terracotta-500/40 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Food Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-charcoal-900 shadow-sm border border-sand-200">
                    📍 {food.origin}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sand-300 block">
                    {food.diet} • {food.spiceLevel} Spice
                  </span>
                  <h3 className="text-xl font-bold font-editorial leading-tight">
                    {food.name}
                  </h3>
                </div>
              </div>

              {/* Story */}
              <div className="px-6 space-y-3">
                <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                  {food.culturalStory}
                </p>

                {/* Signature items */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-800/60 block mb-1.5">
                    What's on the Platter:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {food.dishes.map((d, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-sand-100 text-charcoal-800 font-medium border border-sand-200">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Best place to try */}
            <div className="p-6 pt-4 border-t border-sand-200 text-xs text-charcoal-800/70">
              <strong className="text-terracotta-600 block mb-0.5">Where to Experience:</strong>
              <span>{food.bestPlaceToTry}</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Food Recommender Widget */}
      <div className="bg-[#FFFDF8] border-2 border-sand-300 rounded-3xl p-6 sm:p-10 shadow-warm-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sand-200 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-terracotta-500/15 text-terracotta-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 text-gold-500" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-editorial text-charcoal-900">
                “What should I try?” → AI Cultural Food Matcher
              </h3>
              <p className="text-xs text-charcoal-800/70">
                Get a personalized North Indian culinary recommendation based on your palate
              </p>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <form onSubmit={handleRecommend} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 block mb-1.5">
              Dietary Preference
            </label>
            <select
              value={selectedDiet}
              onChange={(e) => setSelectedDiet(e.target.value)}
              className="w-full bg-white border border-sand-300 rounded-xl px-3 py-2 text-xs font-semibold text-charcoal-900 focus:outline-none focus:border-terracotta-500"
            >
              <option value="Pure Vegetarian">Pure Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegetarian">Vegetarian (Eggs ok)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 block mb-1.5">
              Spice Tolerance
            </label>
            <select
              value={selectedSpice}
              onChange={(e) => setSelectedSpice(e.target.value)}
              className="w-full bg-white border border-sand-300 rounded-xl px-3 py-2 text-xs font-semibold text-charcoal-900 focus:outline-none focus:border-terracotta-500"
            >
              <option value="Mild">Mild (Subtle herbs & cream)</option>
              <option value="Medium">Medium (Balanced zest)</option>
              <option value="High">High (Authentic Indian heat)</option>
              <option value="Aromatic & Subtle">Aromatic & Subtle (Nawabi saffron)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 block mb-1.5">
              Dining Occasion
            </label>
            <select
              value={selectedOccasion}
              onChange={(e) => setSelectedOccasion(e.target.value)}
              className="w-full bg-white border border-sand-300 rounded-xl px-3 py-2 text-xs font-semibold text-charcoal-900 focus:outline-none focus:border-terracotta-500"
            >
              <option value="Wholesome Rustic Comfort">Wholesome Rustic Comfort</option>
              <option value="Lavish Feast">Lavish Feast</option>
              <option value="Quick Street Snack">Quick Street Snack</option>
              <option value="Sweet Dessert">Sweet Dessert</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full h-[38px] rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-warm-sm transition-all"
          >
            <span>Recommend Dish</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
          </button>
        </form>

        {/* Matched Recommendation Output */}
        {activeRecommendation && (
          <div className="p-4 rounded-2xl bg-sand-100 border border-sand-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta-600">
                AI Suggested Pairing • {activeRecommendation.location}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-charcoal-900 font-editorial">
                {activeRecommendation.dish}
              </h4>
              <p className="text-xs text-charcoal-800 leading-relaxed max-w-2xl">
                {activeRecommendation.why}
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-sand-300 text-xs font-bold text-terracotta-600 shadow-sm whitespace-nowrap self-start sm:self-auto">
              Must-Taste Recommendation
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
