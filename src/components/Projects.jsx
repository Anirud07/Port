import React from 'react';
import Project1Image from '../assets/prj1.png'; // Import image for project 1
import Project2Image from '../assets/prj2.png'; // Import image for project 2
import Project3Image from '../assets/prj3.png'; // Import image for project 3

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-black">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-white mb-10 animate-pulse"><span className='text-red-500'>M</span>y <span className='text-red-500'>P</span>roject<span className='text-red-500'>s</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Project 1 */}
                    <div className="rounded-lg overflow-hidden bg-black">
                        <img src={Project1Image} alt="Project 1" className="w-full h-auto transition-transform duration-300 transform hover:scale-110" />
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-bold mb-2 text-white">IPOD</h2>
                            <p className='text-white'><a href="https://anirud07.github.io/Ipod/" className="text-red-500" target="_blank" rel="noopener noreferrer">Visit</a></p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="rounded-lg overflow-hidden bg-black">
                        <img src={Project2Image} alt="Project 2" className="w-full h-auto transition-transform duration-300 transform hover:scale-110" />
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-bold mb-2 text-white">PHOTO ALBUM</h2>
                            <p className='text-white'><a href="https://anirud07.github.io/Album/" className="text-red-500" target="_blank" rel="noopener noreferrer">Visit</a></p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="rounded-lg overflow-hidden bg-black">
                        <img src={Project3Image} alt="Project 3" className="w-full h-auto transition-transform duration-300 transform hover:scale-110" />
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-bold mb-2 text-white">Netflix Clone</h2>
                            <p className='text-white'><a href="https://anirud07.github.io/NetflixClone/" className="text-red-500" target="_blank" rel="noopener noreferrer">Visit</a></p>
                        </div>
                    </div>

                    {/* Add more project */}
                    
                    
                </div>
            </div>
        </section>
    );
}
