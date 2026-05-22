import Link from "next/link";
import {ArrowRightIcon} from "lucide-react";
import React from "react";
import {Props} from "@/app/components/buttons/service/props";

export function ServiceButton({path, name} : Props) {
    return (
        <Link href={path} className=" lg:block lg:pl-3 lg:pb-3 lg:text-2xl bg-main p-3 text-white rounded-lg group">
            <div className={'flex items-center gap-2 group-hover:translate-x-[2%] transition-all duration-300'}>
                <p>{name || "En parler"}</p>
                <ArrowRightIcon/>
            </div>
        </Link>
    )
}