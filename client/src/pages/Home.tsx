/**
 * Aurora Terra / Home Page
 * Design direction: colorful neo-futurist editorialism with Solar Cyan, violet, coral, and amber accents,
 * asymmetric orbital layout, a custom pointer, and natural globe-like motion.
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { translations } from "@/translations";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Braces,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MousePointer2,
  Orbit,
  PenTool,
  Send,
  ServerCog,
  Sparkles,
  Video,
} from "lucide-react";

const ASSETS = {
  banners: [
    "/media/kashyap-sunny-banner.png",
    "/media/kashyap-sunny-anime-poster.png",
  ],
  hero: "/media/sunny-hero-atmosphere.webp",
  earth: "/media/sunny-holographic-earth.webp",
  earthTexture: "/media/sunny-earth-rotation-texture.webp",
  signal: "/media/sunny-signal-field.webp",
  mark: "/media/sunny-solar-orbit-mark.webp",
  microsoft: "/media/microsoft-logo.png",
  deloitte: "/media/deloitte-logo.png",
  virelapp: "/media/virelapp-logo.jpg",
};
const PALETTES = ["electric", "royal", "fire"] as const;
const FOOTER_QUOTES = [
  "There’s no meeting when both are running in the same direction.", "I became what I needed.",
  "Somewhere between lost and found.", "Build quietly. Win loudly.", "I miss who we were.",
  "Memories hurt differently.", "We became strangers again.", "Some goodbyes never end.",
  "I was there. You weren't.", "Healing isn't forgetting.", "The silence was your answer.",
  "I wish things stayed.", "Two souls can share a road and still never meet.",
  "Not every journey leads to each other.", "Sometimes, the same direction means different destinations.",
  "Parallel lives, separate worlds.", "We were moving together, just never toward each other.",
  "Even parallel lines have a story of never meeting.", "Walking the same path doesn't mean sharing the same fate.",
  "Somewhere between us, we lost the way.",
] as const;

const LANGUAGES = [
  "English", "Mandarin Chinese", "Hindi", "Spanish", "Standard Arabic",
  "French", "Italian", "Portuguese", "Indonesian", "Urdu", "Russian",
  "Standard German", "Japanese", "Nigerian Pidgin", "Egyptian Arabic",
  "Vietnamese", "Turkish", "Western Punjabi", "Swahili", "Tagalog",
  "Filipino", "Cantonese", "Korean",
] as const;

const organizationLinks = {
  microsoftInstagram:
    "https://www.instagram.com/microsoft?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==&igsi=ZDNlZDc0MzIxNw==",
  microsoftWebsite: "https://www.microsoft.com/",
  deloitteInstagram:
    "https://www.instagram.com/deloitte?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==&igsi=ZDNlZDc0MzIxNw==",
  deloitteWebsite: "https://www.deloitte.com",
  virelappInstagram:
    "https://www.instagram.com/virelapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==&igsi=ZDNlZDc0MzIxNw==",
  virelappDiscord: "https://discord.com/invite/virelapp",
};

const contactLinks = {
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=businesskashyap014@gmail.com&su=Portfolio%20Inquiry%20for%20SunnY&body=Hello%20SunnY%2C%0A%0AI%20would%20like%20to%20connect%20about%20a%20project.%0A%0ABest%2C",
  instagram: "https://www.instagram.com/kash__sunny_",
  github: "https://github.com/cateropik-pvt",
  linkedin: "http://www.linkedin.com/in/cateropiksunny-ashish",
};

const skills = [
  "C",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "JavaScript",
  "Go",
  "React",
  "Tailwind CSS",
  "Next.js",
];

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Software Systems",
    description:
      "Reliable web experiences and practical software shaped around the job to be done.",
  },
  {
    icon: ServerCog,
    number: "02",
    title: "Server Operations",
    description:
      "Calm, considered server management that gives ambitious projects a stable core.",
  },
  {
    icon: Video,
    number: "03",
    title: "Visual Direction",
    description:
      "Video editing and graphic thinking that turn a message into momentum.",
  },
  {
    icon: PenTool,
    number: "04",
    title: "Narrative & Social",
    description:
      "Scriptwriting and social media management with a clear, audience-aware voice.",
  },
];

const experience = [
  {
    mark: ASSETS.microsoft,
    label: "MICROSOFT",
    title: "Ex-Microsoft Intern",
    detail: "AI Skill Fest Badge",
    className: "microsoft-mark",
    links: [
      { label: "Instagram", href: organizationLinks.microsoftInstagram, icon: Instagram },
      { label: "Website", href: organizationLinks.microsoftWebsite, icon: ExternalLink },
    ],
  },
  {
    mark: ASSETS.deloitte,
    label: "DELOITTE",
    title: "Ex-Cybersecurity Intern",
    detail: "Security mindset / systems focus",
    className: "deloitte-mark",
    links: [
      { label: "Instagram", href: organizationLinks.deloitteInstagram, icon: Instagram },
      { label: "Website", href: organizationLinks.deloitteWebsite, icon: ExternalLink },
    ],
  },
  {
    mark: ASSETS.virelapp,
    label: "VIRELAPP",
    title: "Ex-Management",
    detail: "Team & community operations",
    className: "virelapp-mark",
    links: [
      { label: "Instagram", href: organizationLinks.virelappInstagram, icon: Instagram },
      { label: "Discord", href: organizationLinks.virelappDiscord, icon: MessageCircle },
    ],
  },
];

function Reveal({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === "left" ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SignalLabel({ children, index }: { children: React.ReactNode; index: string }) {
  return (
    <div className="signal-label">
      <span>{index}</span>
      <i />
      <strong>{children}</strong>
    </div>
  );
}

function HoloEarth() {
  return (
    <div className="earth-stage" aria-hidden="true">
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="orbit orbit-c" />
      <div className="earth-aura" />
      <div className="earth-globe">
        <div className="earth-texture" style={{ backgroundImage: `url(${ASSETS.earthTexture})` }} />
        <img className="earth-image" src={ASSETS.earth} alt="" />
        <span className="earth-shadow" />
        <span className="earth-gloss" />
      </div>
      <span className="satellite satellite-one" />
      <span className="satellite satellite-two" />
      <span className="satellite satellite-three" />
      <div className="earth-metric metric-top">22.5937° N</div>
      <div className="earth-metric metric-right">078.9629° E</div>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [bannerProgress, setBannerProgress] = useState(0);
  const [bannerIndex, setBannerIndex] = useState(() => Math.floor(Math.random() * ASSETS.banners.length));
  const [paletteIndex, setPaletteIndex] = useState(() => Math.floor(Math.random() * PALETTES.length));
  const [languageOpen, setLanguageOpen] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [footerQuoteIndex, setFooterQuoteIndex] = useState(0);
  const languagePack = translations[selectedLanguage as keyof typeof translations] ?? translations.English;
  const t = (key: keyof typeof translations.English) => languagePack[key] ?? translations.English[key];
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setBannerProgress(Math.min(window.scrollY / 520, 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = document.querySelector<HTMLDivElement>(".cursor-dot");
    const aura = document.querySelector<HTMLDivElement>(".cursor-aura");
    if (!dot || !aura) return;

    document.body.classList.add("cursor-active");
    let idleTimer: number | undefined;
    const scheduleCursorIdle = () => {
      document.body.classList.remove("cursor-idle");
      if (idleTimer) window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => document.body.classList.add("cursor-idle"), 4000);
    };
    const onPointerMove = (event: PointerEvent) => {
      const transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      dot.style.transform = transform;
      aura.style.transform = transform;
      const target = event.target instanceof Element ? event.target : null;
      document.body.classList.toggle("cursor-is-link", Boolean(target?.closest("a, button, [role='button']")));
      scheduleCursorIdle();
    };
    scheduleCursorIdle();
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (idleTimer) window.clearTimeout(idleTimer);
      document.body.classList.remove("cursor-active", "cursor-is-link", "cursor-idle");
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFooterQuoteIndex((current) => (current + 1) % FOOTER_QUOTES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const randomizeBanner = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof Element) || !event.target.closest("a")) return;
    setBannerIndex((current) => {
      if (ASSETS.banners.length < 2) return current;
      let next = current;
      while (next === current) next = Math.floor(Math.random() * ASSETS.banners.length);
      return next;
    });
    setPaletteIndex((current) => {
      let next = current;
      while (next === current) next = Math.floor(Math.random() * PALETTES.length);
      return next;
    });
  };

  const chooseLanguage = (language: string) => {
    setSelectedLanguage(language);
    setLanguageOpen(false);
  };
  const serviceCopy = [
    ["service_software", "service_software_desc"],
    ["service_server", "service_server_desc"],
    ["service_visual", "service_visual_desc"],
    ["service_social", "service_social_desc"],
  ] as const;

  return (
    <div className="site-shell" data-palette={PALETTES[paletteIndex]} onClick={randomizeBanner}>
      {languageOpen && (
        <div className="language-alert-backdrop" role="presentation">
          <section className="language-alert" role="dialog" aria-modal="true" aria-labelledby="language-title">
            <div className="language-alert-kicker">{t("language_kicker")}</div>
            <h2 id="language-title">{t("language_title")}</h2>
            <p>{t("language_prompt")}</p>
            <div className="language-options">
              {LANGUAGES.map((language) => (
                <button
                  className={`language-option ${selectedLanguage === language ? "is-selected" : ""}`}
                  type="button"
                  key={language}
                  onClick={() => chooseLanguage(language)}
                >
                  {language}
                </button>
              ))}
            </div>
          </section>
        </div>
      )}
      <div className="grain" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-aura" aria-hidden="true" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="SunnY home">
          <img src={ASSETS.mark} alt="" />
          <span className="brand-word">Sunn<span>Y</span></span>
        </a>

        <a className="header-cta" href={contactLinks.email} target="_blank" rel="noreferrer">
          {t("contact_me")} <Mail size={15} />
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div
            className="hero-banner-shell"
            style={{ "--banner-progress": bannerProgress } as React.CSSProperties}
          >
            <img key={bannerIndex} className="hero-banner" src={ASSETS.banners[bannerIndex]} alt="Kashyap Sunny portfolio poster" />
            <div className="hero-banner-shade" />
            <div className="hero-banner-caption"><span>KASHYAP SUNNY</span><i /> <small>PERSONAL PORTFOLIO / 2026</small></div>
          </div>
          <img className="hero-atmosphere" src={ASSETS.hero} alt="" />
          <div className="hero-vignette" />
          <div className="hero-wire wire-one" />
          <div className="hero-wire wire-two" />
          <div className="hero-content">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="eyebrow"><Sparkles size={14} /> {t("hero_eyebrow")}</div>
              <h1>{t("hero_build")}<br /><em>{t("hero_next")}</em> {t("hero_signal")}</h1>
              <p>{t("hero_intro")}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={contactLinks.email} target="_blank" rel="noreferrer">
                  {t("contact_me")} <Mail size={18} />
                </a>
                <a className="button button-ghost" href="#experience">
                  <BriefcaseBusiness size={17} /> {t("view_history")}
                </a>
              </div>
            </motion.div>
            <HoloEarth />
          </div>
          <div className="hero-footer">
            <div className="availability"><span /> {t("available")}</div>
            <a href="#profile" className="scroll-cue">{t("scroll_initialize")} <MousePointer2 size={14} /></a>
            <div className="location-readout"><MapPin size={14} /> {t("location")}</div>
          </div>
        </section>

        <section className="profile-section section" id="profile">
          <div className="section-rail" aria-hidden="true"><span /></div>
          <div className="section-orbit profile-orbit" aria-hidden="true" />
          <Reveal direction="left" className="profile-intro">
            <SignalLabel index="01">{t("profile_label")}</SignalLabel>
            <h2>{t("profile_heading")}</h2>
          </Reveal>
          <Reveal direction="right" delay={0.08} className="profile-details">
            <p>{t("profile_text")}</p>
            <div className="qualification-note">
              <BadgeCheck size={22} />
              <span>{t("qualification")}</span>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.12} className="skills-block">
            <div className="skills-title"><Braces size={20} /><span>{t("skills_title")}</span></div>
            <div className="skill-cloud">
              {skills.map((skill, index) => <span key={skill} className={index === 6 || index === 7 ? "skill-hot" : ""}>{skill}</span>)}
              <span className="skill-more">{t("more")}</span>
            </div>
          </Reveal>
        </section>

        <section className="experience-section section" id="experience">
          <img className="signal-field" src={ASSETS.signal} alt="" />
          <div className="experience-overlay" />
          <div className="section-frame">
            <Reveal direction="left" className="experience-heading">
              <SignalLabel index="02">{t("history_label")}</SignalLabel>
              <h2>{t("history_heading")}</h2>
            </Reveal>
            <p className="experience-intro">{t("history_intro")}</p>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.06} key={item.label}>
                <article className="experience-card">
                  <div className={`experience-logo ${item.className}`}>
                    <img src={item.mark} alt={`${item.label} logo`} />
                  </div>
                  <div className="experience-body">
                    <div className="experience-topline"><span>{item.label}</span><span>0{index + 1} / 03</span></div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <div className="experience-links">
                    {item.links.map(({ label, href, icon: Icon }) => (
                      <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={`${item.label} ${label}`}>
                        <Icon size={16} /><span>{label === "Website" ? t("website") : label === "Instagram" ? t("instagram") : t("discord")}</span><ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="capabilities-section section" id="capabilities">
          <div className="section-orbit capability-orbit" aria-hidden="true" />
          <div className="orbit-node capability-node" aria-hidden="true" />
          <div className="capabilities-head">
            <Reveal direction="left">
              <SignalLabel index="03">{t("capabilities_label")}</SignalLabel>
              <h2 className="alternate-heading"><span>03/</span>{t("capabilities_heading")}</h2>
            </Reveal>
            <Reveal direction="right" className="capabilities-note">
              <Orbit size={22} />
              <p>{t("capabilities_note")}</p>
            </Reveal>
          </div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.05} key={service.title}>
                  <article className="service-card">
                    <div className="service-card-top"><span>{service.number}</span><Icon size={23} /></div>
                    <h3>{t(serviceCopy[index][0])}</h3>
                    <p>{t(serviceCopy[index][1])}</p>
                    <a href="#contact">{t("discuss")} <ChevronRight size={16} /></a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="contact-flare" aria-hidden="true" />
          <Reveal direction="left" className="contact-copy">
            <SignalLabel index="04">{t("contact_label")}</SignalLabel>
            <h2>{t("contact_heading")}</h2>
            <p>{t("contact_text")}</p>
          </Reveal>
          <Reveal direction="right" delay={0.08} className="contact-terminal">
            <div className="terminal-top"><span /><span /><span /><b>OUTBOUND_MESSAGE.exe</b></div>
            <a className="terminal-main-link" href={contactLinks.email} target="_blank" rel="noreferrer">
              <span className="terminal-prompt">{t("email_prompt")}</span>
              <b>businesskashyap014@gmail.com</b>
              <ArrowUpRight size={21} />
            </a>
            <div className="social-links">
              <a href={contactLinks.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /><span>@kash__sunny_</span><ArrowUpRight size={13} /></a>
              <a href={contactLinks.github} target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub</span><ArrowUpRight size={13} /></a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span>LinkedIn</span><ArrowUpRight size={13} /></a>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="mini-footer">
        <p className="mini-footer-quote" aria-live="polite" key={footerQuoteIndex}>{FOOTER_QUOTES[footerQuoteIndex]}</p>
      </footer>
    </div>
  );
}
