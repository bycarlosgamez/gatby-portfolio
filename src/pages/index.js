import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

import Cursor from '../components/Cursor.js';
import ClientOnly from '../components/ClientOnly.js';
import Navigation from '../components/Navigation.js';
import Hero from '../components/Hero.js';
import WorkGrid from '../components/WorkGrid.js';
import AboutSection from '../components/AboutSection.js';
import Footer from '../components/Footer.js';

import '../components/reset.css';
import '../components/global.css';

// markup
const IndexPage = () => {
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

  function linkEnter(event) {
    setCursorText('');
    setCursorVariant('link');
  }

  const duration = 0.3;

  const pageVariants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: duration,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: duration },
    },
  };

  return (
    <main>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Carlos Gamez Product Designer - Home</title>
        <meta
          name='description'
          content='The work of Carlos, a product designer and design technologist from Mexico.'
        />
        <link rel='canonical' href='https://bycarlosgamez.com/' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap'
          rel='stylesheet'
        />
        <script async src='https://cdn.splitbee.io/sb.js'></script>
      </Helmet>
      <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
      <Hero
        text='I am a Product Designer with a knack for coding, helping facilitate communication between Design and Engineering teams.'
        details={true}
      />
      <ClientOnly>
        <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        <WorkGrid onProjectEnter={projectEnter} onProjectLeave={cursorLeave} />
        <AboutSection />
      </ClientOnly>
      <Footer
        onFooterEnter={contactEnter}
        onFooterLeave={cursorLeave}
        onLinkEnter={linkEnter}
        onLinkLeave={cursorLeave}
      />
    </main>
  );
};

export default IndexPage;
