import React from 'react'
import './Home.css';
function ServicesPart() {
  return (
    <div>
    <div className="container-fluid" id='cardHeadBg'>
    <div className="container" >
        <div className="col-sm-12 cardHeading">
          <h3>Our Services</h3>
        </div>
            <div className="row" id='cardParts'>
                <div className="col-sm-11 col-md-4 col-lg-4 p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id='card'>
                   <img src={require('../../assets/Images/bg.jpg')} alt="" className='img-fluid' />
                       <div className="text">
                       <h3>BUILDING PLANING</h3>
                       <h6>"Proper planning and design are the foundation of any successful building project."</h6>
                       <center> <a href="" className='btn btn-info px-4'>ReadMore</a> </center>
                       </div>
                </div>
                <div className="col-sm-11 col-md-4 col-lg-4 p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id='card'>
                   <img src={require('../../assets/Images/archii.jpg')} alt="" className='img-fluid' />
                       <div className="text">
                       <h3>ARCHITECTURE VISUALISATION</h3>
                       <h6>"Architecture visualization is the bridge between the virtual world and the physical reality of a building."</h6>
                       <center> <a href="" className='btn btn-info px-4'>ReadMore</a> </center>
                       </div>
                </div>
                <div className="col-sm-11 col-md-4 col-lg-4 p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id='card'>
                   <img src={require('../../assets/Images/3d.jpg')} alt="" className='img-fluid' />
                       <div className="text">
                       <h3>3D BUILDING MODELING</h3>
                       <h6>"3D building modeling is the key to unlocking the potential of a design, bringing it to life before a single brick is laid." </h6>
                       <center> <a href="" className='btn btn-info px-4'>ReadMore</a> </center>
                       </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ServicesPart