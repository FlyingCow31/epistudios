import Navbar, {MobileNavbar} from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import ProjectsList from "@/app/data/portfolio/projects";
import PortfolioCard from "@/app/components/cards/portfolio/PortfolioCard";

export default function Portfolio() {
    return (
        <div>
            <Navbar/>

            <main className={'overflow-y-auto'}>
                <h1 className={'bigtitle'}>Portfolio</h1>
                <p className={'text-justify w-[80%] mx-auto'}>
                    Retrouvez tous nos projets les plus impressionnants que nous avons pu réaliser pour des
                    clients comme vous ! Certaines données sont anonymisées pour garantir la sécurité de nos clients.
                </p>
                <div className={'flex flex-col gap-6 my-6 lg:grid lg:grid-cols-2 lg:w-[80%] lg:mx-auto'}>
                    {ProjectsList.map((proj, index) => {
                        return (
                            <PortfolioCard key={index} {...proj} />
                        )
                    })}
                </div>
                <div className={'shadow bg-main w-80 mx-auto p-4 flex flex-col items-center rounded-2xl mb-6 lg:w-[80%] lg:py-12'}>
                    <h1 className={'text-center font-bold text-white text-5xl'}>Nos projets répondent à vos attentes?</h1>
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