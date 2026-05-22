import {InputTextForm} from "@/app/components/forms/input/InputTextForm";
import React from "react";
import {Props} from "@/app/components/forms/specialise/props";
import {Questions} from "@/app/components/forms/specialise/questions";

export function SpecialiseForm({choix}: Props) {
    const array = Questions[choix];
    return (
        <>
            {array.map((quest) => {
                return (
                    <InputTextForm key={quest.name} {...quest}/>
                )
            })}
        </>
    )
}