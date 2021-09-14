import React from 'react';
import project1 from '../../assets/img/project-1.jpg'
import project2 from '../../assets/img/project-2.JPG'

function Portfolio() {
    return (
        <div>
            <div class="heading-page">
                <div class="container">
                    <div class="col-md-12">
                        <h2>Portfolio</h2>
                        <div class="line-dec"></div>
                    </div>
                </div>
            </div>
            <div class="left-right-image">
                <div class="container">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="right-image">
                            <div class="row">
                                <div class="col-md-6">
                                    <h2 class="hidden-sm hidden-xs">noheadphones</h2>
                                    <h2 class="hidden-lg hidden-md">noheadphones</h2>
                                    <span>Commute focused app for finding articles to read.</span>
                                    <p>Built using Google Maps API and the New York Times API, Bulma and localStorage</p> <br />
                                    <p>Users are able to map two points using city names, a chosen transport type (bike, publc, driving, walking) and then article type. Their previous choices are saved into localStorage and recalled at any point in time.</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="image">
                                        <img src={project1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="left-image">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="image">
                                        <img src={project2} alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h2 class="hidden-sm hidden-xs">THE Cocktail Menu</h2>
                                    <h2 class="hidden-lg hidden-md">THE Cocktail Menu</h2>
                                    <span>Node app to find the best cocktails to make and drink.</span>
                                    <p>This app uses Node, Handlebars, MySQL and OpenCocktailDB to find a slew of cocktails to make.</p> <br /> 
                                    <p>Users are able to create an account and once logged in create blog posts about whatever is on their mind.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;