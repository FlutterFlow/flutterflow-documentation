import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type Props = {
  copyStatus: string;
  finalConfig: {buttonLabel: string};
  isOpen: boolean;
  onMainAction: () => void;
  onDropdownToggle: () => void;
};

function CopyIcon({success}: {success: boolean}): JSX.Element {
  return success ? (
    <svg aria-hidden="true" className={styles.icon} viewBox="0 0 24 24">
      <path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ) : (
    <svg aria-hidden="true" className={styles.icon} viewBox="0 0 24 24">
      <rect x="8" y="8" width="11" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 8V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h1" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function CopyButton({copyStatus, finalConfig, isOpen, onMainAction, onDropdownToggle}: Props): JSX.Element {
  const success = copyStatus === 'success';
  return (
    <div className={clsx(styles.splitButton, success && styles.success)}>
      <button type="button" className={styles.mainButton} onClick={onMainAction} aria-label={success ? 'Copied!' : 'Copy page as Markdown'}>
        <CopyIcon success={success} />
        <span>{success ? 'Copied!' : finalConfig.buttonLabel}</span>
      </button>
      <button type="button" className={styles.dropdownButton} onClick={onDropdownToggle} aria-expanded={isOpen} aria-haspopup="true" aria-label="More copy options">
        <svg aria-hidden="true" className={clsx(styles.arrowIcon, isOpen && styles.arrowIconOpen)} viewBox="0 0 24 24">
          <path d="m7 10 5 5 5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}
