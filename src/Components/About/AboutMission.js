import React from 'react';
import Permission from '../Includes/Permssion';

function AboutMission() {
  return (
    <div>
        <div className="container mt-5">
            <div className="row justify-content-center" >
               <div className="col-sm-12 col-md-12 col-lg-11" id='aboutMission'>
                <h2>IT IS OUR MISSION:</h2>
                <hr />
                <div className="row justify-content-around">
                <div className="col-sm-11 col-md-3 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                    <img src={require("../../assets/Images/mission_staff.jpg")} alt="" className='img-fluid' />
                    <p>We believe that the most efficient way to manage projects.</p>
                </div>
                <div className="col-sm-11 col-md-3 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                    <img src={require("../../assets/Images/mission_.jpg")} alt="" className='img-fluid' />
                    <p>Track and fine-tune deviations,Supervise Closely.</p>
                </div>
                <div className="col-sm-11 col-md-3 col-lg-3 shadow p-3 mb-5 bg-white rounded">
                    <img src={require("../../assets/Images/mission_key.jpg")} alt="" className='img-fluid' />
                    <p>On-time completion construction projects.</p>
                </div>
                </div>
               </div>

               
            </div>
        </div>
        
      <Permission />
        <div className="container-fluid py-5" id='AboutMissionQA'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-10 col-lg-10 AboutMissionQA">
                         <h4>A Brief Introduction to the Construction Industry</h4>
                         <hr />
                         <h5>Construction Project Detailes.</h5>
                         <p>Construction management involves the amalgamation of an array of services through the project phases of construction planning, designing, execution, and commissioning, aimed towards achieving project objectives such as management of quality, cost, time, and scope.</p>
                          <p>The Concept. What are the needs, goals and objectives of the project? · The Schematic Design · Design Development · Preconstruction & Planning.</p>
                         <h5>A vital industry, construction provides jobs, connects communities, and improves society. </h5>
                         <p>Construction is a vital industry, creating buildings and spaces that connect communities, providing jobs, and improving society. Construction is a vital industry, creating buildings and spaces that connect communities, providing jobs, and improving society</p>

                         <h5>In the Field of Technology and Construction</h5>
                         <p>Construction technology is a collective term for types of technology that have a specific use within the construction industry.</p>

                         <h5>The Clients</h5>
                         <p>First, let’s define what we mean by saying “construction client.” In the construction industry, a client is rarely an individual. Most of the time, it will be an organization or a group of people rather than a single person.</p>
                         <p>Clients in the construction business can be divided into two main parts: commercial and domestic clients. </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid mt-5 pb-5">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-sm-12 col-md-12 col-lg-11 " id='aboutBio'>
               <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 aboutText ">
                   <h3>Our Goal is to Make Your Dream a Reality </h3>
                   <hr />
                   <p>"Established in 2020, our civil company is dedicated to providing top-notch civil engineering and construction services. With a team of experienced professionals and state-of-the-art equipment, we are committed to delivering projects on time and within budget. From roadways and bridges to commercial and residential developments, we have the expertise to handle any project. Our goal is to exceed our clients' expectations and build a reputation for excellence in the industry."</p>
                   </div> 
                <div className="col-sm-11 col-md-6 col-lg-6 p-5 aboutImgs">
                    
                <img src={require("../../assets/banner.avif")} alt="" className='img-fluid' />
                </div>
               </div>

               </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutMission