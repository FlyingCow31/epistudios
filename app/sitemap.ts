import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
     const baseUrl = "https://epistudio.fr"

     const routes = ["", "/contact", "/portfolio", "/projets", "/recrutements", "/services"]

     return routes.map((route) => ({
          url: `${baseUrl}${route}`,
          lastModified: new Date(),
          changeFrequency: route === "" ? "weekly" : "monthly",
          priority: route === "" ? 1 : 0.8,
     }))
}