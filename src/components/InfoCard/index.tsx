import React from 'react';
import styles from './index.module.css';


const InfoCard = ({ icon, title, description, pagePath })=> {
  return (
    <a href={pagePath} className={styles.infoCardLink}> {/* Link the card */}
    <div className={styles.infoCard}> 
      <div className={styles.titleContainer}>
        <div className={styles.infoCardTitle}>{title}</div>
      </div>
      <div className={styles.infoCardDescription}>{description}</div>
    </div>
    </a>
  );
};

export default InfoCard;

