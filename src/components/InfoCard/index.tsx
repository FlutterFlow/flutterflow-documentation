import React from 'react';
import styles from './index.module.css';

interface InfoCardProps {
  icon?: string;
  title: string;
  description: string;
  pagePath: string;
  isLarge?: boolean;
}

const InfoCard = ({ icon, title, description, pagePath, isLarge = false }: InfoCardProps) => {
  console.log('InfoCard:', title, 'isLarge =', isLarge);
  
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

