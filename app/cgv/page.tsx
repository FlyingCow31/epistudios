import Footer from "../components/footer/Footer"
import Navbar, { MobileNavbar } from "../components/navbar/Navbar"

export default function Page() {
     return (
          <>
               <Navbar />
               <MobileNavbar />
               <main className={"text-center flex flex-col items-center"}>
                    <h1 className={"bigtitle"}>Conditions Générales de Vente</h1>
                    <h2 className="mentionstitle">1. Objet</h2>
                    <p className="mentionstext">
                         Les présentes Conditions Générales de Vente (CGV) régissent les prestations de création de site
                         web et autres préstations de développement annexes proposées par notre Association. Toute
                         commande implique l'acceptation sans réserve des présentes conditions.
                    </p>
                    <h2 className="mentionstitle">2. Prestations</h2>
                    <p className="mentionstext">
                         Nous proposons la conception, le développement et la mise en ligne de sites web selon les
                         besoins du client, conformément au devis accepté.
                    </p>
                    <h2 className="mentionstitle">3. Commande</h2>
                    <p className="mentionstext">
                         La commande est validée après acceptation du devis. Un acompte de 50% du montant total est
                         exigé à la commande. <br /> Par la signature du devis, le client demande l'execution immédiate
                         du service et reconnais renoncer à son droit de rétractation conformément à l'article L221-28
                         du Code de la consommation.
                    </p>
                    <h2 className="mentionstitle">4. Tarifs et Paiement</h2>
                    <p className="mentionstext">
                         TVA non applicable, art. 293 B du CGI <br /> Les prix sont indiqués en euros et hors taxes. Le
                         solde est payable à la livraison du site.
                         <br /> Tout retard de paiement entraînera des pénalités conformément à la législation en
                         vigueur.
                         <br /> Le paiement doit se faire par virement bancaire, par chèque ou par paypal. En cas de
                         frais bancaires du client, ces frais sont à sa charge (notamment frais de fonctionnement, frais
                         de virement ou frais d'assurance paypal.)
                         <br /> Retrouvez les frais de paypal sur
                         <a href="https://www.paypal.com/fr/digital-wallet/paypal-consumer-fees">leur page internet</a>
                         <br />
                         Note: EPI STUDIO n'est pas affilié à Paypal et propose d'autres moyens de paiement.
                         <br /> En cas de paiement par chèque, le délai de développement/création commencé dès la
                         reception et la validation du chèque.
                         <br /> Rib de l'association EPI STUDIO: FR76 1310 6005 0030 0500 2124 231 ; BIC: AGRIFRPP831
                    </p>
                    <h2 className="mentionstitle">5. Délais de Livraison</h2>
                    <p className="mentionstext">
                         Les délais de livraison sont donnés à titre indicatif.
                         <br />
                         En cas de retard supérieur à 60 jours dans lequel l'association porte la faute, le client peut
                         demander l'arret du développement et le remboursement au prorata du travail effectué.
                         <br />
                         Cette demande entraine l'arrêt du développement et la livraison du site tel quel.
                    </p>
                    <h2 className="mentionstitle">6. Propriété Intellectuelle</h2>
                    <p className="mentionstext">
                         Le site livré reste la propriété de l'entreprise jusqu'au paiement complet.
                         <br />
                         Après paiement, le client devient propriétaire des éléments livrés, hors éléments tiers
                         (images, polices, etc.) soumis à licence sauf indication contraire dans la facture. <br />
                         L'association peut demander au client la licence d'exploitation non exclusive afin de l'exposer
                         sur un portfolio, ou aux futurs clients.
                    </p>
                    <h2 className="mentionstitle">7. Responsabilité</h2>
                    <p className="mentionstext">
                         Nous nous engageons à fournir un site fonctionnel. <br /> Notre responsabilité ne saurait être
                         engagée en cas de mauvaise utilisation, de modification par le client ou prestataire externe,
                         ou de problèmes liés à l'hébergement.
                    </p>
                    <h2 className="mentionstitle">8. Maintenance</h2>
                    <p className="mentionstext">
                         La maintenance n'est pas incluse sauf mention contraire dans le devis. <br /> Elle peut faire
                         l'objet d'un contrat séparé. <br /> Dès lors que l'utilisateur fait appel à un prestataire
                         externe sur le développement du dit site-web, la maintenance est considérée comme nulle.
                    </p>
                    <h2 className="mentionstitle">9. Garantie légale de conformité</h2>
                    <p className="mentionstext">
                         Conformément aux articles L217-3 et suivants du Code de la consommation, les prestations et
                         contenus numériques fournis par l'association EPI Studio bénéficient de la garantie légale de
                         conformité pendant deux (2) ans à compter de leur livraison au Client consommateur.
                         <br /> Pendant cette période, le Client peut exiger la mise en conformité du produit ou service
                         livré, sans frais, en cas de défaut de conformité constaté.
                         <br /> Exclusions La garantie ne couvre pas : <br /> - les erreurs ou dysfonctionnements
                         résultant d'une mauvaise utilisation, installation ou configuration par le Client ;<br />
                         - les modifications apportées par le Client ou un tiers sans l'accord écrit de l'association ;
                         <br /> - les évolutions, ajouts de fonctionnalités ou modifications non prévues au devis ou au
                         cahier des charges initial ;<br /> - les dysfonctionnements liés à des mises à jour extérieures
                         (serveur tiers, dépendances logicielles, API externes).
                         <br /> Un support technique limité à la correction de bugs mineurs et à la prise en main du
                         service est inclus pour une durée de un (1) mois après la livraison. Toute assistance au-delà
                         de cette période fera l'objet d'une facturation complémentaire.
                         <br /> Responsabilité <br />
                         En aucun cas, l'association ne pourra être tenue responsable des dommages indirects subis par
                         le Client, tels que perte de chiffre d'affaires, perte de données, ou atteinte à l'image.
                    </p>
                    <h2 className="mentionstitle">10. Données Personnelles</h2>
                    <p className="mentionstext">
                         Nous nous engageons à respecter la confidentialité des données communiquées par le client et à
                         les traiter conformément à la réglementation en vigueur.
                         <br /> Pour faire exercer votre droit de suppression ou de modification, contactez nous à
                         l'adresse mail suivante: contact@epistudios.fr <br />
                         Dès lors de la fin de la commande et de la période de maintenance, vos données seront
                         supprimées sous 30 jours. <br />
                    </p>
                    <h2 className="mentionstitle">11. Loi Applicable et Litiges</h2>
                    <p className="mentionstext">
                         Les présentes CGV sont soumises au droit français.
                         <br />
                         En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, le
                         tribunal compétent sera celui du siège social de l'association.
                    </p>
               </main>
               <Footer />
          </>
     )
}
