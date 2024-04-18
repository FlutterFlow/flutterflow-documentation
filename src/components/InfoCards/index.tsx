
import React from 'react';
import InfoCard from '../InfoCard';
import styles from './index.module.css';

const InfoCards = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default InfoCards;

