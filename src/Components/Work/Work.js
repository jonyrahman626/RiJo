import React from 'react';
import WorkMobile from '../../Assets/work_mobile.png';
import './Work.css';

const Work = () => {
    return (
        <div>
            <section id="work_part">
                <div className="work_head">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3>How We Works</h3>
                                <h2>How a project meet the success</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 pr-0">
                                <div className="line_shape">
                                    <div className="box_shape"></div>
                                </div>
                            </div>
                            <div className="col-lg-5 pl-0">
                                <div className="work_text">
                                    <h4>Establish Goals</h4>
                                    <p>Mindmap and long term vision is so important for a successful product. We research on it finding the problem the competition also the long-term solution.</p>
                                </div>
                                <div className="work_text">
                                    <h4>Work With Creative Tream</h4>
                                    <p>After a brainstorming thinking with the primary idea we are building the project for the business or business goal. Every time we are collecting the client updates and improving the project until the final satisfaction.</p>
                                </div>
                                <div className="work_text">
                                    <h4>Get Result</h4>
                                    <p>Mindmap and long term vision is so important for a successful product. We research on it finding the problem the competition also the long-term solution.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-2 mobile_main">
                                <div className="work_mobile">
                                    <img src={WorkMobile} alt=""/>
                                    <div className="overly">
                                        <h5>Enhance Productivity</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt </p>
                                        <a href="#">Continue</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;
