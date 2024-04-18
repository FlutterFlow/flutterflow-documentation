import React from 'react';
import styles from './index.module.css';

const FlutterFlowDocsLogo = () => {
  const title = "FlutterFlow Documentation";
  const logoSrc = "/logos/logoMark_outlinePrimary_transparent.svg"; // Path relative to the static directory

  return (
    <div className={styles.container}>
      <img src={logoSrc} alt={`${title} Logo`} className={styles.logo} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};


export default FlutterFlowDocsLogo;
