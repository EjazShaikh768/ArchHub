import React from 'react';
import './ProductPrmpt.css';

function ProductPrmpt() {
    return (
        <div>
            <div className="container-fluid" id='productprmpt'>
                <div className="container">
                    <div className="row justify-content-center" >
                        <div className="col-sm-8">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <h2>Rioforge</h2>
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa ea blanditiis tempore quae repellendus porro autem laboriosam dolore expedita.</h4>
                                        <a href="www.rioforge.com" className='btn border'>Contact</a>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Victory Electrical</h2>
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa ea blanditiis tempore quae repellendus porro autem laboriosam dolore expedita.</h4>
                                        <a href="www.rioforge.com" className='btn border'>Contact</a>
                                    </div>
                                    <div className="carousel-item">
                                        <h2>Tandur Junction</h2>
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa ea blanditiis tempore quae repellendus porro autem laboriosam dolore expedita.</h4>
                                        <a href="www.rioforge.com" className='btn border'>Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPrmpt