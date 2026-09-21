import React, { useState } from 'react';
import { generateCulturalItinerary } from '../utils/aiPlannerEngine.js';
import { Sparkles, Calendar, MapPin, Users, Wallet, Compass, Clock, Check, Share2, Download, Heart, ArrowRight, RotateCcw } from 'lucide-react';

export const AITripPlanner = ({ presetConfig, onSaveItinerary }) => {
  const [destination, setDestination] = useState(presetConfig?.destination || "Rajasthan");
  const [duration, setDuration] = useState(presetConfig?.duration || 5);
  const [budget, setBudget] = useState("Cultural Midscale");
  const [travelStyle, setTravelStyle] = useState("Heritage");
  const [companions, setCompanions] = useState(presetConfig?.companions || "Couple");
  const [selectedInterests, setSelectedInterests] = useState(["Heritage", "Food", "Art", "Local traditions"]);
  
  const [generatedItinerary, setGeneratedItinerary] = useState(null);
  const [activeDayTab, setActiveDayTab] = useState(1);
  const [isSaved, setIsSaved] = useState(false);

  const travelStyles = ["Heritage", "Food", "Spiritual", "Adventure", "Local experiences", "Photography", "Relaxation"];
  const allInterests = ["Festivals", "Food", "Architecture", "Music", "Art", "History", "Local traditions"];
  const companionOptions = ["Solo", "Couple", "Friends", "Family"];
  const budgetTiers = ["Budget Backpacker", "Cultural Midscale", "Heritage Luxury"];

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter(i => i !== interest));
      }
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleGenerate = (e) => {
    if (e) e.preventDefault();
    const result = generateCulturalItinerary({
      destination,
      duration,
      budget,
      travelStyle,
      companions,
      culturalInterests: selectedInterests
    });
    setGeneratedItinerary(result);
    setActiveDayTab(1);
    setIsSaved(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: generatedItinerary.itineraryTitle,
        text: generatedItinerary.summary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Itinerary link copied to clipboard!");
    }
  };

  return (
    <section id="trip-planner" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sand-200 border border-sand-300">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          Intelligent Itinerary Architecture
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight font-editorial">
          Tell us how you travel. We’ll build the journey.
        </h2>
        <p className="text-sm sm:text-base text-charcoal-800/80 leading-relaxed">
          Crafting culturally conscious daily schedules with hand-picked artisan encounters, heritage stays, and dining etiquette.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand-300 shadow-warm-md">
        <form onSubmit={handleGenerate} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Destination */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-terracotta-500" />
                Where are you going?
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#FFF9F0] border border-sand-300 rounded-2xl p-3 text-sm font-semibold text-charcoal-900 focus:outline-none focus:border-terracotta-500"
              >
                <option value="Rajasthan">Rajasthan (Jaipur, Jodhpur, Udaipur, Pushkar)</option>
                <option value="Delhi">Delhi (Old Delhi, Nizamuddin, Mehrauli)</option>
                <option value="Haryana">Haryana (Kurukshetra, Surajkund, Village Akharas)</option>
                <option value="Uttar Pradesh">Uttar Pradesh (Varanasi, Lucknow, Agra, Mathura)</option>
              </select>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-terracotta-500" />
                Travel Duration
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 7, 10].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setDuration(days)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      duration === days
                        ? 'bg-terracotta-500 text-white shadow-sm'
                        : 'bg-[#FFF9F0] text-charcoal-800 border border-sand-300 hover:border-terracotta-500/40'
                    }`}
                  >
                    {days} Days
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
                <Wallet className="w-4 h-4 text-terracotta-500" />
                Budget Tier
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-[#FFF9F0] border border-sand-300 rounded-2xl p-3 text-sm font-semibold text-charcoal-900 focus:outline-none focus:border-terracotta-500"
              >
                {budgetTiers.map((tier) => (
                  <option key={tier} value={tier}>{tier}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Travel Style Pills */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-terracotta-500" />
              Primary Travel Style
            </label>
            <div className="flex flex-wrap gap-2">
              {travelStyles.map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => setTravelStyle(style)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    travelStyle === style
                      ? 'bg-indigo-950 text-sand-200 font-semibold shadow-sm'
                      : 'bg-[#FFF9F0] text-charcoal-800 border border-sand-300 hover:border-indigo-950/30'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Travelling With */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-terracotta-500" />
              Travelling With
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {companionOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setCompanions(opt)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                    companions === opt
                      ? 'bg-terracotta-500/15 border-2 border-terracotta-500 text-terracotta-700'
                      : 'bg-[#FFF9F0] text-charcoal-800 border border-sand-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Cultural Interests Checkbox Grid */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-500" />
              Cultural Interests (Select what matters to you)
            </label>
            <div className="flex flex-wrap gap-2">
              {allInterests.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-forest-500 text-white font-semibold'
                        : 'bg-[#FFF9F0] text-charcoal-800 border border-sand-300 hover:border-forest-500/40'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3" />}
                    <span>{interest}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-4 border-t border-sand-200 flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white text-base font-bold shadow-warm-lg hover:shadow-xl transition-all hover:scale-102 flex items-center gap-2"
            >
              <span>Create My Cultural Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Generated Itinerary Section */}
      {generatedItinerary && (
        <div className="bg-[#FFF9F0] border-2 border-sand-300 rounded-3xl p-6 sm:p-10 shadow-warm-lg space-y-8 animate-fade-in">
          {/* Itinerary Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sand-300 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
                Custom Generated Cultural Route
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-editorial text-charcoal-900">
                {generatedItinerary.itineraryTitle}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-800/80 max-w-2xl">
                {generatedItinerary.summary}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-2 flex-wrap self-start md:self-auto">
              <button
                onClick={() => {
                  setIsSaved(!isSaved);
                  if (onSaveItinerary) onSaveItinerary(generatedItinerary);
                }}
                className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isSaved
                    ? 'bg-rose-50 border-rose-300 text-rose-600'
                    : 'bg-white border-sand-300 text-charcoal-800 hover:border-terracotta-500'
                }`}
                title="Save Itinerary"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{isSaved ? "Saved" : "Save"}</span>
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-white border border-sand-300 text-charcoal-800 hover:border-terracotta-500 text-xs font-semibold flex items-center gap-1.5 transition-all"
                title="Share Itinerary"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>

              <button
                onClick={handlePrint}
                className="p-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                title="Download / Print Itinerary"
              >
                <Download className="w-4 h-4" />
                <span>Export Itinerary</span>
              </button>
            </div>
          </div>

          {/* Quick Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-white rounded-xl border border-sand-300 text-xs">
              <span className="text-charcoal-800/60 block">Duration</span>
              <strong className="text-charcoal-900 text-sm">{generatedItinerary.durationDays} Days</strong>
            </div>
            <div className="p-3 bg-white rounded-xl border border-sand-300 text-xs">
              <span className="text-charcoal-800/60 block">Traveller Type</span>
              <strong className="text-charcoal-900 text-sm">{generatedItinerary.companions}</strong>
            </div>
            <div className="p-3 bg-white rounded-xl border border-sand-300 text-xs">
              <span className="text-charcoal-800/60 block">Budget Pace</span>
              <strong className="text-charcoal-900 text-sm">{generatedItinerary.budget}</strong>
            </div>
            <div className="p-3 bg-white rounded-xl border border-sand-300 text-xs">
              <span className="text-charcoal-800/60 block">Est. Living Budget</span>
              <strong className="text-terracotta-600 text-sm">{generatedItinerary.estimatedCost} total</strong>
            </div>
          </div>

          {/* Day Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-sand-300">
            {generatedItinerary.days.map((day) => (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDayTab(day.dayNumber)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeDayTab === day.dayNumber
                    ? 'bg-terracotta-500 text-white shadow-sm'
                    : 'bg-white text-charcoal-800 border border-sand-300 hover:bg-sand-100'
                }`}
              >
                Day {String(day.dayNumber).padStart(2, '0')}
              </button>
            ))}
          </div>

          {/* Active Day Timeline */}
          {(() => {
            const currentDay = generatedItinerary.days.find(d => d.dayNumber === activeDayTab) || generatedItinerary.days[0];
            return (
              <div className="space-y-6">
                <div className="bg-sand-200/60 p-4 rounded-2xl border border-sand-300 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold font-editorial text-charcoal-900">
                      {currentDay.title}
                    </h4>
                    <span className="text-xs font-semibold text-terracotta-700">
                      Theme: {currentDay.theme}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-charcoal-800/70 bg-white px-3 py-1 rounded-lg border border-sand-300">
                    {currentDay.activities.length} Cultural Stops
                  </span>
                </div>

                {/* Timeline Activities List */}
                <div className="relative border-l-2 border-sand-300 pl-6 ml-3 space-y-6">
                  {currentDay.activities.map((act, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-terracotta-500 border-2 border-white shadow-sm" />

                      {/* Activity Card */}
                      <div className="bg-white p-5 rounded-2xl border border-sand-300 space-y-3 shadow-warm-sm group-hover:border-terracotta-500/40 transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-sand-200 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sand-200 text-indigo-950">
                              {act.time}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-forest-600 bg-forest-500/10 px-2 py-0.5 rounded">
                              {act.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-charcoal-800/70">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {act.duration}
                            </span>
                            <span>Est: <strong>{act.cost}</strong></span>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-base font-bold text-charcoal-900">
                            {act.title}
                          </h5>
                          <span className="text-xs text-charcoal-800/60 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-terracotta-500" />
                            {act.location}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                          {act.culturalContext}
                        </p>

                        {/* Etiquette callout */}
                        {act.etiquetteTip && (
                          <div className="p-3 bg-sand-100 rounded-xl text-xs text-charcoal-800 flex items-start gap-2 border border-sand-200">
                            <span className="text-terracotta-600 font-bold">Cultural Tip:</span>
                            <span>{act.etiquetteTip}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
};
