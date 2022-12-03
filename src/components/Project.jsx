import React from "react";
  const projects = [
    {
      name: 'Project 1',
      description: 'This is a project',
      image: 'https://picsum.photos/200/300',
      demo: 'https://www.google.com',
      code: 'https://www.google.com'
    },
    {
      name: 'Project 1',
      description: 'This is a project',
      image: 'https://picsum.photos/200/300',
      demo: 'https://www.google.com',
      code: 'https://www.google.com'
    },
    {
      name: 'Project 1',
      description: 'This is a project',
      image: 'https://picsum.photos/200/300',
      demo: 'https://www.google.com',
      code: 'https://www.google.com'
    },
  ]
 export default function Project() {
    return (
        <>
        {projects.map((x, i) => <div className="flex md:flex-row flex-col justify-around " key={i}>
         <div className="md:w-[30%] w-[100%]  p-5 pr-5 m-5 flex justify-center" ><img  src={x.image} alt="null"></img></div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">{x.name}</h1>
                <p className="text-lg">{x.description}</p>
                <a href={x.demo} className="text-lg text-blue-500">Demo</a>
                <a href={x.code} className="text-lg text-blue-500">Source Code</a>

            </div></div>) }
           
            
        
        </>
    );
} 