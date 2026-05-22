import Navbar, {MobileNavbar} from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import MembresList from "@/app/data/services/membres";
import ProjectsList from "@/app/data/services/projects";
import Link from "next/link";
import {MemberCard} from "@/app/components/cards/member/MemberCard";
import {ProjectCard} from "@/app/components/cards/project/ProjectCard";

export default function Projects() {
    return (
        <div>
            <Navbar/>
            <main className={"min-h-screen"}>
                <section>
                    <h1 className={'text-center text-5xl text-main font-bold mt-10 lg:text-7xl'}>Nos Projets</h1>
                    <p className={'text-center text-xl text-main mt-3 w-85 mx-auto lg:w-[70%]'}>
                        Depuis le lancement d&#39;EPI Studio, nous avons travaillé sur des projets Minecraft,
                        des applications PC/Mobile ainsi que des jeux-vidéos. Vous pouvez les télécharger
                        directement sur Github, ils sont gratuits!
                    </p>
                </section>

                <section className={"flex flex-col gap-10 my-6"}>
                    {ProjectsList.map((project, index) => {
                        return (
                                <ProjectCard key={index} {...project}/>
                            )
                    })}
                </section>
                <h1 className={"text-4xl text-main font-bold text-center my-10"}>Meet the Team !</h1>

                <section className={"flex flex-col gap-10 my-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:w-[70%] lg:mx-auto"}>
                    {MembresList.map((members, index) => {
                        return(
                            <MemberCard key={index} {...members}/>
                        )
                    })}
                </section>
                <div className={'shadow bg-main w-80 mx-auto p-4 flex flex-col items-center rounded-2xl mb-6 lg:w-[80%] lg:py-12'}>
                    <h1 className={'text-center font-bold text-white text-5xl'}>Tu souhaites faire partie du studio?</h1>
                    <Link href={"/contact"} className={'mt-6 bg-sec p-4 rounded-xl font-semibold lg:text-2xl hover:scale-105 transition-all duration-300'}>
                        Nous contacter
                    </Link>
                </div>
            </main>
            <Footer/>

            <MobileNavbar/>

        </div>

    )
}