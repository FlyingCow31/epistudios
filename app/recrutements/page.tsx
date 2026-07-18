import Navbar, { MobileNavbar } from "@/app/components/navbar/Navbar"
import Footer from "@/app/components/footer/Footer"
import GeneralForm from "@/app/components/forms/general/GeneralForm"

export const metadata = {
     title: "Rejoignez EPI Studio en tant que bénévole | EPI Studio",
     description:
          "Rejoignez notre studio de développement associatif à Toulouse : sites web sur-mesure, jeux vidéo et plugins/mods Minecraft. Devis gratuit.",
     alternates: { canonical: "https://epistudio.fr/" },
     openGraph: {
          title: "Rejoignez EPI Studio en tant que bénévole | EPI Studio",
          description:
               "Rejoignez notre studio de développement associatif à Toulouse : sites web sur-mesure, jeux vidéo et plugins/mods Minecraft. Devis gratuit.",
          url: "https://epistudio.fr",
          siteName: "EPI Studio",
          images: ["/og-image.png"],
          locale: "fr_FR",
          type: "website",
     },
}

export default function Page() {
     return (
          <>
               <Navbar />
               <MobileNavbar />

               <main>
                    <h1 className={"bigtitle"}>Recrutements</h1>
                    <p className={"text-xl text-justify w-80 mx-auto lg:w-[60%]"}>
                         Vous avez envie de rejoindre une équipe passionée et de participer à la création de projets qui
                         ont du sens ? <br /> <br />
                         <span className={"boldtext text-main underline"}>Rejoignez EPI Studio !</span>
                    </p>

                    <GeneralForm />
               </main>
               <Footer />
          </>
     )
}
