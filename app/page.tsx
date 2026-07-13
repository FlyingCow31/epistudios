import Navbar, {MobileNavbar} from "@/app/components/navbar/Navbar";
import Link from "next/link";
import Footer from "@/app/components/footer/Footer";
import Image from "next/image";
import {ArrowRightIcon} from "lucide-react";
import React from "react";

export function StatueMain() {
    return(
        <div className={"hidden lg:block relative"}>
            <Image
                src={"/epi-logo-entier.png"}
                alt={"Buste EPI Entier"}
                height={400}
                width={400}
                className={"z-10 relative max-w-none"}
            />
            <Image
                src={"/groupe-feuilles-logo.png"} alt={"Buste EPI Entier"}
                height={500}
                width={500}
                className={"z-0 absolute -left-15 top-0 max-w-none animate-spin2"}/>
        </div>
    )
}

export default function Home() {
  return (
    <main className={'relative min-h-screen '}>
        <Navbar/>
        <MobileNavbar/>
        <div>
            <div className={"bg-sec mt-20 w-[90%] mx-auto p-5 rounded-[20px] pt-10 flex flex-col lg:flex-row"}>
                <StatueMain/>
                <div className={"lg:text-right"}>
                    <h1 className={"text-center text-5xl font-bold text-main lg:text-8xl lg:text-right"}>EPI STUDIO</h1>
                    <p className={"mt-3 text-xl text-main lg:text-2xl lg:w-[85%] lg:ml-auto"}>
                        Depuis 2025, EPI Studio crée et développe de nombreux projets de jeux-vidéos, Minecraft et web dans une
                        démarche <span className={"boldtext"}>associative de passion</span>. Nous accompagnons également des créateurs/trices dans leurs <span className={"boldtext"}>projets web </span>
                        ou graphique. Composée d&#39;une équipe de <span className={"boldtext"}>bénévole</span>, EPI Studio mets l&#39;accent sur <span className={"boldtext"}>la passion et
                    le plaisir à coder</span>.
                    </p>
                    <Link
                        href={"/projets"}
                        className="cursor-pointer mt-3 text-main text-lg underline lg:text-2xl w-full">
                        <div className="flex items-center justify-end gap-2 hover:translate-x-2 transition-all duration-300">
                            <p>Découvrir Epi Studio</p>
                            <ArrowRightIcon />
                        </div>
                    </Link>
                </div>

            </div>

            <section>

                <div className={'flex flex-col items-center'}>
                    <h1 className={"text-3xl mt-10 lg:text-4xl"}>Des statistiques</h1>
                    <p className={'text-center text-6xl text-main my-6 lg:text-8xl'} >↓</p>
                </div>

                <div className={" bg-[url('/fond-feuilles-beige.jpg')] bg-cover bg-center flex flex-col items-center lg:flex-row lg:justify-center"}>
                    <div className={"relative"}>
                        <Image src={"/Commandes-realisee-le-corenvers-flottant.png"} alt={"Commandes réalisées"} height={250} width={250}/>
                        <p className={"absolute inset-0 flex items-center justify-center text-8xl text-main font-extrabold"}>8</p>
                    </div>


                    <div className={"relative"}>
                        <Image src={"/membres-le-corenvers-flottant.png"} alt={"Commandes réalisées"} height={250} width={250}/>
                        <p className={"absolute inset-0 flex items-center justify-center text-8xl text-main font-extrabold"}>15</p>
                    </div>


                    <div  className={"relative"}>
                        <Image src={"/projets-open-sources-le-corenvers-flottant.png"} alt={"Commandes réalisées"} height={250} width={250}/>
                        <p className={"absolute inset-0 flex items-center justify-center text-8xl text-main font-extrabold"}>4</p>
                    </div>

                </div>

            </section>


            <section className={"lg:flex-row lg:flex lg:items-center lg:justify-center lg:gap-10"}>
                <div className={"lg:flex lg:flex-col lg:items-center"}>

                    <h1 className={"text-main text-center text-3xl mt-10"}>Un message du Président</h1>

                    <p className={"lg:text-lg lg:text-justify text-sm w-80 mx-auto text-center italic"}><span className={"text-2xl font-extrabold lg:text-4xl"}>&#34;</span>Bienvenue sur EPI Studio! Avec cette association, je veux pouvoir créer un environnement qui nous pousse à innover et à exercer notre passion -
                        hors de l&#39;espace de travail stressant.<span className={"text-2xl font-extrabold"}>&#34;</span> </p>
                </div>


                <div className={"flex gap-2 items-center text-center justify-center w-full my-6 lg:flex-col lg:w-fit "}>
                    <div className={"relative h-60 lg:w-60 ml-3 w-90"}>
                        <Image src={"/members/moi.jpeg"} alt={"Gaël Président"} fill className={"lg:flex lg:ml-0 rounded-[10px] object-cover shadow"}/>
                    </div>


                    <p className={'opacity-50'}>Gaël, fondateur de l&#39;association et développeur web</p>
                </div>
            </section>

            <section className={'mt-10'}>
                <h1 className={"text-main text-center text-3xl"}>Nos Partenaires</h1>
                <p className={'text-center text-xl'}>Merci à nos partenaires de faire fonctionner notre association!</p>

                <Link href={"https://hyperion.cloud/"} className={'block w-fit mx-auto'}>
                    <Image src={"hyperion-logo.svg"} alt={"Hyperion Logo"} height={400} width={400} className={'invert-100 my-6 hover:scale-105 transition-all duration-300'}/>
                </Link>

            </section>


            <Footer/>
        </div>


    </main>
  );
}
