import React from 'react';
import styles from './index.module.css';

const InfoCard = ({ icon, title, description, pagePath, isLarge = false }) => {
  return (
    <a href={pagePath} className={styles.infoCardLink}>
      <div className={`${styles.infoCard} ${isLarge ? styles.largeCard : ''}`}>
        {icon && <div className={styles.infoCardIcon}>{icon}</div>}
        <div className={styles.infoCardTitle}>{title}</div>
        <div className={styles.infoCardDescription}>{description}</div>
      </div>
    </a>
  );
};

export default InfoCard;

