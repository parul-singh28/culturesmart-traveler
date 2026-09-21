// LocalStorage helpers for saved cities and community stories

const SAVED_CITIES_KEY = 'culturesmart_saved_cities';
const COMMUNITY_STORIES_KEY = 'culturesmart_user_stories';

export const getSavedCities = () => {
  try {
    const data = localStorage.getItem(SAVED_CITIES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to read saved cities", e);
    return [];
  }
};

export const toggleSaveCity = (cityId) => {
  try {
    const saved = getSavedCities();
    const exists = saved.includes(cityId);
    let updated;
    if (exists) {
      updated = saved.filter(id => id !== cityId);
    } else {
      updated = [...saved, cityId];
    }
    localStorage.setItem(SAVED_CITIES_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error("Failed to toggle save city", e);
    return [];
  }
};

export const getCommunityStories = (initialStories = []) => {
  try {
    const data = localStorage.getItem(COMMUNITY_STORIES_KEY);
    if (!data) {
      localStorage.setItem(COMMUNITY_STORIES_KEY, JSON.stringify(initialStories));
      return initialStories;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error("Failed to read community stories", e);
    return initialStories;
  }
};

export const saveCommunityStory = (story) => {
  try {
    const current = getCommunityStories([]);
    const updated = [story, ...current];
    localStorage.setItem(COMMUNITY_STORIES_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error("Failed to save story", e);
    return [];
  }
};
