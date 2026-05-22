import Image from "next/image";
import Link from "next/link";
import {FaLink} from "react-icons/fa";
import {Props} from "@/app/components/cards/portfolio/props";

export default function PortfolioCard({src, alt, title, description, mainfeat, descfeat, tags, link}: Props) {
    return (
        <div className={'w-[80%] mx-auto bg-white p-3 rounded-xl shadow lg:w-full'}>
            <div className={'relative h-50 w-full lg:h-70'}>
                <Image src={src} alt={alt} fill className={'object-fit'}/>
            </div>
            <div>
                <p className={'text-3xl mt-3 text-main font-bold'}>{title}</p>
                <p className={' text-justify opacity-70'}>
                    {description}
                </p>
                <p className={'mt-3 font-bold text-main text-lg'}>{mainfeat}</p>
                <p className={' text-justify opacity-50'}>
                    {descfeat}
                </p>
                <div className={'mt-6 flex flex-row flex-wrap gap-3'}>
                    {tags?.map((tag, index) => {
                        return (
                            <div key={index} className={'bg-main px-4 py-1 rounded shadow'}>
                                <p className={'text-white'}>{tag}</p>
                            </div>
                        )
                    })}
                </div>

                {link && (
                    <div className="py-5 flex flex-col gap-2">
                        <Link
                            href={link}
                            className="flex items-center gap-2 w-fit">
                            <FaLink className="text-main"/>

                            <p className="underline">
                                {link}
                            </p>
                        </Link>
                    </div>
                )}
                <Link href={"/contact"} className={'mt-1'}>
                    <p className={'mt-1 bg-main shadow py-2 w-full text-center rounded text-white'}>Nous contacter</p>
                </Link>

            </div>

        </div>
    )
}