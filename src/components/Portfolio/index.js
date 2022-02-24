import React from 'react';
import project1 from '../../assets/img/project-1.jpg'
import project2 from '../../assets/img/project-2.JPG'
import assignment21 from '../../assets/img/assignment-21.jpg'
import assignment14  from '../../assets/img/assignment-14.jpg'
import theBreadSite from '../../assets/img/the-bread-site.jpg'

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
                        <div class="left-image">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="image">
                                        <a href="https://the-bread-site.vercel.app/" target='_blank' rel="noreferrer"><img src={theBreadSite} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-md-6 ">
                                    <h2 class="hidden-sm hidden-xs">The Breadsite</h2>
                                    <h2 class="hidden-lg hidden-md">The Breadsite</h2>
                                    <span>Personal blog to document my journey in baking.</span>
                                    <p>This app uses JavaScript and Next.js to create a personal blog that I try to post my recipes to.</p> <br /> 
                                    <p>Users who visit the site are able to leave comments on posts created, as well as cycle between posts by category.</p>
                                </div>
                            </div>
                        </div>
                        <div class="right-image">
                            <div class="row">
                                <div class="col-md-6">
                                    <h2 class="hidden-sm hidden-xs">noheadphones</h2>
                                    <h2 class="hidden-lg hidden-md">noheadphones</h2>
                                    <span>Commute focused app for finding articles to read.</span>
                                    <p>Built using Google Maps API and the New York Times API, Bulma and localStorage</p> <br />
                                    <p>Users are able to map two points using city names, a chosen transport type (bike, public transit, driving, walking) and then article type. Their previous choices are saved into localStorage and recalled at any point in time.</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="image">
                                        <a href="https://github.com/SBerkebile7/project-1" target='_blank' rel="noreferrer"><img src={project1} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="left-image">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="image">
                                        <a href="https://github.com/SBerkebile7/Project-2-The-Cocktail-Menu" target='_blank' rel="noreferrer"><img src={project2} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-md-6 ">
                                    <h2 class="hidden-sm hidden-xs">THE Cocktail Menu</h2>
                                    <h2 class="hidden-lg hidden-md">THE Cocktail Menu</h2>
                                    <span>Node app to find the best cocktails to make and drink.</span>
                                    <p>This app uses Node, Handlebars, MySQL and OpenCocktailDB to find a slew of cocktails to make.</p> <br /> 
                                    <p>Users are able to create an account and once logged in create blog posts about whatever is on their mind.</p>
                                </div>
                            </div>
                        </div>
                        <div class="right-image">
                            <div class="row">
                                <div class="col-md-6">
                                    <h2 class="hidden-sm hidden-xs">Book Search Engine</h2>
                                    <h2 class="hidden-lg hidden-md">Book Search Engine</h2>
                                    <span>A website that allows users to search for books using keywords.</span>
                                    <p>MERN style website that allows users to search google API for different books.</p> <br /> 
                                    <p>Users can log in and save the books they've found for viewing later</p>                                
                                </div>
                                <div class="col-md-6">
                                    <div class="image">
                                        <a href="https://github.com/SBerkebile7/C21-Book-Search-Engine" target='_blank' rel="noreferrer"><img src={assignment21} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="left-image">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="image">
                                        <a href="https://github.com/SBerkebile7/C14-Tech-Blog" target='_blank' rel="noreferrer"><img src={assignment14} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h2 class="hidden-sm hidden-xs">The Tech Blog</h2>
                                    <h2 class="hidden-lg hidden-md">The Tech Blog</h2>
                                    <span>Node application that allows users to log in and save their thoughts</span>
                                    <p>Node website using Handlebars and Sequelize to store user data.</p> <br /> 
                                    <p>Users are able to log in, create thoughts and leave comments on the thoughts of others.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="right-image">
                            <div class="row">
                                <div class="col-md-6">
                                    <h2 class="hidden-sm hidden-xs">name</h2>
                                    <h2 class="hidden-lg hidden-md">name</h2>
                                    <span>brief overview</span>
                                    <p>what does the app do</p> <br /> 
                                    <p>further explanation</p>                                
                                </div>
                                <div class="col-md-6">
                                    <div class="image">
                                        <a href="" target='_blank' rel="noreferrer"><img src={project1} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="left-image">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="image">
                                        <a href="" target='_blank' rel="noreferrer"><img src={project2} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h2 class="hidden-sm hidden-xs">name</h2>
                                    <h2 class="hidden-lg hidden-md">name</h2>
                                    <span>brief overview</span>
                                    <p>what does the app do</p> <br /> 
                                    <p>further explanation</p>
                                </div>
                            </div> 
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;