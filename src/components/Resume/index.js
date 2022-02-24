import React from 'react';
import PDF from '../../assets/Resume.pdf';

function Resume() {
    return (
        <div>
            <div class="heading-page">
                <div class="container">
                    <div class="col-md-12">
                        <h2>Resume and Proficiencies</h2>
                        <div class="line-dec"></div>
                    </div>
                </div>
            </div>
            <div class="services">
                <div class="container">
                    <div class="col-md-4">
                        <div class="service-item">
                            <div class="text">
                                <h2>Front-End Proficiencies</h2>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bulma</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-item">
                            <div class="text">
                                <h2>Back-End Proficiencies</h2>
                                <ul>
                                    <li>Node</li>
                                    <li>Handlebars</li>
                                    <li>React</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-item">
                            <div class="text">
                                <h2>Check out my resume</h2>
                                <a href = {PDF} target='_blank' rel="noreferrer">Download my resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="middle-align">
        //     <h2>Front-End Proficiencies</h2>
            // <ul>
            //     <li>HTML</li>
            //     <li>CSS</li>
            //     <li>Bulma</li>
            //     <li>Bootstrap</li>
            //     <li></li>
            // </ul>

        //     <h2>Back-End Proficiencies</h2>
        //     <ul>
        //         <li>Node</li>
        //         <li>Handlebars</li>
        //         <li>React</li>
        //         <li></li>
        //     </ul>
        //     <a href = {PDF} target='_blank' rel="noreferrer">Download my resume</a>
        // </div>
    );
}

export default Resume;