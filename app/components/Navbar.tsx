import Image from "next/image"
import Link from "next/link";
import {FolderGit2, Glasses} from "lucide-react";


export default function Navbar() {
    return (
        <div className={"z-10 hidden md:relative md:w-full md:flex items-center justify-center pt-10 mb-10 gap-6"}>
                <Image src={"/feuille-icone.png"} alt={"feuille navbar"} width={40} height={40} />
                <Link href={"/services"}><p className={"text-3xl text-main"}>Services</p></Link>
                <Link href={"/"}> <Image src={"/epi-logo-tete.png"} alt={"buste epi"} width={110} height={110}/></Link>
                <Link href={"/projets"}><p className={"text-3xl text-main"}>Projets</p></Link>
                <Image src={"/feuille-icone.png"} alt={"feuille navbar"} width={40} height={40} className={"-scale-x-100 origin-center"}/>

            {/*TODO: rajouter les liens, pareil pour le footer (pour le mobile vu que il n'y a pas ces icones dans la nav mobile)*/}
            <Image src={"/discordicon.png"} alt={"Icone Discord"} height={50} width={50} className={"absolute left-10"}/>
            <Image src={"/githubicon.png"} alt={"Icone Discord"} height={50} width={50} className={"absolute left-25"}/>
        </div>
    )
}

export function MobileNavbar() {
    return (
        <div className={'fixed z-10 md:hidden flex items-center justify-center w-full bg-main bottom-0 p-3 gap-10 border-t-3'}>

                <Link href={"/services"}><Glasses color="#DADCD9" width={40} height={40} /></Link>
            <Link href={"/"}> <Image src={"/epi-logo-tete.png"} alt={"buste epi"} width={40} height={40}/></Link>
                <Link href={"/projets"}><FolderGit2 color="#DADCD9" width={40} height={40} /></Link>

        </div>
    )
}