import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import ClientOnly from '../components/ClientOnly.js';
import Cursor from '../components/Cursor.js';
import Navigation from '../components/Navigation.js';
import Hero from '../components/Hero.js';
import Footer from '../components/Footer.js';
import Card from '../components/Card.js';
import styles from '../components/AboutGrid.module.css';

import '../components/reset.css';
import '../components/global.css';

// markup
const AboutPage = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');

  function projectEnter(event) {
    setCursorText('View');
    setCursorVariant('project');
  }

  function cursorLeave(event) {
    setCursorText('');
    setCursorVariant('default');
  }

  function contactEnter(event) {
    setCursorText('👋');
    setCursorVariant('contact');
  }

  function photoEnter(event) {
    setCursorText('❤️');
    setCursorVariant('contact');
  }

  function linkEnter(event) {
    setCursorText('');
    setCursorVariant('link');
  }

  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Carlos Gamez Product Designer - About Me</title>
        <meta
          name='description'
          content='The work of Carlos, a product designer and design technologist from Mexico.'
        />
        <link rel='canonical' href='https://bycarlosgamez/about/' />
      </Helmet>
      <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
      <Hero
        text='I’m a husband, a dad, a designer, I have have three dogs and I’m actively doing things that I enjoy.'
        details={false}
      />

      <ClientOnly>
        <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
      </ClientOnly>

      <motion.section className='grid'>
        <div className={styles.aboutGrid}>
          <motion.div className={`${styles.video} ${styles.first}`}>
            <img
              src='https://i.imgur.com/Rn1RYo7.png'
              alt='music pic'
              className={styles.video}
            />
            {/* <video
              src='https://newportfolio.s3-us-west-2.amazonaws.com/daniel.mp4'
              className={styles.video}
              autoPlay
              muted
              loop
            /> */}
          </motion.div>
          <motion.div className={styles.wrapper}>
            <div className={styles.smallVideo}>
              <img
                src='https://i.imgur.com/PhtNZaf.png'
                alt='running pic'
                className={styles.video}
              />
              {/* <video
                src='https://newportfolio.s3-us-west-2.amazonaws.com/wave.mp4'
                className={styles.video}
                autoPlay
                muted
                loop
              /> */}
            </div>
            <div className={`${styles.smallVideo} ${styles.second}`}>
              <img
                src='https://i.imgur.com/Plzitgg.png'
                alt='dog in grass pic'
                className={styles.video}
                onMouseEnter={photoEnter}
                onMouseLeave={cursorLeave}
              />
              {/* <video
                src='https://newportfolio.s3-us-west-2.amazonaws.com/franklin.mp4'
                className={styles.video}
                autoPlay
                muted
                loop
                onMouseEnter={photoEnter}
                onMouseLeave={cursorLeave}
              /> */}
            </div>
          </motion.div>
          <motion.div className={`${styles.video} ${styles.third}`}>
            <img
              src='https://i.imgur.com/CtVI1a1.png'
              alt='standing dog pic'
              className={styles.video}
              onMouseEnter={photoEnter}
              onMouseLeave={cursorLeave}
            />
            {/* <video
              src='https://newportfolio.s3-us-west-2.amazonaws.com/mondo.mp4'
              className={styles.video}
              autoPlay
              muted
              loop
              onMouseEnter={photoEnter}
              onMouseLeave={cursorLeave}
            /> */}
          </motion.div>
          <motion.div className={`${styles.video} ${styles.fourth}`}>
            <img
              src='https://i.imgur.com/eyZGEqz.png'
              alt='puppy pic'
              className={styles.video}
              onMouseEnter={photoEnter}
              onMouseLeave={cursorLeave}
            />
            {/* <video
              src='https://newportfolio.s3-us-west-2.amazonaws.com/irma.mp4'
              className={styles.video}
              autoPlay
              muted
              loop
              onMouseEnter={photoEnter}
              onMouseLeave={cursorLeave}
            /> */}
          </motion.div>
        </div>
      </motion.section>
      <motion.section className='grid about'>
        <div className='bio'>
          <h2 className='h2'>Hey there—</h2>
        </div>
        <div className='bio-body'>
          <p className='paragraph paragraph--large'>
            I'm Carlos aka Charly, a product designer with 7 years of
            experience, driven by the belief that good design can bring people
            together. My design journey began as an Industrial Designer, where I
            honed my skills and values in design. Throughout my career, I've had
            the privilege of working on a variety of projects, collaborating
            with design and development teams for small startups and large tech
            companies.
          </p>
          <p className='paragraph paragraph--large'>
            When I'm not crafting experiences, you can find me exploring new
            technologies and design frameworks. I enjoy creative coding projects
            that push the boundaries of what's possible, composing music that
            sets the mood for the day, and building furniture that tells a story
            through its design, or most likely taking hikes with my 3 dogs.
          </p>
          <p className='paragraph paragraph--large'>
            If you want to chat about design, share a project idea, or simply
            say hello, feel free to reach out to me!
          </p>
        </div>
      </motion.section>

      <motion.section className='grid about'>
        <div className='experience'>
          <h2 className='h2'>Experience</h2>
          <ul className='list'>
            <li className='list-item'>
              <h6 className='h6 timeline'>2022 - Current</h6>
              <h4 className='h4'>Design Technologust | Contractor</h4>
            </li>
            <li className='list-item'>
              <h6 className='h6 timeline'>2020 - 2022</h6>
              <h4 className='h4'>UX Engineer | In-house</h4>
            </li>
            <li className='list-item'>
              <h6 className='h6 timeline'>2016 - 2020</h6>
              <h4 className='h4'>Product Designer | In-house</h4>
            </li>
            <li className='list-item'>
              <h6 className='h6 timeline'>2011 - 2016</h6>
              <h4 className='h4'>Industrial Designer</h4>
            </li>
          </ul>
        </div>
        {/* <div className='previous-work'> */}
        {/* <h2 className='h2'>Writing</h2>
          <ul className='list'>
            <li className='list-item'>
              <h6 className='h6 timeline'>2021 - Medium</h6>
              <h4 className='h4'>
                <a href='https://medium.com/me/stats/post/c435e2f8851b'>
                  How to set up Custom Design Linting
                </a>
              </h4>
            </li>
            <li className='list-item'>
              <h6 className='h6 timeline'>2021 - Figma File</h6>
              <h4 className='h4'>
                <a href='https://www.figma.com/community/file/942856928187155104'>
                  Intro to Figma Plugin Api
                </a>
              </h4>
            </li>
            <li className='list-item'>
              <h6 className='h6 timeline'>2020 - Medium</h6>
              <h4 className='h4'>
                <a href='https://blog.discord.com/building-open-source-design-tools-to-improve-discords-design-workflow-9a25c29f9143'>
                  Building Open Source Plugins
                </a>
              </h4>
            </li>
            <li className='list-item'>
              <h6 className='h6 timeline'>2018 - Medium</h6>
              <h4 className='h4'>
                <a href='https://blog.discord.com/redesigning-the-discord-overlay-cc31c6042d6d'>
                  Redesigning the Discord Overlay
                </a>
              </h4>
            </li>
          </ul> */}
        {/* <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  SteelSeries.com and Engine Software
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  P.W. LaRue Co. Webshop
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - Engineering and Design
                </h6>
                <h4 className="h4">
                  Foreign Affairs News
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - UX
                </h6>
                <h4 className="h4">
                  Yale Art Gallery
                </h4>
              </li>
              <li className="list-item">
                <h4 className="h4">
                  View LinkedIn ->
                </h4>
              </li>
            </ul> */}
        {/* </div> */}
      </motion.section>

      {/* <motion.section className='container next-project'>
        <div className='grid'>
          <h2 className='h2 grid-title'>Next Project</h2>
        </div>
        <div className='grid work-grid'>
          <Card
            image='https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/server-video-tile-imagee.png'
            imageAlt="Mockup of Discord's video chat feature with a person using it"
            link='/server-video'
            color='pink'
            title='Server Video'
            size='normal'
            onProjectEnter={projectEnter}
            onProjectLeave={cursorLeave}
          />
          <Card
            image='https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png'
            imageAlt="Image of Discord's Onboarding Screen"
            link='/discord-growth'
            color='blue'
            title='Discord Onboarding'
            size='normal'
            onProjectEnter={projectEnter}
            onProjectLeave={cursorLeave}
          />
        </div>
      </motion.section> */}
      <Footer
        onFooterEnter={contactEnter}
        onFooterLeave={cursorLeave}
        onLinkEnter={linkEnter}
        onLinkLeave={cursorLeave}
      />
    </div>
  );
};

export default AboutPage;
