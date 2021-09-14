import React from 'react';
import selfie from '../../assets/img/selfie-modified.png';
function About() {
    return (
        <div class="banner">
            <div class="container-fluid">
                <div class="col-md-5 col-sm-5 col-xs-12">
                    <div class="left-content">
                        <div class="inside-content">
                            <h4>Career shifting at 30 isn't easy, but neither is making any difficult change</h4>
                            <h5>Realizing I'd hit a glass ceiling I jumped into the world of software engineering in the hopes of changing my life. Recognizing I found something I am passionate about, I am more focused than ever on making major moves to improve my life for myself and my wife.</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-12">
                    <div class="center-image">
                        <div class="inside-content">
                            <img src={selfie} alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-12">
                    <div class="right-content">
                        <div class="owl-theme">
                            <div class="item">
                                <p>“Tech-focused problem solver making career moves”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <section className="my-5 px-1">
        //     <h1 id="about">Who am I?</h1>
        //     <img src={selfie} className="my-2 px-3 selfieImg" alt="selfie" />
        //     <div className="my-2 px-2">
        //         <p>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
        //             condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
        //             mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
        //             Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
        //             justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
        //             dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
        //             Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        //         </p>
        //     </div>
        // </section>
    );
}

export default About;
