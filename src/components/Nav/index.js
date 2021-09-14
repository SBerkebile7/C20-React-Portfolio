import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
    return (
        <div class="wrap">
            <header id="header">
                <div class="container-fluid">
                    <div class="col-md-12">
                        <button id="primary-nav-button" type="button">Menu</button>
                        <nav id="primary-nav" class="dropdown cf">
                            <ul class="dropdown menu">
                                <li>
                                    <Link to="/" className="text-decoration-none">
                                        About me                
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="text-decoration-none">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-decoration-none">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/resume" className="text-decoration-none">
                                        Resume
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
        
        // <header className="flex-row navBar p-1">
        //     <h2>
        //         <a data-testid="link" href="/" className="text-decoration-none">
        //             Spenny Berkebile's Portfolio!
        //         </a>
        //     </h2>
        //     <nav>
        //         <ul className="align-middle mt-2 flex-row">
        //             <li className="mx-2">
        //                 <Link to="/" className="text-decoration-none">
        //                     About me
        //                 </Link>
        //             </li>
        //             <li className="mx-2">
        //                 <Link to="/portfolio" className="text-decoration-none">
        //                     Portfolio
        //                 </Link>
        //             </li>
        //             <li className="mx-2">
        //                 <Link to="/contact" className="text-decoration-none">
        //                     Contact
        //                 </Link>
        //             </li>
        //             <li className="mx-2">
        //                 <Link to="/resume" className="text-decoration-none">
        //                     Resume
        //                 </Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>
    );
}

export default Nav;