const BASE_URL = "https://epistudio.fr"

const organization = {
     "@context": "https://schema.org",
     "@type": "Organization",
     "@id": `${BASE_URL}/#organization`,
     name: "EPI Studio",
     url: BASE_URL,
     logo: `${BASE_URL}/logo.png`, // à modifier avec le logo vraiment vrai
     description:
          "Studio de développement associatif : création de sites web sur-mesure, serveurs et bots Discord, serveurs et plugins Minecraft, graphisme et illustrations.",
     address: {
          "@type": "PostalAddress",
          addressLocality: "Toulouse",
          addressRegion: "Occitanie",
          addressCountry: "FR",
     },
     contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: `${BASE_URL}/contact`,
          availableLanguage: ["French"],
     },

     sameAs: [
          "https://discord.gg/v8QBxJnNQR",
          "https://github.com/EPI-Studios",
          "https://modrinth.com/organization/OJy3O8Lw",
          // Ajouter le insta et tous les réseaux quand on les aura fait/ils seront actifs
     ],
}

const services = [
     {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Création de site web sur-mesure",
          serviceType: "Développement web",
          description:
               "Sites web sur-mesure avec bases de données, authentification, SEO optimisé, design graphique et back-end avancé. Offres adaptées aux associations, petits business et vendeurs en ligne.",
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: "FR",
          url: `${BASE_URL}/services`,
     },
     {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Serveur Discord personnalisé",
          serviceType: "Configuration de serveur Discord",
          description:
               "Création de serveurs Discord communautaires, spécialisés ou de travail. Livraison rapide (1 à 3 jours), configuration des bots incluse.",
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: "FR",
          url: `${BASE_URL}/services`,
     },
     {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Bot Discord personnalisé",
          serviceType: "Développement de bot Discord",
          description:
               "Bots Discord sur-mesure avec toutes fonctionnalités possibles et un nombre de commandes illimité (hébergement non inclus).",
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: "FR",
          url: `${BASE_URL}/services`,
     },
     {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Serveur Minecraft personnalisé",
          serviceType: "Configuration de serveur Minecraft",
          description:
               "Serveurs Minecraft 100% personnalisés : configuration de plugins, anti-cheat, ranks personnalisés, intégration Discord. Guide gratuit de modification inclus.",
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: "FR",
          url: `${BASE_URL}/services`,
     },
     {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Plugins Minecraft personnalisés",
          serviceType: "Développement de plugin Minecraft",
          description:
               "Plugins Minecraft sur-mesure (AutoMod, factions, addons...) avec documentation complète, fichiers de configuration et 6 mois d'assistance.",
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: "FR",
          url: `${BASE_URL}/services`,
     },
     {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Graphisme et illustrations",
          serviceType: "Design graphique",
          description: "Créations graphiques et illustrations sur-mesure réalisées par nos graphistes.",
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: "FR",
          url: `${BASE_URL}/services`,
     },
]

export default function JsonLd() {
     return (
          <>
               <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
               <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }} />
          </>
     )
}
