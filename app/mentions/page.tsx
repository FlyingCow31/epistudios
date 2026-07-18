import Footer from "../components/footer/Footer"
import Navbar, { MobileNavbar } from "../components/navbar/Navbar"

export default function Page() {
     return (
          <>
               <Navbar />
               <MobileNavbar />
               <main className="flex flex-col text-center items-center">
                    <h1 className={"bigtitle"}>Mentions Légales</h1>
                    <h2 className="mentionstitle">Editeur du site</h2>
                    <p className="mentionstext">
                         Nom de l'association : EPI STUDIO <br />
                         Date de création: 24/08/25 <br />
                         Numéro RNA : W313041050 Numéro
                         <br />
                         Siret: 99144479500017 <br />
                         Adresse : 22 allée du Loiret, 31770 Colomiers. <br />
                         Téléphone : +33 6 58 53 82 54 <br />
                         Email : contact@epistudios.fr <br />
                         Ce site web a été réalisé sous la superivison de Gaël TOURNIER : gael.tournier@epistudio.fr.
                         <br />
                         Participants à la création du site: Onticentity, Ilan, Gaël.
                         <br />
                    </p>

                    <h2 className="mentionstitle">Hébergement</h2>
                    <p className="mentionstext">
                         Ce site est hébergé par la société Vercel Inc., située 340 S Lemon Ave #4133 Walnut, CA 91789,
                         et joignable au (559) 288-7060.
                    </p>

                    <h2 className="mentionstitle">Propriété Intellectuelle</h2>
                    <p className="mentionstext">
                         Le contenu de ce site web est la propriété d'EPI STUDIO, néanmoins, le code source de ce site
                         web est disponible en Open-Source sur github. Vous pouvez donc modifier ou distribuer le code
                         de ce site web, sans y inclure le contenu (logos, marques, photos représentants des membres,
                         projets non-open source) sans autorisation préalable de la ou des personnes en charge.
                    </p>
                    <h2 className="mentionstitle">Protection des données personnelles</h2>
                    <p className="mentionstext">
                         Ce site web ne collecte aucune de vos données personnelles, nous sommes engagés dans le combat
                         contre l'utilisation commerciale des données personnelles ! Néanmoins, si vous êtes client,
                         certaines données que vous nous avez communiquées (nom, prénom, adresse, signature, IBAN)
                         seront stockées pour la durée de votre commande et de la maintenance. Elles seront supprimées
                         au bout de 30 jours dès lors que la commande et la période de maintenance est terminée. Si vous
                         souhaitez faire opposition sur ces données durant la période de la commande, contactez{" "}
                         <a href="mailto:contact@epistudio.fr">contact@epistudio.fr</a>.
                    </p>
               </main>
               <Footer />
          </>
     )
}
