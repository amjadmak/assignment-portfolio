import React from "react";
import {FaCircle} from 'react-icons/fa'
export default function Skill() {
    return (
        <div className="  m-2 flex-col  justify-center md:justify-start text-left">
        <span>
            <h1 className="text-2xl mb-2 font-bold">Skills</h1>
        </span>
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Technical Skills</h1>
            <span className="">- HTML/CSS/JS</span>
            <span>- React/Next.js</span>
            <span>- TailWindCSS/Bootstrap</span>
            <h1 className="text-2xl">Soft Skills</h1>
            <span className="">- Communication Skills</span>
            <span>- Multi-cultural environment</span>
            <span>- Time managment</span>
        </div>
        </div>
    );
}