import React, { useState } from 'react';
import "./Contact.css";


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (name && email && message)
             {
            console.log('Form submitted:', formData);

            // Set the form as submitted and reset the form data
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } 
        else
         {
            alert('Please fill all fields.');
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            {isSubmitted ? (
                <div className="success-message">
                    <h2>Thank you for reaching out!</h2>
                    <p>We will get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            
                        />
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
}

export default Contact;
