import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import styles from './App.module.css';

import Plane from './Plane';
import Helicopter from './Helicopter';
import Birds from './Birds';

import image4 from './images/animated-sun-image-0845.gif';
import image5 from './images/animated-cloud-image-0011.gif';
import image6 from './images/animated-cloud-image-0039.gif';

function App() {
  const {ref} = useWebAnimations({
    keyframes:[
      {transform: "translate(0,0)"},
      {transform: "translate(100%,0)"},
    ],
    timing: {
      delay:2,
      duration: 10000,
      iterations: Infinity,
      easing: "ease-in"
    }
  });
  
  return (
    <div >
      <Plane />
      <Helicopter />
      <Birds/>

      <img className={styles.image4} src={image4} />
      
      <div ref={ref}>
        <img className={styles.image5} src={image5} />
        <img className={styles.image5} src={image5} />
        <img className={styles.image5} src={image5} />
        <img className={styles.image5} src={image5} />
        <img className={styles.image5} src={image5} />
        <img className={styles.image6} src={image6} />
        <img className={styles.image6} src={image6} />
        <img className={styles.image6} src={image6} />
        <img className={styles.image6} src={image6} />
        <img className={styles.image6} src={image6} />
      </div>

    </div>
);
}

export default App;
