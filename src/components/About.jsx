import React, { useState, useEffect } from 'react';
import MyPhoto from '../assets/prf.png'; // Import your photo
import Resume from '../assets/resume.png'
export default function About() {
    const [typedText, setTypedText] = useState('');
    const textToType = "Motivated entrant with expertise in web development and C++ DSA, committed to pioneering inventive solutions.";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= textToType.length) {
                setTypedText(textToType.slice(0, currentIndex));
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container mx-auto flex items-center justify-center py-20 m-0 bg-black">
            <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-center">
                {/* Left side - Text */}
                <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0 text-center lg:text-left">
                    <h1 className="text-2xl lg:text-2xl font-bold mb-4 text-white">Hello, My name is</h1>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white hover:scale-125 transition-transform"><span className="text-red-500">Aniruddha Ghosh</span></h2>
                    <p className="text-sm lg:text-lg mb-8 text-white">{typedText}</p>
                    {/* <button className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-400 transition duration-300">Download CV</button> */}
                    <button className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-400 transition duration-300">
                        <a href={Resume} target="_blank" rel="noopener noreferrer" download>Download CV</a>
                    </button>

                </div>
                {/* Right side - Photo */}
                <div className="lg:w-1/2 lg:mb-0">
                    <img src={MyPhoto} alt="Aniruddha Ghosh" className="rounded-lg shadow-lg w-full lg:w-auto mb-0" />
                </div>
            </div>
        </section>
    );
}
