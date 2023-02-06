import React from 'react';
import Footer from '../Includes/Footer';
import Head from '../Includes/Head';
import HeadSection from './HeadSection';
import ImageSection from './ImageSection';
import Permission from '../Includes/Permssion';

function GalleryPage() {
  return (
    <div>
         <HeadSection ></HeadSection>
         <ImageSection ></ImageSection>
      <Permission />
         <Head ></Head>
         <Footer ></Footer>
    </div>
  )
}

export default GalleryPage




