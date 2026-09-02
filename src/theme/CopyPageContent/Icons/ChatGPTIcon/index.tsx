import React from 'react';
import styles from '../styles.module.css';

export default function ChatGPTIcon(): JSX.Element {
  return (
    <svg aria-hidden="true" className={styles.icon} viewBox="0 0 24 24">
      <path d="M12 3a4 4 0 0 1 3.7 2.5A4 4 0 0 1 19 11a4 4 0 0 1-1.7 6.6A4 4 0 0 1 11 20a4 4 0 0 1-6-4.4A4 4 0 0 1 5.3 8 4 4 0 0 1 12 3Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="m8 9 4-2 4 2v5l-4 2-4-2V9Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}
