import React, { useState } from 'react';
import { MAP_POINTS, MAP_CATEGORIES } from '../data/smartMapData.js';
import { MapPin, Compass, Landmark, Utensils, Palette, Sparkles, Users, X, ArrowRight } from 'lucide-react';

export const SmartMap = ({ onAddToTrip }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePoint, setActivePoint] = useState(MAP_POINTS[0]);

  const filteredPoints = selectedCategory === 'all'
    ? MAP_POINTS
    : MAP_POINTS.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (cat) => {
    switch(cat) {
      case 'heritage': return <Landmark className="w-3.5 h-3.5 text-terracotta-600" />;
      case 'food': return <Utensils className="w-3.5 h-3.5 text-gold-600" />;
      case 'artisans': return <Palette className="w-3.5 h-3.5 text-forest-600" />;
      case 'festivals': return <Sparkles className="w-3.5 h-3.5 text-amber-600" />;
      default: return <Compass className="w-3.5 h-3.5 text-indigo-900" />;
    }
  };

  return (
    <section id="smart-map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand-300 pb-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            Cartography of Living Traditions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight font-editorial">
            See the culture around you.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
            An interactive cultural radar across Haryana, Delhi, Rajasthan, and Uttar Pradesh. Filter by heritage, food stops, festivals, and artisan guilds.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none self-start md:self-auto">
          {MAP_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-terracotta-500 text-white shadow-sm'
                  : 'bg-white text-charcoal-800 border border-sand-300 hover:border-terracotta-500/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map Canvas & Detail Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Stylized North India Cultural Map (8 cols) */}
        <div className="lg:col-span-8 bg-sand-100 rounded-3xl p-6 sm:p-8 border-2 border-sand-300 relative shadow-warm-md min-h-[480px] overflow-hidden flex flex-col justify-between">
          {/* Subtle Region Boundaries Background Visual */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-terracotta-700 fill-current">
              <path d="M 20,40 Q 40,20 60,30 T 90,50 Q 80,80 50,85 T 15,65 Z" />
            </svg>
          </div>

          {/* Region Label Watermarks */}
          <div className="absolute top-8 left-8 text-xs font-extrabold uppercase tracking-[0.25em] text-charcoal-800/20 select-none">
            Rajasthan (West)
          </div>
          <div className="absolute top-12 left-1/2 -translate-x-1/2 text-xs font-extrabold uppercase tracking-[0.25em] text-charcoal-800/20 select-none">
            Haryana & Delhi (Heartland)
          </div>
          <div className="absolute bottom-12 right-12 text-xs font-extrabold uppercase tracking-[0.25em] text-charcoal-800/20 select-none">
            Uttar Pradesh (East)
          </div>

          {/* Interactive Pinned Markers */}
          <div className="relative w-full h-[400px]">
            {filteredPoints.map((point) => {
              const isActive = activePoint?.id === point.id;

              return (
                <div
                  key={point.id}
                  style={{ left: `${point.coords.x}%`, top: `${point.coords.y}%` }}
                  onClick={() => setActivePoint(point)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                >
                  <div className={`relative flex items-center justify-center transition-transform ${
                    isActive ? 'scale-125 z-30' : 'hover:scale-115'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-warm-md border-2 ${
                      isActive
                        ? 'bg-terracotta-500 border-white text-white'
                        : 'bg-white border-sand-300 hover:border-terracotta-500 text-charcoal-900'
                    }`}>
                      {getCategoryIcon(point.category)}
                    </div>
                  </div>

                  {/* Marker Pin Name Tooltip */}
                  <span className={`absolute left-1/2 -translate-x-1/2 -bottom-6 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap shadow-sm transition-all pointer-events-none ${
                    isActive
                      ? 'bg-charcoal-900 text-white'
                      : 'bg-white/90 text-charcoal-800 opacity-0 group-hover:opacity-100'
                  }`}>
                    {point.name.split('&')[0]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom Map Legend */}
          <div className="relative z-10 pt-4 border-t border-sand-200/80 flex items-center justify-between text-xs text-charcoal-800/70 flex-wrap gap-2">
            <span className="font-semibold text-charcoal-900">
              Showing {filteredPoints.length} cultural markers across 4 states
            </span>
            <span className="text-[11px] italic">
              Click any pin to inspect living traditions & visiting advice
            </span>
          </div>
        </div>

        {/* Floating Active Point Detail Card (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-sand-300 shadow-warm-md space-y-4">
          {activePoint ? (
            <div className="space-y-4 animate-fade-in">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img
                  src={activePoint.image}
                  alt={activePoint.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-charcoal-900 border border-sand-200 shadow-sm">
                    {activePoint.category}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-terracotta-600 uppercase tracking-wider block">
                  📍 {activePoint.city}, {activePoint.state}
                </span>
                <h3 className="text-lg font-bold font-editorial text-charcoal-900 leading-tight mt-0.5">
                  {activePoint.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
                {activePoint.description}
              </p>

              {/* Cultural insider tip callout */}
              <div className="p-3.5 bg-sand-100 rounded-xl text-xs text-charcoal-800 space-y-1 border border-sand-200">
                <strong className="text-terracotta-600 block">Cultural Etiquette Tip:</strong>
                <span>{activePoint.culturalTip}</span>
              </div>

              <button
                onClick={() => {
                  alert(`Added "${activePoint.name}" to your cultural itinerary planner!`);
                }}
                className="w-full py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <span>Add to My Trip Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="text-center py-16 text-charcoal-800/60 text-xs">
              Select a marker on the map to inspect cultural context.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
