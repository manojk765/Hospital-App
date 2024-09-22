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

    const text = "Get In touch with us";

    return (
        <motion.div
            className="h-full p-16 bg-gradient-to-br from-purple-50 to-pink-50"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center items-center gap-8'>
                <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
                    <div>
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 10,
                                    delay: index * 0.3,
                                    repeat: Infinity,
                                }}
                                style={{ display: "inline-block" }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </div>
                <form 
                    ref={form}
                    onSubmit={sendEmail}
                    className='h-1/2 lg:h-full lg:w-1/2 bg-white rounded-xl text-xl flex flex-col justify-center gap-8 p-16'
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

                    <span>Mail</span>
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
            </div>
        </motion.div>
    );
};

export default ContactUs;
