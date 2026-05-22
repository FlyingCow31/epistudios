"use client"

import {useState} from "react";
import ServicesList from "@/app/data/faq/services";
import {Plus} from "lucide-react";

export function ServicesFAQ() {
    // Créer un state avec une fonction qui prends soit un number soit rien
    const [openIndex, setOpenIndex] = useState< number | null>(null);
    // Prends un index (nombre) et set l'openIndex avec ce nombre, sauf si l'index et le nombre sont pareils
    const toggle = (Index: number) => {
        setOpenIndex(openIndex == Index ? null : Index)
    }

    return (
        <div className={'flex flex-col gap-6 w-80 mx-auto mb-10 lg:w-[60%]'}>
            {ServicesList.map((quest, index) => {
                    return(
                        <div key={index} className={`rounded-xl p-4 ${openIndex == index ? "bg-secdark" : "bg-sec" }`}>
                    <button className={'w-full flex font-bold'} onClick={() => toggle(index)}>
                    {quest.question}
                    <p className={`ml-auto inline-block transition-transform duration-120 ${openIndex == index ? "rotate-45 font-extrabold" : "rotate-0 font-normal"} `}><Plus className="text-main"/></p>
                        </button>

                    {/*Si l'index est pareil que l'open index, alors on ouvre la div*/}
                    {openIndex == index && (
                        <div className={'mt-3 text-sm whitespace-pre-wrap'}>
                            {quest.answer}
                            </div>
                    )}
                    </div>
                )
                })}
            </div>
    )
}