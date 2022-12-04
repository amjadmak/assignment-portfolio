import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
    return (

        <div className="mt-10 h-[50%] bg-[#1d6e94]">
            <div className="flex flex-col gap-2 md:flex-row md:justify-evenly justify-center items-center p-5 h-full">
                <div className="flex flex-col "><p className="font-bold">Address</p><p>Kocaeli,Turkey</p></div>
                <div className="flex flex-col"><p className="font-bold">All Rights Reversed® </p><p> Amjad Maqsouma</p></div>
                <div className="flex flex-col justify-center"><p className="font-bold">Follow Me On</p><div className="flex justify-center gap-4 mt-2 text-2xl"><a href="https://github.com/amjadmak"><AiFillGithub className="opacity-80 hover:opacity-100"/></a><a href="https://www.linkedin.com/in/amjad-maqsouma-54bb91234/"><AiFillLinkedin className="opacity-80 hover:opacity-100"/></a></div></div>
            </div>
</div>)
}