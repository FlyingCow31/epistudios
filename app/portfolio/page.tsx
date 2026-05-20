import Navbar, {MobileNavbar} from "@/app/components/Navbar";
import PortfolioCard from "@/app/components/Card";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const projects = [
    // {
    //   src: "",
    //   alt: "",
    //   title: "",
    //   description: "",
    //   mainfeat: "",
    //   descfeat: "",
    //   tags: ["Tag1", "Tag2"],
    //   link: ""
    // },
    {
        src: "https://placehold.co/600x400?text=?",
        alt: "MaelSocialMedia est une entreprise qui accompagne les ",
        title: "MaelSocialMedia",
        description: "Site internet servant de hub pour l'entreprise MaelSocialMedia. Le site doit répondre" +
            "à la problèmatique des clients qui cherchent un accompagnement sur les réseaux sociaux.",
        mainfeat: "Feature - Pannel admin",
        descfeat: "Un pannel administrateur pour que les gens puissent se connecter et gérer leurs demandes de contact, ainsi" +
            "que Mael puisse se conncter et voir les demandes de contact. ",
        tags: ["Next.JS", "Permissions"],
        link: "https://gaeltournier.dev"
    },
    {
        src: "https://placehold.co/600x400?text=?",
        alt: "MaelSocialMedia est une entreprise qui accompagne les ",
        title: "MaelSocialMedia",
        description: "Site internet servant de hub pour l'entreprise MaelSocialMedia. Le site doit répondre" +
            "à la problèmatique des clients qui cherchent un accompagnement sur les réseaux sociaux.",
        mainfeat: "Feature - Pannel admin",
        descfeat: "Un pannel administrateur pour que les gens puissent se connecter et gérer leurs demandes de contact, ainsi" +
            "que Mael puisse se conncter et voir les demandes de contact. ",
        tags: ["Next.JS", "Permissions"],
        link: "https://gaeltournier.dev"
    },
    {
        src: "https://placehold.co/600x400?text=?",
        alt: "MaelSocialMedia est une entreprise qui accompagne les ",
        title: "MaelSocialMedia",
        description: "Site internet servant de hub pour l'entreprise MaelSocialMedia. Le site doit répondre" +
            "à la problèmatique des clients qui cherchent un accompagnement sur les réseaux sociaux.",
        mainfeat: "Feature - Pannel admin",
        descfeat: "Un pannel administrateur pour que les gens puissent se connecter et gérer leurs demandes de contact, ainsi" +
            "que Mael puisse se conncter et voir les demandes de contact. ",
        tags: ["Next.JS", "Permissions"],
        link: "https://gaeltournier.dev"
    },
]


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
                    {projects.map((proj, index) => {
                        return (
                            <PortfolioCard key={index} {...proj} />
                        )
                    })}
                </div>
                <div className={'shadow bg-main w-80 mx-auto p-4 flex flex-col items-center rounded-2xl mb-6 lg:w-[80%] lg:py-12'}>
                    <h1 className={'text-center font-bold text-white text-5xl'}>Nos projets répondent à vos attentes?</h1>
                    <Link href={"/contact"}>
                        <button className={'mt-6 bg-sec p-2 rounded-xl font-semibold lg:text-3xl'}>
                            Nous contacter
                        </button>
                    </Link>
                </div>

            </main>
            <Footer/>
            <MobileNavbar/>
        </div>
    )
}