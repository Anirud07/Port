import React from 'react';

export default function Skills() {
    const skillGroups = [
        {
            title: 'Frontend Development {HTML, CSS, JS}',
            skills: [
                { name: 'HTML', icon: '/images/html.png' },
                { name: 'CSS', icon: '/images/css.png' },
                { name: 'JavaScript', icon: '/images/js.png' },
            ],
            certificatesLink: 'https://drive.google.com/file/d/1ndPRhHbuREcT7cayJX7LCoEZzTvr-F-P/view?usp=sharing',
        },
        {
            title: 'Backend Development {NodeJs, ExpressJS, MongoDb}',
            skills: [
                { name: 'Node.js', icon: '/images/node.png' },
                { name: 'Express.js', icon: '/images/express.png' },
                { name: 'MongoDB', icon: '/images/mongo.png' },
            ],
            certificatesLink: 'https://drive.google.com/file/d/1QEGEpM8mOZwGW973AvnwYdffPl8ooly_/view?usp=sharing',
        },
        {
            title: 'Advanced Frontend {ReactJs}',
            skills: [
                { name: 'React', icon: '/images/reactjs.png' },
            ],
            certificatesLink: 'https://drive.google.com/file/d/1zJsb7eqQgcaUdu-jtkZc5aL9_aHkZD20/view?usp=sharing',
        },
        {
            title: 'Data Structures in C++',
            skills: [
                { name: 'C++', icon: '/images/cpp.png' },
            ],
            certificatesLink: 'https://drive.google.com/file/d/13XGPILfUo5plTzK10UsKpj566-GvCzNW/view?usp=sharing',
        },
    ];

    return (
        <section id="skills" className="py-20 bg-black text-white">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10 animate-pulse">
                    <span className='text-red-500'>S</span>kill<span className='text-red-500'>s</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 ">
                    {skillGroups.map((group, index) => (
                        <div key={index} className="border-2 border-white bg-black rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 ">
                            <div className="flex flex-col items-center mb-4">
                                {group.skills.map((skill, i) => (
                                    <img key={i} src={skill.icon} alt={`${skill.name} icon`} className="w-16 h-16 mb-4"/>
                                ))}
                            </div>
                            <p className="text-lg font-semibold">{group.title}</p>
                            <a href={group.certificatesLink} target="_blank" rel="noopener noreferrer" className="mt-4 px-6 py-2 bg-red-500 rounded-lg text-white font-semibold hover:bg-red-600 transition duration-300">View Certificate</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

