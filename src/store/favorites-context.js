import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setFavorites((prevFavorites) => {
      return prevFavorites.concat(favoriteMeetup);
    });
  };

  function removeFavoriteHandler(meetupId) {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter(meetup => meetup.id !== meetupId);
    });
  };

  function itemIsFavoriteHandler(meetupId) {
    return favorites.some(meetup => meetup.id === meetupId);
  };

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;