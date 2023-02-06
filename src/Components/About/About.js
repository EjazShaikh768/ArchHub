import React from 'react';
import './About.css';
import HeadSection from './HeadSection';
import Footer from '../Includes/Footer';
import AboutMission from './AboutMission';
import Head from '../Includes/Head';

function About() {
  return (
    <div>
     {/* <Helmet>
                <meta charSet="utf-8" />
                <title>ARCH HUB - ABOUT </title>
                <meta name='keywors' content=' arch hub about' />
                <meta name="title" content="arch hub architectural hub design about " />
                <meta name="description" content="" />
            </Helmet> */}
        <HeadSection ></HeadSection>
      <AboutMission ></AboutMission>
      <Head ></Head>
      <Footer ></Footer>
    </div>
  )
}

export default About