import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDragonsFromAPI,
  cancelReservation,
  setReservation,
} from '../../Redux/dragon/dragon';
import Loader from '../Loader/Loader';
import styles from './dragon.module.css';

const Dragon = () => {
  const allDragons = useSelector((state) => state.dragonReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allDragons.length === 0) {
      dispatch(getDragonsFromAPI());
    }
  }, []);

  const handleReservation = (id) => {
    dispatch(setReservation(id));
  };

  const cancelReserve = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <div>
      {allDragons.length === 0 ? (
        <Loader />
      ) : (
        <ul className={styles['dragon-list']}>
          {allDragons.map((dragon) => (
            <li
              key={dragon.id}
              type={dragon.type}
              className={styles['dragon-card']}
            >
              <div className={styles['dragon-card__image']}>
                <img src={dragon.images} alt={dragon.name} />
              </div>
              <div className={styles['dragon-card__content']}>
                <h3>{dragon.name}</h3>
                {dragon.reserved && <span className={styles.badge}>reserved</span>}
                {dragon.reserved ? (
                  <button
                    id={dragon.id}
                    className="btn btn-1"
                    type="button"
                    onClick={(e) => {
                      cancelReserve(e.target.id);
                    }}
                  >
                    Cancel Reservation
                  </button>
                ) : (
                  <button
                    id={dragon.id}
                    className="btn btn-1"
                    type="button"
                    onClick={(e) => {
                      handleReservation(e.target.id);
                    }}
                  >
                    Reserve Dragon
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dragon;
