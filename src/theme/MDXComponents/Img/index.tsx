import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/MDXComponents/Img';

import styles from './styles.module.css';

function transformImgClassName(className?: string): string {
  return clsx(className, styles.img);
}

export default function MDXImg(props: Props): JSX.Element {
  const {alt, className, src} = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.classList.add(styles.fullscreenOpen);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove(styles.fullscreenOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label={alt ? `Open image: ${alt}` : 'Open image fullscreen'}
        onClick={() => setIsOpen(true)}>
        <img
          decoding="async"
          loading="lazy"
          {...props}
          className={transformImgClassName(className)}
        />
      </button>

      {isOpen && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={alt ? `Fullscreen image: ${alt}` : 'Fullscreen image'}
          onClick={() => setIsOpen(false)}>
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close fullscreen image"
            onClick={() => setIsOpen(false)}>
            ×
          </button>
          <img
            src={src}
            alt={alt}
            className={styles.fullscreenImage}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
