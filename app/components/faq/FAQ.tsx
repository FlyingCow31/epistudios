"use client"

import {useState} from "react";
import {Plus} from "lucide-react";
import {Props} from "@/app/components/faq/props";

export function FAQ({ questions }: Props) {
    const [openIndex, setOpenIndex] = useState< number | null>(null);
    const toggle = (index: number) => {
        setOpenIndex(openIndex == index ? null : index)
    }

    return (
        <div className={'flex flex-col gap-6 w-80 mx-auto mb-10 lg:w-[60%]'}>
            {questions.map((quest, index) => {
                return(
                    <div key={index} className={`rounded-xl p-4 ${openIndex == index ? "bg-secdark" : "bg-sec" }`}>
                        <button type={"button"} className={'w-full flex font-bold'} onClick={() => toggle(index)}>
                            {quest.question}
                            <p className={`ml-auto inline-block transition-transform duration-120 ${openIndex == index ? "rotate-45 font-extrabold" : "rotate-0 font-normal"} `}><Plus className="text-main"/></p>
                        </button>

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