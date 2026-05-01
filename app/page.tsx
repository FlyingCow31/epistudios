import Navbar, {MobileNavbar} from "@/app/components/Navbar";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <main className={'relative min-h-screen '}>
        <Navbar/>
        <MobileNavbar/>
        <div>
            <div className={"bg-sec mt-20 w-[90%] mx-auto p-5 rounded-[20px] pt-10"}>
                <h1 className={"text-center text-5xl font-bold text-main"}>EPI STUDIO</h1>
                <p className={"mt-3 text-xl text-main"}>
                    Depuis 2025, EPI Studio crée et développe de nombreux projets de jeux-vidéos, Minecraft et web dans une
                    démarche <span className={"boldtext"}>associative de passion</span>. Nous accompagnons également des créateurs/trices dans leurs <span className={"boldtext"}>projets web </span>
                     ou graphique. Composée d&#39;une équipe de <span className={"boldtext"}>bénévole</span>, EPI Studio mets l&#39;accent sur <span className={"boldtext"}>la passion et
                    le plaisir à coder</span>.
                </p>
                <Link href={"/projets"} className={"w-full"}>
                    <button className={"mt-3 text-right w-full text-main text-lg underline"}>Découvrir EPI Studio →</button>
                </Link>
            </div>

            <section>
                <div className={'flex flex-col items-center'}>
                    <h1 className={"text-3xl mt-10"}>Des statistiques</h1>
                    <p className={'text-center text-6xl text-main my-6'} >↓</p>
                </div>
                <div className={" bg-[url('/fond-feuilles-beige.jpg')] bg-cover bg-center flex flex-col items-center"}>
                    <div className={"relative"}>
                        <Image src={"/Commandes-realisee-image.png"} alt={"Commandes réalisées"} height={250} width={250}/>
                        <p className={"absolute inset-0 flex items-center justify-center text-8xl text-main font-extrabold"}>8</p>
                    </div>


                    <div className={"relative"}>
                        <Image src={"/membres-image.png"} alt={"Commandes réalisées"} height={250} width={250}/>
                        <p className={"absolute inset-0 flex items-center justify-center text-8xl text-main font-extrabold"}>15</p>
                    </div>


                    <div  className={"relative"}>
                        <Image src={"/projets-open-sources-image.png"} alt={"Commandes réalisées"} height={250} width={250}/>
                        <p className={"absolute inset-0 flex items-center justify-center text-8xl text-main font-extrabold"}>4</p>
                    </div>

                </div>
            </section>
            <section>
                <h1 className={"text-main text-center text-3xl mt-10"}>Un message du Président</h1>

                <p className={"text-sm w-80 mx-auto text-center italic"}><span className={"text-2xl font-extrabold"}>&#34;</span>Bienvenue sur EPI Studio! Avec cette association, je veux pouvoir créer un environnement qui nous pousse à innover et à exercer notre passion -
                    hors de l&#39;espace de travail stressant.<span className={"text-2xl font-extrabold"}>&#34;</span> </p>

                <div className={"flex gap-2 items-center text-center justify-center w-full my-6"}>
                    <Image src={"/moi.jpeg"} alt={"Gaël Président"} height={100} width={100} className={"flex-1 ml-10 rounded-2xl"}/>
                    <p>Gaël, fondateur de l&#39;association et développeur web</p>
                </div>
            </section>

            {/*TODO: ajouter le partenariat avec Hyperion*/}

            <Footer/>
        </div>


    </main>
  );
}
