import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../MyProfile/myProfile.module.css';

const RocketsReserved = () => {
  const selectedRockets = useSelector((state) => state.rocketsReducer);

  const reservedRockets = selectedRockets.filter((rocket) => rocket.reserved);

  return (
    <div className={styles.box}>
      <h2>Reserved Rockets</h2>
      <table className={styles['Mission-ProfileTable']}>
        <tbody>
          {reservedRockets.length === 0 ? (
            <tr>
              <td className={styles.alert}>No Reserved Rockets</td>
            </tr>
          ) : (
            reservedRockets.map((rocket) => (
              <tr key={rocket.rocket_id}>
                <td className={styles['title-entry']}>{rocket.rocket_name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RocketsReserved;
