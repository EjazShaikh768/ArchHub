import React from 'react';
import './Services.css';
import Footer from '../Includes/Footer';
import Head from '../Includes/Head';
import Permission from '../Includes/Permssion';


function Service2() {
  return (
    <div>
     
    <div className="container-fluid" id='headBanner2'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 text-center">
              <h1> ARCHiTECTURE ViSUALiSATiON </h1>
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
    <span>Architectural visualization is the process of creating visual representations of architectural designs and ideas. This can include 2D and 3D renderings, animations, and virtual reality simulations. The purpose of architectural visualization is to help architects, engineers, and clients understand and communicate the design of a building or structure.
<br /><br />
There are several steps involved in architectural visualization, including:</span>

         <h2 className='mt-5'> Modeling: </h2>
         <span> This step involves creating a 3D model of the building or structure using specialized software such as Autodesk 3DS Max, Maya, Blender, SketchUp, and Cinema 4D.</span>
           </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2> Texturing and materials: </h2>
         <span>Once the model is complete, the textures and materials are applied to the surfaces of the model to give it a more realistic appearance.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2>Lighting and rendering:</h2>
         <span>The model is then lit and rendered to create a photo-realistic image or animation of the building or structure.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2> Post-production:</h2>
         <span> The final image or animation is then retouched, color corrected, and composited to enhance the overall look and feel of the visualization.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2>  Presentation:  </h2>
         <span>The final visualizations are then presented to the architects, engineers, and clients, who can use them to make design decisions, present the project to stakeholders, and even to help with marketing and promotion of the project.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2>  Site survey and data collection: </h2>
         <span>This step involves gathering data about the site and the surrounding area, including topographical information, existing structures and utilities, and any other relevant information. This data is used to create a digital terrain model (DTM) of the site.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2>  Design and planning:  </h2>
         <span>Using the DTM and other data, engineers will begin to design and plan the project. This includes determining the layout of the project, the types of materials and equipment to be used, and any necessary permits or approvals.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2> 3D modeling:  </h2>
         <span>Once the design and planning are complete, engineers will create a 3D model of the project using specialized software. This model will include all the necessary details, including the layout, materials, and equipment. The model is used to visualize the project and to identify any potential issues before construction begins.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2> Lighting and rendering:  </h2>
         <span>The model is then lit and rendered to create a photo-realistic image or animation of the building or structure.</span>
     </div>
    <div className="col-sm-11 col-md-8 col-lg-10 seriviceText">
         <h2> Simulation and analysis: </h2>
         <span>Engineers use the 3D model to simulate and analyze different scenarios, such as traffic flow, water flow, and structural stability, to ensure the project meets all safety and performance standards.</span>
     </div>
  </div>
  <div className="row justify-content-center" >
  
  <div className="col-sm-12 col-md-6 col-lg-6 srviceimg" >
       <img src={require('../../assets/Images/bannerarchi.jpg')} className="img-fluid" alt="ARCHiTECTURE ViSUALiSATiON " />
    </div>
    <div className="col-sm-12 col-md-10 col-lg-10 seriviceText">
         <center> <h2> ARCHiTECTURE ViSUALiSATiON   </h2> </center>
         <span>It's worth noting that depending on the complexity of the project and the level of realism desired, architectural visualization may require more or less steps and may also involve collaboration with other professionals such as 3D artists and graphic designers.</span>
         <span>It's worth noting that depending on the complexity of the project, the process may require more or less steps and may also involve collaboration with other professionals such as architects, landscape architects, and urban planners.</span>
         
    </div>
  </div>
  </div>
 </div>
</div>
</div>
      <Permission />
<Head ></Head>
<Footer ></Footer>
    </div>
  )
}

export default Service2