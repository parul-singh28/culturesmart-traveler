import React, { useState } from 'react';
import { ArrowLeft, Heart, Printer, Shield, Calendar, Phone, Sparkles, BookOpen, CheckSquare, Train, Compass, MessageSquare } from 'lucide-react';
import { DosAndDontsSection } from './DosAndDontsSection.jsx';
import { PhrasebookSection } from './PhrasebookSection.jsx';
import { TransportGuide } from './TransportGuide.jsx';
import { MustVisitPlaces } from './MustVisitPlaces.jsx';

export const CityDetailView = ({
  city,
  onBack,
  isSaved,
  onToggleSave,
  onPrintGuide
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Cultural Overview', icon: BookOpen },
    { id: 'dos-donts', label: "Dos & Don'ts", icon: CheckSquare, count: city.dosAndDonts.length },
    { id: 'transport', label: 'Transit & Etiquette', icon: Train },
    { id: 'places', label: 'Cultural Sites', icon: Compass, count: city.mustVisitPlaces.length },
    { id: 'phrasebook', label: 'Audio Phrasebook', icon: MessageSquare, count: city.phrasebook.length }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-fadeIn">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Cities</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onToggleSave(city.id)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
              isSaved
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{isSaved ? 'Bookmarked' : 'Save City'}</span>
          </button>

          <button
            onClick={onPrintGuide}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-md transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Pocket Guide</span>
          </button>
        </div>
      </div>

      {/* Hero Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-750 shadow-2xl">
        <div className="relative h-64 sm:h-80 md:h-96">
          <img
            src={city.heroImage}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

          {/* Hero Content Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-3xl sm:text-4xl">{city.flag}</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                  {city.continent} • {city.country}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-slate-300 border border-slate-700 backdrop-blur-md">
                  Currency: {city.currency}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {city.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-200 font-medium leading-snug">
                {city.tagline}
              </p>
            </div>

            {/* Quick Emergency Hotlines */}
            {city.emergencyNumbers && (
              <div className="bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-750 text-xs text-slate-300 space-y-1 self-start md:self-auto min-w-[210px]">
                <div className="font-bold text-slate-200 flex items-center gap-1.5 pb-1 border-b border-slate-800">
                  <Phone className="w-3.5 h-3.5 text-rose-400" />
                  <span>Emergency Numbers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Police:</span>
                  <span className="font-mono font-bold text-rose-300">{city.emergencyNumbers.police}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Ambulance:</span>
                  <span className="font-mono font-bold text-emerald-300">{city.emergencyNumbers.ambulance}</span>
                </div>
                {city.emergencyNumbers.touristHotline && (
                  <div className="pt-1 text-[10px] text-slate-400 border-t border-slate-800/80">
                    <span className="block text-slate-300 font-medium">Tourist Helpline:</span>
                    <span className="font-mono text-sky-300">{city.emergencyNumbers.touristHotline}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-800 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Area */}
      <div>
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Overview Text */}
            <div className="bg-slate-850 p-6 sm:p-7 rounded-3xl border border-slate-750 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                Cultural Mindset & City Soul
              </h3>
              <p className="text-base text-slate-200 leading-relaxed">
                {city.overview}
              </p>

              {/* Best Season */}
              <div className="mt-4 pt-4 border-t border-slate-750 flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200">Recommended Travel Season: </span>
                  <span className="text-amber-300">{city.bestTimeToVisit}</span>
                </div>
              </div>
            </div>

            {/* Core Cultural Philosophies */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Fundamental Cultural Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {city.keyCulturalValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/80 p-4 rounded-2xl border border-slate-750 space-y-1.5"
                  >
                    <span className="text-sm font-bold text-emerald-400 block">
                      {val.term}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {val.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Cultural Festivals */}
            {city.festivals && city.festivals.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  Key Festivals & Cultural Celebrations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {city.festivals.map((fest, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-850 p-5 rounded-2xl border border-slate-750 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-white text-base">
                          {fest.name}
                        </h4>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {fest.timing}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {fest.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'dos-donts' && (
          <DosAndDontsSection dosAndDonts={city.dosAndDonts} cityName={city.name} />
        )}

        {activeTab === 'transport' && (
          <TransportGuide transportData={city.transportEtiquette} cityName={city.name} />
        )}

        {activeTab === 'places' && (
          <MustVisitPlaces places={city.mustVisitPlaces} cityName={city.name} />
        )}

        {activeTab === 'phrasebook' && (
          <PhrasebookSection phrasebook={city.phrasebook} cityName={city.name} />
        )}
      </div>
    </div>
  );
};
