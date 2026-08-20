import siteJson from "@/content/site.json";

export type SocialType =
  | "facebook"
  | "github"
  | "discord"
  | "youtube"
  | "instagram"
  | "twitter"
  | "tiktok"
  | "website"
  | "email";

export type SocialLink = {
  type: SocialType | string;
  nametag?: string;
  url: string;
};

export type Project = {
  name: string;
  location: string;
  /** URL đầy đủ (https://...) hoặc tên file đặt trong src/assets (vd: "ora_city.png") */
  image?: string;
  desc: string;
  tags: string[];
  status: string;
};

export type Staff = {
  name: string;
  role: string;
  /** URL đầy đủ hoặc tên file trong src/assets */
  image?: string;
  socials: SocialLink[];
};

export type SiteContent = {
  discordLink: string;
  projects: Project[];
  staff: Staff[];
};

// Cho phép dùng ảnh local: đặt file vào src/assets (kể cả thư mục con) rồi ghi tên file trong JSON
const localAssets = import.meta.glob("../../assets/**/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export function resolveImage(image?: string): string | undefined {
  if (!image) return undefined;
  if (/^(https?:)?\/\//.test(image) || image.startsWith("data:") || image.startsWith("/")) {
    return image;
  }
  const file = image.replace(/^.*[\\/]/, "");
  const key = Object.keys(localAssets).find((k) => k.endsWith(`/${file}`));
  return key ? localAssets[key] : undefined;
}

export const site = siteJson as SiteContent;
export const discordLink = site.discordLink;
export const projects = site.projects;
export const staff = site.staff;
