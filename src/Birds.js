import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import styles from './App.module.css';

import image1 from './images/animated-bird-image-0253.gif';
import image2 from './images/animated-bird-image-0417.gif';
import image3 from './images/animated-bird-image-0488.gif';

function Birds() {
    const { ref } = useWebAnimations({
        keyframes:[
            {transform: 'translate(0,0)'},
            {transform: 'translate(30%,0)'},
            {transform: 'translate(20%,50%)'},
            {transform: 'translate(20%,280%)'},
            {transform: 'translate(80%,380%)'},
        
        ],
        timing:{
            iterations: Infinity,
            duration: 5000,
            easing: "ease-in",
        }
    });
    
    return(
        <div>
            <div ref={ref} >
                <img src={image1} alt="image" className={styles.image1} />
                <img src={image2} alt="image" className={styles.image2} />
                <img src={image3} alt="image" className={styles.image3} />
            </div>
        </div>
    );
}

export default Birds;