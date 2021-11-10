import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/f8e682c0-4261-11ec-ac2c-7b06ec3fa335";

require('dotenv').config();

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setSubmitted(true);
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

    if (submitted) {
        return (
          <>
            <h2>Thank you!</h2>
            <div>We'll be in touch soon.</div>
          </>
        );
      }

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
                            <form action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} target="_blank">
                                <div class="col-md-4 col-md-offset-2">
                                    <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required onBlur={handleChange} />
                                </div>
                                <div class="col-md-4">
                                    <input name="email" type="email" class="form-control" id="email" placeholder="Email..." required onBlur={handleChange} />
                                </div>
                                <div class="col-md-8 col-md-offset-2">
                                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required onBlur={handleChange} ></textarea>
                                </div>
                                <div class="col-md-8 col-md-offset-2">
                                   <button type="submit" id="form-submit" class="btn">Send Message</button>
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
