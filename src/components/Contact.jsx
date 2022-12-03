import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import {BsGlobe} from "react-icons/bs"
import {BsTelephoneInbound} from "react-icons/bs"
import {BsEnvelope} from "react-icons/bs"

export default function Contact() {

    return(
        <>
        <div className="flex flex-col">
            <div className="bg-[#30afff] h-20 flex justify-center items-center rounded-t-xl">Amjad Maqsouma</div>
            <span className="p-2 hover:bg-[#696969] rounded-xl text-sm"><a href="mailto:amjad.maksuma@gmail.com" className="flex  gap-10 items-center"><BsEnvelope/>amjad.maksuma@gmail</a></span>
            <span className="p-2 hover:bg-[#696969] rounded-xl text-sm" ><a href="tel:+905398696815" className="flex  gap-10 items-center"><BsTelephoneInbound/>+90 5398696815</a></span>
            <span className="p-2 hover:bg-[#696969] rounded-xl text-sm" ><a href="https://amjadmak.github.io/Potfolio-site/" className="flex  gap-10 items-center"><BsGlobe/>Main Portfolio Website</a></span>
            <span className="p-2 hover:bg-[#696969] rounded-xl text-sm" ><a href="https://www.linkedin.com/in/amjad-maqsouma-54bb91234/" className="flex  gap-10 items-center"><AiFillLinkedin/>amjad-maqsouma</a></span>
            <span className="p-2 hover:bg-[#696969] rounded-xl text-sm" ><a href="https://github.com/amjadmak" className="flex  gap-10 items-center"><AiFillGithub/>amjadmak</a></span>
        </div>
        </>
    )
}