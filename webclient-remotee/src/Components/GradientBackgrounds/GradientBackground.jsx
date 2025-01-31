import React from 'react'
import styles from './GradientBackground.module.scss'

const GradientBackground = React.memo(() => {
    return ( 
        <div className={styles.gradientBackground} />
    );
});

export default GradientBackground;
