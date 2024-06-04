import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10 animate-pulse"><span className='text-red-500'>C</span>ontact <span className='text-red-500'>M</span>e</h1>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                    {/* Left side - Form */}
                    <div className="md:w-1/2 w-full px-4 mb-8 md:mb-0">
                        <form className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                <input type="text" id="name" className="w-full p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input type="email" id="email" className="w-full p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea id="message" className="w-full p-3 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300" rows="5"></textarea>
                            </div>
                            <button type="submit" className="w-full p-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">Send Message</button>
                        </form>
                    </div>
                    {/* Right side - Contact Info */}
                    <div className="md:w-1/2 w-full px-4">
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg h-full flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-500">
                            <p className="text-lg mb-4">Email: <a href="mailto:anirud728@gmail.com" className="text-red-500 hover:text-red-400 transition duration-300">MAIL HERE</a></p>
                            <p className="text-lg mb-4">LinkedIn: <a href="https://www.linkedin.com/in/aniruddha-ghosh-34b1a4244/" className="text-red-500 hover:text-red-400 transition duration-300" target="_blank" rel="noopener noreferrer">VISIT</a></p>
                            <p className="text-lg mb-4">GitHub: <a href="https://github.com/Anirud07" className="text-red-500 hover:text-red-400 transition duration-300" target="_blank" rel="noopener noreferrer">Visit</a></p>
                            <p className="text-lg mb-4">Instagram: <a href="https://www.instagram.com/aniruddhaghosh__07/" className="text-red-500 hover:text-red-400 transition duration-300" target="_blank" rel="noopener noreferrer">VISIT</a></p>
                            <div className="flex space-x-4 mt-6">
                                <a href="https://www.linkedin.com/in/aniruddha-ghosh-34b1a4244/" target="_blank" className="text-gray-300 hover:text-red-500 transition duration-300 transform hover:scale-110">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 12.25h-3v-5.5c0-1.12-.89-2-2-2s-2 .88-2 2v5.5h-3v-11h3v1.5c1.11-1.5 3-1.5 4.5 0v-1.5h3v11z"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/Anirud07" target="_blank" className="text-gray-300 hover:text-red-500 transition duration-300 transform hover:scale-110">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.31 3.43 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.22c-3.34.73-4.04-1.65-4.04-1.65-.54-1.39-1.32-1.76-1.32-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.82 1.3 3.51.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.29 1.23.95-.27 1.96-.4 2.97-.4s2.02.14 2.97.4c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.92 1.23 3.23 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.3c0 .31.21.69.82.58 4.78-1.59 8.21-6.08 8.21-11.39 0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/aniruddhaghosh__07/" target="_blank" className="text-gray-300 hover:text-red-500 transition duration-300 transform hover:scale-110">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.81.24 2.23.4.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.4 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.81-.4 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.23.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.24-2.23-.4-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.35-1.06-.4-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.81.4-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.23-.4 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.24 0-3.65.01-4.92.07-1.25.06-2.11.26-2.85.55-.78.31-1.45.73-2.12 1.4-.67.67-1.09 1.34-1.4 2.12-.29.74-.49 1.6-.55 2.85-.06 1.27-.07 1.68-.07 4.92s.01 3.65.07 4.92c.06 1.25.26 2.11.55 2.85.31.78.73 1.45 1.4 2.12.67.67 1.34 1.09 2.12 1.4.74.29 1.6.49 2.85.55 1.27.06 1.68.07 4.92.07s3.65-.01 4.92-.07c1.25-.06 2.11-.26 2.85-.55.78-.31 1.45-.73 2.12-1.4.67-.67 1.09-1.34 1.4-2.12.29-.74.49-1.6.55-2.85.06-1.27.07-1.68.07-4.92s-.01-3.65-.07-4.92c-.06-1.25-.26-2.11-.55-2.85-.31-.78-.73-1.45-1.4-2.12-.67-.67-1.34-1.09-2.12-1.4-.74-.29-1.6-.49-2.85-.55-1.27-.06-1.68-.07-4.92-.07zm0 5.84c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10.32c-2.39 0-4.32-1.93-4.32-4.32s1.93-4.32 4.32-4.32 4.32 1.93 4.32 4.32-1.93 4.32-4.32 4.32zm6.38-11.06c0 .8-.65 1.45-1.45 1.45s-1.45-.65-1.45-1.45.65-1.45 1.45-1.45 1.45.65 1.45 1.45z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
