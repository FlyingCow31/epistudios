"use client"
import {FaqRecrutements} from "@/app/components/faq";
import React, {useState} from "react";
import Image from "next/image";
import {recrutementlogic} from "@/app/actions/recrutements";
import Link from "next/link";
import ContactBehaviour from "@/app/actions/contact";
import {FaCheck, FaUpload} from "react-icons/fa";
import CommonList from "@/app/data/questions/common";
import DeveloperList from "@/app/data/questions/developer";
import CommunityManagerList from "@/app/data/questions/communityManager";
import GraphicList from "@/app/data/questions/graphic";

interface FormProps {
    label?: string,
    type: string,
    name: string,
    placeholder?: string,
    required?: boolean
}

const questionsByRole = {
    developpeur: DeveloperList,
    graphiste: GraphicList,
    CM: CommunityManagerList
}
interface FormValue {
    choix: "developpeur" | "graphiste" | "CM"
}

export default function FormGeneral() {
    const [openForm, setOpenForm] = useState< string | null>(null);
    const [formVisibility, setFormVisibility] = useState(false);
    const [fileUpload, setFileUpload] = useState(false);
    const [formEnd, setFormEnd] = useState(false);


    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.BaseSyntheticEvent) => {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const result = await recrutementlogic(formData);

        if (result.success) {
            setLoading(false);
            setFormEnd(true);
            setSuccess(true);
            setErrors({});
        } else {
            setErrors(result.errors ?? {FrontEnd: "mauvaise communication."});
            console.log(errors);
        }
    }


    const classRadio = "appearance-none p-2 checked:bg-main outline-sec outline outline-offset-3 rounded-sm";
    const classDiv = "bg-white flex flex-col gap-6 w-80 mx-auto p-4 rounded-lg shadow mt-6 mb-6 lg:w-[60%] lg:items-center"
    return (
        <>
        {!formEnd && (
            <section className={'mt-10'}>
                <form onSubmit={handleSubmit}>


                    <div className={`${classDiv}`}>
                    <p className={'titleform'}>Quelle est votre spécialité?</p>
                    <label className={'flex items-center gap-3'}>
                        <input type={"radio"} name={"role"} value={"developpeur"}
                               className={`${classRadio}`}
                               onChange={((e) => setOpenForm(e.target.value))}/>
                        Développeur

                    </label>
                    <label className={'flex items-center gap-3'}>
                        <input type={"radio"} name={"role"} value={"graphiste"}
                               className={`${classRadio}`}
                               onChange={((e) => setOpenForm(e.target.value))}/>
                        Graphiste
                    </label>
                    <label className={'flex items-center gap-3'}>
                        <input type={"radio"} name={"role"} value={"CM"}
                               className={`${classRadio}`}
                               onChange={((e) => setOpenForm(e.target.value))}/>
                        Community Manager (CM)
                    </label>
                        {errors.role && <p className="text-red-500">{errors.role}</p>}
                </div>


                <div className={'my-6 w-80 mx-auto flex flex-col gap-3 w-[100%]'}>
                    <h1 className={'titleform'}>F.A.Q - Avant de commencer la candidature</h1>
                    <FaqRecrutements/>
                    <p className={"text-center font-xl text-main"}>
                        Vous avez d&#39;autres questions? <br/>
                        Pas de panique, vous pourrez les poser à la fin du formulaire.
                    </p>
                </div>

                    <div className={`${classDiv}`}>
                        
                        <h1 className={"titleform"}>Présentations</h1>
                        <p className={'text-justify'}>
                            Dans cette première partie, nous voulons en savoir plus sur vous, vos passions et votre histoire!
                            Détaillez un maximum, plus vous parlez, mieux c&#39;est ! 
                        </p>
                        
                        {CommonList.map((quest) => {
                            return (
                                <React.Fragment key={quest.name}>
                                    <FormInputText  {...quest}/>
                                    {errors[quest.name] && <p className="text-red-500">{errors[quest.name]}</p>}
                                </React.Fragment>
                            )
                        })}

                        <label className={'flex flex-col items-center gap-1 lg:w-[90%]'}>
                            <span className={'titleform'}>Présentation Générale (min. 50 mots)</span>
                            <textarea name={"presentation"} placeholder={"Je suis passionné de... , j'ai déja fait..."} rows={5} className={"mx-auto w-70 bg-seclight border-sec border rounded-sm p-2 outline-none lg:w-[100%]"}
                            minLength={50} required={true}/>
                        </label>
                        <label className={'flex flex-col items-center gap-1 lg:w-[90%]'}>
                            <span className={'titleform'}>Présentation de votre parcours d&#39;études</span>
                            <textarea name={"parcours"} placeholder={"J'ai un bac +3 en ... , j'étudie le..."}
                                      required={true}
                                      rows={5} className={"mx-auto w-70 bg-seclight border-sec border rounded-sm p-2 outline-none lg:w-[100%]"}/>
                        </label>

                        <label className={'flex flex-col items-center'}>
                            <span className={'titleform'}>Joignez votre CV à votre candidature. Pas besoin de lettre de motivation! (PDF uniquements.)</span>
                            <input
                                type={"file"}
                                name={"cv"}
                                required={true}
                                className={"hidden mt-3"}
                                onChange={() => {setFileUpload(true)}}
                                accept={"application/pdf"}
                            />
                            { fileUpload ? <p className={"text-6xl mt-3"}>✅</p> : <Image src={"/upload-icone.png"} alt={"Upload"} width={60} height={60} className={"mt-3"}/>}
                        </label>
                    </div>


                    {openForm && (
                    <div className={`${classDiv}`}>
                        {openForm == "developpeur" && <FormSpecialise choix={"developpeur"}/> }
                        {openForm == "graphiste" && <FormSpecialise choix={"graphiste"}/>}
                        {openForm == "CM" && <FormSpecialise choix={"CM"}/>}


                            <button
                              type="button"
                              onClick={() => {
                                  setFormVisibility(true);
                                  setTimeout(() => document.getElementById("endDiv")?.scrollIntoView({
                                      behavior: "smooth",
                                      block: "center",
                                  }), 0);
                              }}
                              className={"bg-main w-fit block mx-auto px-9 py-3 text-white shadow rounded-sm"}
                            >
                              Suivant
                            </button>
                    </div>
                    )}

                    {formVisibility && (
                    <div className={`${classDiv} items-center`} id={"endDiv"}>
                        
                        <h1 className={'bigtitle'}>Merci pour votre candidature!</h1>
                        <p className={"text-justify"}>
                            <span className={'boldtext'}>N&#39;oubliez pas de valider avec le bouton ci-dessous! </span> Nous reviendrons vers vous sous 1 - 2 semaines par mail.
                            En attendant, n&#39;hésitez pas à rejoindre notre discord et à venir parler avec nous!
                        </p>
                         <FormStar/>

                        <button type={"submit"} className={'bg-main w-fit block mx-auto px-9 py-3 text-white shadow rounded-sm'}>Validez votre candidature</button>
                        {loading && (<p>Envoi...</p>)}
                    </div>
                    )}
                </form>
            </section>
            )}
            {formEnd && (
                <>
                    {success && (
                        <div className={`${classDiv} items-center`}>
                            <h1 className={'bigtitle'}>Merci de votre candidature!</h1>
                            <p className={'text-center boldtext'}>Vous avez reçu un mail de confirmation.</p>
                            <Link href={"/"}>
                                <button className={'bg-main text-white p-4 rounded-xl'}>
                                    Retour à l&#39;accueil
                                </button>
                            </Link>
                        </div>
                    )}
                    {!success && (
                        <div className={`${classDiv} items-center`}>
                            <h1 className={'bigtitle'}>Erreur :(</h1>
                            <p className={'text-center boldtext'}>Veuillez recommencer ou contacter EPI STUDIO.</p>
                            <Link href={"/"}>
                                <button className={'bg-main text-white p-4 rounded-xl'}>
                                    Retour à l&#39;accueil
                                </button>
                            </Link>
                        </div>
                    )}
                </>
            )}

        </>
    )
}

export function FormSpecialise({choix}: FormValue) {
    const array = questionsByRole[choix];
    return (
        <>
            {array.map((quest) => {
                return (
                    <FormInputText key={quest.name} {...quest}/>
                )
            })}
        </>
    )
}

export function FormStar() {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);

    return (
        <>
            <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className={"text-yellow-400 text-4xl"}
                >
                    {star <= (hover || rating) ? "★" : "☆"}
                </button>


            ))}
            </div>
            <input type="hidden" name="rating" value={rating} />

            <FormInputText type={"text"} name={"questionfin"} label={"Des questions/remarques?"}/>
        </>
    );
}
export function FormInputText({label, type, name, placeholder, required}: FormProps) {
    const classInput = "bg-seclight border-sec border rounded-sm p-1 outline-none lg:w-[100%]";
    return (
        <label className={"flex flex-col items-center lg:w-[90%]"}>
            <span className={"titleform"}>{label}</span>
            <input
                type={`${type}`}
                name={`${name}`}
                placeholder={placeholder}
                required={required}
                className={`${classInput}`}
            />
        </label>
    )
}



export function FormContact() {
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
                <FormInputText type={"text"} name={"name"} placeholder={"Nom et Prénom"} required={true}/>
                <FormInputText type={"text"} name={"discord"} placeholder={"@ Discord si applicable"}/>
                <FormInputText type={"email"} name={"email"} placeholder={"Email"} required={true}/>
                <FormInputText type={"text"} name={"service"} placeholder={"Service désiré / Sujet du message"}/>
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

                <FormInputText type={"text"} name={"budget"} placeholder={"Indiquez un budget"} required={true}/>
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