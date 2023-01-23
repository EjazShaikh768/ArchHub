import React from 'react'
import Header from '../Includes/Header';
import AboutPart from './AboutPart';
import ServicesPart from './ServicesPart';
import Footer from '../Includes/Footer';
import Gallery from './Gallery';
import Head from '../Includes/Head';
import ProductPrmpt from '../Includes/ProductPrmpt';

function Home() {
  return (
    <div>
    <Header ></Header>
      <AboutPart />
      <ServicesPart />
      <ProductPrmpt ></ProductPrmpt>
      <Gallery ></Gallery>
      <Head ></Head>
  <Footer ></Footer>
    </div>
  )
}

export default Home
