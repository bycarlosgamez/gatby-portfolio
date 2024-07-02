import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useInView from 'react-cool-inview';
import Card from '../components/Card';
import FeaturedCard from './FeaturedCard';

function WorkGrid(props) {
  // const [visibleState, setVisibleState] = useState("initial");

  // Scroll Reveal
  // https://github.com/wellyshen/react-cool-inview
  // const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView({
  //     threshold: 0.0, // Default is 0
  //     unobserveOnEnter: true,
  //     onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
  //       setVisibleState("visible");
  //     },
  //     onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
  //       setVisibleState("initial");
  //     }
  //   }
  // );

  const gridVariants = {
    initial: {
      opacity: 0.25,
      scale: 0.98,
      y: 60,
      transition: {
        type: 'spring',
        duration: 0.8,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.8,
      },
    },
  };

  function projectEnter(event) {
    props.onProjectEnter();
  }

  function projectLeave(event) {
    props.onProjectLeave();
  }

  return (
    <div className='grid'>
      <div className='work-grid'>
        {/* <FeaturedCard
          // image="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-image.png"
          image='https://i.imgur.com/NJovHSM.png'
          imageAlt='Healtcare video calling dashboard UI'
          link='/healtcare-video'
          color='green'
          title='Video Call'
          key='Video Call'
          size='featured'
          onProjectEnter={projectEnter}
          onProjectLeave={projectLeave}
        /> */}

        <h2 className='h2 work-subtitle'>Work</h2>

        <p className='work-subtitle'>
          <em>
            Case Studies coming soon, feel free to check some of my development
            projects below
          </em>
        </p>

        <Card
          image='https://i.imgur.com/SVU6zj0.png'
          link='https://github.com/bycarlosgamez/img-tool-designers'
          imageAlt='App display'
          color='blue'
          title='DesImg'
          size='normal'
          onProjectEnter={projectEnter}
          onProjectLeave={projectLeave}
        />
        <Card
          image='https://i.imgur.com/rncYgSC.png'
          link='https://github.com/bycarlosgamez/bugbust'
          imageAlt='UI of app landing page'
          color='yellow'
          title='Project management software'
          size='normal'
          alignment='bottom'
          onProjectEnter={projectEnter}
          onProjectLeave={projectLeave}
        />
        <Card
          image='https://i.imgur.com/xBJyVA1.png'
          link='https://github.com/bycarlosgamez/progen-website-demo'
          imageAlt='Image of Progen website'
          title='Progen website'
          color='pink'
          size='normal'
          onProjectEnter={projectEnter}
          onProjectLeave={projectLeave}
        />
        <Card
          image='https://i.imgur.com/7mnDGXL.png'
          link='https://github.com/bycarlosgamez/budget-tracker'
          imageAlt='Budget Planner UI'
          title='Budget Tracker'
          color='purple'
          size='normal'
          alignment='bottom'
          onProjectEnter={projectEnter}
          onProjectLeave={projectLeave}
        />
      </div>
    </div>
  );
}

export default WorkGrid;
