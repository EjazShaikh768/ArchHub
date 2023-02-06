import React from 'react'
import HeadSection from './HeadSection';
import ContactData from './ContactData';
import Map from './Map';
import Footer from '../Includes/Footer';
import Head from '../Includes/Head';
import Permission from '../Includes/Permssion';


function Contact() {
  return (
    <div>
      <HeadSection ></HeadSection>
      <ContactData ></ContactData>
      <Map ></Map>
      <Permission />
      <Head ></Head>
  <Footer ></Footer>
    </div>
  )
}

export default Contact
