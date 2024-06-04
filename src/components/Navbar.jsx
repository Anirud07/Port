import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to check if a section is in view
    const isInView = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    };

    return (
        <nav className="bg-black p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#about" className={`text-white ml-28 text-2xl font-bold ${isInView('about') ? 'text-red-500' : ''}`}><span className='text-red-500'>M</span>y <span className='text-red-500'>P</span>ort<span className='text-red-500'>f</span>olio <span className='text-red-500'>.</span></a>
                <div className="hidden md:flex space-x-4">
                    <a href="#about" className={`text-white px-4 py-2 rounded hover:text-red-500 transition duration-300 ${isInView('about') ? 'text-red-500' : ''}`}>About</a>
                    <a href="#projects" className={`text-white px-4 py-2 rounded hover:text-red-500 transition duration-300 ${isInView('projects') ? 'text-red-500' : ''}`}>Projects</a>

                    <a href="#skills" className={`text-white px-4 py-2 rounded hover:text-red-500 transition duration-300 ${isInView('projects') ? 'text-red-500' : ''}`}>Skills</a>


                    <a href="#education" className={`text-white px-4 py-2 rounded hover:text-red-500 transition duration-300 ${isInView('projects') ? 'text-red-500' : ''}`}>Education</a>
                    
                    <a href="#contact" className={`text-white px-4 py-2 rounded hover:text-red-500 transition duration-300 ${isInView('contact') ? 'text-red-500' : ''}`}>Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <a href="#about" className={`block text-white px-4 py-2 rounded hover:text-red-500 transition duration-300 ${isInView('about') ? 'text-red-500' : ''}`}>About</a>
                    <a href="#projects" className={`block text-white px-4 py-2 rounded hover:text-red-500 transition duration-300 ${isInView('projects') ? 'text-red-500' : ''}`}>Projects</a>
                    <a href="#education" className={`block text-white px-4 py-2 rounded hover:text-red-500 transition duration-300 ${isInView('projects') ? 'text-red-500' : ''}`}>Education</a>
                    <a href="#contact" className={`block text-white px-4 py-2 rounded hover:text-red-500 transition duration-300 ${isInView('contact') ? 'text-red-500' : ''}`}>Contact</a>
                </div>
            )}
        </nav>
    );
}
