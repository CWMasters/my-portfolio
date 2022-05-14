import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';


function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            // isValid conditional statement
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
          }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }  
    }
    
    
        return (
            <section>
                <h1 id="contact">Contact me</h1>
                <p className='contact-p'>Please feel free to email me with any questions or queries!</p>
                <form id="contact-form" onSubmit={handleSubmit}>
                    {/* name input */}
                    <div>
                        <label htmlFor="name">Name:</label>
                        <br></br>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    
                    {/* email input */}
                    <div>
                        <label htmlFor="email">Email:</label>
                        <br></br>
                        <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                    </div>
                    {/* message text area */}
                    <div>
                        <label htmlFor="message">Message:</label>
                        <br></br>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
    
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
    
                    <button id="sub-btn" type="submit">Submit</button>
                </form>
            </section>
        )
        //JSX
    }
    
    export default ContactForm;