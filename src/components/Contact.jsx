import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [statusType, setStatusType] = useState(''); // 'success' or 'error'

    // EmailJS Configuration - GANTI DENGAN DATA ANDA
    const EMAILJS_CONFIG = {
        serviceID: 'service_7wju0cu',      // Dari EmailJS Dashboard
        templateID: 'template_d1rd7mp',    // Dari EmailJS Templates
        publicKey: 'Tzez3gVMV_6ejQ2Nm'       // Dari EmailJS Account
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Import EmailJS dynamically
            const emailjs = await import('@emailjs/browser');
            
            // Template parameters yang akan dikirim ke email template
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: 'Rizki Jaelani Nugraha', // Nama Anda
            };

            // Kirim email menggunakan EmailJS
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.templateID,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            // Success
            setIsSubmitting(false);
            setStatusType('success');
            setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
        } catch (error) {
            // Error handling
            console.error('EmailJS Error:', error);
            setIsSubmitting(false);
            setStatusType('error');
            setSubmitStatus('Failed to send message. Please try again or contact me directly via social media.');
        }

        // Clear status after 5 seconds
        setTimeout(() => {
            setSubmitStatus('');
            setStatusType('');
        }, 5000);
    };

    const socialLinks = [
        {
            name: 'Instagram',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            url: 'https://instagram.com/rizki_jn',
            username: '@rizki_jn',
            color: 'hover:text-pink-400',
            bgColor: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
        },
        {
            name: 'WhatsApp',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
            ),
            url: 'https://wa.me/6285155209974',
            username: '+62 851-5520-9974',
            color: 'hover:text-green-400',
            bgColor: 'hover:bg-green-500'
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            url: 'https://www.linkedin.com/in/rizki-jaelani-nugraha-6550a0255/',
            username: 'Rizki Jaelani Nugraha',
            color: 'hover:text-blue-400',
            bgColor: 'hover:bg-blue-600'
        }
    ];

    return (
        <section id="contact" className="text-black bg-white pt-32 pb-96">
            <div className="max-w-[1240px] mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-black font-bold sm:text-2xl md:text-3xl lg:text-4xl mb-4">
                        GET IN TOUCH
                    </h2>
                    <p className="text-gray-500 max-w-[600px] mx-auto sm:text-lg md:text-xl">
                        Let's collaborate and bring your ideas to life. Feel free to reach out through any platform below or send me a message directly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info & Social Media */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-[#00df9a] mb-6">Let's Connect</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                I'm always excited to work on new projects and collaborate with amazing people. 
                                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                                I'd love to hear from you!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#00df9a] bg-opacity-20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#00df9a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-black font-medium">Email</p>
                                    <p className="text-gray-500">rizkijaelaninugraha11@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#00df9a] bg-opacity-20 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#00df9a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-black font-medium">Location</p>
                                    <p className="text-gray-500">Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h4 className="text-xl font-bold text-black mb-6">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative w-16 h-16 bg-black rounded-xl flex items-center justify-center 
                                                   transition-all duration-300 transform hover:scale-110 hover:shadow-lg 
                                                   ${social.bgColor} ${social.color}`}
                                        title={social.username}
                                    >
                                        <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                            {social.icon}
                                        </span>
                                        
                                        {/* Tooltip */}
                                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                                                        bg-black bg-opacity-80 text-white text-xs py-1 px-2 rounded 
                                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                                        whitespace-nowrap z-10">
                                            {social.username}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-black rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                        
                        {submitStatus && (
                            <div className={`mb-4 p-3 rounded-lg border ${
                                statusType === 'success' 
                                    ? 'bg-[#00df9a] bg-opacity-20 border-[#00df9a] text-[#00df9a]'
                                    : 'bg-red-500 bg-opacity-20 border-red-500 text-red-400'
                            }`}>
                                <div className="flex items-center space-x-2">
                                    {statusType === 'success' ? (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    <span>{submitStatus}</span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                                                   text-white placeholder-gray-400 focus:outline-none focus:border-[#00df9a] 
                                                   focus:ring-1 focus:ring-[#00df9a] transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                                                   text-white placeholder-gray-400 focus:outline-none focus:border-[#00df9a] 
                                                   focus:ring-1 focus:ring-[#00df9a] transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                                               text-white placeholder-gray-400 focus:outline-none focus:border-[#00df9a] 
                                               focus:ring-1 focus:ring-[#00df9a] transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                                               text-white placeholder-gray-400 focus:outline-none focus:border-[#00df9a] 
                                               focus:ring-1 focus:ring-[#00df9a] transition-colors resize-vertical"
                                    placeholder="Tell me about your project or just say hello!"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#00df9a] text-black py-3 px-6 rounded-lg font-bold 
                                           hover:bg-green-400 transition-colors duration-300 
                                           disabled:opacity-50 disabled:cursor-not-allowed
                                           transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;