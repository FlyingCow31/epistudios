import type { Metadata } from "next"

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import React from "react"
import JsonLd from "./components/JsonLd"

const geistSans = Geist({
     variable: "--font-geist-sans",
     subsets: ["latin"],
})

const geistMono = Geist_Mono({
     variable: "--font-geist-mono",
     subsets: ["latin"],
})

export const metadata = {
     metadataBase: new URL("https://epistudio.fr"),
     title: "Sites web, plugins Minecraft ou jeux-vidéos, tout en Open-Source | EPI Studio",
     description:
          "Studio de développement Open-Source associatif à Toulouse : sites web sur-mesure, jeux vidéo et plugins/mods Minecraft. Devis gratuit.",
     alternates: { canonical: "https://epistudio.fr/" },
     openGraph: {
          title: "Sites web, plugins Minecraft ou jeux-vidéos, tout en Open-Source | EPI Studio",
          description:
               "Studio de développement Open-Source associatif à Toulouse : sites web sur-mesure, jeux vidéo et plugins/mods Minecraft. Devis gratuit.",
          url: "https://epistudio.fr",
          siteName: "EPI Studio",
          images: ["/og-image.png"],
          locale: "fr_FR",
          type: "website",
     },
}

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode
}>) {
     return (
          <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
               <body>
                    <JsonLd />
                    {children}
               </body>
          </html>
     )
}
