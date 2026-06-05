import {Props} from "@/app/components/cards/portfolio/galleries/props";

export default function PortfolioGalleyCard({src, alt}: Props) {
    return (
        <div className={'break-inside-avoid'}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className={'mb-4 w-full rounded-lg object-cover hover:scale-105 transition-all duration-300'}/>
        </div>
    )
}