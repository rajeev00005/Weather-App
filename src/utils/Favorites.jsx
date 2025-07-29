// Save favorite city add extar fetures ----
export const saveFavorite = (city) => {
  const favorites = JSON.parse(localStorage.getItem('weatherFavorites')) || [];
  const normalizedCity = city.trim().toLowerCase();

  if (!favorites.map(c => c.toLowerCase()).includes(normalizedCity)) {
    favorites.push(city.trim());  
    localStorage.setItem('weatherFavorites', JSON.stringify(favorites));
  }
};

 
export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('weatherFavorites')) || [];
};


export const removeFavorite = (city) => {
  const favorites = getFavorites();
  const filtered = favorites.filter(c => c.toLowerCase() !== city.toLowerCase());
  localStorage.setItem('weatherFavorites', JSON.stringify(filtered));
};