"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  ArrowRight,
  Brain,
  Cpu,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  Sparkle,
  Sparkles,
  Terminal,
  TrendingUp,
  Zap,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const email = "kent.hinayon@urios.edu.ph";

  const navItems = useMemo(() => ["home", "projects", "skills", "innovating",] as const, []);

  const topProjects = useMemo(
    () => [
      {
        title: "Mini E‑Commerce System",
        kind: "Web Application",
        description:
          "A mini e‑commerce system featuring product listing, user authentication, and order management.",
        tech: ["Django", "Semantic UI", "Alpine.js"],
        liveUrl: "#",
        githubUrl: "#",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=900&fit=crop",
        highlight: "Product listing • auth • orders",
      },
      {
        title: "Educational & Advising Systems",
        kind: "Academic Project",
        description:
          "School-focused systems built to support workflows like advising, student tracking, and data reporting.",
        tech: ["JavaScript", "HTML5", "CSS3", "SQL"],
        liveUrl: "#",
        githubUrl: "#",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&h=900&fit=crop",
        highlight: "CRUD workflows • database design • responsive UI",
      },
      {
        title: "Data Management (XML Serialization)",
        kind: "System-Based Project",
        description:
          "Data management utilities emphasizing structured persistence via XML serialization and clean data models.",
        tech: ["VB.NET", "SQL", "XML"],
        liveUrl: "#",
        githubUrl: "#",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=900&fit=crop",
        highlight: "Data modeling • serialization • reporting",
      },
      {
        title: "Web‑based School Applications",
        kind: "Web App",
        description:
          "A collection of web‑based applications built for school projects—focused on usability, speed, and clean UI.",
        tech: ["Django", "JavaScript", "SQL"],
        liveUrl: "#",
        githubUrl: "#",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400&h=900&fit=crop",
        highlight: "Modern best practices • scalable patterns • user-friendly",
      },
    ],
    [],
  );

  const skills = useMemo(
    () => [
      { title: "Python", description: "Backend scripting and web development basics", icon: Terminal },
      { title: "JavaScript", description: "Frontend interactivity and modern web patterns", icon: Sparkle },
      { title: "VB.NET", description: "Desktop/system projects and serialization workflows", icon: Cpu },
      { title: "HTML5 & CSS3", description: "Responsive layouts and accessible UI structure", icon: Layers },
      { title: "SQL", description: "Schema design, queries, and relational data management", icon: Brain },
      { title: "Django", description: "CRUD apps, auth, and RESTful backend development", icon: Zap },
      { title: "Alpine.js", description: "Lightweight frontend interactivity", icon: TrendingUp },
      { title: "Semantic UI", description: "Clean, consistent UI components", icon: ShieldCheck },
    ],
    [],
  );

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 dark:bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(1000px_circle_at_80%_30%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(900px_circle_at_50%_90%,rgba(56,189,248,0.10),transparent_55%)]" />
        <div className="absolute inset-0 dark:hidden bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(1000px_circle_at_80%_30%,rgba(168,85,247,0.10),transparent_60%),radial-gradient(900px_circle_at_50%_90%,rgba(56,189,248,0.06),transparent_60%)]" />
        <div className="cosmic-particles absolute inset-0 opacity-70" />
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.55),rgba(0,0,0,0.95))]" />
        <div className="absolute inset-0 dark:hidden bg-[linear-gradient(to_bottom,rgba(255,255,255,0.0),rgba(255,255,255,0.55),rgba(255,255,255,0.92))]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            <span className="relative inline-flex size-9 items-center justify-center rounded-xl border border-border bg-panel">
              <Sparkles className="text-cyan-400" size={18} />
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-cyan-400/10 group-hover:ring-cyan-400/25" />
            </span>
            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-purple-300 bg-clip-text text-lg font-semibold text-transparent">
            </span>
          </button>

          {/* Desktop */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={
                  "capitalize text-sm tracking-wide transition-colors hover:text-cyan-500 dark:hover:text-cyan-200 " +
                  (activeSection === item ? "text-cyan-600 dark:text-cyan-200" : "text-muted")
                }
              >
                {item}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <button
            className="md:hidden inline-flex size-10 items-center justify-center rounded-xl border border-border bg-panel"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/70 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-5 py-3 sm:px-6">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="rounded-xl px-4 py-3 text-left text-sm capitalize text-foreground/90 hover:bg-panel"
                  >
                    {item}
                  </button>
                ))}
                <div className="px-4 py-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative mx-auto flex min-h-[92vh] max-w-6xl items-center px-5 pt-28 sm:px-6">
        <div className="mx-auto w-full max-w-3xl text-center">
          <div className="rounded-[28px] border border-border/60 bg-background/55 p-6 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.12)] sm:p-10 dark:bg-black/30 dark:shadow-[0_22px_80px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-xs text-foreground/80">
              <span className="inline-flex size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
              Welcome to my creative space
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-cyan-200 via-teal-200 to-purple-300 bg-clip-text text-transparent">
                Kent Hinayon
              </span>
              <span className="text-foreground"> – Professional Full Stack Developer & Programmer</span>
            </h1>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              I’m a passionate and dedicated developer who enjoys turning ideas into efficient, user‑friendly, and
              scalable software. I’m detail‑oriented, adaptable, and motivated to solve real‑world problems through
              clean code and well‑designed systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:brightness-110"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-panel px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:border-cyan-300/40 hover:bg-panel-strong"
              >
                Contact Me
                <Zap size={16} className="text-cyan-600 dark:text-cyan-200" />
              </button>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/kenthinayon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-panel text-foreground/80 transition hover:border-purple-300/40 hover:bg-panel-strong"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-panel text-foreground/80 transition hover:border-cyan-300/40 hover:bg-panel-strong"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Professional development</p>
                <p className="mt-1 text-sm text-muted">Clean code, scalable systems, and thoughtful UX.</p>
              </div>
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Always learning</p>
                <p className="mt-1 text-sm text-muted">Modern tools, best practices, and continuous improvement.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects (Bento) */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
            <p className="mt-2 max-w-2xl text-muted">
              A few highlights from academic and system-based work—built with clean UI, solid backend logic, and
              maintainable code.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-xs text-foreground/75">
            <Terminal size={16} className="text-cyan-600 dark:text-cyan-200" />
            Django • JavaScript • SQL
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {topProjects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-panel transition hover:border-cyan-300/30 hover:bg-panel-strong"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute -inset-24 bg-[radial-gradient(500px_circle_at_30%_20%,rgba(34,211,238,0.20),transparent_55%),radial-gradient(500px_circle_at_80%_70%,rgba(168,85,247,0.18),transparent_55%)]" />
              </div>

              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_220px] lg:items-stretch">
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-cyan-700/90 dark:text-cyan-200/90">{project.kind}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-panel px-3 py-2 text-xs text-foreground/75">
                      <Sparkles size={14} className="text-purple-600 dark:text-purple-200" />
                      Featured
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

                  <p className="mt-4 text-xs text-foreground/70">
                    <span className="font-semibold text-foreground/85">Highlights:</span> {project.highlight}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-panel px-3 py-1 text-xs text-foreground/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-300 px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 rounded-2xl border border-border bg-panel px-4 py-2 text-sm font-semibold text-foreground/85 transition hover:border-purple-300/40 hover:bg-panel-strong"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-border bg-panel">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 220px, 100vw"
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_circle_at_10%_20%,rgba(34,211,238,0.25),transparent_55%),radial-gradient(400px_circle_at_90%_80%,rgba(168,85,247,0.22),transparent_55%)]" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-foreground/55">
         
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h2>
            <p className="mt-2 max-w-2xl text-muted">
              Languages, frameworks, and development skills I use to build reliable applications.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-xs text-foreground/75">
            <Terminal size={16} className="text-purple-600 dark:text-purple-200" />
            Python • JavaScript • Django
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-border bg-panel p-6 transition hover:border-purple-300/30 hover:bg-panel-strong"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-panel shadow-[0_0_24px_rgba(168,85,247,0.15)]">
                  <Icon size={20} className="text-purple-600 dark:text-purple-200" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{description}</p>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute -inset-24 bg-[radial-gradient(500px_circle_at_15%_20%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(500px_circle_at_85%_80%,rgba(34,211,238,0.16),transparent_55%)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Innovating */}
      <section id="innovating" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-7 lg:col-span-2">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Currently Learning</h2>
                <p className="mt-2 max-w-2xl text-muted">
                  Continuously improving my skills through modern technologies and best practices in software
                  development.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-panel px-3 py-2 text-xs text-foreground/75">
                <Zap size={14} className="text-cyan-600 dark:text-cyan-200" />
                In progress
              </span>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Django backend patterns</p>
                <p className="mt-1 text-sm text-muted">Authentication, authorization, and clean app structure.</p>
              </div>
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">RESTful APIs</p>
                <p className="mt-1 text-sm text-muted">Designing endpoints, validation, and clean responses.</p>
              </div>
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Responsive UI</p>
                <p className="mt-1 text-sm text-muted">Semantic layouts, accessibility, and mobile-first design.</p>
              </div>
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Git & GitHub workflows</p>
                <p className="mt-1 text-sm text-muted">Better branching, reviews, and project organization.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-panel p-7">
            <p className="text-xs font-semibold tracking-wide text-cyan-700/90 dark:text-cyan-200/90">Bio</p>
            <h3 className="mt-2 text-xl font-semibold">Short & sharp</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              I&apos;m Kent Hinayon, a professional developer and programmer who enjoys building efficient,
              user‑friendly software. I work well independently and in team environments, and I’m always improving
              through continuous learning.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { label: "Python", icon: Terminal },
                { label: "JavaScript", icon: Layers },
                { label: "Django", icon: Cpu },
                { label: "SQL", icon: ShieldCheck },
              ].map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 text-xs text-foreground/75"
                >
                  <Icon size={14} className="text-purple-600 dark:text-purple-200" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="rounded-3xl border border-border bg-panel p-7 sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get in Touch</h2>
              <p className="mt-2 max-w-xl text-muted">
                If you&apos;d like to collaborate, ask questions, or discuss opportunities, feel free to reach out.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-400 px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                <Mail size={16} />
                {email}
              </a>
              <a
                href="https://github.com/kenthinayon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-panel px-6 py-3 text-sm font-semibold text-foreground/85 transition hover:border-cyan-300/40 hover:bg-panel-strong"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-panel px-6 py-3 text-sm font-semibold text-foreground/85 transition hover:border-purple-300/40 hover:bg-panel-strong"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-foreground/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} Kent Hinayon • Last updated {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom glow */}
      <div aria-hidden className="pointer-events-none h-24 w-full bg-[radial-gradient(900px_circle_at_50%_0%,rgba(34,211,238,0.12),transparent_55%)]" />
    </div>
  );
}
