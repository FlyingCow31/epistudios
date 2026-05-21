import Link from "next/link";
import {ArrowRightIcon} from "lucide-react";
import React from "react";

interface ButtonProps {
    path: string,
    name?: string
}

export function ServiceButton({path, name} : ButtonProps) {
    return (
        <Link href={path} className="lg:block lg:pl-3 lg:pb-3 lg:text-2xl bg-main p-3 text-white rounded-lg">
            <div className={'flex items-center gap-2'}>
                <p>{name || "En parler"}</p>
                <ArrowRightIcon/>
            </div>
        </Link>
    )
}