'use client';

import {Props} from "@/app/components/cards/portfolio/galleries/props";
import {useState} from "react";
import { X, Link } from "lucide-react"

export default function PortfolioGalleyCard({src, alt, credit, description, link}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={'break-inside-avoid'}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={alt}
                className={'mb-4 w-full rounded-lg object-cover hover:scale-105 transition-all duration-300 cursor-pointer'}
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="relative max-w-4xl w-full flex flex-col items-center">
                        <button
                            className="absolute top-[-40px] right-0 text-sec text-3xl font-bold hover:text-secdark duration-300 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            <X/>
                        </button>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={src}
                            alt={alt}
                            className="max-h-[80vh] w-auto rounded-lg"
                        />
                        <div className="mt-4 text-center text-sec">
                            {credit && (
                                <p>
                                    Auteur(s) : {credit}
                                </p>
                            )}
                            {description && (
                                <p>
                                    {description}
                                </p>
                            )}
                            {link && (
                                <a className="flex items-center justify-center gap-2 mt-4" href={link}><Link/> {link}</a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}