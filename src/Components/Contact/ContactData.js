import React from 'react'
import './Contact.css'

function location() {
  return (
    <div>
      <div className="container">
        <div className="row  mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <div className="col-sm-11 col-md-6 col-lg-8 p-5 shadow p-3 mb-5 bg-body-tertiary rounded" id='contactCard'>
                   <div className="row justify-content-between">
                    <div className="col-sm-2  icon">
                    <i class="fa-solid  fa-location-dot"></i>
                    </div>
                    <div className="col-sm-9 details ">
                     <h3> Jam Mohall Near Anjuman School <br />
                      BHUSAWAL , 425201 <br />
                       JALGAON  MAHARASHTRA</h3>
                    </div>
                   </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-8 p-5 shadow p-3 mb-5 bg-body-tertiary rounded" id='contactCard'>
                   <div className="row justify-content-between">
                    <div className="col-sm-2  icon">
                    <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div className="col-sm-9 details ">
                     <h3> ejaz8837@gmail.com</h3>
                    </div>
                   </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-8 p-5 shadow p-3 mb-5 bg-body-tertiary rounded" id='contactCard'>
                   <div className="row justify-content-between">
                    <div className="col-sm-2  icon">
                    <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="col-sm-9 details ">
                     <h3> 8446931810 / 9307616840</h3>
                    </div>
                   </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6  ">
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-10 col-lg-10 text-start p-5 shadow p-3 mb-5 bg-body-tertiary rounded " id='contactForm'>
              <h3>Contact Details</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, esse?</p>
              <hr />
                <form action="">
                        <div className="form-group text-start">
                          <h3>First Name</h3>
                          <input type="text" name='fullname' className='form-control' />
                        </div>
                        <div className="form-group text-start">
                          <h3>Email</h3>
                          <input type="text" name='fullname' className='form-control' />
                        </div>
                        <div className="form-group text-start">
                          <h3>Contact Number</h3>
                          <input type="text" name='fullname' className='form-control' />
                        </div>
                        <div className="form-group text-start">
                          <h3>Subject</h3>
                          <input type="text" name='fullname' className='form-control' />
                        </div>
                        <div className="form-group text-start">
                          <h3>Message</h3>
                          <input type="text" name='fullname' className='form-control' />
                        </div>
                        <div className="form-group text-center mt-3">
                          <button className='btn btn-info'>Submit Query</button>
                        </div>
                      </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default location