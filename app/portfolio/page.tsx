import Navbar, {MobileNavbar} from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import Link from "next/link";
import ProjectsList from "@/app/data/portfolio/projects";
import GalleryList from "@/app/data/portfolio/gallery";
import PortfolioProjectCard from "@/app/components/cards/portfolio/projects/PortfolioProjectCard";
import PortfolioGalleyCard from "@/app/components/cards/portfolio/galleries/PortfolioGalleyCard";

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
                <div className="columns-1 lg:columns-2 gap-6 lg:w-[80%] mx-auto p-6 lg:p-0">
                    {ProjectsList.map((proj, index) => (
                        <div key={index} className="mb-6 break-inside-avoid">
                            <PortfolioProjectCard {...proj} />
                        </div>
                    ))}
                </div>

                <h1 className={'bigtitle'}>Galerie</h1>
                <p className={'flex justify-center text-justify w-[80%] mx-auto'}>
                    Découvrez notre galerie. Chaque œuvre présentée ici a été réalisée dans le cadre d&#39;un projet ou d&#39;une commande client.                </p>
                <div className={'flex flex-col gap-6 my-6 lg:w-[80%] lg:mx-auto'}>
                    <div className={'items-center my-6 px-4 columns-1 md:columns-3 lg:columns-4 gap-4'}>
                        {
                            GalleryList.map((proj, index) => {
                                return (
                                    <PortfolioGalleyCard key={index} {...proj} />
                                )
                            })
                        }
                    </div>
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