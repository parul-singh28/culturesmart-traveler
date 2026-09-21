import React from 'react';
import { X, User, Award, CheckCircle2, MapPin, Sparkles, Compass, Heart } from 'lucide-react';

export const UserProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const unlockedExperiences = [
    { title: "Attended Varanasi Ganga Aarti", location: "Dashashwamedh Ghat, UP", unlocked: true },
    { title: "Tasted Banarasi Meetha Paan", location: "Chowk, Varanasi", unlocked: true },
    { title: "Explored Amer Fort & Sheesh Mahal", location: "Jaipur, Rajasthan", unlocked: true },
    { title: "Tried Dabu Indigo Block-Printing", location: "Bagru, Rajasthan", unlocked: true },
    { title: "Chandni Chowk Midnight Food Trail", location: "Old Delhi", unlocked: true },
    { title: "Thursday Qawwali at Nizamuddin", location: "Delhi", unlocked: true },
    { title: "Tasted Awadhi Galouti Kebab", location: "Lucknow, UP", unlocked: true },
    { title: "Bake Bajra Roti on Earthen Chulha", location: "Rural Haryana", unlocked: false },
    { title: "Pushkar Lake Full Moon Sunset", location: "Pushkar, Rajasthan", unlocked: false },
    { title: "Witness Mud Akhara Kushti Practice", location: "Rohtak, Haryana", unlocked: false },
  ];

  const completedCount = unlockedExperiences.filter(e => e.unlocked).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-md animate-fade-in no-print">
      <div className="bg-[#FFF9F0] border-2 border-sand-300 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand-300 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-terracotta-500 text-white flex items-center justify-center font-bold text-base shadow-warm-sm">
              PS
            </div>
            <div>
              <h3 className="text-xl font-bold font-editorial text-charcoal-900 leading-tight">
                Parul Singh
              </h3>
              <span className="text-xs font-semibold text-terracotta-600 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                Travel Personality: <strong>The Cultural Explorer</strong>
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-sand-200 text-charcoal-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Personality Badge & Description */}
        <div className="p-4 bg-sand-200/80 rounded-2xl border border-sand-300 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-900">
              Cultural Travel DNA
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-forest-500/15 text-forest-700 border border-forest-500/30">
              Respectful Adventurer
            </span>
          </div>
          <p className="text-xs text-charcoal-800 leading-relaxed">
            Travels slow, seeks out generational artisans, respects sacred sanctum decorum, and delights in street gastronomy over tourist chains.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white text-charcoal-800 font-medium border border-sand-300">
              🏛 Heritage
            </span>
            <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white text-charcoal-800 font-medium border border-sand-300">
              🍛 Regional Food
            </span>
            <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white text-charcoal-800 font-medium border border-sand-300">
              🎨 Artisan Crafts
            </span>
            <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white text-charcoal-800 font-medium border border-sand-300">
              📸 Visual Storytelling
            </span>
          </div>
        </div>

        {/* Visited States Badges */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800/70 block">
            Regional Exploration Footprint:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="p-2.5 rounded-xl bg-white border border-sand-300 text-xs flex items-center justify-between">
              <span className="font-semibold text-charcoal-900">Delhi</span>
              <CheckCircle2 className="w-4 h-4 text-forest-600" />
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-sand-300 text-xs flex items-center justify-between">
              <span className="font-semibold text-charcoal-900">Rajasthan</span>
              <CheckCircle2 className="w-4 h-4 text-forest-600" />
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-sand-300 text-xs flex items-center justify-between">
              <span className="font-semibold text-charcoal-900">Uttar Pradesh</span>
              <CheckCircle2 className="w-4 h-4 text-forest-600" />
            </div>
            <div className="p-2.5 rounded-xl bg-sand-100 border border-dashed border-sand-400 text-xs flex items-center justify-between text-charcoal-800/70">
              <span>Haryana</span>
              <span className="text-[10px] font-bold text-terracotta-600">Upcoming</span>
            </div>
          </div>
        </div>

        {/* Cultural Progress Bar */}
        <div className="space-y-2 bg-white p-4 rounded-2xl border border-sand-300">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-charcoal-900">Cultural Experience Mastery</span>
            <span className="font-bold text-terracotta-600">{completedCount} / 20 Unlocked</span>
          </div>
          <div className="w-full h-2.5 bg-sand-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-terracotta-500 to-gold-500 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / 20) * 100}%` }}
            />
          </div>
          <span className="text-[11px] text-charcoal-800/60 block text-right">
            Unlock 13 more to attain "Grand Cultural Ambassador" status
          </span>
        </div>

        {/* Checklist of Experiences */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800/70 block">
            Recent Cultural Encounters:
          </span>
          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {unlockedExperiences.map((exp, i) => (
              <div
                key={i}
                className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                  exp.unlocked
                    ? 'bg-white border-sand-200 text-charcoal-900'
                    : 'bg-sand-100/50 border-sand-200 text-charcoal-800/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${exp.unlocked ? 'text-forest-600' : 'text-sand-400'}`} />
                  <span className="font-medium">{exp.title}</span>
                </div>
                <span className="text-[10px] text-charcoal-800/60">{exp.location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-charcoal-900 text-white text-xs font-bold hover:bg-charcoal-800 transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
