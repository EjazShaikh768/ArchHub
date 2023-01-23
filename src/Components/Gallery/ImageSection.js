import React from 'react';
import './Gallery.css'

function ImageSection() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-sm-11 " id='GalleryImg'>
              <div className="row justify-content-around px-3">
                <div className="col-sm-12 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require("../../assets/banner.avif")} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require("../../assets/banner.avif")} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require("../../assets/banner.avif")} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="row justify-content-around px-3">
                <div className="col-sm-12 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require("../../assets/banner.avif")} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require("../../assets/banner.avif")} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require("../../assets/banner.avif")} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="row justify-content-around px-3">
                <div className="col-sm-12 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require("../../assets/banner.avif")} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require("../../assets/banner.avif")} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require("../../assets/banner.avif")} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSection