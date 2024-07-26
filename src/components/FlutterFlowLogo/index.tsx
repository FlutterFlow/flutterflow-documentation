import React from "react";
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.css';


const FlutterFlowLogo = () => {
    const logoSrcDark = "/logos/logo_primary_color@2x.png"; // Light mode logo
    const logoSrcLight = "/logos/logo_primary_color_onLight@2x.png"; // Dark mode logo
    const { colorMode } = useColorMode();

    return (
        <div className={styles.container}>
            <img
                src={colorMode === 'dark' ? logoSrcDark : logoSrcLight}
                alt={`$FlutterFlow Logo`}
                className={styles.logo}
            />
        </div>
    );
};

export default FlutterFlowLogo;
