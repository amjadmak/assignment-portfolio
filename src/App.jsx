import './App.css';
import Header from './components/Header.jsx';
import Project from './components/Project.jsx';
import React from 'react'
import Contact from './components/Contact.jsx';
import Languages from './components/Languages';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
function App() {

  return (
    <div className="App">
      <Header/>
    
      <div className="grid md:grid-cols-4 gap-4">
        <div className='  shadow-lg drop-shadow-lg border-[grey] rounded-lg  col-span-3  md:col-span-1 h-[100%] m-3 p-2'><Contact/> <div id="education"><Education/></div> <Languages/><div id="skills"><Skills/> </div></div>
        <div className="  shadow-lg drop-shadow-lg col-span-3 text-left m-5 p-2"><div className=""><h1 className='text-2xl font-bold text-center md:text-left'>Summary</h1><p className='p-10 pt-1 pl-0'>Interested in figuring out how things work. Despite being a
refugee, I learned and educated myself using all possible
resources. Besides academic education, I am a self-learner
and hard worker. I would like to improve myself and be a
Fullstack web developer in the future.</p>
</div>
        <h1 id='project' className='text-2xl font-bold text-center md:text-left mt-5'>Projects</h1><Project/></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
