'use client';

import { React, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        mobile: ''
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const validate = () => {
        let formErrors = {};
        let valid = true;

        if (!formData.name.trim()) {
            formErrors.name = "Name is required";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            formErrors.email = "Email is required";
            valid = false;
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = "Invalid email format";
            valid = false;
        }

        if (!formData.subject.trim()) {
            formErrors.subject = "Subject is required";
            valid = false;
        }

        if (!formData.message.trim()) {
            formErrors.message = "Message is required";
            valid = false;
        }

        if (!formData.mobile.trim()) {
            formErrors.mobile = "Mobile number is required";
            valid = false;
        } else if (formData.mobile.length < 10) {
            formErrors.mobile = "Mobile number must be at least 10 digits";
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validate()) {
            setError(false);
            setSuccess(false);

            emailjs
                .sendForm(
                    `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
                    `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
                    form.current,
                    `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
                )
                .then(
                    () => {
                        setSuccess(true);
                        form.current.reset();
                        setFormData({
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                            mobile: ''
                        });
                    },
                    () => {
                        setError(true);
                    }
                );
        } else {
            setError(true);
        }
    };

    return (
        <motion.div
            className="h-full p-4 lg:p-16 bg-[#eaeff1] font-contact"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='flex flex-col lg:flex-row lg:px-20 justify-center items-center gap-8'>
                <form 
                    ref={form}
                    onSubmit={sendEmail}
                    className='lg:w-1/2 bg-white rounded-xl text-xl flex flex-col justify-center gap-4 p-8 shadow-lg'
                >
                    <span>Name</span>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        className='bg-transparent border-b-2 border-b-black outline-none'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}

                    <span>Email</span>
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter your email address'
                        className='bg-transparent border-b-2 border-b-black outline-none'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}

                    <span>Subject</span>
                    <input
                        type='text'
                        name='subject'
                        placeholder='Enter your subject'
                        className='bg-transparent border-b-2 border-b-black outline-none'
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    {errors.subject && <span className='text-red-500 text-sm'>{errors.subject}</span>}

                    <span>Message</span>
                    <textarea
                        rows={3}
                        name='message'
                        className='bg-transparent border-b-2 border-b-black outline-none resize-none'
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {errors.message && <span className='text-red-500 text-sm'>{errors.message}</span>}

                    <span>Mobile number</span>
                    <input
                        type='number'
                        name='mobile'
                        placeholder='Enter your mobile number'
                        className='bg-transparent border-b-2 border-b-black outline-none'
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && <span className='text-red-500 text-sm'>{errors.mobile}</span>}

                    <button
                        type='submit'
                        className='bg-purple-200 hover:bg-purple-600 rounded font-semibold text-gray-600 hover:text-gray-100 hover:ring-gray-100 transition-all duration-300 p-4'
                    >
                        Send
                    </button>

                    {success && <span className='text-green-500 font-semibold'>Your message was sent successfully</span>}
                    {error && <span className='text-red-500 font-semibold'>Please fill out all fields correctly</span>}
                </form>

                <div className='lg:w-1/2 flex flex-col items-left'>
                    <h2 className='text-2xl font-bold mb-4'>Locate Us</h2>
                    <div className='w-full h-0 pb-[56.25%] relative'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1815877.8119214675!2d76.99881193341419!3d27.26193221456775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736c33ec1f2ad5%3A0xfebd31be337e942e!2sBraj!5e0!3m2!1sen!2sin!4v1727025866811!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className='text-lg flex flex-col items-left justify-center gap-4 mt-4 font-description'>
                        <p><strong>Address:</strong> <br/>123 Main St, City, Country</p>
                        <p><strong>Phone:</strong> <br/>(123) 456-7890</p>
                        <p><strong>Email:</strong> <br/> info@example.com</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactUs;
