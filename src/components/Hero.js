import * as React from 'react';
import { motion } from 'framer-motion';
import styles from './hero.module.css';

import designIcon from '../images/design-icon.svg';
import mapIcon from '../images/map-icon.svg';

import ClientOnly from '../components/ClientOnly.js';

function Hero(props) {
  return (
    <div className='grid'>
      <div className={styles.hero}>
        <div className={styles.innerGrid}>
          <div className={styles.titleWrapper}>
            <ClientOnly>
              <motion.h1
                className={styles.title}
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{
                  type: 'spring',
                  delay: 0.2,
                  mass: 1,
                  damping: 10,
                  stiffness: 80,
                }}
              >
                {props.text}
              </motion.h1>
            </ClientOnly>
          </div>
        </div>

        {props.details === true && (
          <ClientOnly>
            <div className={styles.innerGrid}>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <motion.h3
                    className={styles.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', delay: 0.65, damping: 15 }}
                  >
                    With over 7 years of experience working in-house and as a
                    consultant in product design, web design, and development
                    for startups. I love making music, walk with my dogs, and
                    sci-fi.
                  </motion.h3>
                </div>
              </div>
            </div>
          </ClientOnly>
        )}
      </div>
    </div>
  );
}

export default Hero;
