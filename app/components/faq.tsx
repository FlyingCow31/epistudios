"use client"
import {useState} from "react";

const services = [
    {
        question: "Question ?",
        answer: "answer."
    },
    {
        question: "Question ?",
        answer: "answer."
    },
    {
        question: "Question ?",
        answer: "answer."
    }
]
export function FaqServices() {
    // Créer un state avec une fonction qui prends soit un number soit rien
    const [openIndex, setOpenIndex] = useState< number | null>(null);
    // Prends un index (nombre) et set l'openIndex avec ce nombre, sauf si l'index et le nombre sont pareils
    const toggle = (Index: number) => {
        setOpenIndex(openIndex == Index ? null : Index)
    }

    // TODO: rajouter une animation sur le x et + (+ qui tourne)
    return (
        <div className={'flex flex-col gap-6 w-80 mx-auto mb-10'}>
            {services.map((quest, index) => {
                return(
                    <div key={index} className={'bg-sec rounded-xl p-4'}>
                        <button className={'w-full flex  font-bold'} onClick={() => toggle(index)}>
                            {quest.question}
                            <p className={" ml-auto"}>{openIndex == index ? "x" : "+"}</p>
                        </button>
                        {/*Si l'index est pareil que l'open index, alors on ouvre la div*/}
                        {openIndex == index && (
                            <div className={'mt-3 text-sm'}>
                                {quest.answer}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}