import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Banner_img from '../../Assets/banner.png';
import  './Banner.css';

const Banner = () => {
    return (
        <div>
            <section id="banner_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner_text">
                                <h1>We Born to <span>Design</span> and <span>Build</span> Your <i>Dream</i></h1>
                                <a href="#">Start Project <i><FontAwesomeIcon icon={faArrowRight} /></i></a>
                                <a href="#">Free Consult <i><FontAwesomeIcon icon={faArrowRight} /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner_img" style={{backgroundImage: `url(${Banner_img})`}}></div>
            </section>
        </div>
    );
}

export default Banner;
