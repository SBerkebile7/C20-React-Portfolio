import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div class="sub-footer">
            <div class="container">
                <div class="col-md-12">
                    <p>Copyright &copy; 2021 Spencer Berkebile - Let's Connect!
                        <a className="ml-3" target="_blank" rel="noreferrer" href="https://github.com/SBerkebile7">
                            <FaGithubSquare />
                        </a> 
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/spencer-berkebile/">
                            <FaLinkedin />
                        </a>
                    </p>
                </div>
            </div>
        </div>

        // <footer className="middle-align justify-center">
            // <a className="footerLink center" target="_blank" rel="noreferrer" href="https://github.com/SBerkebile7">
            //     <FaGithubSquare className="btn-dark" />
            // </a>
            // <a className="footerLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/spencer-berkebile/">
            //     <FaLinkedin className="btn-dark" />
            // </a>
        // </footer>
    );
}

export default Footer;