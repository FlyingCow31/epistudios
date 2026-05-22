"use client"

import ContactBehaviour from "@/app/actions/contact";
import {InputTextForm} from "@/app/components/forms/input/InputTextForm";
import {FaCheck, FaUpload} from "react-icons/fa";
import Link from "next/link";
import {useState} from "react";

export function ContactForm() {
    const classDiv = "bg-white flex flex-col gap-6 w-80 mx-auto p-4 rounded-lg shadow mt-6 mb-6 lg:w-[60%]"
    const [fileUpload, setFileUpload] = useState(false);
    const [formEnd, setFormEnd] = useState(false);

    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const result = await ContactBehaviour(formData);

        if (result.success) {
            setFormEnd(true);
            setSuccess(true);

        } else {
            console.log("Erreur dans la communication");
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

                        <label className={'flex flex-col items-center '}>
                            <span className={'titleform'}>... Ou téléchargez votre cahier des charges (PDF uniquements.)</span>
                            <input
                                type={"file"}
                                name={"cdc"}
                                className={"hidden mt-3 "}
                                onChange={() => {setFileUpload(true)}}
                                accept={"application/pdf"}
                            />
                            { fileUpload ? <FaCheck size={50} className={"text-main"}/> : <FaUpload size={50} className={"text-main"}/>}
                        </label>

                        <InputTextForm type={"text"} name={"budget"} placeholder={"Indiquez un budget"} required={true}/>
                        <button type={"submit"} className={'cursor-pointer bg-main w-full block mx-auto px-9 py-3 text-white shadow rounded-sm'}>Envoyer</button>
                    </form>
                </section>
            )}
            {formEnd && (
                <>
                    {success && (
                        <div className={`${classDiv} items-center`}>
                            <h1 className={'bigtitle'}>Merci pour votre message!</h1>
                            <p className={'text-center boldtext'}>Vous avez reçu un mail de confirmation.</p>
                            <Link href={"/"} className={"cursor-pointer bg-main text-white p-4 rounded-xl"}>
                                Retour à l&#39;accueil
                            </Link>
                        </div>
                    )}
                    {!success && (
                        <div className={`${classDiv} items-center`}>
                            <h1 className={'bigtitle'}>Erreur :(</h1>
                            <p className={'text-center boldtext'}>Veuillez recommencer ou contacter EPI STUDIO.</p>
                            <Link href={"/"} className={"cursor-pointer bg-main text-white p-4 rounded-xl"}>
                                Retour à l&#39;accueil
                            </Link>
                        </div>
                    )}
                </>
            )}
        </>
    )
}