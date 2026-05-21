import Image from "next/image";
import Link from "next/link";
import {Props} from "@/app/components/cards/project/props";

// TODO: ajouter le fait que ça ouvre une autre fenetre à la place de remplacer celle la.
export function ProjectCard({src, title, description, ctatitle, cta} : Props) {
    const isRemote = src.startsWith("http://") || src.startsWith("https://");

    return (
        <div className={"bg-white w-80 mx-auto flex flex-col items-center p-5 rounded-2xl lg:w-[70%] lg:flex-row lg:gap-6"}>
            {isRemote ? (
                <Image src={src} alt={title} height={300} width={300} className={"rounded-2xl hover:scale-105 transition-all duration-300"} unoptimized style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            ) : (
                <Image src={src} alt={title} height={300} width={300} className={"rounded-2xl hover:scale-105 transition-all duration-300"} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            )}
            <div className={'flex flex-col items-center lg:items-start'}>
                <h1 className={"text-main text-4xl font-bold mt-3 text-center lg:text-left"}>{title}</h1>

                <p className={"text-center my-3 lg:text-left"}>{description}</p>
                <Link href={`${cta}`} target={"_blank"} rel={'noopener noreferrer'} className={"bg-main text-white py-3 px-6 rounded-2xl"}>
                    {ctatitle}
                </Link>
            </div>


        </div>
    )
}