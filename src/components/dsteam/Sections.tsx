import { useEffect, useRef, useState } from "react";
import { MapPin, Menu, X, Globe, Mail, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { navLinks, skills, stats } from "./data";
import { discordLink, projects, staff, resolveImage, type SocialLink } from "./content";
import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./BrandIcons";
import heroBanner from "@/assets/hero-banner.jpg";

type IconComp = LucideIcon | ((props: { className?: string }) => React.ReactElement);

const socialIcons: Record<string, IconComp> = {
  facebook: FacebookIcon,
  github: GithubIcon,
  discord: DiscordIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  x: TwitterIcon,
  tiktok: TiktokIcon,
  website: Globe,
  email: Mail,
};

function SocialButton({ link, owner }: { link: SocialLink; owner: string }) {
  const Icon = socialIcons[link.type?.toLowerCase()] ?? Globe;
  return (
    <Button variant="outline" size="icon" asChild title={link.nametag ?? link.type}>
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${link.type} của ${owner}`}
      >
        <Icon className="size-4" />
      </a>
    </Button>
  );
}


export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <span className="hidden items-center gap-2 rounded-full bg-destructive/25 px-3 py-1.5 text-xs text-foreground/90 ring-1 ring-destructive/40 xl:flex">
          <span className="text-primary">★</span> From DSTEAM with love
        </span>
        <a href="#home" className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
          <span className="font-display text-lg font-bold tracking-wide">DSTEAM DEVELOPER</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button variant="discord" size="sm" asChild>
            <a href={discordLink} target="_blank" rel="noreferrer">
              <DiscordIcon className="size-4" /> Liên hệ công việc
            </a>
          </Button>
        </nav>
        <button
          className="text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-4 py-3 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden pt-16">
      <img
        src={heroBanner}
        alt="Thành phố Los Santos lúc hoàng hôn - banner DSTEAM DEVELOPER"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--color-background)_85%)]" />
      <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
        <p className="section-label">FiveM DEVELOPER UI/UX</p>
        <h1 className="mt-4 text-5xl font-bold uppercase leading-[1.05] sm:text-7xl">
          <span className="text-gradient-amber">DSTEAM</span> DEVELOPER
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Đội ngũ phát triển script FiveM tại Việt Nam — tối ưu, bảo mật và mở rộng được cho mọi máy
          chủ roleplay.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">Xem dự án</a>
          </Button>
          <Button variant="discord" size="lg" asChild>
            <a href={discordLink} target="_blank" rel="noreferrer">
              <DiscordIcon className="size-4" /> Liên hệ công việc
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="section-label">{label}</p>
      <h2 className="mt-3 text-3xl font-bold uppercase sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

export function About() {
  const chips = [
    "📍 Việt Nam",
    "⚡ Sẵn sàng nhận dự án",
    "🎯 Chuyên FiveM",
    "💎 Premium Resource",
    "🚀 2D & 3D Design",
  ];
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHead label="Giới thiệu" title="Chúng tôi xây nên chất riêng cho server của bạn" />
      <div className="mt-10 space-y-5 text-muted-foreground">
        <p>
          Chào mừng bạn đến với <strong className="text-foreground">DS TEAM</strong>, đội
          ngũ phát triển script FiveM được thành lập bởi những người đam mê GTA V Roleplay tại Việt
          Nam. Từ những dòng code đầu tiên cho đến hàng trăm resource đã release, chúng tôi luôn theo
          đuổi một mục tiêu duy nhất: mang đến trải nghiệm roleplay sâu sắc và mượt mà cho cộng đồng.
        </p>
        <p>
          Mỗi sản phẩm của DS TEAM đều được xây dựng trên triết lý{" "}
          <strong className="text-primary">"Tối ưu - Bảo mật - Mở rộng được"</strong>. Chúng tôi
          không chỉ viết code chạy được, mà còn tối ưu performance đến từng tick, bảo mật chặt chẽ
          trước mọi exploit, và thiết kế kiến trúc cho phép server admin dễ dàng tuỳ biến.
        </p>
        <p>
          Khi không "bão" code, bạn sẽ bắt gặp chúng tôi đang in-game cùng anh em, mổ xẻ các Framework
          mới, hay chia sẻ kinh nghiệm trên Discord.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {chips.map((c) => (
          <span
            key={c}
            className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-foreground/90"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-y border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead
          label="Kỹ năng"
          title="Chuyên môn của chúng tôi"
          desc="Bộ công cụ và công nghệ chúng tôi sử dụng hằng ngày để xây dựng các sản phẩm chất lượng cao"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <article
              key={s.title}
              className="surface-card group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:glow-ring"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-2xl">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <Badge key={t} variant="outline" className="border-primary/40 text-primary">
                    {t}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectImage({ name, image }: { name: string; image?: string | undefined }) {
  const src = resolveImage(image);
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <span className="text-gradient-amber font-display text-4xl font-bold uppercase tracking-widest transition-transform duration-500 group-hover:scale-105">
        {name
          .split(" ")
          .map((w) => w[0])
          .join("")}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={`Logo ${name}`}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export function Projects() {
  const [filter, setFilter] = useState("Tất cả");
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24">
      <SectionHead
        label="Dự án"
        title="Những sản phẩm nổi bật"
        desc="Một vài dự án chúng tôi đã thực hiện gần đây từ FiveM script đến công cụ web cho cộng đồng game"
      />
      {/* <div className="mt-8 flex justify-center gap-2">
        {["Tất cả", "Fivem"].map((f) => (
          <Button
            key={f}
            size="sm"
            variant={filter === f ? "hero" : "outline"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div> */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="surface-card group overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-(image:--gradient-surface)">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--color-primary)/25,transparent_60%)]" />
              <ProjectImage name={p.name} image={p.image} />


              <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <MapPin className="size-3 text-primary" /> {p.location}
              </span>
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="pt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {p.status}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="border-y border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead label="Team" title="Đội ngũ DSTEAM" desc="Những người đứng sau mỗi resource" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((m) => (
            <article key={m.name} className="surface-card rounded-2xl p-6 text-center">
              {resolveImage(m.image) ? (
                <img
                  src={resolveImage(m.image)}
                  alt={`Ảnh đại diện ${m.name}`}
                  loading="lazy"
                  className="mx-auto size-24 rounded-full object-cover ring-2 ring-primary/50"
                />
              ) : (
                <div className="text-gradient-amber mx-auto flex size-24 items-center justify-center rounded-full bg-secondary font-display text-2xl font-bold ring-2 ring-primary/50">
                  {m.name.charAt(0)}
                </div>
              )}
              <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-primary">{m.role}</p>
              <div className="mt-4 flex justify-center gap-2">
                {m.socials.map((s) => (
                  <SocialButton key={`${s.type}-${s.url}`} link={s} owner={m.name} />
                ))}
              </div>
              {m.socials.some((s) => s.nametag) && (
                <p className="mt-3 text-sm text-muted-foreground">
                  {m.socials.find((s) => s.nametag)?.nametag}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      setValue(Math.round((target * frame) / total));
      if (frame >= total) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [target, run]);
  return value;
}

function StatItem({ value, label, run }: { value: number; label: string; run: boolean }) {
  const n = useCountUp(value, run);
  return (
    <div className="text-center">
      <p className="text-gradient-amber font-display text-5xl font-bold">{n}+</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setRun(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-24">
      <SectionHead label="Thống kê" title="Hành trình bằng số liệu" />
      <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} value={s.value} label={s.label} run={run} />
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold uppercase">Sẵn sàng nâng cấp server của bạn?</h2>
        <p className="mt-4 text-muted-foreground">
          Liên hệ DSTEAM DEVELOPER qua Discord để trao đổi về dự án FiveM của bạn.
        </p>
        <Button variant="discord" size="lg" className="mt-8" asChild>
          <a href={discordLink} target="_blank" rel="noreferrer">
            <DiscordIcon className="size-4" /> Liên hệ công việc
          </a>
        </Button>
        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} DSTEAM DEVELOPER. Made with ❤️ in Việt Nam.
        </p>
      </div>
    </footer>
  );
}
