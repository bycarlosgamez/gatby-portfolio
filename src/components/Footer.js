import * as React from 'react';
import { Link } from 'gatsby';
import styles from './footer.module.css';
import { motion } from 'framer-motion';

function Footer(props) {
  function mouseEnter(event) {
    props.onFooterEnter();
  }

  function mouseLeave(event) {
    props.onFooterLeave();
  }

  function linkEnter(event) {
    props.onLinkEnter();
  }

  function linkLeave(event) {
    props.onLinkLeave();
  }
  return (
    <div id='contact' className='grid grid--full contact'>
      <div className={styles.footer}>
        <div
          className={styles.card}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <h2 className={styles.title}>
            If you just want to contact me, feel free to reach out!
          </h2>
          <h2 className={`${styles.title} ${styles.contact} `}>
            <a href='https://www.linkedin.com/in/bycarlosgamez/'>Let's chat.</a>
          </h2>
        </div>
        <nav className={styles.footerLinks}>
          <div className={styles.openSource}>
            This portfolio is a remix from this{' '}
            <a
              href='https://github.com/destefanis/gatsby-portfolio'
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
            >
              Github
            </a>
            .
          </div>
          <div className={styles.socialLinks}>
            <a
              href='https://github.com/bycarlosgamez'
              target='_blank'
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              className={styles.socialLink}
            >
              Github
            </a>
            <a
              href='https://www.linkedin.com/in/bycarlosgamez/'
              target='_blank'
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href='https://www.threads.net/@omgitscharly'
              target='_blank'
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              className={styles.socialLink}
            >
              Threads
            </a>
            {/* <a
              href='https://dribbble.com/danielrd/shots'
              target='_blank'
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              className={styles.socialLink}
            >
              Dribbble
            </a> */}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
