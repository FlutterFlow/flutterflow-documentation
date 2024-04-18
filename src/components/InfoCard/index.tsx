
import React from 'react';
import styles from './index.module.css';


const InfoCard = ({ icon, title, description }) => {
  return (
    <div className={styles.infoCard}> {/* Use styles from the imported CSS Module */}
      <div className={styles.infoCardIcon}>{icon}</div>
      <div className={styles.infoCardTitle}>{title}</div>
      <div className={styles.infoCardDescription}>{description}</div>
    </div>
  );
};

export default InfoCard;
