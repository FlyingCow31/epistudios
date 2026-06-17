import Image from "next/image";
import Link from "next/link";
import {FaLink} from "react-icons/fa";
import {Props} from "@/app/components/cards/portfolio/projects/props";

export default function PortfolioProjectCard({src, alt, title, description, mainfeat, descfeat, tags, link}: Props) {

    const isYoutube = (src: string) => {
        return /youtube\.com|youtu\.be/i.test(src);
    };

    function getYoutubeEmbedUrl(url: string) {
        const match = url.match(
            /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/i
        );

        return match
            ? `https://www.youtube.com/embed/${match[1]}`
            : url;
    }

    return (
        <div className={'bg-main/10 p-3 rounded-xl shadow'}>
            <div>
                {
                    isYoutube(src) ? (
                        <iframe
                            src={getYoutubeEmbedUrl(src)}
                            className="w-full h-full object-cover rounded-xl aspect-video"
                            allowFullScreen
                        />
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    )
                }
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