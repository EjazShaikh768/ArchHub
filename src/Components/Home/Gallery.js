import React from 'react'

function Gallery() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-sm-12" >
            <div className="row justify-content-around" id='gallery'>
            <center><h3 className='my-5'>Gallery</h3></center>
              <div className="col-sm-11 col-md-4 col-lg-3 galleryImage">
                <img src={require('../../assets/Images/001-2.jpg')} alt=""  className='img-fluid' />
                {/* <h5>"Are you gunna throw the ball?"</h5> */}
              </div>
              <div className="col-sm-11 col-md-4 col-lg-3 galleryImage1">
                <img src={require('../../assets/Images/001-3.jpg')} alt=""  className='img-fluid' />
                {/* <h5>"Are you gunna throw the ball?"</h5> */}
              </div>
               <div className="col-sm-11 col-md-4 col-lg-3 galleryImage2">
                <img src={require('../../assets/Images/001-4.jpg')} alt=""  className='img-fluid' />
                {/* <h5>"Are you gunna throw the ball?"</h5> */}
              </div>
            </div>
            <div className="row mt-3 justify-content-around" id='gallery'>
              <div className="col-sm-11 col-md-4 col-lg-3 galleryImage1">
                <img src={require('../../assets/Images/002-1.jpg')} alt=""  className='img-fluid' />
                {/* <h5>"Are you gunna throw the ball?"</h5> */}
              </div>
              <div className="col-sm-11 col-md-4 col-lg-3 galleryImage">
                <img src={require('../../assets/Images/003-1.jpg')} alt=""  className='img-fluid' />
                {/* <h5>"Are you gunna throw the ball?"</h5> */}
              </div>
               <div className="col-sm-11 col-md-4 col-lg-3 galleryImage2">
                <img src={require('../../assets/Images/003.jpg')} alt=""  className='img-fluid' />
                {/* <h5>"Are you gunna throw the ball?"</h5> */}
              </div>
            </div>
            </div>
             

        </div>
      </div>
    </div>
  )
}

export default Gallery