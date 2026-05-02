"use client"
import {useState} from "react";

const services = [
    {
        question: "Comment l'argent est-il utilisé?",
        answer: "Etant une association Loi 1901, nous sommes à vocation non-lucrative. Cela signifie que l'argent récolté dans un but de financement ne peut pas être " +
            "reversé à nos membres, dirigeants y compris. L'argent est donc utilisé pour améliorer notre environnement de développement sur nos projets Open-Sources. " +
            "Nous financeons du matériel, notre assurance RC ainsi que nos serveurs de test et tout le nécessaire pour publier nos projets. " +
            "Durant notre Assemblée Générale annuelle, nous publions les états des comptes, vous pouvez voir comment votre argent a été utilisé!"
    },
    {
        question: "Quelles sont mes protections ?",
        answer: "Vous bénéficiez, au même titre que n'importe quel achat, de la protection de consommateurs de 2 ans. Cela signifie que ce que nous vous créons est " +
            "garanti 2 ans sur la non-conformité. A cela, nous rajoutons sur certains produits sensibles (plugins et serveurs par exemple) une garantie anti-bugs de 6 mois " +
            "qui couvre les bugs de nos produits. \n" +
            "Nous vous proposons également deux modes de paiement: paiement 100% avant la commande, ou par acompte de 50%. En cas de désacord sur la validité du service " +
            "fournis, vous ne payez jamais plus! Si vous changez d'avis, l'acompte est remboursé entièrement du moment qu'une (1) heure de travail n'a pas été réalisée. \n" +
            "Des conditions s'appliquent, elles sont disponibles sur notre page de CGV."
    },
    {
        question: "Comment se passe la commande?",
        answer: "Une fois la prise de contact réalisée, nous vous proposons de rejoindre notre discord pour que nous puissions discuter de votre projet. Durant cette discussion, " +
            "nous déterminerons les conditions de la commande, le produit, etc. Nous ferons tout pour vous guider un maximum sur tout le processus, même annexe, de votre projet! \n" +
            "Une fois le service déterminé et le devis signé, nous attendons un acompte de 50% ou un paiement intégral. Dès que le développement est lancé, nous produisons une V1 " +
            "de votre projet, puis nous l'ajustons selon vos conditions jusqu'à la livraison finale (et le retrait des watermarks et sécurités), ou votre projet vous appartient à 100%. \n" +
            "EPI Studio ne garde aucuns droits autre que leur droit moral incessible. \n" +
            "Durant toute la commande, vous êtes en communication avec le membre qui s'occupe de votre projet."
    }
]
export function FaqServices() {
    // Créer un state avec une fonction qui prends soit un number soit rien
    const [openIndex, setOpenIndex] = useState< number | null>(null);
    // Prends un index (nombre) et set l'openIndex avec ce nombre, sauf si l'index et le nombre sont pareils
    const toggle = (Index: number) => {
        setOpenIndex(openIndex == Index ? null : Index)
    }


    return (
        <div className={'flex flex-col gap-6 w-80 mx-auto mb-10'}>
            {services.map((quest, index) => {
                return(
                    <div key={index} className={`rounded-xl p-4 ${openIndex == index ? "bg-secdark" : "bg-sec" }`}>
                        <button className={'w-full flex font-bold'} onClick={() => toggle(index)}>
                            {quest.question}
                            <p className={`ml-auto inline-block transition-transform duration-120 ${openIndex == index ? "rotate-45 font-extrabold" : "rotate-0 font-normal"} `}>+</p>
                        </button>
                        {/*Si l'index est pareil que l'open index, alors on ouvre la div*/}
                        {openIndex == index && (
                            <div className={'mt-3 text-sm whitespace-pre-wrap'}>
                                {quest.answer}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}