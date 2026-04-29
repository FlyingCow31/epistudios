import Image from "next/image"
import Link from "next/link";
import {FolderGit2, Glasses} from "lucide-react";


export default function Navbar() {
    return (
        <div className={"hidden relative w-full md:flex items-center justify-center pt-10 mb-10 gap-6"}>
                <Image src={"/feuille-icone.png"} alt={"feuille navbar"} width={40} height={40} />
                <Link href={"/services"}><p className={"text-3xl text-main"}>Services</p></Link>
                <Image src={"/epi-logo-tete.png"} alt={"buste epi"} width={110} height={110}/>
                <Link href={"/projets"}><p className={"text-3xl text-main"}>Projets</p></Link>
                <Image src={"/feuille-icone.png"} alt={"feuille navbar"} width={40} height={40} className={"-scale-x-100 origin-center"}/>

            <Image src={"/discordicon.png"} alt={"Icone Discord"} height={50} width={50} className={"absolute left-10"}/>
            <Image src={"/githubicon.png"} alt={"Icone Discord"} height={50} width={50} className={"absolute left-25"}/>
        </div>
    )
}

export function MobileNavbar() {
    return (
        <div className={'md:hidden flex items-center justify-center absolute w-full bg-main bottom-0 p-3 gap-10 border-t-3'}>

                <Link href={"/services"}><Glasses color="#DADCD9" width={40} height={40} /></Link>
                <Link href={"/projects"}><FolderGit2 color="#DADCD9" width={40} height={40} /></Link>

        </div>
    )
}