"use server"

import nodemailer from "nodemailer"

export async function recrutementlogic(formData: FormData) {
     const get = (key: string) => formData.get(key) as string

     const surname = get("surname")
     const role = get("role")
     const name = get("name")
     const age = get("age")
     const email = get("email")
     const presentation = get("presentation")
     const parcours = get("parcours")
     const cv = formData.get("cv") as File

     let specialise = ""

     if (role == "developpeur") {
          const experience = get("experience")
          const langages = get("langages")
          const prefere = get("prefere")
          const projet = get("projet")
          const equipe = get("equipe")
          const securite = get("securite")
          const portfolio = get("portfolio")
          const clients = get("clients")

          specialise = `
        Experience: ${experience},
        Langages maitrisés: ${langages},
        Langage préféré: ${prefere},
        Détail de projet: ${projet},
        Comment travaillez vous en équipe : ${equipe},
        Sécurité du code: ${securite},
        Lien vers portfolio: ${portfolio},
        Experience Clients : ${clients}.
        `
     } else if (role == "graphiste") {
          const uiux = get("uiux")
          const styles = get("styles")
          const organisation = get("organisation")
          const specialisation = get("specialisation")
          const majeur = get("majeur")
          const portfoliogfx = get("portfoliogfx")
          const logiciels = get("logiciels")
          specialise = `
        Experience dans le code : ${uiux},
        Styles maitrisés: ${styles},
        Organisation: ${organisation},
        Rôle majeur: ${majeur},
        Spécialité: ${specialisation},
        Portfolio: ${portfoliogfx},
        Logiciels utilisés : ${logiciels}.
        `
     } else if (role == "CM") {
          const langues = get("langues")
          const experiencecm = get("experiencecm")
          const predilection = get("predilection")
          const rolecm = get("rolecm")
          const retoursusers = get("retoursusers")
          const avantmarque = get("avantmarque")
          const fidelisation = get("fidelisation")

          specialise = `
        Langues parlées: ${langues},
        Experience: ${experiencecm},
        Réseaux de prédilection: ${predilection},
        Projet majeur: ${rolecm},
        Gerer les retours users: ${retoursusers},
        Mettez en avant les marques: ${avantmarque},
        Fidélisez un user: ${fidelisation}.
        
        `
     }
     const rating = get("rating")
     const questionfin = get("questionfin")

     const errors: Record<string, string> = {}

     const Obligatoires = ["role", "surname", "name", "age", "presentation", "parcours", "email", "cv"]

     Obligatoires.forEach((valeur) => {
          if (!formData.get(valeur)) errors[valeur] = "Cette réponse est obligatoire!"
     })

     if (!email.includes("@")) errors.email = "L'email n'est pas valide."
     if (!cv || cv.size === 0) errors.cv = "Le CV est requis!"
     if (cv.type !== "application/pdf") errors.cv = "Le CV doit être un PDF."

     if (Object.keys(errors).length > 0) {
          return { success: false, errors }
     }

     const transporter = nodemailer.createTransport({
          host: "smtp.ionos.fr",
          port: 465,
          secure: true,
          auth: {
               user: process.env.SMTP_USER,
               pass: process.env.SMTP_PASSWORD,
          },
     })
     try {
          await transporter.sendMail({
               from: process.env["SMTP_USER"],
               to: "contact@epistudio.fr",
               subject: `Nouvelle candidature - ${role}`,
               attachments: [
                    {
                         filename: cv.name,
                         content: Buffer.from(await cv.arrayBuffer()),
                         contentType: "application/pdf",
                    },
               ],
               text: `
            Nouvelle candidature pour le rôle ${role}:
            
            Nom : ${surname},
            Prénom: ${name},
            Âge: ${age},
            Email: ${email},
            
            Présentation générale: 
            ${presentation}
            
            Parcours d'études: 
            ${parcours}
            
            
            -- Spécialité -- 
            ${specialise}
            
            
            Note: ${rating}
            Questions? ${questionfin}
        `,
          })

          await transporter.sendMail({
               from: process.env["SMTP_USER"],
               to: email,
               subject: "Merci pour votre candidature!",
               text: `
        Nous avons bien reçu votre candidature!
        Vous pouvez vous attendre à recevoir une réponse d'ici 1 à 2 semaines, par mail. 
        Si vous ne recevez pas de réponse après deux semaines, et seulement après 2 semaines, envoyez une relance
        à l'adresse mail suivante: gael.tournier@epistudios.fr . 
        
        En attendant, nous vous invitons à venir nous rencontrer sur notre serveur discord: https://discord.gg/YRvqEMGf5N
        Ou sur notre site web: https://www.epistudios.fr 
        
        A bientôt! 
        `,
          })
     } catch (error) {
          console.error("Il y a un problème avec l'envoi de mail:" + error)
          return { success: false, errors: { mail: "Une erreur est survenue lors de l'envoi du mail." } }
     }

     return { success: true }
}
