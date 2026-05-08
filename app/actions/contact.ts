"use server"
import nodemailer from "nodemailer";



export default async function ContactBehaviour(formData: FormData) {
    const get = (key: string) => formData.get(key) as string;

    const name = get("name");
    const discord = get("discord");
    const email = get("email");
    const service = get("service");
    const details = get("details");
    const cdc = formData.get("cdc") as File;
    const budget = get("budget");

    const now = new Date();
    const transporter = nodemailer.createTransport({
        host: "smtp.ionos.fr",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: process.env["SMTP_USER"],
            to: "contact@epistudios.fr",
            subject: `Nouvelle Commande!`,
            attachments: [{
               filename: cdc.name,
               content: Buffer.from(await cdc.arrayBuffer()),
               contentType: "application/pdf"
            }],
            text:`
                Nouvelle commande de ${name}!
                Faite le ${now}

                Service demandé: ${service}
                Details: ${details}
                Pour un budget de ${budget}.

                ${cdc ? "Cahier des charges joint" : "Pas de cahier des charges inclus."}

                Contact:
                Email: ${email}
                Discord: ${discord}

            `
        });

        await transporter.sendMail({
            from: process.env["SMTP_USER"],
            to: email,
            subject: "Merci pour votre message!",
            text: `
        Nous avons bien reçu votre message!
        Vous pouvez vous attendre à recevoir une réponse d'ici 1 à 2 semaines, par mail. 
        Si vous ne recevez pas de réponse après deux semaines, et seulement après 2 semaines, envoyez une relance
        à l'adresse mail suivante: gael.tournier@epistudios.fr . 
        
        En attendant, nous vous invitons à venir nous rencontrer sur notre serveur discord: https://discord.gg/YRvqEMGf5N
        Ou sur notre site web: https://www.epistudios.fr 
        
        A bientôt! 
        `
        });


    } catch (error) {
        console.error("Il y a un problème avec l'envoi de mail:" + error);
        return { success: false};
    }

    return {success: true};
}