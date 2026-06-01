import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sovaos.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/",                  changeFrequency: "weekly",  priority: 1.0 },
    { path: "/platform",          changeFrequency: "monthly", priority: 0.9 },
    { path: "/solutions",         changeFrequency: "monthly", priority: 0.9 },
    { path: "/pricing",           changeFrequency: "monthly", priority: 0.8 },
    { path: "/demo",              changeFrequency: "monthly", priority: 0.8 },
    { path: "/early-access",      changeFrequency: "monthly", priority: 0.8 },
    { path: "/rankings",          changeFrequency: "monthly", priority: 0.7 },
    { path: "/resources",         changeFrequency: "weekly",  priority: 0.7 },
    { path: "/executive-circle",  changeFrequency: "monthly", priority: 0.7 },
    { path: "/about",             changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact",           changeFrequency: "yearly",  priority: 0.5 },
    { path: "/legal",             changeFrequency: "yearly",  priority: 0.3 },
    { path: "/legal/privacy",     changeFrequency: "yearly",  priority: 0.3 },
    { path: "/legal/terms",       changeFrequency: "yearly",  priority: 0.3 },
    { path: "/legal/cookies",     changeFrequency: "yearly",  priority: 0.3 },
    { path: "/legal/security",    changeFrequency: "yearly",  priority: 0.3 },
    { path: "/legal/billing",     changeFrequency: "yearly",  priority: 0.3 },
    { path: "/legal/communication", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/accessibility", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
