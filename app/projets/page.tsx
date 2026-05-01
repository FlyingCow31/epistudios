import Navbar, {MobileNavbar} from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectCard, {MembersCard} from "@/app/components/projet";
import MembresList from "@/app/data/membres";
import Link from "next/link";

const projects = [
    {
        src: "https://placehold.co/600x400?text=?",
        title: "Projet Mystère...",
        description: "Un projet mystère en développement qui arrive très bientôt... Qui sait, peut-être qu'un indice est caché quelque part... ",
        ctatitle: "Retour à l'accueil",
        cta: "/"
    },
    {
        src: "/projectsicons/Moud.png",
        title: "Moud",
        description: "Un Engine révolutionnaire Typescript pour créer des jeux à l'intérieur même de minecraft. Créez facilement vos jeux vidéos avec de la logique serveur, de la modelistation et beaucoup d'autres features, et tout ça gratuitement! ",
        ctatitle: "Essayer gratuitement",
        cta: "https://moud.epistudios.fr/"
    },
    {
        src: "/projectsicons/meekup-logo.png",
        title: "Meekup",
        description: "Un site d'upload de fichiers fait avec un backend en Flask. ",
        ctatitle: "Essayer gratuitement",
        cta: "https://github.com/EPI-Studios/Meekup"
    }
]


export default function Projects() {
    return (
        <div>
            <Navbar/>
            <main className={"min-h-screen"}>
                <section>
                    <h1 className={'text-center text-5xl text-main font-bold mt-10'}>Nos Projets</h1>
                    <p className={'text-center text-xl text-main mt-3 w-85 mx-auto'}>
                        Depuis le lancement d&#39;EPI Studio, nous avons travaillé sur des projets Minecraft,
                        des applications PC/Mobile ainsi que des jeux-vidéos. Vous pouvez les télécharger
                        directement sur Github, ils sont gratuits!
                    </p>
                </section>
                <section className={"flex flex-col gap-10 my-6"}>
                    {projects.map((project, index) => {
                        return (
                                <ProjectCard key={index} {...project}/>
                            )
                    })}
                </section>
                <h1 className={"text-4xl text-main font-bold text-center my-10"}>Meet the Team !</h1>
                <section className={"flex flex-col gap-10 my-6"}>
                    {MembresList.map((members, index) => {
                        return(
                            <MembersCard key={index} {...members}/>
                        )
                    })}
                </section>

                <div className={'bg-main w-80 mx-auto p-4 flex flex-col items-center rounded-2xl mb-6'}>
                    <h1 className={'text-center font-bold text-white text-5xl'}>Tu souhaites faire partie du studio ?</h1>
                    <Link href={"/recrutements"}>
                        <button className={'mt-6 bg-sec p-2 rounded-xl font-semibold'}>
                           Nous rejoindre
                        </button>
                    </Link>
                </div>
            </main>
            <Footer/>

            <MobileNavbar/>
        </div>

    )
}