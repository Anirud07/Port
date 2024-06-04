import React from 'react';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-black">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-white mb-12 animate-pulse"><span className='text-red-500'>E</span>du<span className='text-red-500'>c</span>atio<span className='text-red-500'>n</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 10th */}
                    <div className="relative group">
                        <div className="bg-black rounded-lg overflow-hidden p-8 border-2 border-white hover:shadow-lg transition duration-300">
                            <h2 className="text-xl font-bold mb-4 text-white">10th Grade</h2>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-lg text-white mb-2">94%</p>
                                <p className="text-sm text-gray-400">Board: CBSE</p>
                                <p className="text-sm text-gray-400">School: S.R. Century Public School</p>
                                <p className="text-sm text-gray-400">Year: 2019</p>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex justify-center items-center">

                            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                                <h3 className="text-lg font-semibold mb-2">Subject-wise Marks</h3>
                                <ul className="text-gray-700">
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">English:</span>
                                        <span className="text-red-500">86</span>
                                    </li>
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Hindi:</span>
                                        <span className="text-red-500">98</span>
                                    </li>
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Mathematics:</span>
                                        <span className="text-red-500">95</span>
                                    </li>
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Science:</span>
                                        <span className="text-red-500">95</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="mr-2">Social Science:</span>
                                        <span className="text-red-500">96</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* 12th */}
                    <div className="relative group">
                        <div className="bg-black rounded-lg overflow-hidden p-8 border-2 border-white hover:shadow-lg transition duration-300">
                            <h2 className="text-xl font-bold mb-4 text-white">12th Grade (Science Stream)</h2>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-lg text-white mb-2">93.2%</p>
                                <p className="text-sm text-gray-400">Board: CBSE</p>
                                <p className="text-sm text-gray-400">School: S.R. Century Public School</p>
                                <p className="text-sm text-gray-400">Year: 2021</p>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                                <h3 className="text-lg font-semibold mb-2">Subject-wise Marks</h3>
                                <ul className="text-gray-700">
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">English:</span>
                                        <span className="text-red-500">95</span>
                                    </li>
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Physics:</span>
                                        <span className="text-red-500">92</span>
                                    </li>
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Chemistry:</span>
                                        <span className="text-red-500">94</span>
                                    </li>
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Mathematics:</span>
                                        <span className="text-red-500">94</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="mr-2">Computer Science:</span>
                                        <span className="text-red-500">91</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* College */}
                    <div className="relative group">
                        <div className="bg-black rounded-lg overflow-hidden p-8 border-2 border-white hover:shadow-lg transition duration-300">
                            <h2 className="text-xl font-bold mb-4 text-white">B.Tech in Information Technology</h2>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-lg text-white mb-2">Current CGPA: 9.273</p>
                                <p className="text-sm text-gray-400">Duration: 2021 - 2025</p>
                                <p className="text-sm text-gray-400">University: Guru Gobind Singh Indraprastha University</p>
                                <p className="text-sm text-gray-400">Campus: Guru Tegh Bahadur Institute Of Technology</p>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                                <h3 className="text-lg font-semibold mb-2">Semester-wise CGPA</h3>
                                <ul className="text-gray-700">
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Sem 1:</span>
                                        <span className="text-red-500">9.72</span>
                                    </li>
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Sem 2:</span>
                                        <span className="text-red-500">9.66</span>
                                    </li>
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Sem 3:</span>
                                        <span className="text-red-500">9.42</span>
                                    </li>
                                    <li className="flex justify-between items-center mb-2">
                                        <span className="mr-2">Sem 4:</span>
                                        <span className="text-red-500">9.20</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="mr-2">Sem 5:</span>
                                        <span className="text-red-500">9.27</span>
                                    </li>
                                </ul>
                            </div>
 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

