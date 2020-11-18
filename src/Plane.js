import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import styles from './App.module.css';

import jet from './images/animated-aeroplane-image-0039.gif';


function Plane() {
    const {ref}  = useWebAnimations({
        keyframes:[
            {transform: 'translate(0,0)'},
            {transform: 'translate(-60%,-20%)'},
            {transform: 'translate(-17%,100%)'},
            {transform: 'translate(-160%,70%)'},
            {transform: 'translate(-200%,-60%)'},
            {transform: 'translate(-600%,0)'},

        ],
        timing:{
            delay: 25,
            duration: 10000,
            iterations: Infinity,
            easing: "ease-in-out"
            
        }
    });


    return(
    <div>
        <img ref={ref} className={styles.jet} src={jet} alt="jet" />
    </div>
    );
}

export default Plane;