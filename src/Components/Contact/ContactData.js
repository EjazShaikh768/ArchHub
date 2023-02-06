import React from 'react'
import './Contact.css'

function location() {
  return (
    <div>
      <div className="container">
        <div className="row  mt-5 justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row justify-content-center">
              <div className="col-sm-11 col-md-6 col-lg-8 p-5 shadow p-3 mb-5 bg-body-tertiary rounded" id='contactCard'>
                   <div className="row justify-content-between">
                    <div className="col-sm-2  icon">
                    <i class="fa-solid  fa-location-dot"></i>
                    </div>
                    <div className="col-sm-9 details ">
                     <h3> Mohammad Ali Road Near Sun Rise Apartment<br />
                      BHUSAWAL , 425201 <br />
                       JALGAON  MAHARASHTRA</h3>
                    </div>
                   </div>
              </div>
              <div className="col-sm-11 col-md-6 col-lg-8 p-5 shadow p-3 mb-5 bg-body-tertiary rounded" id='contactCard'>
                   <div className="row justify-content-between">
                    <div className="col-sm-2  icon">
                    <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div className="col-sm-9 details ">
                     <h3>muzaffarsayyed72@gmail.com</h3>
                    </div>
                   </div>
              </div>
              <div className="col-sm-11 col-md-6 col-lg-8 p-5 shadow p-3 mb-5 bg-body-tertiary rounded" id='contactCard'>
                   <div className="row justify-content-between">
                    <div className="col-sm-2  icon">
                    <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="col-sm-9 details ">
                     <h3> 9579546154 / 9309952600</h3>
                    </div>
                   </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6  ">
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-10 col-lg-10 text-start p-5 shadow p-3 mb-5 bg-body-tertiary rounded " id='contactForm'>
              <h3>Contact Details</h3>
              <p>Please fill out the form below  and we will get back to you Shortly.</p>
              <hr />
                <form action="https://formspree.io/f/mdovaowl" method='post' className='contact-inputs'>
                        <div className="form-group text-start">
                          <h3>First Name</h3>
                          <input type="text" name='fullname' className='form-control' autoComplete='off' required />
                        </div>
                        <div className="form-group text-start">
                          <h3>Email</h3>
                          <input type="text" name='email' className='form-control' autoComplete='off' required />
                        </div>
                        <div className="form-group text-start">
                          <h3>Contact Number</h3>
                          <input type="text" name='contact_Number' className='form-control' autoComplete='off' required />
                        </div>
                        <div className="form-group text-start">
                          <h3>Subject</h3>
                          <input type="text" name='subject' className='form-control'autoComplete='off' required />
                        </div>
                        <div className="form-group text-start">
                          <h3>Message</h3>
                          <textarea name="message"  className='form-control' id="" cols="30" rows="5" autoComplete='off' required></textarea>
                         
                        </div>
                        <div className="form-group text-center mt-3">
                          <button className='btn btn-info' type='submit' name='submit'>Submit Query</button>
                        </div>
                      </form>
                </div>
              </div>
          </div>
          <div className="cols-m-11 col-md-12 my-5 col-lg-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.908283710617!2d75.79417631475506!3d21.036355492895222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc395e02088d888f0!2zMjHCsDAyJzEwLjkiTiA3NcKwNDcnNDYuOSJF!5e0!3m2!1sen!2sin!4v1674725421373!5m2!1sen!2sin" 
          width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default location