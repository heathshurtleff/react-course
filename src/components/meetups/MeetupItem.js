import { useContext } from 'react';

import Card from '../UI/Card';
import FavoritesContext from "../../store/favorites-context";

import styles from './MeetupItem.module.css';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const isFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if(isFavorite) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({ ...props })
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{isFavorite ? 'Remove' : 'Add'} Favorite</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;