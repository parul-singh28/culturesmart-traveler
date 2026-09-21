import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { DestinationExplorer } from './components/DestinationExplorer.jsx';
import { DestinationDetailModal } from './components/DestinationDetailModal.jsx';
import { AITripPlanner } from './components/AITripPlanner.jsx';
import { CulturalIntelligence } from './components/CulturalIntelligence.jsx';
import { LocalCultureGuide } from './components/LocalCultureGuide.jsx';
import { FoodDiscovery } from './components/FoodDiscovery.jsx';
import { CulturalExperiences } from './components/CulturalExperiences.jsx';
import { SmartMap } from './components/SmartMap.jsx';
import { FestivalCalendar } from './components/FestivalCalendar.jsx';
import { CultureMate } from './components/CultureMate.jsx';
import { UserProfileModal } from './components/UserProfileModal.jsx';
import { AboutSection } from './components/AboutSection.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [plannerPreset, setPlannerPreset] = useState({
    destination: "Rajasthan",
    duration: 5,
    companions: "Couple"
  });

  const handleQuickPlan = ({ destination, duration, companions }) => {
    setPlannerPreset({ destination, duration, companions });
    const plannerEl = document.getElementById("trip-planner");
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanForState = (stateName) => {
    setPlannerPreset(prev => ({ ...prev, destination: stateName }));
    const plannerEl = document.getElementById("trip-planner");
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlannerDirect = () => {
    const plannerEl = document.getElementById("trip-planner");
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const destEl = document.getElementById("destinations");
    if (destEl) {
      destEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#202020] flex flex-col selection:bg-terracotta-500 selection:text-white relative">
      {/* Sticky Transparent-to-Solid Navbar */}
      <Navbar
        onOpenPlanner={handleOpenPlannerDirect}
        onOpenProfile={() => setIsProfileOpen(true)}
        onSelectDestination={setSelectedDestination}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Full-Screen Hero Section */}
        <HeroSection
          onQuickPlan={handleQuickPlan}
          onExploreClick={handleExploreClick}
        />

        {/* Destination Explorer (Rajasthan, Delhi, Haryana, Uttar Pradesh) */}
        <DestinationExplorer
          onSelectDestination={setSelectedDestination}
        />

        {/* Cultural Intelligence (DO, DON'T, KNOW, TRY, RESPECT) */}
        <CulturalIntelligence />

        {/* AI Trip Planner (Interactive Builder + Day-by-Day Customized Itinerary) */}
        <AITripPlanner
          presetConfig={plannerPreset}
        />

        {/* Local Culture Guide (8 Pillars: Food, Crafts, Architecture, Music, etc.) */}
        <LocalCultureGuide />

        {/* Food Discovery ("Taste the place" + AI Food Matcher) */}
        <FoodDiscovery />

        {/* Hands-on Cultural Experiences (Beyond sight-seeing) */}
        <CulturalExperiences />

        {/* Smart Interactive Cultural Map */}
        <SmartMap
          onAddToTrip={(point) => handlePlanForState(point.state)}
        />

        {/* Festival Calendar & Timeline */}
        <FestivalCalendar />

        {/* About Section & Cultural Travel Manifesto */}
        <AboutSection
          onStartPlanning={handleOpenPlannerDirect}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPlanner={handleOpenPlannerDirect}
      />

      {/* Floating AI Cultural Assistant: CultureMate */}
      <CultureMate />

      {/* Destination Detail Magazine Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        isOpen={Boolean(selectedDestination)}
        onClose={() => setSelectedDestination(null)}
        onPlanForThisState={handlePlanForState}
      />

      {/* Cultural Profile Modal */}
      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
}

export default App;
