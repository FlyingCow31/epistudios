"use client"

import React, { useEffect, useState } from "react"
import { recrutementlogic } from "@/app/actions/recrutements"
import CommonList from "@/app/data/questions/common"
import { InputTextForm } from "@/app/components/forms/input/InputTextForm"
import { SpecialiseForm } from "@/app/components/forms/specialise/SpecialiseForm"
import { StarForm } from "@/app/components/forms/star/StarForm"
import Link from "next/link"
import { FaCheck, FaUpload } from "react-icons/fa"
import { FAQ } from "@/app/components/faq/FAQ"
import RecrutementsList from "@/app/data/faq/recrutements"
import { useCooldownTimer } from "@/app/components/forms/cooldown"

export default function GeneralForm() {
     const [openForm, setOpenForm] = useState<string | null>(null)
     const [formVisibility, setFormVisibility] = useState(false)
     const [fileUpload, setFileUpload] = useState(false)
     const [fileName, setFileName] = useState("")
     const [formEnd, setFormEnd] = useState(false)

     const time = 30000
     const countdownItem = "recrutmentFormCooldown"

     const { isCooldown, setIsCooldown, secondsLeft, startCooldownTimer } = useCooldownTimer(countdownItem)

     const [loading, setLoading] = useState(false)
     const [errors, setErrors] = useState<Record<string, string>>({})
     const [success, setSuccess] = useState(false)

     useEffect(() => {
          const cooldownUntil = localStorage.getItem(countdownItem)

          if (!cooldownUntil) return

          const cooldownUntilNumber = Number(cooldownUntil)

          if (cooldownUntilNumber > Date.now()) {
               // eslint-disable-next-line react-hooks/immutability
               startCooldownTimer(cooldownUntilNumber)
          } else {
               localStorage.removeItem(countdownItem)
          }
     }, [])

     const handleSubmit = async (e: React.BaseSyntheticEvent) => {
          e.preventDefault()

          if (isCooldown) return

          setIsCooldown(true)

          const cooldownUntil = Date.now() + time

          startCooldownTimer(cooldownUntil)

          localStorage.setItem(countdownItem, cooldownUntil.toString())

          setLoading(true)

          try {
               const formData = new FormData(e.currentTarget)
               const result = await recrutementlogic(formData)

               if (result.success) {
                    setLoading(false)
                    setFormEnd(true)
                    setSuccess(true)
                    setErrors({})
               } else {
                    setLoading(false)
                    setFormEnd(true)
                    setSuccess(false)
               }
          } catch (error) {
               console.log("Erreur dans la communication", error)
               setLoading(false)
               setFormEnd(true)
          }
     }

     const classRadio = "appearance-none p-2 checked:bg-main outline-sec outline outline-offset-3 rounded-sm"
     const classDiv =
          "bg-white flex flex-col gap-6 w-80 mx-auto p-4 rounded-lg shadow mt-6 mb-6 lg:w-[60%] lg:items-center"
     return (
          <>
               {!formEnd && (
                    <section className={"mt-10"}>
                         <form onSubmit={handleSubmit}>
                              <div className={`${classDiv}`}>
                                   <p className={"titleform"}>Quelle est votre spécialité?</p>
                                   <label className={"flex items-center gap-3"} htmlFor="role">
                                        <input
                                             id="role"
                                             type={"radio"}
                                             name={"role"}
                                             value={"developpeur"}
                                             className={`${classRadio}`}
                                             onChange={(e) => setOpenForm(e.target.value)}
                                        />
                                        Développeur
                                   </label>
                                   <label className={"flex items-center gap-3"} htmlFor="role">
                                        <input
                                             id="role"
                                             type={"radio"}
                                             name={"role"}
                                             value={"graphiste"}
                                             className={`${classRadio}`}
                                             onChange={(e) => setOpenForm(e.target.value)}
                                        />
                                        Graphiste
                                   </label>
                                   <label className={"flex items-center gap-3"} htmlFor="role">
                                        <input
                                             id="role"
                                             type={"radio"}
                                             name={"role"}
                                             value={"CM"}
                                             className={`${classRadio}`}
                                             onChange={(e) => setOpenForm(e.target.value)}
                                        />
                                        Community Manager (CM)
                                   </label>
                                   {errors.role && <p className="text-red-500">{errors.role}</p>}
                              </div>

                              <div className={"my-6 w-80 mx-auto flex flex-col gap-3 w-[100%]"}>
                                   <article>
                                        <h2 className={"titleform"}>F.A.Q - Avant de commencer la candidature</h2>
                                        <FAQ questions={RecrutementsList} />
                                   </article>
                                   <p className={"text-center font-xl text-main"}>
                                        Vous avez d&#39;autres questions? <br />
                                        Pas de panique, vous pourrez les poser à la fin du formulaire.
                                   </p>
                              </div>

                              <div className={`${classDiv}`}>
                                   <h2 className={"titleform"}>Présentations</h2>
                                   <p className={"text-justify"}>
                                        Dans cette première partie, nous voulons en savoir plus sur vous, vos passions
                                        et votre histoire! Détaillez un maximum, plus vous parlez, mieux c&#39;est !
                                   </p>

                                   {CommonList.map((quest) => {
                                        return (
                                             <React.Fragment key={quest.name}>
                                                  <InputTextForm {...quest} />
                                                  {errors[quest.name] && (
                                                       <p className="text-red-500">{errors[quest.name]}</p>
                                                  )}
                                             </React.Fragment>
                                        )
                                   })}

                                   <label
                                        className={"flex flex-col items-center gap-1 lg:w-[90%]"}
                                        htmlFor="presentation"
                                   >
                                        <span className={"titleform"}>Présentation Générale (min. 50 mots)</span>
                                        <textarea
                                             id="presentation"
                                             name={"presentation"}
                                             placeholder={"Je suis passionné de... , j'ai déja fait..."}
                                             rows={5}
                                             className={
                                                  "mx-auto w-70 bg-seclight border-sec border rounded-sm p-2 outline-none lg:w-[100%]"
                                             }
                                             minLength={50}
                                             required={true}
                                        />
                                   </label>
                                   <label className={"flex flex-col items-center gap-1 lg:w-[90%]"} htmlFor="parcours">
                                        <span className={"titleform"}>Présentation de votre parcours d&#39;études</span>
                                        <textarea
                                             id="parcours"
                                             name={"parcours"}
                                             placeholder={"J'ai un bac +3 en ... , j'étudie le..."}
                                             required={true}
                                             rows={5}
                                             className={
                                                  "mx-auto w-70 bg-seclight border-sec border rounded-sm p-2 outline-none lg:w-[100%]"
                                             }
                                        />
                                   </label>

                                   <label className="flex flex-col items-center gap-3 lg:w-[90%]" htmlFor="cv-upload">
                                        <span className={"titleform"}>
                                             Joignez votre CV à votre candidature. Pas besoin de lettre de motivation!
                                             (PDF uniquements.)
                                        </span>

                                        <div className="flex flex-col items-center justify-center border border-sec rounded-sm w-full p-5 gap-4">
                                             <label htmlFor="cv-upload">
                                                  Glissez votre CV ici ou cliquez pour sélectionner un fichier
                                             </label>

                                             <input
                                                  id="cv-upload"
                                                  type="file"
                                                  name="cv"
                                                  required
                                                  accept="application/pdf"
                                                  className="hidden"
                                                  onChange={(e) => {
                                                       const file = e.target.files?.[0]

                                                       if (file) {
                                                            setFileUpload(true)
                                                            setFileName(file.name)
                                                       }
                                                  }}
                                             />

                                             {fileUpload ? (
                                                  <FaCheck size={100} className="text-main" />
                                             ) : (
                                                  <FaUpload size={100} className="text-main" />
                                             )}
                                        </div>
                                   </label>

                                   {fileName && <p className="text-main">Fichier importé : {fileName}</p>}
                              </div>

                              {openForm && (
                                   <div className={`${classDiv}`}>
                                        {openForm == "developpeur" && <SpecialiseForm choix={"developpeur"} />}
                                        {openForm == "graphiste" && <SpecialiseForm choix={"graphiste"} />}
                                        {openForm == "CM" && <SpecialiseForm choix={"CM"} />}

                                        <button
                                             type="button"
                                             onClick={() => {
                                                  setFormVisibility(true)
                                                  setTimeout(
                                                       () =>
                                                            document.getElementById("endDiv")?.scrollIntoView({
                                                                 behavior: "smooth",
                                                                 block: "center",
                                                            }),
                                                       0,
                                                  )
                                             }}
                                             className={
                                                  "bg-main w-fit block mx-auto px-9 py-3 text-white shadow rounded-sm hover:scale-105 transition-all duration-300"
                                             }
                                        >
                                             Suivant
                                        </button>
                                   </div>
                              )}

                              {formVisibility && (
                                   <div className={`${classDiv} items-center`} id={"endDiv"}>
                                        <h2 className={"bigtitle"}>Merci pour votre candidature!</h2>
                                        <p className={"text-justify"}>
                                             <span className={"boldtext"}>
                                                  N&#39;oubliez pas de valider avec le bouton ci-dessous!{" "}
                                             </span>{" "}
                                             Nous reviendrons vers vous sous 1 - 2 semaines par mail. En attendant,
                                             n&#39;hésitez pas à rejoindre notre discord et à venir parler avec nous!
                                        </p>
                                        <StarForm />

                                        <button
                                             type={"submit"}
                                             disabled={isCooldown}
                                             className={
                                                  "bg-main w-fit block mx-auto px-9 py-3 text-white shadow rounded-sm hover:scale-105 transition-all duration-300" +
                                                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-main disabled:hover:text-white"
                                             }
                                        >
                                             {isCooldown
                                                  ? `Veuillez patienter (${secondsLeft}s)`
                                                  : "Valider votre candidature"}
                                        </button>
                                        {loading && <p>Envoi...</p>}
                                   </div>
                              )}
                         </form>
                    </section>
               )}
               {formEnd && (
                    <>
                         {success && (
                              <div className={`${classDiv} items-center`}>
                                   <h2 className={"bigtitle"}>Merci de votre candidature!</h2>
                                   <p className={"text-center boldtext"}>Vous avez reçu un mail de confirmation.</p>
                                   <Link
                                        href={"/"}
                                        className={
                                             "bg-main text-white p-4 rounded-xl hover:scale-105 transition-all duration-300"
                                        }
                                   >
                                        Retour à l&#39;accueil
                                   </Link>
                              </div>
                         )}
                         {!success && (
                              <div className={`${classDiv} items-center`}>
                                   <h2 className={"bigtitle"}>Erreur :(</h2>
                                   <p className={"text-center boldtext"}>
                                        Veuillez recommencer ou contacter EPI STUDIO.
                                   </p>
                                   <Link
                                        href={"/"}
                                        className={
                                             "bg-main text-white p-4 rounded-xl hover:scale-105 transition-all duration-300"
                                        }
                                   >
                                        Retour à l&#39;accueil
                                   </Link>
                              </div>
                         )}
                    </>
               )}
          </>
     )
}
