import React from 'react';
import styles from './index.module.css';

interface InfoCardProps {
  icon?: string;
  title: string;
  description: string;
  pagePath: string;
  isLarge?: boolean;
  fullWidth?: boolean;
  iconBg?: string;
  tags?: string[];
}

const InfoCard = ({
  icon,
  title,
  description,
  pagePath,
  isLarge = false,
  fullWidth = false,
  iconBg,
  tags,
}: InfoCardProps) => {
  return (
    <a href={pagePath} className={styles.infoCardLink}>
      <div
        className={`${styles.infoCard} ${isLarge ? styles.largeCard : ''} ${
          fullWidth ? styles.fullWidthCard : ''
        }`}
      >
        {icon && (
          <div
            className={`${styles.infoCardIcon} ${iconBg ? styles.infoCardIconBubble : ''}`}
            style={iconBg ? { backgroundColor: iconBg } : undefined}
          >
            {icon}
          </div>
        )}
        <div className={styles.infoCardTitle}>{title}</div>
        <div className={styles.infoCardDescription}>{description}</div>
        {tags && tags.length > 0 && (
          <div className={styles.infoCardTags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.infoCardTag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default InfoCard;

