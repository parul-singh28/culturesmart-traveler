import React, { useState, useEffect } from 'react';
import { CITIES_DATA } from './data/citiesData.js';
import { INITIAL_STORIES } from './data/initialStories.js';
import { getSavedCities, toggleSaveCity, getCommunityStories, saveCommunityStory } from './utils/storageUtils.js';

import { Navbar } from './components/Navbar.jsx';
import { HeroBanner } from './components/HeroBanner.jsx';
import { CityCard } from './components/CityCard.jsx';
import { CityDetailView } from './components/CityDetailView.jsx';
import { TravelerStories } from './components/TravelerStories.jsx';
import { CultureQuizModal } from './components/CultureQuizModal.jsx';
import { CityCompareModal } from './components/CityCompareModal.jsx';
import { SavedCitiesModal } from './components/SavedCitiesModal.jsx';
import { PrintablePocketGuide } from './components/PrintablePocketGuide.jsx';

import { Compass, Sparkles, Shield, Heart, HelpCircle, ArrowUp } from 'lucide-react';

export function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeContinent, setActiveContinent] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedCityIds, setSavedCityIds] = useState([]);
  const [stories, setStories] = useState([]);

  // Modals state
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);

  // Initialize storage
  useEffect(() => {
    setSavedCityIds(getSavedCities());
    setStories(getCommunityStories(INITIAL_STORIES));
  }, []);

  const handleToggleSave = (cityId) => {
    const updated = toggleSaveCity(cityId);
    setSavedCityIds(updated);
  };

  const handleAddStory = (newStory) => {
    const updated = saveCommunityStory(newStory);
    setStories(updated);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setSelectedCity(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrintGuide = () => {
    window.print();
  };

  // Filter cities by continent & search query
  const filteredCities = CITIES_DATA.filter((city) => {
    const matchesContinent = activeContinent === 'All' || city.continent === activeContinent;
    const query = searchQuery.toLowerCase().trim();

    if (!query) return matchesContinent;

    const matchesName = city.name.toLowerCase().includes(query);
    const matchesCountry = city.country.toLowerCase().includes(query);
    const matchesLanguage = city.language.toLowerCase().includes(query);
    const matchesCustoms = city.keyCulturalValues?.some(v => 
      v.term.toLowerCase().includes(query) || v.meaning.toLowerCase().includes(query)
    );
    const matchesRules = city.dosAndDonts?.some(d => 
      d.title.toLowerCase().includes(query) || d.description.toLowerCase().includes(query)
    );

    return matchesContinent && (matchesName || matchesCountry || matchesLanguage || matchesCustoms || matchesRules);
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        savedCitiesCount={savedCityIds.length}
        onOpenSaved={() => setIsSavedOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        selectedCity={selectedCity}
        onPrintGuide={handlePrintGuide}
        onHomeClick={handleHomeClick}
      />

      {/* Main Content View */}
      <main className="flex-1 no-print">
        {selectedCity ? (
          /* City Profile Detail View */
          <CityDetailView
            city={selectedCity}
            onBack={handleHomeClick}
            isSaved={savedCityIds.includes(selectedCity.id)}
            onToggleSave={handleToggleSave}
            onPrintGuide={handlePrintGuide}
          />
        ) : (
          /* Homepage View */
          <div className="space-y-12">
            {/* Hero & Tip of the Day */}
            <HeroBanner
              activeContinent={activeContinent}
              setActiveContinent={setActiveContinent}
            />

            {/* City Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-baseline gap-3">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {activeContinent === 'All' ? 'Global City Guides' : `${activeContinent} Destinations`}
                  </h2>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
                    {filteredCities.length} Cities
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Select a city to discover local etiquette, native audio phrases & transit rules
                </span>
              </div>

              {/* Grid */}
              {filteredCities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCities.map((city) => (
                    <CityCard
                      key={city.id}
                      city={city}
                      onSelectCity={handleSelectCity}
                      isSaved={savedCityIds.includes(city.id)}
                      onToggleSave={handleToggleSave}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-slate-850 rounded-3xl border border-slate-800 space-y-3">
                  <HelpCircle className="w-10 h-10 text-slate-500 mx-auto" />
                  <h3 className="text-lg font-bold text-white">No cities match "{searchQuery}"</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Try searching for another city, country, or cultural topic like "tipping", "bowing", or "subway".
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveContinent('All'); }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-emerald-400 text-xs font-semibold border border-slate-700"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>

            {/* Why Cultural Etiquette Matters Feature Callout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-slate-850 via-slate-800 to-slate-850 border border-slate-750 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">Genuine Local Connections</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Small gestures—like opening with "Bonjour" in Paris or bowing respectfully in Tokyo—transform how locals perceive and welcome you.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">Avoid Heavy Fines & Scams</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Know where gum-chewing is penalized, how to spot distraction clipboard petitions, and what scams prey on well-meaning tourists.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">Zero Faux Pas Confidence</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Master tipping norms, chopstick taboos, sacred temple attire, and subway quiet hours before stepping off your flight.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Stories & Cultural Saves */}
            <TravelerStories
              stories={stories}
              onAddStory={handleAddStory}
            />
          </div>
        )}
      </main>

      {/* Dedicated Print & PDF View (rendered exclusively when printing) */}
      <PrintablePocketGuide city={selectedCity || CITIES_DATA[0]} />

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10 no-print mt-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <span className="font-bold text-white text-sm">
              CultureSmart Traveler
            </span>
            <span className="text-slate-500">• Your Global Etiquette & City Intelligence Companion</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="hover:text-emerald-400 transition-colors"
            >
              Take Culture Quiz
            </button>
            <button
              onClick={() => setIsCompareOpen(true)}
              className="hover:text-sky-400 transition-colors"
            >
              Compare Cities
            </button>
            <button
              onClick={() => setIsSavedOpen(true)}
              className="hover:text-rose-400 transition-colors"
            >
              Saved Cities ({savedCityIds.length})
            </button>
          </div>

          <div>
            <span>© 2026 CultureSmart Traveler. Designed for respectful global discovery.</span>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <CultureQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      <CityCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
      />

      <SavedCitiesModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedCityIds={savedCityIds}
        onSelectCity={handleSelectCity}
        onToggleSave={handleToggleSave}
      />
    </div>
  );
}
export default App;
