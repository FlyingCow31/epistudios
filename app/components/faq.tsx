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

const recrutements = [
    {
        question:"Quel est l'objectif d'EPI Studio?",
        answer: "Notre objectif est de prendre du plaisir à créer. Nous voulons construire sans nous bloquer dans un " +
            "marché. Nous travaillons ainsi sur n'importe quel projet qui nous passionne: app desktop, mobile, minecraft, outils, etc." +
            "Nous proposons également des services à but de financement, en tant que membre, la participation à ses commandes" +
            "est facultative et vous ne serez en aucun cas pénalisé ! Notre activité principale reste la création open-source."
    },
    {
        question:"Quel est le statut d'EPI Studio ?",
        answer: "Nous sommes une association Loi 1901 créée le 24/08/25 ! Toutes les infos sont disponibles dans\n" +
            "les mentions légales et les CGV !"
    },
    {
        question:"Quels sont les avantages d'EPI Studio?",
        answer: "Etant une association, nous sommes tous bénévoles. Néanmoins, nous avons quelques avantages qui peuvent vous plaire," +
            "surtout si vous êtes étudiants. Nous avons la possibiltié de prendre des stagières, nous pouvons également financer du matériel" +
            "pour votre participation au sein des projets. Vous gardez une licence exclusive sur vos projets, ce qui peut booster votre CV! " +
            "Etant bénévoles, vous n'aurez pas d'obligations au sein de l'association, ce qui rends possible la conciliation avec des études!"
    },
    {
        question:"Quelles sont les compétences requises?",
        answer: "Vous devez être capable de coder sans IA. Il n'y a pas de barème à proprement définit, vous devez être intéréssés en " +
            "l'associatif et avoir envie de vous investir! Si vous êtes débutant(e), vous êtes le/la bienvenue tant que vous avez soif d'apprendre!" +
            "Quelque soit votre experience, votre âge, votre genre ou votre nationalité, vous serez les bienvenues du moment que vous êtes prêt(e) à vous investir!"
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
        <div className={'flex flex-col gap-6 w-80 mx-auto mb-10 lg:w-[60%]'}>
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

export function FaqRecrutements() {
    const [openIndex, setOpenIndex] = useState< number | null>(null);
    const toggle = (index: number) => {
        setOpenIndex(openIndex == index ? null : index)
    }

    return (
        <div className={'flex flex-col gap-6 w-80 mx-auto mb-10 lg:w-[60%]'}>
            {recrutements.map((quest, index) => {
                return(
                    <div key={index} className={`rounded-xl p-4 ${openIndex == index ? "bg-secdark" : "bg-sec" }`}>
                        <button type={"button"} className={'w-full flex font-bold'} onClick={() => toggle(index)}>
                            {quest.question}
                            <p className={`ml-auto inline-block transition-transform duration-120 ${openIndex == index ? "rotate-45 font-extrabold" : "rotate-0 font-normal"} `}>+</p>
                        </button>

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