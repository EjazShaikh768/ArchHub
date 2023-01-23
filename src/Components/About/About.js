import React from 'react';
import './About.css';
import Header from '../Includes/Header';
import HeadSection from './HeadSection';
import Footer from '../Includes/Footer';
import AboutMission from './AboutMission';
import Head from '../Includes/Head';

function About() {
  return (
    <div>
        <HeadSection ></HeadSection>
      <AboutMission ></AboutMission>
      <Head ></Head>
      <Footer ></Footer>
    </div>
  )
}

export default About