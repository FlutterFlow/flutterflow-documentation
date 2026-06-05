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
  const lastActiveElementRef = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    lastActiveElementRef.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.classList.add(styles.fullscreenOpen);
    window.addEventListener('keydown', handleKeyDown);

    // Ensure keyboard focus enters the modal.
    requestAnimationFrame(() => {
      document
        .querySelector<HTMLButtonElement>(`.${styles.closeButton}`)
        ?.focus();
    });

    return () => {
      document.body.classList.remove(styles.fullscreenOpen);
      window.removeEventListener('keydown', handleKeyDown);
      lastActiveElementRef.current?.focus();
      lastActiveElementRef.current = null;
    };
  }, [isOpen]);

  if (!alt?.trim() && !props.title?.trim()) {
    return (
      <img
        decoding="async"
        loading="lazy"
        {...props}
        className={transformImgClassName(className)}
      />
    );
  }

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
          alt={alt ?? ''}
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
            alt={alt ?? ''}
            className={styles.fullscreenImage}
            onClick={(event) => event.stopPropagation()}
          />
          />
        </div>
      )}
    </>
  );
}
