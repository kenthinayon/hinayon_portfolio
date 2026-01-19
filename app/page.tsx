"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  ArrowRight,
  Bot,
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

  const navItems = useMemo(() => ["home", "projects", "achievements", "skills", "innovating", "contact"] as const, []);

  const topProjects = useMemo(
    () => [
      {
        title: "AgentOps Console",
        kind: "AI Tooling",
        description:
          "A production-grade dashboard to trace, evaluate, and ship LLM agents with confidence—telemetry, prompts, and cost controls built in.",
        tech: ["Next.js", "TypeScript", "LangChain", "Postgres"],
        liveUrl: "#",
        githubUrl: "#",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=900&fit=crop",
        highlight: "Realtime traces • eval suites • cost caps",
      },
      {
        title: "Neon RAG Toolkit",
        kind: "LLM Infrastructure",
        description:
          "A modular RAG pipeline library with smart chunking, hybrid search, and deterministic citation-aware responses.",
        tech: ["Python", "FastAPI", "Vector DB", "OpenAI"],
        liveUrl: "#",
        githubUrl: "#",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=900&fit=crop",
        highlight: "Hybrid search • caching • guardrails",
      },
      {
        title: "PromptShield",
        kind: "Security",
        description:
          "A defense layer for prompt injection and data exfiltration—policy engines, redact rules, and safe tool routing.",
        tech: ["Node.js", "Next.js", "Policy DSL", "OWASP"],
        liveUrl: "#",
        githubUrl: "#",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&h=900&fit=crop",
        highlight: "Tool firewall • PII redaction • audits",
      },
      {
        title: "SynthEval",
        kind: "Evaluation",
        description:
          "Automated test generation + scoring harness for LLM outputs using rubrics, golden sets, and adversarial cases.",
        tech: ["Python", "PyTest", "LLM-as-Judge", "CI"],
        liveUrl: "#",
        githubUrl: "#",
        image:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1400&h=900&fit=crop",
        highlight: "Rubrics • adversarial tests • CI gates",
      },
    ],
    [],
  );

  const stats = useMemo(
    () => [
      { label: "AI tools shipped", value: "25+", icon: Zap },
      { label: "Production deployments", value: "80+", icon: Layers },
      { label: "Avg. response latency", value: "< 300ms", icon: Cpu },
      { label: "Security-first releases", value: "100%", icon: ShieldCheck },
    ],
    [],
  );

  const skills = useMemo(
    () => [
      { title: "LLM Agent Systems", description: "Tool routing, memory, evals, observability", icon: Bot },
      { title: "RAG & Search", description: "Hybrid retrieval, chunking, caching, citations", icon: Brain },
      { title: "Next.js Performance", description: "App Router, images, edge-ready patterns", icon: TrendingUp },
      { title: "Backend Engineering", description: "APIs, queues, auth, databases, tracing", icon: Terminal },
      { title: "Safety & Security", description: "Prompt injection defense, PII handling, policies", icon: ShieldCheck },
      { title: "Product Craft", description: "UX polish, docs, DX, maintainable systems", icon: Sparkle },
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
              Kent Hinayon
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
        <div className="grid w-full gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-xs text-foreground/80">
              <span className="inline-flex size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
              Dark cosmic / neon • Mobile-first • Next.js optimized
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-cyan-200 via-teal-200 to-purple-300 bg-clip-text text-transparent">
                Kent Hinayon
              </span>
              <span className="text-foreground"> – AI Developer</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              I design and build reliable AI developer tools—agent platforms, RAG systems, and high-performance web
              applications—focused on security, maintainability, and excellent user experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
                  href="https://github.com/yourusername"
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
                <p className="text-sm font-semibold text-foreground">Professional engineering</p>
                <p className="mt-1 text-sm text-muted">
                  Clean architecture, documentation, and thoughtful UI—built to last.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Reliable delivery</p>
                <p className="mt-1 text-sm text-muted">Testing, monitoring, and safety patterns by default.</p>
              </div>
            </div>
          </div>

          {/* Holographic profile */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="cosmic-holo relative aspect-square overflow-hidden rounded-[32px] border border-border bg-panel p-3 shadow-[0_0_60px_rgba(168,85,247,0.12)]">
              <div className="relative h-full w-full overflow-hidden rounded-[26px]">
                <Image
                  src="/kent-photo.jfif"
                  alt="Kent Hinayon"
                  fill
                  priority
                  sizes="(min-width: 768px) 360px, 80vw"
                  className="object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(34,211,238,0.35),transparent_45%),radial-gradient(700px_circle_at_80%_30%,rgba(168,85,247,0.35),transparent_50%)] mix-blend-screen" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.0),rgba(255,255,255,0.14),rgba(255,255,255,0.0))] opacity-40" />
              </div>
            </div>

            <div className="pointer-events-none absolute -left-6 -top-6 size-16 rounded-full bg-cyan-300/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 size-24 rounded-full bg-purple-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Projects (Bento) */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Top AI Projects</h2>
            <p className="mt-2 max-w-2xl text-muted">
              Modular bento-grid highlights—demos, descriptions, and tech stacks built for real-world impact.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-xs text-foreground/75">
            <Bot size={16} className="text-cyan-600 dark:text-cyan-200" />
            Agent-first • RAG-ready • Production-grade
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
          Tip: replace `#` links with your real demo + GitHub URLs.
        </p>
      </section>

      {/* Achievements / Stats */}
      <section id="achievements" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div className="rounded-3xl border border-border bg-panel p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Credentials & Impact</h2>
            <p className="mt-3 text-muted">
              Confidence comes from shipped systems: measurable performance, reliable deployments, and safety-first
              engineering.
            </p>

            <div className="mt-6 space-y-3 text-sm text-foreground/75">
              <div className="flex items-start gap-3">
                <ShieldCheck size={18} className="mt-0.5 text-cyan-600 dark:text-cyan-200" />
                <p>Security-aware tooling with guardrails, audits, and sensible defaults.</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp size={18} className="mt-0.5 text-purple-600 dark:text-purple-200" />
                <p>Performance-focused delivery: fast UIs, optimized pipelines, and stable APIs.</p>
              </div>
              <div className="flex items-start gap-3">
                <Brain size={18} className="mt-0.5 text-teal-600 dark:text-teal-200" />
                <p>Breakthrough AI innovation with rigorous evaluation and product craft.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="group rounded-3xl border border-border bg-panel p-6 transition hover:border-cyan-300/30 hover:bg-panel-strong"
              >
                <div className="flex items-center justify-between">
                  <Icon size={20} className="text-cyan-600 dark:text-cyan-200" />
                  <span className="text-xs text-foreground/55">Verified</span>
                </div>
                <div className="mt-4 text-3xl font-semibold tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent">
                    {value}
                  </span>
                </div>
                <div className="mt-1 text-sm text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Glowing Skill Stack</h2>
            <p className="mt-2 max-w-2xl text-muted">
              The tools and patterns behind world-class AI systems and premium user experiences.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-xs text-foreground/75">
            <Terminal size={16} className="text-purple-600 dark:text-purple-200" />
            Python • LangChain • Next.js
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
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Currently Innovating</h2>
                <p className="mt-2 max-w-2xl text-muted">
                  Building the next wave of AI developer tooling—faster iteration loops, safer deployments, and higher
                  signal evaluations.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-panel px-3 py-2 text-xs text-foreground/75">
                <Zap size={14} className="text-cyan-600 dark:text-cyan-200" />
                Live R&D
              </span>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Agent reliability</p>
                <p className="mt-1 text-sm text-muted">Deterministic tool calls, retries, and eval-driven releases.</p>
              </div>
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Human-grade UX</p>
                <p className="mt-1 text-sm text-muted">Neon UI polish with accessibility and speed as defaults.</p>
              </div>
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Safety layers</p>
                <p className="mt-1 text-sm text-muted">Policy engines, redaction, and prompt injection defenses.</p>
              </div>
              <div className="rounded-2xl border border-border bg-panel p-5">
                <p className="text-sm font-semibold text-foreground">Compute efficiency</p>
                <p className="mt-1 text-sm text-muted">Caching, batching, and cost-aware orchestration.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-panel p-7">
            <p className="text-xs font-semibold tracking-wide text-cyan-700/90 dark:text-cyan-200/90">Bio</p>
            <h3 className="mt-2 text-xl font-semibold">Short & sharp</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              I&apos;m Kent Hinayon—an AI tool developer focused on building systems that ship reliably and scale.
              I combine engineering rigor with clear communication and polished product design.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { label: "Python", icon: Terminal },
                { label: "LangChain", icon: Layers },
                { label: "Next.js", icon: Cpu },
                { label: "Security", icon: ShieldCheck },
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
                For collaborations, AI tooling, or software engineering opportunities—reach out anytime.
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
                href="https://linkedin.com/in/kenthinayon"
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
