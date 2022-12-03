import './App.css';
import Header from './components/Header.jsx';
import Project from './components/Project.jsx';
import React from 'react'
import Contact from './components/Contact.jsx';
import Languages from './components/Languages';
import Education from './components/Education';
import Skills from './components/Skills';
function App() {

  return (
    <div className="App">
      <Header/>
    
      <div className="grid md:grid-cols-4 gap-4">
        <div className='  shadow-lg drop-shadow-lg border-[grey] rounded-lg  col-span-1 h-[100%] m-3 p-2'><Contact/><Education/><Languages/><Skills/></div>
        <div className="  shadow-lg drop-shadow-lg col-span-3 text-left m-5 p-2"><div className=""><h1 className='text-2xl'>Summary</h1><p>Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptas?</p></div>
        <h1 className='text-2xl'>Projects</h1><Project/></div>
      </div>
      <footer className="bg-[green] mt-5">footera/nasaddsadfadfadfafasfasfasdasd</footer>
    </div>
  );
}

export default App;
