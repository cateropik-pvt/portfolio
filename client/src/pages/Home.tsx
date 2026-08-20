/**
 * Aurora Terra / Home Page
 * Design direction: colorful neo-futurist editorialism with Solar Cyan, violet, coral, and amber accents,
 * asymmetric orbital layout, a custom pointer, and natural globe-like motion.
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  Menu,
  MessageCircle,
  MousePointer2,
  Orbit,
  PenTool,
  Phone,
  Send,
  ServerCog,
  Sparkles,
  Video,
  X,
} from "lucide-react";

const ASSETS = {
  hero: "/media/sunny-hero-atmosphere.webp",
  earth: "/media/sunny-holographic-earth.webp",
  earthTexture: "/media/sunny-earth-rotation-texture.webp",
  signal: "/media/sunny-signal-field.webp",
  mark: "/media/sunny-solar-orbit-mark.webp",
  microsoft: "/media/microsoft-logo.png",
  deloitte: "/media/deloitte-logo.png",
  virelapp: "/media/virelapp-logo.jpg",
};

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
  phone: "tel:+919693457255",
  whatsapp: "https://wa.me/919693457255",
  instagram: "https://www.instagram.com/kash_sunny",
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
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      idleTimer = window.setTimeout(() => document.body.classList.add("cursor-idle"), 5000);
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

  const closeNav = () => setNavOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-aura" aria-hidden="true" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="SunnY home" onClick={closeNav}>
          <img src={ASSETS.mark} alt="" />
          <span className="brand-word">Sunn<span>Y</span><small>ORBITAL ID_014</small></span>
        </a>

        <nav className={`site-nav ${navOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {[
            ["Profile", "#profile"],
            ["Experience", "#experience"],
            ["Capabilities", "#capabilities"],
            ["Contact", "#contact"],
          ].map(([label, href], index) => (
            <a href={href} key={href} onClick={closeNav}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={contactLinks.email} target="_blank" rel="noreferrer">
          Contact Me <Mail size={15} />
        </a>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setNavOpen((open) => !open)}
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={navOpen}
        >
          {navOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero-section" id="home">
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
              <div className="eyebrow"><Sparkles size={14} /> SOFTWARE ENGINEER / INDIA</div>
              <h1>Build the<br /><em>next</em> signal.</h1>
              <p>
                I’m SunnY — a software engineer who brings code, systems, and sharp communication into one capable operating rhythm.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={contactLinks.email} target="_blank" rel="noreferrer">
                  Contact Me <Mail size={18} />
                </a>
                <a className="button button-ghost" href="#experience">
                  <BriefcaseBusiness size={17} /> View signal history
                </a>
              </div>
            </motion.div>
            <HoloEarth />
          </div>
          <div className="hero-footer">
            <div className="availability"><span /> AVAILABLE FOR NEW WORK</div>
            <a href="#profile" className="scroll-cue">SCROLL TO INITIALIZE <MousePointer2 size={14} /></a>
            <div className="location-readout"><MapPin size={14} /> INDIA / GMT +5:30</div>
          </div>
        </section>

        <section className="profile-section section" id="profile">
          <div className="section-rail" aria-hidden="true"><span /></div>
          <div className="section-orbit profile-orbit" aria-hidden="true" />
          <Reveal direction="left" className="profile-intro">
            <SignalLabel index="01">PROFILE</SignalLabel>
            <h2>A multidisciplinary operator with a <em>systems</em> mind.</h2>
          </Reveal>
          <Reveal direction="right" delay={0.08} className="profile-details">
            <p>
              Software engineering is my primary language. I also bring video editing, scriptwriting, server management, and social media management into the same working system—so ideas can move from strategy to execution without losing their signal.
            </p>
            <div className="qualification-note">
              <BadgeCheck size={22} />
              <span><b>Creating opportunities and jobs for newbies</b> across management, graphic design, and more.</span>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.12} className="skills-block">
            <div className="skills-title"><Braces size={20} /><span>LANGUAGES / TOOLS</span></div>
            <div className="skill-cloud">
              {skills.map((skill, index) => <span key={skill} className={index === 6 || index === 7 ? "skill-hot" : ""}>{skill}</span>)}
              <span className="skill-more">+ more</span>
            </div>
          </Reveal>
        </section>

        <section className="experience-section section" id="experience">
          <img className="signal-field" src={ASSETS.signal} alt="" />
          <div className="experience-overlay" />
          <div className="section-frame">
            <Reveal direction="left" className="experience-heading">
              <SignalLabel index="02">SIGNAL HISTORY</SignalLabel>
              <h2>Experience that<br />ships with <em>context.</em></h2>
            </Reveal>
            <p className="experience-intro">Technical foundations, security thinking, and leadership perspective collected across meaningful environments.</p>
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
                        <Icon size={16} /><span>{label}</span><ArrowUpRight size={14} />
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
              <SignalLabel index="03">CAPABILITIES</SignalLabel>
              <h2 className="alternate-heading"><span>03/</span>A working<br />signal system.</h2>
            </Reveal>
            <Reveal direction="right" className="capabilities-note">
              <Orbit size={22} />
              <p>Choose a lane or connect the full stack of capabilities.</p>
            </Reveal>
          </div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.05} key={service.title}>
                  <article className="service-card">
                    <div className="service-card-top"><span>{service.number}</span><Icon size={23} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact">Discuss this lane <ChevronRight size={16} /></a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="contact-flare" aria-hidden="true" />
          <Reveal direction="left" className="contact-copy">
            <SignalLabel index="04">CONTACT</SignalLabel>
            <h2>Have a signal<br />worth <em>building?</em></h2>
            <p>Let’s make the next message count. Reach out through the channel that fits the moment.</p>
          </Reveal>
          <Reveal direction="right" delay={0.08} className="contact-terminal">
            <div className="terminal-top"><span /><span /><span /><b>OUTBOUND_MESSAGE.exe</b></div>
            <a className="terminal-main-link" href={contactLinks.email} target="_blank" rel="noreferrer">
              <span className="terminal-prompt">&gt; EMAIL</span>
              <b>businesskashyap014@gmail.com</b>
              <ArrowUpRight size={21} />
            </a>
            <div className="contact-channel-row">
              <a href={contactLinks.phone}><Phone size={16} /><span>+91 96934 57255</span></a>
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /><span>WhatsApp</span></a>
            </div>
            <div className="social-links">
              <a href={contactLinks.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /><span>Instagram</span><ArrowUpRight size={13} /></a>
              <a href={contactLinks.github} target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub</span><ArrowUpRight size={13} /></a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span>LinkedIn</span><ArrowUpRight size={13} /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><img src={ASSETS.mark} alt="" /><span className="brand-word">Sunn<span>Y</span><small>ORBITAL ID_014</small></span></a>
        <p>SOFTWARE ENGINEER · INDIA</p>
        <a href="#home" className="back-to-top">BACK TO TOP <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
