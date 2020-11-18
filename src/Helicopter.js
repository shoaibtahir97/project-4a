import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import styles from './App.module.css';

import helicopter from './images/animated-aeroplane-image-0120.gif';

function Helicopter() {
    const { ref } = useWebAnimations({
        keyframes:[
            {transform: 'translate(0,0)'},
            {transform: 'translate(0,-200%)'},
            {transform: 'translate(0,0)'},
        ],
        timing: {
            delay: 2,
            iterations: Infinity,
            duration: 8000,
            easing: "ease-in",
        }
    });
    return (
        <div>
            <img ref={ref} src={helicopter} className={styles.helicopter} alt="jet" />
        </div>
    );
}

export default Helicopter;