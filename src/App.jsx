// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './index.css';  // Importing index.css

function App() {
    return (
        <div className="App">
            <Navbar />
            <div> {/* Adjusted padding to avoid content overlap with fixed navbar */}
                <About />
                <Projects />
                <Skills />
                <Education />
                <Contact />
            </div>
        </div>
    );
}

export default App;
