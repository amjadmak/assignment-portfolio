import React from "react";
import lets from '../images/lets-share.jpeg' 
import abanon from '../images/abanon.png' 
import omg from '../images/omg.png' 
  const projects = [
    {
      name: `Let's Share`,
      description: `Extensive website was created to help people in need by
      connecting them with other people who want to donate
      their used goods. The main used technologies were NEXT.JS
      and TailWind CSS. This project was done by a team
      consisting of 5 members.`,
      image: lets,
      demo: 'https://lets-share-proj.netlify.app/',
      code: 'https://github.com/ReCoded-Org/lets-share-capstone-project'
    },
    {
      name: 'Abanon E-commerce',
      description: `Simple E-commerce website created using React and
      styled with MUI. Technologies such as react-router and
      ReactQuery were also used.`,
      image: abanon,
      demo: 'https://react-abanon-ecommerce.netlify.app/',
      code: 'https://github.com/amjadmak/eCommerce-react'
    },
    {
      name: 'OMG Movies',
      description: `Extensive movies-related website created with JS and uses
      external API`,
      image: omg,
      demo: 'https://amjadmak.github.io/OMGmovie/',
      code: 'https://github.com/amjadmak/OMGmovie'
    },
  ]
 export default function Project() {
    return (
        <>
        {projects.map((x, i) => <div className="flex md:flex-row flex-col-reverse mb-5 justify-between " key={i}>
         <div className="p-3 m-5 flex justify-center" ><img src={x.image}  alt="null"/></div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">{x.name}</h1>
                <div className="text-sm p-5">{x.description}</div>
                <div className="flex gap-5 p-2 m-1">
                <a href={x.demo} className="text-md bg-black opacity-70 hover:opacity-100 rounded-full p-2 text-blue-500">Demo</a>
                <a href={x.code} className="text-md  bg-black opacity-70 hover:opacity-100 rounded-full p-2 text-blue-500">Source Code</a></div>

            </div></div>) }
           
            
        
        </>
    );
} 