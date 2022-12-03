import React from "react";


export default function Languages() {
    return(
        <div className="  m-2 flex-col  justify-center md:justify-start text-left">
        <span><h1 className="text-2xl mb-2 font-bold">Languages</h1></span>
        <div className="flex flex-col gap-2"><span>Arabic عربي (Native)</span>
        <span>English (Advanced)</span>
        <span>Turkish Türkçe (Advanced)</span>
        <span>Japanese 日本語 (Advanced)</span>
        <span>German Deutch (Beginner)</span>
        </div>

        </div>
    )
}