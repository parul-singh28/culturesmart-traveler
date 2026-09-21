import React, { useState } from 'react';
import { MessageSquarePlus, Heart, Sparkles, User, MapPin, Tag, Plus } from 'lucide-react';
import { CITIES_DATA } from '../data/citiesData.js';

export const TravelerStories = ({ stories, onAddStory }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [storyLikes, setStoryLikes] = useState({});

  // New Story Form State
  const [author, setAuthor] = useState('');
  const [cityId, setCityId] = useState(CITIES_DATA[0].id);
  const [category, setCategory] = useState('Etiquette Save');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const categories = [
    'All',
    'Etiquette Save',
    'Dining Surprise',
    'Cultural Lesson',
    'Transit Tip'
  ];

  const handleLike = (storyId, currentLikes) => {
    setStoryLikes(prev => ({
      ...prev,
      [storyId]: (prev[storyId] !== undefined ? prev[storyId] : currentLikes) + 1
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !title.trim() || !content.trim()) return;

    const matchedCity = CITIES_DATA.find(c => c.id === cityId);

    const newStory = {
      id: `story-${Date.now()}`,
      author: author.trim(),
      avatar: `https://images.unsplash.com/photo-${1535713875002 + Math.floor(Math.random() * 50)}?auto=format&fit=crop&w=150&q=80`,
      city: matchedCity?.name || 'Global',
      flag: matchedCity?.flag || '🌍',
      category: category,
      title: title.trim(),
      content: content.trim(),
      date: 'Just now',
      likes: 1
    };

    onAddStory(newStory);
    setIsModalOpen(false);
    // Reset Form
    setAuthor('');
    setTitle('');
    setContent('');
  };

  const filteredStories = stories.filter(s => 
    selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <section className="py-12 border-t border-slate-800 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Community Knowledge Exchange
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Traveler Stories & Cultural Saves
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Real firsthand experiences, embarrassing faux pas, and cultural breakthroughs from fellow travelers.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-md transition-all self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Share Your Cultural Story</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-white font-semibold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-750'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStories.map((story) => {
            const likesCount = storyLikes[story.id] !== undefined ? storyLikes[story.id] : story.likes;

            return (
              <div
                key={story.id}
                className="bg-slate-850 border border-slate-750 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-slate-650 transition-all space-y-4"
              >
                <div>
                  {/* Top Bar: Author & City */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={story.avatar}
                        alt={story.author}
                        className="w-8 h-8 rounded-full object-cover border border-slate-700"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80";
                        }}
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                          {story.author}
                        </h4>
                        <span className="text-[11px] text-slate-400">{story.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium flex items-center gap-1">
                        <span>{story.flag}</span>
                        <span>{story.city}</span>
                      </span>
                    </div>
                  </div>

                  {/* Category Pill & Title */}
                  <div className="space-y-1.5">
                    <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {story.category}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {story.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 italic">
                    "{story.content}"
                  </p>
                </div>

                {/* Like Button */}
                <div className="pt-3 border-t border-slate-750/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px]">Helpful for other travelers</span>
                  <button
                    onClick={() => handleLike(story.id, story.likes)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-rose-400 border border-slate-700 transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-400" />
                    <span>{likesCount} Likes</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm no-print animate-fadeIn">
          <div className="bg-slate-900 border border-slate-750 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white">Share Your Cultural Experience</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Name / Traveler Handle</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Miller"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">City</label>
                  <select
                    value={cityId}
                    onChange={(e) => setCityId(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  >
                    {CITIES_DATA.map(c => (
                      <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Etiquette Save">Etiquette Save</option>
                    <option value="Dining Surprise">Dining Surprise</option>
                    <option value="Cultural Lesson">Cultural Lesson</option>
                    <option value="Transit Tip">Transit Tip</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Catchy Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. The two-handed bow that saved my meeting in Tokyo"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Story or Cultural Tip</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share what happened, what etiquette rule applied, and what other travelers should keep in mind..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500 leading-relaxed"
                />
              </div>

              <div className="flex justify-end gap-2.5 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md"
                >
                  Publish Story
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
