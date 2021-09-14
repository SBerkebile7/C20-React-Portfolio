import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    return (
        <header className="flex-row navBar px-1">
            <h2>
                <a data-testid="link" href="/">
                    Spenny Berkebile's Portfolio!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to="/" >
                            About me
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/portfolio" >
                            Portfolio
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/contact" >
                            Contact
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/resume" >
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;