import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
       <div className="container-fluid ">
        <div className="row" id='footer'>
          <div className="col-sm-12 col-md-4 col-lg-4 Footerimg">
<img src={require("../../assets/Images/logo.jpeg")} alt="arch hub logo" className='img-fluid' />
                 <center> <hr /></center>
              <ul>
                <li><a href=""> <i class="fa-brands fa-square-instagram"></i> </a></li>
                <li><a href=""> <i class="fa-brands fa-square-facebook"></i> </a></li>
                <li><a href=""> <i class="fa-brands fa-linkedin"></i> </a></li>
                <li><a href=""> <i class="fa-brands fa-square-twitter"></i> </a></li>
              </ul>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4  footerLink">
                 <h5>Important Link's</h5>
               <center>   <hr /> </center>
                   <ul>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">PORTFOLIO</a></li>
                    <li><a href="">CAREER</a></li>
                    <li><a href="">SITE MAP</a></li>

                   </ul>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4  footerContact">
                 <h5>Let Connect</h5>
                 <center> <hr /></center>
                    <h6> Location</h6>
                    <p>Khadka Road Near Sunrise Apartment <br/>
BHUSAWAL , 425201</p>
                    <h6>Contact</h6>
                    <p>muzaffarsayyed72@gmail.com<br />9579546154.</p>
          </div>
          <div className="col-sm-12 copyright">
            <h6>copyright@2023 by <a href="www.rioforge.com">Rioforge</a></h6>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer