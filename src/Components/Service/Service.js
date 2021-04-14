import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import serviceIconOne from '../../Assets/ser_icon1.png';
import serviceIconTwo from '../../Assets/ser_icon2.png';
import serviceIconThree from '../../Assets/ser_icon3.png';
import serviceIconFour from '../../Assets/ser_icon4.png';
import serviceIconFive from '../../Assets/ser_icon5.png';
import serviceIconSix from '../../Assets/ser_icon6.png';
import './Service.css';

const Service = () => {
    return (
        <div>
            <section id="service_part">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-12 m-auto">
                            <div className="service_head">
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <div className="service_text">
                                <img src={serviceIconOne} alt=""/>
                                <h3>GRAPHICS DESIGN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi </p>
                                <a href="#">Learn More <i><FontAwesomeIcon icon={faArrowRight} /> </i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="service_text">
                                <img src={serviceIconTwo} alt=""/>
                                <h3>WEB DESIGN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi </p>
                                <a href="#">Learn More <i><FontAwesomeIcon icon={faArrowRight} /> </i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="service_text">
                                <img src={serviceIconThree} alt=""/>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi </p>
                                <a href="#">Learn More <i><FontAwesomeIcon icon={faArrowRight} /> </i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="service_text">
                                <img src={serviceIconFour} alt=""/>
                                <h3>UI/UX DESIGN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi </p>
                                <a href="#">Learn More <i><FontAwesomeIcon icon={faArrowRight} /> </i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="service_text">
                                <img src={serviceIconFive} alt=""/>
                                <h3>Wordpress</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi </p>
                                <a href="#">Learn More <i><FontAwesomeIcon icon={faArrowRight} /> </i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="service_text">
                                <img src={serviceIconSix} alt=""/>
                                <h3>Desigital Marketing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi </p>
                                <a href="#">Learn More <i><FontAwesomeIcon icon={faArrowRight} /> </i></a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ser_btn">
                                <a href="#">start a project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
    );
}

export default Service;
