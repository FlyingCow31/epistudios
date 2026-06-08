"use client"

import ContactBehaviour from "@/app/actions/contact";
import {InputTextForm} from "@/app/components/forms/input/InputTextForm";
import {FaCheck, FaUpload} from "react-icons/fa";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useCooldownTimer} from "@/app/components/forms/cooldown";

export function ContactForm() {

    const [fileName, setFileName] = useState("");

    const time = 30000;
    const countdownItem = "contactFormCooldown"

    const { isCooldown, setIsCooldown, secondsLeft, startCooldownTimer } = useCooldownTimer(countdownItem);

    const classDiv = "bg-white flex flex-col gap-6 w-80 mx-auto p-4 rounded-lg shadow mt-6 mb-6 lg:w-[60%]"
    const [fileUpload, setFileUpload] = useState(false);
    const [formEnd, setFormEnd] = useState(false);

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const cooldownUntil = localStorage.getItem(countdownItem);

        if (!cooldownUntil) return;

        const cooldownUntilNumber = Number(cooldownUntil);

        if (cooldownUntilNumber > Date.now()) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            startCooldownTimer(cooldownUntilNumber);
        } else {
            localStorage.removeItem(countdownItem);
        }
    }, []);

    const handleSubmit = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault();

        if (isCooldown) return;

        setIsCooldown(true);

        const cooldownUntil = Date.now() + time;

        startCooldownTimer(cooldownUntil);

        localStorage.setItem(countdownItem, cooldownUntil.toString());

        try {
            const formData = new FormData(e.currentTarget);
            const result = await ContactBehaviour(formData);


            if (result.success) {
                setFormEnd(true);
                setSuccess(true);
            } else {
                setFormEnd(true);
                setSuccess(false);
            }
        } catch (error) {
            console.log("Erreur dans la communication", error);
            setFormEnd(true);
            setSuccess(false);
        }

    }
    return (
        <>
            { !formEnd && (
                <section className={'bg-white w-80 mx-auto my-6 p-6 rounded-xl shadow lg:w-[60%]'}>
                    <h1 className={'bigtitle mt-6'}>Contact</h1>
                    <p className={"text-center mb-3"}>
                        Vous souhaitez commander, nous poser des questions ou simplement discuter ?<br/>
                        Ne vous inquiétez pas, <span className={'boldtext'}>ce formulaire ne vous engage en rien</span>! Vous recevrez un devis fait sur-mesure par nos talentueux membres, qui discuterons avec
                        vous des détails techniques. <br/>

                        Le paiement se fera en deux fois, après avoir déterminé le cahier des charges et en étant sûr que
                    </p>

                    <form className={"flex flex-col items-center gap-3"} onSubmit={handleSubmit}>
                        <InputTextForm type={"text"} name={"name"} placeholder={"Nom et Prénom"} required={true}/>
                        <InputTextForm type={"text"} name={"discord"} placeholder={"@ Discord si applicable"}/>
                        <InputTextForm type={"email"} name={"email"} placeholder={"Email"} required={true}/>
                        <InputTextForm type={"text"} name={"service"} placeholder={"Service désiré / Sujet du message"}/>
                        <textarea
                            name={"details"}
                            placeholder={"Détaillez un maximum votre demande"}
                            className={"bg-seclight border-sec border rounded-sm p-1 outline-none lg:w-[90%]"}
                            rows={5}
                        />


                        <label className="flex flex-col items-center gap-3 lg:w-[90%]">

                            <span className={'titleform'}>... Ou téléchargez votre cahier des charges (PDF uniquements.)</span>

                            <div className="flex flex-col items-center justify-center border border-sec rounded-sm w-full p-5 gap-4">

                                <label
                                    htmlFor="cv-upload">
                                    Glissez votre cahier des charges ici ou cliquez pour sélectionner un fichier
                                </label>

                                <input
                                    type={"file"}
                                    name={"cdc"}
                                    className={"hidden mt-3 "}
                                    accept={"application/pdf"}
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];

                                        if (file) {
                                            setFileUpload(true);
                                            setFileName(file.name);
                                        }
                                    }}

                                />

                                {
                                    fileUpload
                                        ? <FaCheck size={100} className="text-main"/>
                                        : <FaUpload size={100} className="text-main"/>
                                }

                            </div>
                        </label>

                        {
                            fileName && (
                                <p className="text-main">
                                    Fichier importé : {fileName}
                                </p>
                            )
                        }

                        <InputTextForm type={"text"} name={"budget"} placeholder={"Indiquez un budget"} required={true}/>
                        <button type={"submit"} disabled={isCooldown} className={'cursor-pointer bg-main w-full block mx-auto px-9 py-3 text-white shadow rounded-sm hover:bg-transparent hover:text-main transition-all duration-300' +
                            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-main disabled:hover:text-white'}>
                            {isCooldown
                                ? `Veuillez patienter (${secondsLeft}s)`
                                : "Envoyer"}
                        </button>
                    </form>
                </section>
            )}
            {formEnd && (
                <>
                    {success && (
                        <div className={`${classDiv} items-center`}>
                            <h1 className={'bigtitle'}>Merci pour votre message!</h1>
                            <p className={'text-center boldtext'}>Vous avez reçu un mail de confirmation.</p>
                            <Link href={"/"} className={"cursor-pointer bg-main text-white p-4 rounded-xl hover:scale-105 transition-all duration-300"}>
                                Retour à l&#39;accueil
                            </Link>
                        </div>
                    )}
                    {!success && (
                        <div className={`${classDiv} items-center`}>
                            <h1 className={'bigtitle'}>Erreur :(</h1>
                            <p className={'text-center boldtext'}>Veuillez recommencer ou contacter EPI STUDIO.</p>
                            <Link href={"/"} className={"cursor-pointer bg-main text-white p-4 rounded-xl hover:scale-105 transition-all duration-300"}>
                                Retour à l&#39;accueil
                            </Link>
                        </div>
                    )}
                </>
            )}
        </>
    )
}