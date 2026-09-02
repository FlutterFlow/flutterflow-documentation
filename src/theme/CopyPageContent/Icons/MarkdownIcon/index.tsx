import React from 'react';
import styles from '../styles.module.css';

export default function MarkdownIcon(): JSX.Element {
  return (
    <svg aria-hidden="true" className={styles.icon} viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M5 15V9l3 3 3-3v6m3-3 2.5 3 2.5-3m-2.5 3V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}
