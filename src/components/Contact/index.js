import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

require('dotenv').config();

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const nodemailer = require('nodemailer');

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    // let transporter = nodemailer.createTransport({
    //     service: 'yahoo',
    //     auth: {
    //         user: process.env.FROMEMAIL,
    //         pass: process.env.PASSWORD
    //     }
    // })

    // let mailOptions = {
    //     from: process.env.FROMEMAIL,
    //     to: process.env.TOEMAIL,
    //     subject: 'Portfolio page message',
    //     text: message
    // }

    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            console.log("Error occurred");
        } else {
            console.log("Email sent!")
        }
    })

    return (
        <div>
            <div class="heading-page">
                <div class="container">
                    <div class="col-md-12">
                        <h2>Contact Me</h2>
                        <div class="line-dec"></div>
                    </div>
                </div>
            </div>
            
            <div class="contact-form">
                <div class="container-fluid">
                    <div class="col-md-4">
                        <div class="text-content">
                            <div class="inside-content">
                                <h4>Let's get into contact! Fill out the form to the reach out to me about any inquiries or ideas you may have.</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="right-content">
                            <div id="contact">
                            <form action="#" method="post" onSubmit={handleSubmit}>
                                <div class="col-md-4 col-md-offset-2">
                                    <fieldset>
                                        <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required="" onBlur={handleChange} />
                                    </fieldset>
                                </div>
                                <div class="col-md-4">
                                    <fieldset>
                                        <input name="email" type="text" class="form-control" id="email" placeholder="Email..." required="" onBlur={handleChange} />
                                    </fieldset>
                                </div>
                                <div class="col-md-8 col-md-offset-2">
                                    <fieldset>
                                        <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required="" onBlur={handleChange} ></textarea>
                                </fieldset>
                                </div>
                                <div class="col-md-8 col-md-offset-2">
                                    <fieldset>
                                        <button type="submit" id="form-submit" class="btn">Send Message</button>
                                    </fieldset>
                                </div> 
                                {errorMessage && (
                                    <div>
                                        <p className="error-text">{errorMessage}</p>
                                    </div>
                                )}
                                </form>
                            </div>                
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default ContactForm;
