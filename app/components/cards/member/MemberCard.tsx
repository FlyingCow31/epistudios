import Image from "next/image";
import {Props} from "@/app/components/cards/member/props";

export function MemberCard({src, name, title, description}: Props) {
    return (
        <div className={"bg-white w-80 mx-auto flex flex-col items-center p-5 rounded-2xl lg:w-[100%]"}>
            <Image src={src} alt={title} height={200} width={200} className={"rounded-2xl hover:scale-105 transition-all duration-300"} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <h1 className={"text-main text-4xl font-bold mt-3 text-center"}>{name}</h1>
            <p className={"text-xl opacity-40 text-center font-semibold"}>{title}</p>
            <p className={"text-center my-3 "}>{description}</p>
        </div>
    )
}