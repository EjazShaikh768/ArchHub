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
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/001-2.jpg')} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/001-3.jpg')} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/001-4.jpg')} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="row justify-content-around px-3">
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/002-1.jpg')} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/abcd.jpg')} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/003.jpg')} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="row justify-content-around px-3">
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/bg000.png')} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/05.jpg')} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/bg00.png')} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="row justify-content-around px-3">
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/bg0.jpg')} className="img-fluid" alt="" />
                </div>
                <div className="col-sm-11 col-md-4 col-lg-3 p-4 mt-2 shadow-lg p-3 mb-5 bg-white rounded">
                  <img src={require('../../assets/Images/bg00.png')} className="img-fluid" alt="" />
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