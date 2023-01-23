import React from 'react'
import './Home.css';
function ServicesPart() {
  return (
    <div>
        <div className="container" >
        <div className="col-sm-12 cardHeading">
          <h3>Our Services</h3>
        </div>
            <div className="row" id='cardParts'>
                <div className="col-sm-12 col-md-4 col-lg-4 p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id='card'>
                   <img src={require('../../assets/banner.avif')} alt="" className='img-fluid' />
                       <div className="text">
                       <h3>BUILDING PLANING</h3>
                       <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, non!</h6>
                       <center> <a href="" className='btn btn-info px-4'>ReadMore</a> </center>
                       </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id='card'>
                   <img src={require('../../assets/banner1.avif')} alt="" className='img-fluid' />
                       <div className="text">
                       <h3>ARCHITECTURE VISUALISATION</h3>
                       <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, non!</h6>
                       <center> <a href="" className='btn btn-info px-4'>ReadMore</a> </center>
                       </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded" id='card'>
                   <img src={require('../../assets/banner3.avif')} alt="" className='img-fluid' />
                       <div className="text">
                       <h3>3D BUILDING MODELING</h3>
                       <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, non!</h6>
                       <center> <a href="" className='btn btn-info px-4'>ReadMore</a> </center>
                       </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesPart