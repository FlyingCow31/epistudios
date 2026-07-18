import Image from "next/image"
import Link from "next/link"
import TrustpilotWidget from "@/app/components/widgets/TrustPilotWidget"
import { FaDiscord, FaGithub } from "react-icons/fa"

export default function Footer() {
     return (
          <section
               className={
                    " py-3 bg-[url('/fond-feuilles-gris.jpg')] bg-cover bg-center flex flex-col items-center pb-30 lg:flex-row lg:justify-center lg:py-3"
               }
          >
               <div className="flex flex-col items-center pb-3 lg:flex-1">
                    <h2 className={"text-3xl text-main font-semibold"}>Informations</h2>
                    <p>Association Loi 1901 créée le 24/08/2025.</p>
                    <Link href={"/mentions"}>
                         <p className="underline">Mentions Légales</p>
                    </Link>
                    <Link href={"/cgv"}>
                         <p className="underline">Conditions Générales de Vente</p>
                    </Link>
                    <p>Contact en cas de réclamation:</p>
                    <Link href={"mailto:contact@epistudios.fr"} className="underline">
                         contact@epistudio.fr
                    </Link>
                    <p>Statuts disponibles sur demande. </p>
               </div>

               <div className={"flex flex-col items-center gap-6 lg:flex-1"}>
                    <Link href={"/"}>
                         {" "}
                         <Image src={"/epi-logo-tete.png"} alt={"buste epi"} width={110} height={110} />
                    </Link>

                    <TrustpilotWidget />
               </div>

               <div className={"flex flex-col items-center text-center pt-3 lg:flex-1"}>
                    <h2 className={"text-3xl text-main font-semibold"}>Recrutements</h2>
                    <p>Vous souhaitez nous rejoindre pour faire partie de l&#39;aventure ?</p>
                    <p>Nous recherchons des graphistes, des développeurs et des CM!</p>
                    <p>Pour plus d&#39;informations concernant les recrutements,</p>
                    <Link href={"/recrutements"}>
                         <p className="underline">Rendez-vous sur cette page!</p>{" "}
                    </Link>
                    <div className={"lg:flex flex-row gap-4"}>
                         <Link href={"https://discord.gg/PvKeHzTwdU"}>
                              <FaDiscord className="text-main hover:scale-105 transition-all duration-300" size={45} />
                         </Link>
                         <Link href={"https://github.com/EPI-Studios"}>
                              <FaGithub className="text-main hover:scale-105 transition-all duration-300" size={45} />
                         </Link>
                    </div>
               </div>
          </section>
     )
}
