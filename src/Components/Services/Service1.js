import React from 'react';
import Footer from '../Includes/Footer';
import Head from '../Includes/Head';
import './Services.css';
import Permission from '../Includes/Permssion';
import { Helmet } from "react-helmet";

function Service1() {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>ARCH HUB -  BUiLDiNG PLANiNG </title>
                <meta name='keywords' content=' arch hub service' />
                <meta name="title" content="arch hub architectural hub design about " />
                <meta name="description" content="" />
            </Helmet>
    <div className="container-fluid" id='headBanner1'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
              <h1>BUiLDiNG PLANiNG  </h1>
          </div>
        </div>
      </div>
    </div>

<div className="container-fluid" id='servicebg'>
<div className="container">
 <div className="row justify-content-center" id='servicePageCard'>
  <div className="col-sm-10">
   <div className="row justify-content-center" >
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
    <span>Building planning in civil engineering is a crucial step in the design and construction of any building or structure. It involves several steps, including:</span>

         <h2 className='mt-5'> Site analysis: </h2>
         <span> This step involves gathering data about the site and the surrounding area, including topographical information, existing structures and utilities, and any other relevant information. Engineers will also consider factors such as zoning regulations, building codes, and environmental impact.</span>
           </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2> Conceptual design:  </h2>
         <span>Using the site analysis data, engineers will begin to conceptualize the design of the building. This includes determining the overall layout, the type of structure (such as a bridge, building, or tower), and the materials and equipment to be used.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2>Feasibility study:  </h2>
         <span>Engineers will conduct a feasibility study to determine the viability of the project and identify any potential issues. This includes analyzing the structural stability, durability, and cost-effectiveness of the design.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2> Detailed design: </h2>
         <span> Once the conceptual design and feasibility study are complete, engineers will create detailed design plans, including architectural, structural, electrical, plumbing, and mechanical plans.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2>  Material selection:  </h2>
         <span>Engineers will select the appropriate materials for the building, taking into account factors such as strength, durability, cost, and environmental impact.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2>  Building codes compliance:  </h2>
         <span>Engineers will ensure that the building plans comply with the local building codes and regulations.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2>  Review and approval: </h2>
         <span>The design plans will be reviewed and approved by relevant authorities before construction begins.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2>  Construction:   </h2>
         <span>The final step is the actual construction of the building, which is monitored to ensure it is built according to the approved plans and meets all safety and performance standards.</span>
     </div>
  </div>
  <div className="row justify-content-center" >
  
  <div className="col-sm-12 col-md-6 col-lg-6 srviceimg" >
       <img src={require('../../assets/Images/banner.jpg')} className="img-fluid" alt="" />
    </div>
    <div className="col-sm-12 col-md-10 col-lg-10 seriviceText">
         <center> <h2>  BUILDING PLANING  </h2> </center>
         <span>It's worth noting that depending on the complexity of the project and the local regulations, the process may require more or less steps and may also involve collaboration with other professionals such as architects, engineers, and surveyors.</span>
         <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur voluptatum atque dolorum sunt quasi sed cumque harum maxime provident?</span>
         
    </div>
  </div>
  </div>
 </div>
</div>
</div>
      <Permission />
<Head></Head>
<Footer ></Footer>
    </div>
  )
}

export default Service1



