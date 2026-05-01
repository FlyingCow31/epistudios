import Navbar, {MobileNavbar} from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

import TrustpilotWidget from "@/app/components/TrustPilotWidget";
import {OrderButton} from "@/app/components/Buttons";
import {FaqServices} from "@/app/components/faq";


export default function page() {
    return (
        <div>

            <Navbar/>
            <MobileNavbar/>

            <main>
                <h1 className={'bigtitle w-full text-center'}>Nos Services</h1>
                <p className={'text-justify w-80 mx-auto text-main'}>
                    Profitez de tarifs associatifs sur nos gammes de services pour concrétiser vos projets de A à Z!
                    Nos compétences s&#39;étendent de la conception de sites web, à la gestion de serveurs de jeu personnalisés, en passant par le graphisme. 
                    Cette démarche de financement nous permet de nous constituer un portfolio et de nous faire de l&#39;experience, n&#39;hésitez pas à venir nous 
                    proposer un projet, même s&#39;il sort des projets proposés ici!
                </p>


                <div className={'flex flex-col gap-6 mt-6'}>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-lg flex flex-col gap-3 items-center'}>
                        <h1 className={"text-main text-xl text-center font-semibold"}>Découvrez nos créations</h1>
                        <Link href={"/portfolio"}>
                            <button className={'bg-main p-3 text-white rounded-xl'}>Accèdez à notre portfolio →</button>
                        </Link>

                        <TrustpilotWidget/>
                    </div>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-lg'}>
                        <h1 className={"text-main text-xl text-center font-semibold"}>Informations</h1>
                        <p>Aucuns prix ne sont affichés, nous réalisons un devis 100% sur-mesure, adapté à votre budget.</p>
                        <p>Chaque commande est basée sur un cahier des charges (fourni par le client, ou facturé 10€) détaillé afin que la
                            production se fasse dans les meilleures conditions possibles !</p>
                    </div>
                </div>

                <h1 className={"bigtitle text-center my-10"}>Sites web</h1>

                <div className={'flex flex-col gap-6'}>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-xl flex flex-col gap-3'}>
                        <h1 className={'smalltitle'}>Projet sur-mesure</h1>
                        <p>✔ Databases & authentification</p>
                        <p>✔ SEO (visibilité optimisée)</p>
                        <p>✔ Design graphique</p>
                        <p>✔ Back-end avancé</p>
                        <OrderButton/>
                    </div>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-xl flex flex-col gap-3'}>
                        <p className={'text-justify text-main'}>
                            Nous adaptons l&#39;offre et le prix en fonction de vos besoins: que vous soyez <span className={"boldtext"}>une association</span>, un <span className={"boldtext"}>petit business</span> ou un <span className={"boldtext"}>grand vendeur en ligne </span>, nous aurons de quoi vous satisfaire !
                        </p>
                        <p className={'text-justify text-main'}>Démarquez-vous grâce à une interface designée par <span className={"boldtext"}>nos talentueux graphistes</span>, ainsi qu&#39;un SEO vous permettant d&#39;avoir une <span className={"boldtext"}>visibiltié augmentée !</span> </p>
                    </div>
                </div>

                <h1 className={"bigtitle text-center mt-10"}>Discord</h1>
                <p className={"opacity-50 text-center mb-10"}>L&#39;association EPI Studio n&#39;est pas affiliée à Discord inc.</p>

                <div className={'flex flex-col gap-6'}>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-xl flex flex-col gap-3'}>
                        <h1 className={'smalltitle'}>Serveur personnalisé</h1>
                        <p>📦 Livraison rapide (1 - 3 jours) </p>
                        <p>🤖 Configuration des bots inclus </p>
                        <p>Serveurs communautaires, spécialisés, de travail ou juste entre amis! </p>
                        <p> </p>
                        <OrderButton/>
                    </div>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-xl flex flex-col gap-3'}>
                        <h1 className={'smalltitle'}>Bot Discord personnalisé</h1>
                        <p>✔ Toutes fonctionnalités possibles </p>
                        <p>✔ Nombre de commandes illimité</p>
                        <p>❌ Hébergement non-inclus </p>
                        <p></p>
                        <OrderButton/>
                    </div>
                </div>

                <h1 className={"bigtitle text-center mt-10"}>Minecraft</h1>
                <p className={"opacity-50 text-center mb-10"}>L&#39;association EPI Studio n&#39;est pas affiliée à Mojang.</p>



                <div className={'flex flex-col gap-6'}>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-xl flex flex-col gap-3'}>
                        <h1 className={'smalltitle'}>Serveur personnalisé</h1>
                        <p>♾️ configuration de plugins infinis </p>
                        <p>🛡️ Anti-Cheat </p>
                        <p>👥 Ranks personnalisés </p>
                        <p>🔗 Intégration Discord </p>
                        <OrderButton/>
                    </div>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-xl flex flex-col gap-3'}>
                        <p className={'text-justify text-main'}>
                            <span className={"boldtext"}>Serveur 100% Personnalisé!</span>
                        </p>
                        <p className={'text-justify text-main'}><span className={"boldtext"}>Obtenez un guide gratuit &#34;Comment modifier votre serveur&#34; </span>qui vous apprend à créer et modifier votre serveur Minecraft! </p>
                        <OrderButton/>
                    </div>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-xl flex flex-col gap-3'}>
                        <h1 className={'smalltitle'}>Plugins personnalisés</h1>
                        <p>♾️ Possibilités infinies !</p>
                        <p>📜 Documentation incluse </p>
                        <p>🤝 Assistance 6 mois </p>
                        <p>🗃️ Fichier de configuration </p>
                        <OrderButton/>
                    </div>
                    <div className={'bg-white shadowthing text-left w-80 mx-auto p-3 rounded-xl flex flex-col gap-3'}>
                        <p className={'text-justify text-main'}>
                            <span className={"boldtext"}>Customisez votre serveur grâce à nos plugins personnalisés !</span>
                        </p>
                        <p className={'text-justify text-main'}>AutoMod, factions, addons, tout est possible avec nos plugins!</p>
                        <p className={'text-justify text-main'}>Pour assurer la continuité, tous nos plugins sont dotés d&#39;une documentation complète en cas de changement de développeurs !</p>
                        <p className={'text-justify text-main'}>Vous pouvez également modifier votre plugin avec les fichiers de configuration !</p>
                        
                        <OrderButton/>
                    </div>
                </div>

                <h1 className={"bigtitle text-center mt-10"}>Et bien plus...</h1>
                <p className={"opacity-50 text-center mb-10"}>Projets sur-mesures</p>
                <p className={"opacity-50 text-center mb-10"}>Graphisme et Illustrations</p>
                <OrderButton/>

                <h1 className={"bigtitle text-center mt-10"}>F.A.Q</h1>

                <FaqServices/>

            </main>
            <Footer/>
        </div>
    )
}