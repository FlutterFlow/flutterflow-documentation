
import React from 'react';
import styles from './index.module.css';


const InfoCard = ({ icon, title, description }) => {
  return (
    <div className={styles.infoCard}> 
      <div className={styles.container}>
        <img src={icon} alt={`${title} Logo`} className={styles.logo} />
        <div className={styles.infoCardTitle}>{title}</div>
      </div>
      <div className={styles.infoCardDescription}>{description}</div>
    </div>
  );
};

export default InfoCard;

