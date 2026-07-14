import { MetadataRoute } from "next";

const routes = [
  "",
  "/features",
  "/how-it-works",
  "/pricing",
  "/integrations",
  "/customers",
  "/blog",
  "/about",
  "/contact",
  "/login",
  "/signup",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://outvue.ai";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
