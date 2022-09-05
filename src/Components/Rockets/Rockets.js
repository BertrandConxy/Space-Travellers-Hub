import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchRockets, reserveRocket, cancelReserve } from '../../Redux/rockets/rockets';
import Loader from '../Loader/Loader';
import styles from './rockets.module.css';

const Rockets = () => {
  const rocketsinfo = useSelector((state) => state.rocketsReducer);

  const dispatch = useDispatch();

  const getRockets = () => {
    if (rocketsinfo.length === 0) {
      dispatch(FetchRockets());
    }
  };

  const rocketBooking = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelBooking = (id) => {
    dispatch(cancelReserve(id));
  };

  useEffect(() => {
    getRockets();
  }, []);

  return (
    <div className={styles.rocketList}>

      {
      (rocketsinfo.length === 0) ? (
        <Loader />
      )
        : (rocketsinfo.map((rocket) => (
          <div key={rocket.rocket_id} className={styles['rocket-card']}>
            <div>
              <img className={styles['rocket-card__image']} src={rocket.rocket_img} alt={rocket.rocket_name} />
            </div>
            <div className={styles['rocket-card__content']}>
              <h2>{rocket.rocket_name}</h2>
              <p className={styles['rocket-card__content--paragraph']}>
                {rocket.reserved ? (<span className={styles.badge}>Reserved</span>) : (false)}
                {rocket.rocket_description}
              </p>

              {rocket.reserved ? (
                <button
                  onClick={() => cancelBooking(rocket.rocket_id)}
                  type="button"
                  className="btn btn-1"
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  onClick={() => rocketBooking(rocket.rocket_id)}
                  type="button"
                  className="btn btn-1"
                >
                  Reserve Rocket
                </button>

              )}
            </div>
          </div>
        )))
}

    </div>
  );
};

export default Rockets;
