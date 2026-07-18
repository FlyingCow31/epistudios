import Navbar, { MobileNavbar } from "@/app/components/navbar/Navbar"
import Footer from "@/app/components/footer/Footer"
import { ContactForm } from "@/app/components/forms/contact/ContactForm"

export const metadata = {
     title: "Contact commande sites web, plugins Minecraft ou jeux-vidéos | EPI Studio",
     description:
          "Prenez contact avec nous, Studio de développement associatif à Toulouse : sites web sur-mesure, jeux vidéo et plugins/mods Minecraft. Devis gratuit.",
     alternates: { canonical: "https://epistudio.fr/" },
     openGraph: {
          title: "Contact commande sites web, plugins Minecraft ou jeux-vidéos | EPI Studio",
          description:
               "Prenez contact avec nous, Studio de développement associatif à Toulouse : sites web sur-mesure, jeux vidéo et plugins/mods Minecraft. Devis gratuit.",
          url: "https://epistudio.fr",
          siteName: "EPI Studio",
          images: ["/og-image.png"],
          locale: "fr_FR",
          type: "website",
     },
}

export default function page() {
     return (
          <div>
               <MobileNavbar />
               <Navbar />
               <main>
                    <ContactForm />
               </main>
               <Footer />
          </div>
     )
}
