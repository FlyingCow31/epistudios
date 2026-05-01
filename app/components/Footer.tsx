import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <section className={" py-3 bg-[url('/fond-feuilles-gris.jpg')] bg-cover bg-center flex flex-col items-center pb-30"}>
            <div className="flex flex-col items-center pb-3">
                <h1 className={"text-3xl text-main font-semibold"}>Informations</h1>
                <p>Association Loi 1901 créée le 24/08/2025.</p>
                <Link href={"/mentions"}><p>Mentions Légales</p></Link>
                <Link href={"/conditions"}><p>Conditions Générales de Vente</p></Link>
                <p>Contact en cas de réclamation:</p>
                <Link href={'mailto:contact@epistudios.fr'}>contact@epistudios.fr</Link>
                <p>Statuts disponibles sur demande. </p>
            </div>

            <Link href={"/"}> <Image src={"/epi-logo-tete.png"} alt={"buste epi"} width={110} height={110}/></Link>

            <div className={"flex flex-col items-center text-center pt-3"}>
                <h1 className={"text-3xl text-main font-semibold"}>Recrutements</h1>
                <p>Vous souhaitez nous rejoindre pour faire partie de l&#39;aventure ?</p>
                <p>Nous recherchons des graphistes, des développeurs et des CM!</p>
                <p>Pour plus d&#39;informations concernant les recrutements,</p>
                <Link href={"/recrutements"}><p>Rendez-vous sur cette page!</p> </Link>
                <Image src={"/discordicon.png"} alt={"Icone Discord"} height={50} width={50}/>
                <Image src={"/githubicon.png"} alt={"Icone Discord"} height={50} width={50}/>
            </div>
        </section>
    )
}